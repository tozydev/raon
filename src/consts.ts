import {
  Code,
  Goal,
  Key,
  MonitorCog,
  PcCase,
  Rocket,
  University,
  UserSearch,
  type AstroComponent,
} from "@lucide/astro"
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
    "Kotlin",
    "Java",
    "TypeScript",
    "Spring Boot",
    "Ktor",
    "Compose Multiplatform",
    "PostgreSQL",
    "SQLite",
    "Git",
    "IntelliJ IDEA",
    "AI",
  ],
}

export const JOURNEYS = [
  {
    period: "2016",
    text: {
      vi: "Tôi biết đến lập trình và có cho mình chiếc PC đầu tiên.",
      en: "I know programming and have my first PC.",
    },
    icon: PcCase,
  },
  {
    period: "2017",
    text: {
      vi: "Tôi đã cài Windows, Hackintosh, Ubuntu vào chiếc PC của mình.",
      en: "I installed Windows, Hackintosh, Ubuntu on my first PC.",
    },
    icon: MonitorCog,
  },
  {
    period: "2018",
    text: {
      vi: "Nhờ Minecraft, tôi bắt đầu yêu thích việc lập trình. Tôi học Java và bắt đầu viết các plugin đầu tiên cho server Minecraft. Nhưng, tôi không thích Kotlin.",
      en: "I started programming thanks to Minecraft. I learned Java and started writing the first Minecraft plugins. But I don't like Kotlin.",
    },
    icon: Code,
  },
  {
    period: "2021",
    text: {
      vi: "Why? Kotlin đã trở thành ngôn ngữ yêu thích của tôi. Tôi bắt đầu chuyển các dự án của mình sang Kotlin và đã không quay lại.",
      en: "Why? Kotlin has become my favorite language. I started converting my projects to Kotlin and haven't looked back.",
    },
    icon: Key,
  },
  {
    period: "2023",
    text: {
      vi: "Tôi quyết định theo đuổi con đường lập trình chuyên nghiệp. Nhưng vẫn chưa xác định được mình sẽ đảm nhận vai trò gì.",
      en: "I decided to pursue a professional programming path. But I haven't yet determined what role I will take on.",
    },
    icon: University,
  },
  {
    period: "2024",
    text: {
      vi: "Software Developer, tập trung vào web backend. Let's go! Khoảng thời gian này tôi cũng nhận làm các job freelance về plugin Minecraft",
      en: "Software Developer, focusing on web backend. Let's go! This is also where I receive freelance jobs for Minecraft plugins.",
    },
    icon: UserSearch,
  },
  {
    text: {
      vi: "Tôi đã dừng việc phát triển plugin Minecraft. Tập trung hoàn toàn vào con đường trở thành Software Developer chuyên nghiệp. Tôi bắt đầu hứng thú với việc phát triển các sản phẩm mã nguồn mở.",
      en: "I stopped developing Minecraft plugins. I focused completely on the path to becoming a professional Software Developer. I started to enjoy developing open-source products.",
    },
    icon: Goal,
    isCurrent: true,
  },
  {
    text: {
      vi: "Hướng tới việc đóng góp các dự án mã nguồn mở, đặc biệt trong hệ sinh thái Kotlin. Và tạo ra các sản phẩm chất lượng phục vụ các khách hàng của mình.",
      en: "I am heading towards contributing to open-source projects, especially in the Kotlin ecosystem. And creating quality products to serve my customers.",
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
