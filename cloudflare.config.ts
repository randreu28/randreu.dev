import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "randreu-dev",
    compatibilityDate: "2026-09-26",
    compatibilityFlags: ["nodejs_compat"],
    entrypoint: "@tanstack/react-start/server-entry",
    domains: ["randreu.dev"],
  },
});
