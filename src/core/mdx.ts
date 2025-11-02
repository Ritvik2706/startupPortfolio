import { serialize } from "next-mdx-remote/serialize"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

/**
 * MDX/Remark/Rehype setup
 * Used for parsing MDX content from /content directory
 */

interface SerializeOptions {
  parseFrontmatter?: boolean
}

export async function serializeMdx(source: string, options: SerializeOptions = {}) {
  return serialize(source, {
    parseFrontmatter: options.parseFrontmatter ?? true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    },
  })
}

