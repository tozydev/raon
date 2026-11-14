import rss from "@astrojs/rss"
import type { APIRoute } from "astro"
import { getEmDashCollection, getSiteSettingsWithCacheHint } from "emdash"
import { getSiteLocale } from "../utils/locale"
import { resolveStarterSiteIdentity } from "../utils/site-identity"

export const GET: APIRoute = async (context) => {
  const { site, url } = context
  const siteUrl = site ?? new URL(url.origin)

  const [
    { data: settings, cacheHint: settingsCacheHint },
    { entries: posts, cacheHint: postsCacheHint },
  ] = await Promise.all([
    getSiteSettingsWithCacheHint(),
    getEmDashCollection("posts", {
      orderBy: { published_at: "desc" },
      limit: 20,
    }),
  ])

  if (context.cache?.enabled) {
    context.cache.set(settingsCacheHint)
    context.cache.set(postsCacheHint)
  }

  const { siteTitle, siteTagline } = resolveStarterSiteIdentity(settings)

  const items = posts
    .filter((post) => post.data.publishedAt != null)
    .map((post) => ({
      title: post.data.title || "Untitled",
      description: post.data.excerpt || "",
      pubDate: post.data.publishedAt as Date,
      link: `/posts/${post.id}`,
    }))

  const locale = getSiteLocale() ?? "vi"

  const response = await rss({
    title: siteTitle,
    description: siteTagline,
    site: siteUrl,
    items,
    customData: `<language>${locale}</language>`,
  })

  response.headers.set(
    "Cache-Control",
    "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
  )

  return response
}
