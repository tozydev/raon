import { defaultLang, type Language, Languages, showDefaultLang, ui } from "./ui"

export interface HasLang {
  lang: Language
}

export function getLangPaths(pathParam: string, slug: string) {
  return Object.values(Languages).map((lang) => ({
    params: { [pathParam]: useTranslatedPath(lang)(slug) },
    props: { lang },
  }))
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/")
  return lang in ui ? (lang as Language) : defaultLang
}

type Leaves<T> = T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends object ? `${K}.${Leaves<T[K]>}` : `${K}`
    }[keyof T & (string | number)]
  : never

export function useTranslations(lang: Language) {
  return function t(key: Leaves<(typeof ui)[typeof defaultLang]>): string {
    const getNestedValue = (obj: any, path: string): any => {
      return path.split(".").reduce((acc, part) => acc && acc[part], obj)
    }
    const val = getNestedValue(ui[lang], key) ?? getNestedValue(ui[defaultLang], key)
    return typeof val === "string" ? val : key
  }
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}
