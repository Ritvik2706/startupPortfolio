import type { Project } from "../types"

/**
 * Reads project data from front-matter in /content/projects
 * For now, using static data - can be extended to read from MDX files
 */

const staticProjects: Project[] = [
  {
    title: "Boulangerie Lune",
    sector: "Commerce local",
    url: "https://exemple-boulangerie.demo",
    points: ["Performance: 98/100", "SEO optimisé pour recherche locale", "Accessibilité AA conforme"],
    slug: "boulangerie-lune",
  },
  {
    title: "Coach Vital",
    sector: "Personal branding",
    url: "https://exemple-coach.demo",
    points: ["Design moderne et épuré", "Système de réservation intégré", "Blog optimisé pour le contenu"],
    slug: "coach-vital",
  },
  {
    title: "Atelier Nova",
    sector: "Artisanat",
    url: "https://exemple-artisan.demo",
    points: ["Galerie photos haute qualité", "Formulaire de devis personnalisé", "Temps de chargement < 2s"],
    slug: "atelier-nova",
  },
]

/**
 * Get all projects
 */
export async function getAllProjects(): Promise<Project[]> {
  // TODO: Read from /content/projects/*.mdx files
  return staticProjects
}

/**
 * Get a project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects()
  return projects.find((p) => p.slug === slug) || null
}

