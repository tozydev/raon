import type { RemarkPlugin } from "@astrojs/markdown-remark"
import { toString } from "mdast-util-to-string"
import getReadingTime from "reading-time"

export const remarkReadingTime: RemarkPlugin = () => {
  return function (root, { data }) {
    const textOnPage = toString(root)
    const readingTime = getReadingTime(textOnPage)
    data.astro = data.astro ?? {}
    data.astro.frontmatter = data.astro.frontmatter ?? {}
    data.astro.frontmatter.minutesRead = Math.ceil(readingTime.minutes)
  }
}
