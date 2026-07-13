export const Languages = {
  Vi: "vi",
  En: "en",
} as const

export type Language = (typeof Languages)[keyof typeof Languages]

export const defaultLang: Language = Languages.Vi

export const showDefaultLang = false

export interface TranslationMap {
  [key: string]: string | TranslationMap
}

export const ui = {
  vi: {
    name: "Tiếng Việt",
    common: {
      brand: {
        github: "GitHub",
        bluesky: "Bluesky",
      },
      nav: {
        home: "Trang chủ",
        blog: "Blog",
        projects: "Dự án",
        about: "Giới thiệu",
      },
      buttons: {
        moreAbout: "Tìm hiểu thêm",
        viewMore: "Xem thêm",
      },
      ariaLabel: {
        search: "Tìm kiếm",
        themeSwitcher: "Chuyển đổi giao diện",
        rss: "RSS Feed",
        email: "Email",
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} tozydev. Xây dựng bằng Astro.`,
      },
    },
    pages: {
      home: {
        title: "Trang chủ",
        description: "",
        hero: {
          gretting: "Hi! Tôi là",
          introduction:
            "Tôi là một Software Developer. \
            Tôi thích xây dựng các ứng dụng bằng Kotlin. \
            Tôi cũng thích học hỏi các công nghệ mới và chia sẻ kiến thức của mình với cộng đồng.",
        },
        featuredProjects: {
          title: "Dự án nổi bật",
        },
        recentPosts: {
          title: "Bài viết gần đây",
        },
      },
      about: {
        title: "Giới thiệu",
        description: "",
      },
      blog: {
        title: "Blog",
        description: "",
      },
      rss: {
        title: "RSS",
        description: "",
      },
      404: {
        title: "Không tìm thấy trang",
        description: "Trang bạn đang tìm kiếm không tồn tại.",
      },
    },
  },
  en: {
    name: "English",
  },
} as const satisfies Record<Language, TranslationMap>
