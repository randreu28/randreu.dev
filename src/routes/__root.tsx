import {
  HeadContent,
  Scripts,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ClientOnly } from "@typegpu/react";

import appCss from "../styles.css?url";
import { WaterNoiseBackground } from "@/components/water-noise-background";
import { locales, type Locale } from "@/data/site";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Rubén Chiquin",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => (
    <>
      <ClientOnly>
        <WaterNoiseBackground />
      </ClientOnly>
      <main className="relative z-10 flex min-h-svh items-center justify-center px-6">
        <p className="text-sm text-muted-foreground">Not found</p>
      </main>
    </>
  ),
  errorComponent: () => (
    <>
      <ClientOnly>
        <WaterNoiseBackground />
      </ClientOnly>
      <main className="relative z-10 flex min-h-svh items-center justify-center px-6">
        <p className="text-sm text-muted-foreground">Something went wrong</p>
      </main>
    </>
  ),
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const segment = pathname.split("/").filter(Boolean)[0];
  const lang = locales.includes(segment as Locale) ? segment : "en";

  return (
    <html lang={lang} className="dark bg-background">
      <head>
        <HeadContent />
      </head>
      <body className="relative min-h-svh bg-transparent text-foreground">
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
