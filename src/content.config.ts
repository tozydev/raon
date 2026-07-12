import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const blog = defineCollection({
  loader: glob({ base: "./content/blog", pattern: "**/index.*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string().default("tozydev"),
      publishedDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      coverImage: z.optional(image()),
      tags: z.array(z.string()).default([]),
    }),
})

export const collections = { blog }
