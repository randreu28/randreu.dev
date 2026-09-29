import { HeadContent, Scripts, createRootRoute, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import appCss from "../styles.css?url";
import { ErrorScreen, LoadingScreen } from "@/components/secondary-screens";
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
    <LoadingScreen>
      <WaterNoiseBackground />
      <ErrorScreen title="Not found" />
    </LoadingScreen>
  ),
  errorComponent: () => (
    <LoadingScreen>
      <WaterNoiseBackground />
      <ErrorScreen title="Something went wrong" />
    </LoadingScreen>
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
