import rss from "@astrojs/rss"
import type { APIRoute, GetStaticPaths } from "astro"
import { getPosts } from "raon:content"
import { getLangPaths, useTranslatedPath, useTranslations, type HasLang } from "raon:i18n"

interface Props extends HasLang {}

export const getStaticPaths = (() => {
  return getLangPaths("rss", "/rss")
}) satisfies GetStaticPaths

export const GET: APIRoute<Props> = async ({ site, props }) => {
  const lang = props.lang
  const translatePath = useTranslatedPath(lang)
  const t = useTranslations(lang)
  const posts = await getPosts({ lang })

  return rss({
    title: t("pages.rss.title"),
    description: t("pages.rss.description"),
    site: site || "",
    customData: `<language>${lang}</language><copyright>${t("pages.rss.copyright")}</copyright>`,
    items: posts.map((post) => {
      const slug = post.id.split("/")[0]
      const link = translatePath(`/posts/${slug}/`, lang)
      return {
        title: post.data.title,
        pubDate: post.data.publishedDate,
        description: post.data.description,
        link,
      }
    }),
  })
}
