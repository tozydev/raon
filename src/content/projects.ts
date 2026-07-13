import { getCollection, type CollectionEntry } from "astro:content"

/**
 * Fetches all projects from the "projects" collection and sorts them in ascending order based on their ID.
 * @returns {Promise<CollectionEntry<"projects">[]>} A promise that resolves to an array of sorted project entries.
 */
export async function getProjects(): Promise<CollectionEntry<"projects">[]> {
  return (await getCollection("projects")).toSorted((a, b) => a.id.localeCompare(b.id))
}
