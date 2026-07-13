import { file, glob } from "astro/loaders"
import { z } from "astro/zod"
import { defineCollection } from "astro:content"
import { PROFILE } from "raon:consts"
import { defaultLang, Languages } from "raon:i18n"

const localizedString = z
  .record(z.enum(Object.values(Languages) as [string, ...string[]]), z.string())
  .refine((data) => Object.keys(data).includes(defaultLang), {
    message: `Missing default language key: ${defaultLang}`,
  })

const blog = defineCollection({
  loader: glob({ base: "./content/blog", pattern: "**/index.*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string().default(PROFILE.username),
      publishedDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      coverImage: z.optional(image()),
      tags: z.array(z.string()).default([]),
    }),
})

const projects = defineCollection({
  loader: file("content/projects/projects.yaml"),
  schema: ({ image }) =>
    z.object({
      title: localizedString,
      description: localizedString,
      featured: z.boolean().default(false),
      authors: z.array(z.string()).default([PROFILE.username]),
      tags: z.array(z.string()).default([]),
      coverImage: z.optional(image()),
      github: z.string().optional(),
      link: z.string().optional(),
    }),
})

export const collections = { blog, projects }
