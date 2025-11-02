import { getAllProjects } from "@/features/projects/data/projects.repo"
import { ProjectCard } from "@/features/projects/components/ProjectCard"
import Link from "next/link"

/**
 * Projects listing page
 */
export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-balance">Nos réalisations</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez les projets que nous avons créés pour nos clients
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </main>
  )
}

