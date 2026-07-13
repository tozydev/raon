import type { Project } from "@components/projects/ProjectCard.astro"

export const mockProjects: Project[] = [
  {
    title: "Tauri Editor",
    description:
      "A beautiful, minimalist markdown editor built with Tauri and React, focusing on write-state focus and local-first data storage.",
    tags: ["Rust", "React", "Tauri", "TypeScript"],
    github: "https://github.com",
    demo: "https://example.com",
    coverImage: "/images/tauri_editor.jpg",
  },
  {
    title: "Aura DB",
    description:
      "A lightweight, fast, in-memory document database with SQL-like query interface and WebAssembly support.",
    tags: ["Go", "SQLite", "WebAssembly"],
    github: "https://github.com",
    coverImage: "/images/aura_db.jpg",
  },
  {
    title: "TanStack Start Starter",
    description:
      "A production-ready starter template for TanStack Start, featuring Tailwind CSS v4, Bun, and TypeScript.",
    tags: ["React", "TanStack", "Tailwind v4"],
    github: "https://github.com",
    demo: "https://example.com",
    coverImage: "/images/tanstack_starter.jpg",
  },
  {
    title: "Spring Clean API",
    description:
      "A microservice server scaffolding designed with Kotlin and Spring Boot, optimizing database connection pools and API endpoints.",
    tags: ["Kotlin", "SpringBoot", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    title: "Green UI Pack",
    description:
      "A collection of serene, nature-toned floating card UI elements and animation presets for modern websites.",
    tags: ["CSS", "FramerMotion", "Design"],
    github: "https://github.com",
    demo: "https://example.com",
    coverImage: "/images/floating_island_blog.jpg",
  },
  {
    title: "Bunny Bench",
    description:
      "An automated benchmarking suite script designed to test JS compile and runtime execution metrics between Node and Bun.",
    tags: ["Bun", "JavaScript", "Testing"],
    github: "https://github.com",
  },
]
