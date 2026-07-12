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
    pages: {
      home: {
        title: "Trang chủ",
        description: "",
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
