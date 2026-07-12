import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://tozydev.id.vn",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: "_raon",
  },
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts: [],
})
