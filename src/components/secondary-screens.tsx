import { Suspense, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import { useRoot } from "@typegpu/react";
import { Ripple } from "@/components/ui/ripple";

function LoadingFallback() {
  return (
    <main
      className="relative z-10 flex min-h-svh items-center justify-center overflow-hidden bg-background px-6 text-primary"
      aria-busy="true"
      aria-label="Loading"
    >
      <Ripple className="size-12" />
    </main>
  );
}

/** Waits for WebGPU, keeps the spinner up for at least `minMs`, then reveals children. */
export function LoadingScreen({ children, minMs = 2000 }: { children: ReactNode; minMs?: number }) {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!isClient) return <LoadingFallback />;

  return (
    <Suspense fallback={<LoadingFallback />}>
      <LoadingReady minMs={minMs}>{children}</LoadingReady>
    </Suspense>
  );
}

function LoadingReady({ children, minMs }: { children: ReactNode; minMs: number }) {
  const [ready, setReady] = useState(false);
  useRoot();

  useEffect(() => {
    const id = setTimeout(() => setReady(true), minMs);
    return () => clearTimeout(id);
  }, [minMs]);

  if (!ready) return <LoadingFallback />;
  return children;
}

export function ErrorScreen({ title }: { title: string }) {
  return (
    <main className="relative z-10 flex min-h-svh items-center justify-center px-6">
      <p className="text-sm text-muted-foreground">{title}</p>
    </main>
  );
}
