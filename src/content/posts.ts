import { getCollection, type CollectionEntry } from "astro:content"
import { ROUTES } from "raon:consts"
import { useTranslatedPath, type Language } from "raon:i18n"

export type Post = CollectionEntry<"posts"> & {
  slug: string
  url: string
}

/**
 * Options for fetching posts.
 */
interface GetPostsOptions {
  /**
   * The language for which to fetch posts.
   */
  lang: Language
  /**
   * The maximum number of posts to fetch. If not provided, all posts will be fetched.
   */
  limit?: number
}

/**
 * Fetches posts from the "posts" collection, filters them by language, sorts them in descending order based on their published date.
 * @param {GetPostsOptions} options - The options for fetching posts.
 * @returns {Promise<Post[]>} A promise that resolves to an array of sorted post entries.
 */
export async function getPosts({ lang, limit }: GetPostsOptions): Promise<Post[]> {
  const translatePath = useTranslatedPath(lang)
  const langPart = `/${lang}`
  return (await getCollection("posts", (post) => post.id.endsWith(langPart)))
    .toSorted((a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime())
    .map((post) => {
      const slug = post.id.replace(langPart, "")
      return {
        ...post,
        slug,
        url: translatePath(`${ROUTES.posts}/${slug}`),
      }
    })
    .slice(0, limit)
}
