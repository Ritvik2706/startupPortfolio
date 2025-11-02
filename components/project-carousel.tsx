"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Project {
  title: string
  sector: string
  url: string
  points: string[]
}

const projects: Project[] = [
  {
    title: "Boulangerie Lune",
    sector: "Commerce local",
    url: "https://exemple-boulangerie.demo",
    points: ["Performance: 98/100", "SEO optimisé pour recherche locale", "Accessibilité AA conforme"],
  },
  {
    title: "Coach Vital",
    sector: "Personal branding",
    url: "https://exemple-coach.demo",
    points: ["Design moderne et épuré", "Système de réservation intégré", "Blog optimisé pour le contenu"],
  },
  {
    title: "Atelier Nova",
    sector: "Artisanat",
    url: "https://exemple-artisan.demo",
    points: ["Galerie photos haute qualité", "Formulaire de devis personnalisé", "Temps de chargement < 2s"],
  },
]

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [iframeError, setIframeError] = useState<{ [key: number]: boolean }>({})

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const handleIframeError = (index: number) => {
    setIframeError((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section id="realisations" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Nos réalisations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Découvrez les projets que nous avons créés pour nos clients
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Card className="overflow-hidden border-border/50">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Preview */}
                  <div className="relative aspect-[4/3] bg-muted">
                    {!iframeError[currentIndex] ? (
                      <iframe
                        src={projects[currentIndex].url}
                        className="w-full h-full"
                        sandbox="allow-scripts allow-same-origin"
                        loading="lazy"
                        title={projects[currentIndex].title}
                        onError={() => handleIframeError(currentIndex)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                        <div className="text-center space-y-4 p-8">
                          <div className="w-16 h-16 mx-auto rounded-full bg-background/50 flex items-center justify-center">
                            <FileText className="h-8 w-8 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">Aperçu non disponible</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-8 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
                        <p className="text-sm text-muted-foreground">{projects[currentIndex].sector}</p>
                      </div>

                      <ul className="space-y-3">
                        {projects[currentIndex].points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-accent mt-1">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Button asChild variant="default" className="flex-1 rounded-full">
                        <a href={projects[currentIndex].url} target="_blank" rel="noopener noreferrer">
                          Visiter le site
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" className="flex-1 rounded-full bg-transparent">
                        Étude de cas
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={prevSlide}
              aria-label="Projet précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={nextSlide}
              aria-label="Projet suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
