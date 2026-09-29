import { useEffect, useRef } from "react";
import {
  ClientOnly,
  useConfigureContext,
  useFrame,
  useMirroredUniform,
  useRoot,
  useUniform,
} from "@typegpu/react";
import { perlin2d } from "@typegpu/noise";
import { common, d, std } from "typegpu";

export function WaterNoiseBackground({
  trailLength = 32,
  dark = "#0a0b0c",
  accent = "#1a5257",
  soft = "#47525c",
  glow = "#0d1a1c",
}: {
  trailLength?: number;
  dark?: string;
  accent?: string;
  soft?: string;
  glow?: string;
}) {
  const length = Math.max(2, Math.floor(trailLength));

  return (
    <ClientOnly>
      <WaterNoiseCanvas
        key={length}
        trailLength={length}
        dark={dark}
        accent={accent}
        soft={soft}
        glow={glow}
      />
    </ClientOnly>
  );
}

function WaterNoiseCanvas({
  trailLength,
  dark,
  accent,
  soft,
  glow,
}: {
  trailLength: number;
  dark: string;
  accent: string;
  soft: string;
  glow: string;
}) {
  const root = useRoot();
  const time = useUniform(d.f32);
  const aspect = useUniform(d.f32, { initial: 1 });
  const trail = useUniform(d.arrayOf(d.vec3f, trailLength), {
    initial: Array.from({ length: trailLength }, () => d.vec3f(0.5, 0.5, 0)),
  });
  const darkColor = useMirroredUniform(d.vec3f, cssColorToVec3(dark));
  const accentColor = useMirroredUniform(d.vec3f, cssColorToVec3(accent));
  const softColor = useMirroredUniform(d.vec3f, cssColorToVec3(soft));
  const glowColor = useMirroredUniform(d.vec3f, cssColorToVec3(glow));

  const mouse = useRef({
    x: 0.5,
    y: 0.5,
    smoothX: 0.5,
    smoothY: 0.5,
    points: Array.from({ length: trailLength }, () => ({ x: 0.5, y: 0.5, life: 0 })),
  });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const pipeline = root.createRenderPipeline({
    vertex: common.fullScreenTriangle,
    fragment: (input) => {
      "use gpu";
      const uv = input.uv;
      let pos = toShaderSpace(uv, aspect.$);
      const anim = time.$ * 0.08;

      let displacement = d.vec2f(0, 0);
      let trailGlow = d.f32(0);
      for (const i of std.range(0, trailLength - 1)) {
        const start = trail.$[i];
        const end = trail.$[i + 1];
        const age = (start.z + end.z) * 0.5;
        const startPos = toShaderSpace(start.xy, aspect.$);
        const endPos = toShaderSpace(end.xy, aspect.$);
        const segment = endPos.sub(startPos);
        const fromStart = pos.sub(startPos);
        const segmentLenSq = std.max(std.dot(segment, segment), 0.00001);
        const t = std.clamp(std.dot(fromStart, segment) / segmentLenSq, 0, 1);
        const nearest = startPos.add(segment.mul(t));
        const offset = pos.sub(nearest);
        const distance = std.length(offset);
        const strength = std.exp(distance * -6.5) * age;
        const ripple = std.sin(distance * 18 - time.$ * 2.2 + t * 6) * 0.14 * strength;
        const attract = strength * 0.45;
        displacement = displacement.add(offset.mul(-attract + ripple / std.max(distance, 0.001)));
        trailGlow = trailGlow + strength;
      }
      pos = pos.add(displacement);

      const layerA = d.vec2f(
        fbm(pos.add(d.vec2f(anim, 0))),
        fbm(pos.add(d.vec2f(5.2, 1.3)).sub(d.vec2f(anim * 0.7, 0))),
      );
      const layerB = d.vec2f(
        fbm(
          pos
            .add(layerA.mul(1.4))
            .add(d.vec2f(1.7, 9.2))
            .add(d.vec2f(anim * 0.4, 0)),
        ),
        fbm(
          pos
            .add(layerA.mul(1.4))
            .add(d.vec2f(8.3, 2.8))
            .sub(d.vec2f(anim * 0.3, 0)),
        ),
      );
      const noise = fbm(pos.add(layerB.mul(1.2)));

      const band = std.smoothstep(-0.2, 0.45, noise);
      const softNoise = std.smoothstep(-0.5, 0.15, noise) * 0.4;
      let color = std.mix(darkColor.$, accentColor.$, band * 0.55);
      color = std.mix(color, softColor.$, softNoise * 0.35);

      const textArea = std.smoothstep(
        0.7,
        0.12,
        std.length(d.vec2f((uv.x - 0.5) * 1.6, (uv.y - 0.5) * 0.85)),
      );
      const vignette = std.smoothstep(
        1.15,
        0.25,
        std.length(d.vec2f((uv.x - 0.5) * 1.1, uv.y - 0.5)),
      );
      color = color.mul(0.32 + vignette * 0.45 - textArea * 0.18);
      color = color.add(glowColor.$.mul(std.min(trailGlow, 1.2) * 0.45));

      return d.vec4f(color, 1);
    },
  });

  const { ref, ctxRef } = useConfigureContext({ alphaMode: "opaque" });

  useFrame((frame) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const canvas = ctx.canvas as HTMLCanvasElement;
    const state = mouse.current;

    state.smoothX += (state.x - state.smoothX) * 0.18;
    state.smoothY += (state.y - state.smoothY) * 0.18;

    state.points.pop();
    state.points.unshift({ x: state.smoothX, y: state.smoothY, life: 1 });
    for (let i = 0; i < trailLength; i++) {
      state.points[i].life = Math.max(0, 1 - i / (trailLength - 1));
    }

    time.write(frame.elapsedSeconds);
    aspect.write(canvas.width / Math.max(canvas.height, 1));
    trail.write(state.points.map((point) => d.vec3f(point.x, point.y, point.life)));
    pipeline.withColorAttachment({ view: ctx }).draw(3);
  });

  return (
    <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0 size-full" aria-hidden />
  );
}

function fbm(sample: d.v2f): number {
  "use gpu";
  let sum = d.f32(0);
  let amp = d.f32(0.5);
  let coord = d.vec2f(sample);
  for (const i of std.range(0, 4)) {
    const octave = d.f32(i);
    sum = sum + amp * perlin2d.sample(coord.add(d.vec2f(octave * 0.1, octave * 0.17)));
    coord = coord.mul(2.03);
    amp = amp * 0.5;
  }
  return sum;
}

function toShaderSpace(uv: d.v2f, aspect: number): d.v2f {
  "use gpu";
  return d.vec2f((uv.x - 0.5) * aspect, uv.y - 0.5).mul(2.2);
}

function cssColorToVec3(color: string) {
  const probe = document.createElement("span");
  probe.style.color = color;
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  probe.remove();
  const match = resolved.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!match) return d.vec3f();
  return d.vec3f(Number(match[1]) / 255, Number(match[2]) / 255, Number(match[3]) / 255);
}
