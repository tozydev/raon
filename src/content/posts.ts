import { getCollection, type CollectionEntry } from "astro:content"

/**
 * Fetches all posts from the "posts" collection and sorts them in descending order based on their published date.
 * @returns {Promise<CollectionEntry<"posts">[]>} A promise that resolves to an array of sorted post entries.
 */
export async function getPosts(): Promise<CollectionEntry<"posts">[]> {
  return (await getCollection("posts")).toSorted(
    (a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime(),
  )
}
