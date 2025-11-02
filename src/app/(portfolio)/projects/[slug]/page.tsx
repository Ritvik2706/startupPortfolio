import { getProjectBySlug } from "@/features/projects/data/projects.repo"
import { notFound } from "next/navigation"
import { readFile } from "fs/promises"
import { join } from "path"
import { serializeMdx } from "@/core/mdx"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

/**
 * Render MDX by slug
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Try to load MDX content from /content/projects
  let mdxContent: string | null = null
  try {
    const contentPath = join(process.cwd(), "content", "projects", `${slug}.mdx`)
    mdxContent = await readFile(contentPath, "utf-8")
  } catch {
    // MDX file doesn't exist, will use project data
  }

  const serializedContent = mdxContent ? await serializeMdx(mdxContent) : null

  return (
    <main className="container mx-auto px-4 py-20 max-w-4xl">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{project!.title}</h1>
          <p className="text-muted-foreground">{project!.sector}</p>
        </header>

        {serializedContent ? (
          <div className="prose prose-invert dark:prose-invert">
            {/* MDX content would be rendered here */}
            <p>MDX rendering will be implemented when next-mdx-remote is installed</p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-muted-foreground">{project.description || "Description du projet..."}</p>
            <ul className="space-y-2">
              {project.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </main>
  )
}

