"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Clock, Briefcase } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [counts, setCounts] = useState({ projects: 0, rating: 0, days: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setCounts({
        projects: Math.floor(progress * 15),
        rating: Math.min(progress * 5, 5),
        days: Math.floor(progress * 10),
      })
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Des sites web <span className="text-primary">modernes</span> pour votre{" "}
              <span className="text-secondary">entreprise</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Nous créons des sites vitrines rapides, performants et abordables pour les petites entreprises et
              associations locales.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <Button asChild size="lg" className="rounded-full text-base px-8">
              <Link href="#contact">
                Obtenir un devis en 24h
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 bg-transparent">
              <Link href="#realisations">Voir nos réalisations</Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="glass rounded-2xl p-6 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold text-foreground">{counts.projects}+</span>
              </div>
              <p className="text-sm text-muted-foreground">Projets réalisés</p>
            </div>

            <div className="glass rounded-2xl p-6 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="text-3xl font-bold text-foreground">{counts.rating.toFixed(1)}★</span>
              </div>
              <p className="text-sm text-muted-foreground">Note moyenne</p>
            </div>

            <div className="glass rounded-2xl p-6 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-3xl font-bold text-foreground">{counts.days}j</span>
              </div>
              <p className="text-sm text-muted-foreground">Délai moyen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
