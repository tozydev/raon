# 🐲 Raon — Personal Website

![GitHub License](https://img.shields.io/github/license/tozydev/raon)
[![Website](https://img.shields.io/badge/tozydev.id.vn-2f6b46)](https://tozydev.id.vn)

This is my personal website, built with Astro v7, TypeScript, Tailwind CSS v4, and MDX. It serves as a portfolio and a blog where I share my thoughts on programming, technology, and other topics of interest.

## ✨ Key Features

- 🌲 **Custom Island Design System**: Nature-inspired with minimalism, and modern interface aesthetics
- 🌐 **Multilingual (i18n)**: Native bilingual support for Vietnamese (`vi`, default) and English (`en`).
- 🌙 **Dual-Theme Support**: Light, Dark, and System Auto.
- ⚡ **High Performance & SEO**: Astro v7 static build, canonical URLs, Open Graph metadata, JSON-LD structured data, XML Sitemap, and RSS feeds.
- 📝 **Type-Safe Content**: Markdown & MDX blog posts powered by Astro Content Collections.

## 🛠️ Tech Stack

- **Framework**: [Astro v7](https://astro.build/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Content**: MDX & Markdown with custom Remark/Rehype plugins
- **Package Manager**: [Bun](https://bun.sh/)
- **Deployment**: [Cloudflare Workers / Pages](https://developers.cloudflare.com/workers/)

## 📂 Project Structure

```text
├── content/              # Blog posts and content assets
├── plugins/              # Custom remark & rehype plugins
├── public/               # Static assets & favicons
├── src/
│   ├── assets/           # Source media & static images
│   ├── components/       # UI components (page, home, posts, projects, about)
│   ├── content/          # Content collection configurations
│   ├── i18n/             # Dictionaries and translation helpers
│   ├── layouts/          # Base HTML layout (Base.astro)
│   ├── pages/            # Astro route pages
│   ├── scripts/          # Client-side scripts (theme loader, etc.)
│   ├── styles/           # Theme tokens and global CSS (global.css)
│   ├── consts.ts         # Site constants, profile info, and navigation
│   └── content.config.ts # Content collection schema definitions
├── AGENTS.md             # Developer & AI Agent guidance
├── DESIGN.md             # Design system specifications & theme tokens
├── astro.config.ts       # Astro configuration
├── package.json          # Dependencies and scripts
└── wrangler.jsonc        # Cloudflare deployment config
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.0+)
- [Node.js](https://nodejs.org/) (>= 22.12.0)

### Installation & Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/tozydev/raon.git
   cd raon
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Start local dev server**:
   ```bash
   bun run dev
   ```
   The site will be available at `http://localhost:4321`.

### Available Commands

| Command             | Action                                                                   |
| :------------------ | :----------------------------------------------------------------------- |
| `bun run dev`       | Starts local development server at `http://localhost:4321`               |
| `bun run build`     | Runs Astro check (`typecheck`) and builds production bundle to `./dist/` |
| `bun run preview`   | Previews the production build locally                                    |
| `bun run fmt`       | Formats codebase using Prettier                                          |
| `bun run fmt:check` | Validates code formatting with Prettier without writing                  |

## 📚 Documentation & References

- [DESIGN.md](DESIGN.md): Detailed documentation of theme color tokens, typography system, component tokens, and layout guidelines.
- [AGENTS.md](AGENTS.md): Developer & AI Agent conventions, architecture guidance, and repository rules.

## 📄 License

This repository is licensed under two licenses:

- The source code is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
- The blog content is licensed under the Creative Commons Attribution Share Alike 4.0 International License.
  See the [content/LICENSE](content/LICENSE) file for details.

## 🎁 Acknowledgements

I would like to thank the following: projects, libraries, tools, and resources that made this project possible:

- [Astro](https://astro.build/) – For powering the static site generation.
- [Tailwind CSS](https://tailwindcss.com/) – For the utility-first CSS framework styling this site.
- [Lucide](https://lucide.dev/) – For the icon used in this site.
- [MDX](https://mdxjs.com/) – For the MDX support.
- [Cloudflare Workers](https://workers.cloudflare.com/) – For hosting the static site.
- [Quicksand](https://github.com/andrew-paglinawan/QuicksandFamily), [BeVietnamePro](https://github.com/bettergui/BeVietnamPro),
  and [JetBrains Mono](https://www.jetbrains.com/lp/mono/) – For the fonts used on the site.

And all the libraries and tools that made this project possible!
