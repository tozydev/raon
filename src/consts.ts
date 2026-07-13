import { Book, Code, Cpu, Rocket, Terminal, type AstroComponent } from "@lucide/astro"
import type { Language } from "raon:i18n"

export const ROUTES = {
  home: "/",
  posts: "/posts",
  projects: "/projects",
  about: "/about",
  rss: "/rss.xml",
}

export const PROFILE = {
  name: "Thanh Tân",
  username: "tozydev",
  email: "me@tozydev.id.vn",
  location: {
    vi: "Hồ Chí Minh, Việt Nam",
    en: "Ho Chi Minh City, Vietnam",
  },
  role: {
    vi: "Software Developer",
    en: "Software Developer",
  },
  socials: {
    github: "https://github.com/tozydev",
    bluesky: "https://bsky.app/profile/tozydev.id.vn",
  },
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Bun",
    "TanStack Start",
    "TanStack Router",
    "Tailwind CSS v4",
    "CSS Grid/Flexbox",
    "Rust",
    "Tauri",
    "Go",
    "SQLite",
    "WebAssembly",
    "Git",
    "Docker",
    "REST APIs",
    "UI/UX Design",
  ],
}

export const JOURNEYS = [
  {
    period: "2023",
    text: {
      vi: "Bắt đầu học ngôn ngữ lập trình đầu tiên và khám phá thế giới thuật toán qua Java. Đây là năm tôi viết những dòng code đầu tiên, làm quen với cú pháp cơ bản và rèn luyện tư duy logic.",
      en: "Started learning my first programming language and exploring the world of algorithms through Java. This is the year I wrote my first lines of code, familiarized myself with basic syntax, and honed my logical thinking.",
    },
    icon: Book,
  },
  {
    period: "2024",
    text: {
      vi: "Chính thức bước chân vào giảng đường Khoa học Máy tính. Tôi bắt đầu xây dựng các ứng dụng web thực tế đầu tiên sử dụng React, học cách tối ưu giao diện và quản lý luồng dữ liệu.",
      en: "Officially stepped into the Computer Science classroom. I started building my first real-world web applications using React, learning how to optimize interfaces and manage data flow.",
    },
    icon: Code,
  },
  {
    period: "2025",
    text: {
      vi: "Tập trung chuyên sâu vào kiến trúc Backend và thiết kế hệ thống tối ưu. Đây cũng là thời điểm tôi bắt đầu viết blog kỹ thuật để chia sẻ những gì mình học được tới cộng đồng lập trình viên.",
      en: "Focusing deeply on Backend architecture and optimal system design. This is also the time I started writing technical blogs to share what I learned with the developer community.",
    },
    icon: Terminal,
  },
  {
    text: {
      vi: "Đang dồn toàn bộ tâm huyết để thiết kế và phát triển các sản phẩm cá nhân tối giản, mượt mà bằng việc kết hợp Kotlin, Spring Boot và React.",
      en: "Currently dedicating all my efforts to designing and developing sleek, minimalist personal products by combining Kotlin, Spring Boot, and React.",
    },
    icon: Cpu,
    isCurrent: true,
  },
  {
    text: {
      vi: "Hướng tới việc đóng góp tích cực cho các dự án mã nguồn mở lớn và ra mắt thêm nhiều công cụ hỗ trợ để tối ưu hiệu suất làm việc cho các lập trình viên khác.",
      en: "Looking forward to actively contributing to major open-source projects and launching more tools to optimize workflow for other developers.",
    },
    icon: Rocket,
    isFuture: true,
  },
] satisfies ({
  text: {
    [key in Language]: string
  }
  icon: AstroComponent
} & (
  | { period: string; isCurrent?: never; isFuture?: never }
  | { period?: never; isCurrent: true; isFuture?: never }
  | { period?: never; isCurrent?: never; isFuture: true }
))[]
