import cloudflare from "@astrojs/cloudflare"
import { cacheCloudflare } from "@astrojs/cloudflare/cache"
import react from "@astrojs/react"
import { d1, kvCache, r2 } from "@emdash-cms/cloudflare"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
import emdash from "emdash/astro"
import { github } from "emdash/auth/providers/github"

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    sessionKVBindingName: "CACHE",
  }),
  cache: {
    provider: cacheCloudflare(),
  },
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
      authProviders: [github()],
      database: d1({ binding: "DB", session: "auto" }),
      storage: r2({ binding: "STORAGE" }),
      objectCache: kvCache({ binding: "CACHE" }),
    }),
  ],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  routeRules: {
    "/": { maxAge: 300, swr: 86400 },
  },
})
