import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  server: {
    port: 3000,
  },
  fmt: {
    ignorePatterns: ["src/routeTree.gen.ts", ".cloudflare/types/**"],
  },
  lint: {
    plugins: ["unicorn", "typescript", "oxc", "react"],
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
      "@shadcn/lint",
    ],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
      "shadcn/no-restyle": ["error", { allow: ["layout"] }],
      "shadcn/no-raw-colors": "error",
      "shadcn/no-arbitrary-values": ["error", { allow: ["layout"] }],
      "shadcn/no-inline-styles": "error",
      "shadcn/require-static-classes": "error",
      "shadcn/no-unknown-classes": "error",
    },
    overrides: [
      {
        files: ["src/components/ui/**"],
        rules: {
          "shadcn/no-restyle": "off",
          "shadcn/no-arbitrary-values": "off",
          "shadcn/require-static-classes": "off",
        },
      },
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    // Must be first — TanStack Devtools Vite plugin
    devtools(),
    tailwindcss(),
    cloudflare({
      viteEnvironment: { name: "ssr" },
      experimental: { newConfig: true },
    }),
    // Start must come before React
    tanstackStart(),
    viteReact({ compiler: true }),
  ],
});
