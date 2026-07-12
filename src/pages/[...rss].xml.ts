import rss from "@astrojs/rss"
import type { APIRoute, GetStaticPaths } from "astro"
import { getCollection } from "astro:content"
import { getLangPaths, useTranslatedPath, useTranslations, type HasLang } from "raon:i18n"

interface Props extends HasLang {}

export const getStaticPaths = (() => {
  return getLangPaths("rss", "/rss")
}) satisfies GetStaticPaths

export const GET: APIRoute<Props> = async ({ site, props }) => {
  const lang = props.lang
  const translatePath = useTranslatedPath(lang)
  const t = useTranslations(lang)
  const posts = await getCollection("blog")

  // Filter posts by language based on filename structure (slugified ID)
  const filteredPosts = posts
    .filter((post) => post.id.endsWith(`/index${lang}`))
    .sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf())

  return rss({
    title: t("pages.rss.title"),
    description: t("pages.rss.description"),
    site: site || "",
    items: filteredPosts.map((post) => {
      const slug = post.id.split("/")[0]
      const link = translatePath(`/blog/${slug}/`, lang)
      return {
        title: post.data.title,
        pubDate: post.data.publishedDate,
        description: post.data.description,
        link,
      }
    }),
  })
}
