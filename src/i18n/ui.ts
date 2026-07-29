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
            Tôi cũng thích học hỏi các công nghệ mới và chia sẻ câu chuyện của mình với mọi người.",
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
        description:
          "Tôi luôn sẵn sàng trò chuyện, trao đổi, hợp tác với bạn — đừng ngần ngại liên hệ nhé.",
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
        title: "tozydev Blog",
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
    common: {
      nav: {
        home: "Home",
        posts: "Posts",
        projects: "Projects",
        about: "About",
      },
      actions: {
        learnAbout: "Learn more",
        viewMore: "View more",
        goHome: "Go home",
        goBack: "Go back",
      },
      aria: {
        search: "Search",
        themeSwitcher: "Switch theme",
        toggleMenu: "Toggle menu",
        backToTop: "Back to top",
        githubRepo: "GitHub repository",
        liveDemo: "Live demo",
        rss: "RSS Feed",
        email: "Email",
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} tozydev. Built with Astro.`,
      },
    },
    components: {
      hero: {
        greeting: "Hi! I'm",
        introduction:
          "I'm a Software Developer. \
            I enjoy building applications with Kotlin. \
            I also enjoy learning new technologies and sharing my stories with others.",
      },
      featuredProjects: {
        title: "Featured Projects",
      },
      recentPosts: {
        title: "Recent Posts",
      },
      postRecommendations: {
        title: "You May Also Like",
      },
      profile: {
        avatarAlt: "tozydev's profile picture",
      },
      skills: {
        title: "Skills & Technologies",
      },
      journey: {
        title: "Journey",
        present: "Present",
        upcoming: "Up Next",
      },
      contact: {
        title: "Contact",
        description:
          "I'm always open to conversations, ideas, and collaborations — feel free to reach out.",
        send: "Send Email",
      },
    },
    pages: {
      home: {
        title: "Home",
        description: "The personal website of Thanh Tan (tozydev)",
      },
      about: {
        title: "About",
        description: "A little about me, my journey, and what I do.",
      },
      projects: {
        title: "Projects",
        description: "A list of tozydev's projects",
        empty: "No projects yet.",
        list: {
          title: "All Projects",
        },
      },
      posts: {
        title: "Posts",
        description: "A list of tozydev's posts",
        readTime: "{minutes} min read",
        empty: "No posts yet.",
        list: {
          title: "All Posts",
        },
      },
      rss: {
        title: "The tozydev Blog",
        description: "A list of tozydev's posts",
        copyright: `© ${new Date().getFullYear()} tozydev`,
      },
      notFound: {
        title: "Page Not Found",
        description: "The page you're looking for doesn't exist or has been moved.",
        heading: "Oops! This page doesn't exist",
        message: "The link you followed may be broken or the page may have been moved.",
      },
    },
  },
} as const satisfies Record<Language, TranslationMap>
