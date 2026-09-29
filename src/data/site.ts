export const locales = ["en", "es"] as const;
export const defaultLocale: Locale = "en";
export type Locale = (typeof locales)[number];

export const sites = {
  en: {
    name: "Rubén Chiquin",
    bio: "I design software. I also like to pet dogs on the street.",
    workHeading: "Work Life",
    projectsHeading: "Random projects I come up with at 2am",
    description: "I build software. Sometimes for work, sometimes because I can't sleep.",
    links: [
      { label: "Email", href: "mailto:randreu28@gmail.com" },
      { label: "GitHub", href: "https://github.com/randreu28" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rubén-chiquin-0a153721a/",
      },
      { label: "v1", href: "https://v1.randreu.dev" },
    ],
    experience: [
      {
        title: "Tech Lead",
        org: "Dropick",
        dates: "2025 — Present",
        href: "https://dropick.co",
      },
      {
        title: "Fullstack Developer",
        org: "ecoDeliver",
        dates: "Sep 2023 — 2025",
        href: "https://ecodeliver.es/",
      },
      {
        title: "Frontend Developer",
        org: "UPC",
        dates: "Sep 2021 — Jul 2023",
        href: "https://canviaelmon.upc.edu/ca",
      },
    ],
    projects: [
      {
        title: "Vroom Hono",
        description: "An AI MCP that helps plan vehicle routes and fleets.",
        dates: "2026",
        href: "https://github.com/randreu28/vroom-hono",
      },
      {
        title: "Infrastructure Mastery",
        description: "Me forcing myself to actually learn Kubernetes.",
        dates: "2023",
        href: "https://github.com/randreu28/infrastructure-mastery",
      },
      {
        title: "Bachelor's Thesis (3D)",
        description: "Playing with 3D in the browser for school credit.",
        dates: "2023",
        href: "https://tfg.randreu.dev",
      },
    ],
  },
  es: {
    name: "Rubén Chiquin",
    bio: "Diseño software. También me gusta acariciar perros por la calle.",
    workHeading: "Vida laboral",
    projectsHeading: "Proyectos random que se me ocurren a las 2am",
    description: "Hago software. A veces por trabajo, a veces porque no puedo dormir.",
    links: [
      { label: "Email", href: "mailto:randreu28@gmail.com" },
      { label: "GitHub", href: "https://github.com/randreu28" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rubén-chiquin-0a153721a/",
      },
      { label: "v1", href: "https://v1.randreu.dev" },
    ],
    experience: [
      {
        title: "Tech Lead",
        org: "Dropick",
        dates: "2025 — Actualidad",
        href: "https://dropick.co",
      },
      {
        title: "Desarrollador Fullstack",
        org: "ecoDeliver",
        dates: "sep 2023 — 2025",
        href: "https://ecodeliver.es/",
      },
      {
        title: "Desarrollador Frontend",
        org: "UPC",
        dates: "sep 2021 — jul 2023",
        href: "https://canviaelmon.upc.edu/ca",
      },
    ],
    projects: [
      {
        title: "Vroom Hono",
        description: "Un MCP de IA que ayuda a planificar rutas y flotas de vehículos.",
        dates: "2026",
        href: "https://github.com/randreu28/vroom-hono",
      },
      {
        title: "Infrastructure Mastery",
        description: "Yo obligándome a aprender Kubernetes de verdad.",
        dates: "2023",
        href: "https://github.com/randreu28/infrastructure-mastery",
      },
      {
        title: "TFG (3D)",
        description: "Jugando con 3D en el navegador a cambio de créditos.",
        dates: "2023",
        href: "https://tfg.randreu.dev",
      },
    ],
  },
} as const;
