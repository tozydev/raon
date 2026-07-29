# Project Instructions for Raon

This document provides essential inline guidance, repository conventions, tech stack details, and command references for AI agents working in this repository.

## Project Overview & Tech Stack

- **Project**: Personal website & developer blog for `tozydev`.
- **Core Framework**: Astro v7 with TypeScript and MDX integration.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`), custom `@theme` tokens in [global.css](src/styles/global.css).
- **Icons**: Lucide Icons (`@lucide/astro`).
- **Formatting**: Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`.
- **Package Manager**: Bun (`bun.lock`).
- **i18n**: Multilingual support (`vi` default, `en`).
- **Deployment**: Cloudflare Workers (`wrangler.jsonc`).

## Primary Commands

Run commands using `bun`:

- **Development**: `bun run dev` (Starts local dev server at `http://localhost:4321`)
- **Build & Typecheck**: `bun run build` (Runs `astro check && astro build`)
- **Format Code**: `bun run fmt` (Formats codebase using Prettier)
- **Check Formatting**: `bun run fmt:check` (Validates formatting without modifying files)
- **Preview Build**: `bun run preview` (Previews production build locally)

## Architecture & Code Conventions

### Project Structure

- `src/components/`: Modular UI components organized by domain (`page/`, `home/`, `posts/`, `projects/`, `about/`).
- `src/content/`: Utilities for content management (content retrieval).
- `src/layouts/`: Base HTML structure and metadata in [Base.astro](src/layouts/Base.astro).
- `src/styles/`: Theme definitions, design tokens, and utility classes in [global.css](src/styles/global.css).
- `src/consts.ts`: Site-wide constants, profile data, routes, and timeline journey steps.
- `src/i18n/`: Translation keys, language resolution, and translation helpers (`useTranslations`, `useTranslatedPath`).
- `plugins/`: Custom plugins for extending Astro's functionality (e.g., remark, rehype plugins).
- `content/`: Contains content for the site. (NEVER TOUCH THIS DIRECTORY if not asked)
- `DESIGN.md`: Detailed design system reference (theme tokens, elevation, fonts, component tokens).

### Key Rules & Guidelines

1. **Design System & Styling**:
   - Refer to [@DESIGN.md](DESIGN.md) for color tokens, typography, and component styling rules.
   - Use reusable utility classes (`.island`, `.island-interactive`, `.glass`, `.btn`, `.badge`) instead of inline ad-hoc utility duplicates.
   - Respect light/dark dual theme support via CSS variable tokens (`--color-surface`, `--color-brand`, etc.).

2. **Internationalization (i18n)**:
   - Always preserve bilingual support (`vi` and `en`) for UI strings and content.
   - Use translation functions `useTranslations(lang)` and `useTranslatedPath(lang)` when generating text or internal navigation links.

3. **Type Safety & Build Verification**:
   - Ensure all code passes `bun run build` (`astro check`) without TypeScript or Astro syntax errors.
   - Run `bun run fmt` before committing code changes to ensure Prettier compliance.
