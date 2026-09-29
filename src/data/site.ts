export const site = {
  name: "Rubén Chiquin",
  bio: "I design software. I also like to pet dogs on the street.",
  workHeading: "Work Life",
  projectsHeading: "Random projects I come up with at 2am",
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
} as const;
