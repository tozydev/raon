import cloudflare from "@astrojs/cloudflare"
import react from "@astrojs/react"
import { d1, r2 } from "@emdash-cms/cloudflare"
import { defineConfig, fontProviders } from "astro/config"
import emdash from "emdash/astro"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  fonts: [
    {
      name: "Be Vietnam Pro",
      cssVariable: "--font-sans",
      provider: fontProviders.google(),
      subsets: ["latin", "vietnamese"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "Noto Sans",
      cssVariable: "--font-heading",
      provider: fontProviders.google(),
      subsets: ["latin", "vietnamese"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      provider: fontProviders.google(),
      subsets: ["latin", "vietnamese"],
      fallbacks: ["monospace"],
    },
  ],
  i18n: {
    defaultLocale: "vi",
    locales: ["vi"],
  },
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
  integrations: [
    react(),
    emdash({
      database: d1({ binding: "DB", session: "auto" }),
      storage: r2({ binding: "STORAGE" }),
    }),
  ],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
})
