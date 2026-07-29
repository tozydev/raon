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
        posts: "Bài viết",
        projects: "Dự án",
        about: "Giới thiệu",
      },
      actions: {
        learnAbout: "Tìm hiểu thêm",
        viewMore: "Xem thêm",
        goHome: "Về trang chủ",
        goBack: "Quay lại",
      },
      aria: {
        search: "Tìm kiếm",
        themeSwitcher: "Chuyển đổi giao diện",
        toggleMenu: "Chuyển đổi menu",
        backToTop: "Về đầu trang",
        githubRepo: "Mã nguồn GitHub",
        liveDemo: "Bản thử nghiệm",
        rss: "RSS Feed",
        email: "Email",
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} tozydev. Xây dựng bằng Astro.`,
      },
    },
    components: {
      hero: {
        greeting: "Hi! Tôi là",
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
      postRecommendations: {
        title: "Có thể bạn quan tâm",
      },
      profile: {
        avatarAlt: "Ảnh đại diện của tozydev",
      },
      skills: {
        title: "Kỹ năng & Công nghệ",
      },
      journey: {
        title: "Hành trình",
        present: "Hiện tại",
        upcoming: "Tiếp theo",
      },
      contact: {
        title: "Liên hệ",
        subtitle: "Cùng nhau xây dựng",
        description:
          "Dù bạn có một công việc hợp đồng thú vị, cần tư vấn về kiến trúc React hiệu năng cao, hay chỉ muốn trò chuyện trao đổi—đừng ngần ngại liên hệ nhé.",
        send: "Gửi Email",
      },
    },
    pages: {
      home: {
        title: "Trang chủ",
        description: "Trang chủ website cá nhân của Thanh Tân (tozydev)",
      },
      about: {
        title: "Giới thiệu",
        description: "Đôi dòng về bản thân, hành trình và những gì tôi làm.",
      },
      projects: {
        title: "Dự án",
        description: "Danh sách các dự án của tozydev",
        empty: "Chưa có dự án nào.",
        list: {
          title: "Tất cả dự án",
        },
      },
      posts: {
        title: "Bài viết",
        description: "Danh sách các bài viết của tozydev",
        readTime: "{minutes} phút đọc",
        empty: "Chưa có bài viết nào.",
        list: {
          title: "Tất cả bài viết",
        },
      },
      rss: {
        title: "RSS",
        description: "Danh sách bài viết của tozydev",
        copyright: `© ${new Date().getFullYear()} tozydev`,
      },
      notFound: {
        title: "Trang không tồn tại",
        description: "Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.",
        heading: "Úps! Trang này không tồn tại",
        message: "Đường dẫn bạn truy cập có thể bị hỏng hoặc đã được di chuyển.",
      },
    },
  },
  en: {
    name: "English",
  },
} as const satisfies Record<Language, TranslationMap>
