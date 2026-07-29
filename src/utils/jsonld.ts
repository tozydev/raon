import { PROFILE } from "raon:consts"
import type { Post, Project } from "raon:content"
import type { Language } from "raon:i18n"

export function getPersonSchema(siteUrl: string, lang: Language) {
  return {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: PROFILE.name,
    alternateName: PROFILE.username,
    url: siteUrl,
    email: `mailto:${PROFILE.email}`,
    jobTitle: PROFILE.role[lang] || PROFILE.role.en,
    sameAs: Object.values(PROFILE.socials),
    knowsAbout: PROFILE.skills,
    homeLocation: {
      "@type": "Place",
      name: PROFILE.location[lang] || PROFILE.location.en,
    },
  }
}

export function getWebSiteSchema(siteUrl: string, lang: Language) {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${PROFILE.username} - ${PROFILE.name}`,
    inLanguage: lang,
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    author: {
      "@id": `${siteUrl}/#person`,
    },
  }
}

export interface BaseJsonLdOptions {
  siteUrl: string
  canonicalUrl: string
  title: string
  description: string
  lang: Language
}

export function getDefaultJsonLd({
  siteUrl,
  canonicalUrl,
  title,
  description,
  lang,
}: BaseJsonLdOptions) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(siteUrl, lang),
      getWebSiteSchema(siteUrl, lang),
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: title,
        description: description,
        inLanguage: lang,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
      },
    ],
  }
}

export function getHomeJsonLd({
  siteUrl,
  canonicalUrl,
  title,
  description,
  lang,
}: BaseJsonLdOptions) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(siteUrl, lang),
      getWebSiteSchema(siteUrl, lang),
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: title,
        description: description,
        inLanguage: lang,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  }
}

export function getAboutJsonLd({
  siteUrl,
  canonicalUrl,
  title,
  description,
  lang,
}: BaseJsonLdOptions) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(siteUrl, lang),
      getWebSiteSchema(siteUrl, lang),
      {
        "@type": "ProfilePage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: title,
        description: description,
        inLanguage: lang,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  }
}

export interface PostsJsonLdOptions extends BaseJsonLdOptions {
  posts: Post[]
}

export function getPostsJsonLd({
  siteUrl,
  canonicalUrl,
  title,
  description,
  lang,
  posts,
}: PostsJsonLdOptions) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(siteUrl, lang),
      getWebSiteSchema(siteUrl, lang),
      {
        "@type": "Blog",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: title,
        description: description,
        inLanguage: lang,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        author: {
          "@id": `${siteUrl}/#person`,
        },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.data.title,
          url: new URL(post.url, siteUrl).toString(),
          datePublished: post.data.publishedDate.toISOString(),
          dateModified: (post.data.updatedDate || post.data.publishedDate).toISOString(),
          description: post.data.description,
        })),
      },
    ],
  }
}

export interface PostDetailJsonLdOptions {
  siteUrl: string
  canonicalUrl: string
  post: Post
}

export function getPostDetailJsonLd({ siteUrl, canonicalUrl, post }: PostDetailJsonLdOptions) {
  const coverImageUrl = post.data.coverImage
    ? new URL(post.data.coverImage.src, siteUrl).toString()
    : undefined

  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(siteUrl, post.lang),
      {
        "@type": "BlogPosting",
        "@id": canonicalUrl,
        url: canonicalUrl,
        headline: post.data.title,
        description: post.data.description,
        datePublished: post.data.publishedDate.toISOString(),
        dateModified: (post.data.updatedDate || post.data.publishedDate).toISOString(),
        inLanguage: post.lang,
        author: {
          "@type": "Person",
          name: post.data.author || PROFILE.name,
          url: siteUrl,
        },
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        ...(coverImageUrl ? { image: [coverImageUrl] } : {}),
        ...(post.data.tags.length > 0 ? { keywords: post.data.tags.join(", ") } : {}),
      },
    ],
  }
}

export interface ProjectsJsonLdOptions extends BaseJsonLdOptions {
  projects: Project[]
}

export function getProjectsJsonLd({
  siteUrl,
  canonicalUrl,
  title,
  description,
  lang,
  projects,
}: ProjectsJsonLdOptions) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(siteUrl, lang),
      getWebSiteSchema(siteUrl, lang),
      {
        "@type": "CollectionPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: title,
        description: description,
        inLanguage: lang,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: projects.map((proj, idx) => {
            const projTitle = proj.data.title[lang] || proj.data.title.vi
            const projDesc = proj.data.description[lang] || proj.data.description.vi
            const projUrl = proj.data.link || proj.data.github || canonicalUrl
            const coverImageUrl = proj.data.coverImage
              ? new URL(proj.data.coverImage.src, siteUrl).toString()
              : undefined

            return {
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "SoftwareSourceCode",
                name: projTitle,
                description: projDesc,
                url: projUrl,
                ...(proj.data.github ? { codeRepository: proj.data.github } : {}),
                ...(coverImageUrl ? { image: coverImageUrl } : {}),
                ...(proj.data.tags.length > 0 ? { keywords: proj.data.tags.join(", ") } : {}),
                author: {
                  "@id": `${siteUrl}/#person`,
                },
              },
            }
          }),
        },
      },
    ],
  }
}
