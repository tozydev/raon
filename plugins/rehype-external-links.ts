import type { RehypePlugin } from "@astrojs/markdown-remark"

export const rehypeExternalLinks: RehypePlugin = () => {
  return (tree) => {
    const visit = (node: any) => {
      if (!node || typeof node !== "object") return

      if (node.type === "element" && node.tagName === "a" && node.properties?.href) {
        const href = String(node.properties.href)
        const isExternal =
          /^(https?:)?\/\//.test(href) &&
          !href.includes("tozydev.id.vn") &&
          !href.includes("localhost")

        if (isExternal) {
          node.properties.target = "_blank"
          node.properties.rel = "noopener noreferrer"
        }
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit)
      }
    }

    visit(tree)
  }
}
