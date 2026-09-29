import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ClientOnly } from "@typegpu/react";
import { WaterNoiseBackground } from "@/components/water-noise-background";
import { Separator } from "@/components/ui/separator";
import { defaultLocale, locales, sites, type Locale } from "@/data/site";

export const Route = createFileRoute("/{-$locale}/")({
  beforeLoad: ({ params }) => {
    if (params.locale && !locales.includes(params.locale as Locale)) {
      throw notFound();
    }

    const locale = (params.locale ?? defaultLocale) as Locale;
    return { locale };
  },
  head: ({ match }) => {
    const site = sites[match.context.locale];
    return {
      meta: [
        { title: site.name },
        { name: "description", content: site.description },
      ],
    };
  },
  component: Home,
});

function Home() {
  const { locale } = Route.useRouteContext();
  const site = sites[locale];

  return (
    <>
      <ClientOnly>
        <WaterNoiseBackground />
      </ClientOnly>
      <main className="relative z-10 mx-auto flex w-full max-w-xl flex-col gap-6 px-6 py-10 sm:py-14">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium tracking-tight text-foreground">{site.name}</h1>
          <p className="text-muted-foreground">{site.bio}</p>
        </header>

        <section className="flex flex-col gap-1.5" aria-labelledby="work-life-heading">
          <h2 id="work-life-heading" className="text-sm text-muted-foreground">
            {site.workHeading}
          </h2>
          <Separator />
          <ul className="flex flex-col">
            {site.experience.map((job, index) => (
              <li key={`${job.org}-${job.dates}`}>
                {index > 0 ? <Separator /> : null}
                <a
                  href={job.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block py-2.5 focus-visible:outline-none"
                >
                  <span className="-mx-1.5 flex flex-col gap-0.5 rounded-md px-1.5 py-1 transition-colors group-hover:bg-accent group-focus-visible:bg-accent sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="text-foreground">
                      {job.title} <span className="text-muted-foreground">@ {job.org}</span>
                    </span>
                    <span className="shrink-0 text-sm text-muted-foreground">{job.dates}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-1.5" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="text-sm text-muted-foreground">
            {site.projectsHeading}
          </h2>
          <Separator />
          <ul className="flex flex-col">
            {site.projects.map((project, index) => (
              <li key={project.href}>
                {index > 0 ? <Separator /> : null}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block py-2.5 focus-visible:outline-none"
                >
                  <span className="-mx-1.5 flex flex-col gap-0.5 rounded-md px-1.5 py-1 transition-colors group-hover:bg-accent group-focus-visible:bg-accent">
                    <span className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <span className="text-foreground">{project.title}</span>
                      <span className="shrink-0 text-sm text-muted-foreground">{project.dates}</span>
                    </span>
                    <span className="text-sm text-muted-foreground">{project.description}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <nav aria-label="Links" className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {site.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-sm text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-x-3">
            {locales.map((target) =>
              target === locale ? (
                <span key={target} className="rounded-sm text-sm text-foreground" aria-current="page">
                  {target.toUpperCase()}
                </span>
              ) : (
                <Link
                  key={target}
                  to="/{-$locale}"
                  params={{ locale: target === defaultLocale ? undefined : target }}
                  className="rounded-sm text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
                >
                  {target.toUpperCase()}
                </Link>
              ),
            )}
          </div>
        </nav>
      </main>
    </>
  );
}
