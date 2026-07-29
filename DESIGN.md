# Design System Documentation — Raon

This document outlines the design architecture, visual hierarchy, color palette, typography, components, and layout principles used across the Raon personal website.

## Design Philosophy & Core Principles

The visual identity of **Raon** is inspired by nature, minimalism, and modern interface aesthetics:

1. **Soft Forest Palette**: Deep leafy greens, calm muted dark backgrounds, warm terracotta/peach accents, and clean surface tones.
2. **Island Architecture**: UI elements reside within soft, floating, rounded containers (`.island`) with multi-layered subtle shadows and soft outline borders.
3. **Glassmorphism & Layering**: Floating headers and overlays utilize translucent backdrop blur (`.glass`) to maintain context while scrolling.
4. **Fluid Responsiveness & Micro-interactions**: Subtle hover lifts, smooth color transitions, and dynamic tag overflow handling.

## Color Palette & Theme Tokens

The project utilizes **Tailwind CSS v4** `@theme` tokens and CSS variables with full dual-mode support (Light & Dark theme).

### Theme Tokens Specification

| Token Name                   | Light Mode | Dark Mode | Usage & Role                                                    |
| :--------------------------- | :--------- | :-------- | :-------------------------------------------------------------- |
| `--color-bg-start`           | `#f4f8f4`  | `#0d1511` | Linear background gradient start (Top)                          |
| `--color-bg-end`             | `#edf3ee`  | `#111b15` | Linear background gradient end (Bottom)                         |
| `--color-surface`            | `#ffffff`  | `#16211a` | Main card background, elevated surfaces                         |
| `--color-surface-variant`    | `#f7faf7`  | `#1d2a22` | Subtly contrasted backgrounds (buttons, code blocks)            |
| `--color-on-surface`         | `#102018`  | `#d0ded4` | Primary high-contrast text color                                |
| `--color-on-surface-variant` | `#4e5e55`  | `#9eb0a5` | Secondary text, metadata, subtle labels                         |
| `--color-brand`              | `#2f6b46`  | `#5fa378` | Primary brand accent color (links, active states, key headings) |
| `--color-on-brand`           | `#ffffff`  | `#08110c` | Contrast text rendered on top of `--color-brand`                |
| `--color-accent`             | `#d67a42`  | `#f0a15e` | Secondary warm accent (list counters, highlights)               |
| `--color-on-accent`          | `#ffffff`  | `#23150c` | Contrast text rendered on top of `--color-accent`               |
| `--color-outline`            | `#cdd7cf`  | `#2b3b31` | Borders, subtle dividers, card outlines                         |

## Typography & Font System

Fonts are configured via `@astrojs/font` with Fontsource providers.

| Role            | Font Family      | Variable Name           | Applied Weights | Description                                                   |
| :-------------- | :--------------- | :---------------------- | :-------------- | :------------------------------------------------------------ |
| **Heading**     | `Quicksand`      | `--font-quicksand`      | 700 (Bold)      | Friendly, rounded geometry for brand identity & headers       |
| **Body & Sans** | `Be Vietnam Pro` | `--font-be-vietnam-pro` | 400, 600, 700   | Highly readable sans-serif optimized for English & Vietnamese |
| **Monospace**   | `JetBrains Mono` | `--font-jetbrains-mono` | 400             | Used for code snippets, inline tags, and technical details    |

## UI Components & Utility Classes

### 1. Island Container

- **Static (`.island`)**: Soft elevated surface container featuring `rounded-xl`, surface background, thin border outline, and multi-layered elevation shadow.
- **Interactive (`.island-interactive`)**: Adds smooth upward micro-lift (`-translate-y-0.5`), brand-colored border hover, and enhanced shadow depth.

### 2. Glassmorphism (`.glass`)

- Translucent surface (`bg-surface/70`) with high backdrop blur (`backdrop-blur-lg`) used for sticky header navigation and mobile popover menus.

### 3. Button System (`.btn`)

- **Base Style**: Rounded-lg button with flex centering, smooth transitions, and standard 40px height (`2.5rem`).
- **Variants**:
  - `btn-brand`: Primary action button with brand green filling.
  - `btn-outline`: Transparent background with crisp outline border.
  - `btn-ghost`: Subtle borderless button for secondary actions and icons.
- **Sizing & Shapes**:
  - `btn-sm`: Compact 32px height (`2.0rem`).
  - `btn-square` / `btn-circle`: Equal aspect ratio button shapes.

### 4. Badge & Tag System (`.badge`)

- **Pills**: Compact rounded indicators for post tags, dates, and category labels.
- **Variants**: `badge-soft`, `badge-surface-variant`, `badge-ghost`.
- **Dynamic Tag Overflow**: Post cards automatically measure available space and aggregate overflowing tags into a `+N` badge counter.

### 5. Content & Markdown Styling (`.prose-raon`)

- Customized Tailwind Typography configuration for long-form article rendering:
  - Heading styles mapped to `Quicksand`.
  - Brand-colored hyper-links and accent-colored list bullets.
  - Custom pill styling for inline code blocks.

## Layout & Structure

- **Max Content Width**: `max-w-205` (~820px max width) for optimal reading ergonomics.
- **Header Dynamics**: Floating sticky header that auto-hides on downward scroll and reappears on upward scroll past 350px top offset. Supports 3 theme modes (Auto / Light / Dark).
