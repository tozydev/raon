import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://tozydev.id.vn",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rolldownOptions: {
        output: {
          assetFileNames: ({ names }) => {
            // Main CSS
            if (names.includes("Base.css")) {
              return "_raon/css/raon.[hash][extname]"
            }
            // Images
            if (names.find((name) => /\.(png|jpe?g|gif|svg|webp|avif)$/.test(name))) {
              return "_raon/images/[name].[hash][extname]"
            }
            return "_raon/[name].[hash][extname]"
          },
        },
      },
    },
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
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Nunito",
      cssVariable: "--font-nunito",
      fallbacks: ["sans-serif"],
      weights: [700],
      styles: ["normal"],
      subsets: ["latin", "latin-ext", "vietnamese"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Be Vietnam Pro",
      cssVariable: "--font-be-vietnam-pro",
      fallbacks: ["sans-serif"],
      weights: [400, 600, 700],
      subsets: ["latin", "latin-ext", "vietnamese"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      fallbacks: ["monospace"],
      weights: [400],
      styles: ["normal"],
      subsets: ["latin", "latin-ext", "vietnamese"],
    },
  ],
})
