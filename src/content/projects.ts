import { getCollection, type CollectionEntry } from "astro:content"

export type Project = CollectionEntry<"projects">

/**
 * Options for fetching projects.
 */
interface GetProjectsOptions {
  /**
   * If true, only fetch projects that are marked as featured.
   */
  featured?: boolean
}

/**
 * Fetches all projects from the "projects" collection and sorts them in ascending order based on their ID.
 * @param {GetProjectsOptions} [options] - Optional parameters to filter the projects.
 * @returns {Promise<Project[]>} A promise that resolves to an array of sorted project entries.
 */
export async function getProjects(options?: GetProjectsOptions): Promise<Project[]> {
  return (
    await getCollection("projects", (project) => !options?.featured || project.data.featured)
  ).toSorted((a, b) => a.id.localeCompare(b.id))
}
