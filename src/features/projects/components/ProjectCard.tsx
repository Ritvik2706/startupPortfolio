import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"
import type { Project } from "../types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{project.sector}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {project.points.slice(0, 3).map((point, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-accent mt-1">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

