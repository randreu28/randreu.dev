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
  dark = "#0a0b0c",
  accent = "#1a5257",
  soft = "#47525c",
  glow = "#0d1a1c",
}: {
  dark?: string;
  accent?: string;
  soft?: string;
  glow?: string;
}) {
  return (
    <ClientOnly>
      <WaterNoiseCanvas dark={dark} accent={accent} soft={soft} glow={glow} />
    </ClientOnly>
  );
}

function WaterNoiseCanvas({
  dark,
  accent,
  soft,
  glow,
}: {
  dark: string;
  accent: string;
  soft: string;
  glow: string;
}) {
  const root = useRoot();
  const time = useUniform(d.f32);
  const aspect = useUniform(d.f32, { initial: 1 });
  const mouse = useUniform(d.vec2f, { initial: d.vec2f(0.5, 0.5) });
  const velocity = useUniform(d.vec2f, { initial: d.vec2f(0, 0) });
  const wake = useUniform(d.f32, { initial: 0 });
  const darkColor = useMirroredUniform(d.vec3f, cssColorToVec3(dark));
  const accentColor = useMirroredUniform(d.vec3f, cssColorToVec3(accent));
  const softColor = useMirroredUniform(d.vec3f, cssColorToVec3(soft));
  const glowColor = useMirroredUniform(d.vec3f, cssColorToVec3(glow));

  const pointer = useRef({
    x: 0.5,
    y: 0.5,
    smoothX: 0.5,
    smoothY: 0.5,
    prevX: 0.5,
    prevY: 0.5,
    velX: 0,
    velY: 0,
    wake: 0,
  });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = e.clientX / window.innerWidth;
      pointer.current.y = e.clientY / window.innerHeight;
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

      // Soft velocity splat + lingering wake (decays when idle).
      const cursor = toShaderSpace(mouse.$, aspect.$);
      const toCursor = pos.sub(cursor);
      const distSq = std.dot(toCursor, toCursor);
      const influence = std.exp(distSq * -16);
      const strength = wake.$ * influence;
      pos = pos.add(velocity.$.mul(influence * 14));
      pos = pos.add(toCursor.mul(strength * -1.8));
      pos = pos.add(
        d
          .vec2f(
            fbm(toCursor.mul(3).add(d.vec2f(anim * 2, 0))),
            fbm(toCursor.mul(3).add(d.vec2f(4.1, anim * 2))),
          )
          .mul(strength * 0.55),
      );

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
      color = std.mix(color, accentColor.$, strength * 0.32);
      color = color.add(glowColor.$.mul(strength * 0.22));
      color = color.add(accentColor.$.mul(strength * strength * 0.25));

      return d.vec4f(color, 1);
    },
  });

  const { ref, ctxRef } = useConfigureContext({ alphaMode: "opaque" });

  useFrame((frame) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const canvas = ctx.canvas as HTMLCanvasElement;
    const state = pointer.current;
    const dt = Math.max(frame.deltaSeconds, 0.001);

    state.smoothX += (state.x - state.smoothX) * 0.18;
    state.smoothY += (state.y - state.smoothY) * 0.18;

    const rawVx = (state.smoothX - state.prevX) / dt;
    const rawVy = (state.smoothY - state.prevY) / dt;
    state.prevX = state.smoothX;
    state.prevY = state.smoothY;

    state.velX = state.velX * 0.92 + rawVx * 0.28;
    state.velY = state.velY * 0.92 + rawVy * 0.28;
    const speed = Math.hypot(state.velX, state.velY);
    state.wake = Math.min(1.4, state.wake * 0.965 + speed * 0.045);
    if (state.wake < 0.01) state.wake = 0;
    if (Math.abs(state.velX) < 0.001) state.velX = 0;
    if (Math.abs(state.velY) < 0.001) state.velY = 0;

    time.write(frame.elapsedSeconds);
    aspect.write(canvas.width / Math.max(canvas.height, 1));
    mouse.write(d.vec2f(state.smoothX, state.smoothY));
    velocity.write(d.vec2f(state.velX * 0.08, state.velY * 0.08));
    wake.write(state.wake);
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
