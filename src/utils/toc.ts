export interface TocItem {
  depth: number
  text: string
  slug: string
}

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

export function extractToc(content: unknown): TocItem[] {
  if (!Array.isArray(content)) return []

  const items: TocItem[] = []
  const slugCounts = new Map<string, number>()

  for (const block of content) {
    if (!block || typeof block !== "object") continue
    const b = block as Record<string, unknown>
    if (b._type !== "block") continue

    const style = typeof b.style === "string" ? b.style : ""
    const match = style.match(/^h([1-6])$/)
    if (!match) continue

    const depth = parseInt(match[1], 10)
    // Only h2, h3, h4 for TOC (h1 is article title)
    if (depth < 2 || depth > 4) continue

    const children = Array.isArray(b.children) ? b.children : []
    const text = children
      .map((c: any) => (c && typeof c === "object" && typeof c.text === "string" ? c.text : ""))
      .join("")
      .trim()

    if (!text) continue

    const baseSlug = slugify(text) || `heading-${items.length + 1}`
    const count = slugCounts.get(baseSlug) ?? 0
    slugCounts.set(baseSlug, count + 1)
    const slug = count === 0 ? baseSlug : `${baseSlug}-${count}`

    items.push({ depth, text, slug })
  }

  return items
}
