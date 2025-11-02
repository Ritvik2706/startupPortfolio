import { MessageSquare, Palette, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Brief",
    description: "Échange sur vos besoins et objectifs",
    deliverables: "Cahier des charges détaillé",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Création des maquettes et validation",
    deliverables: "Maquettes Figma interactives",
  },
  {
    icon: Code,
    title: "Développement",
    description: "Intégration et développement du site",
    deliverables: "Site fonctionnel en pré-production",
  },
  {
    icon: Rocket,
    title: "Mise en ligne",
    description: "Déploiement et formation",
    deliverables: "Site en ligne + mini-tuto",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Notre processus</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Un accompagnement étape par étape pour votre projet
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center glass">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    <p className="text-xs text-accent font-medium">→ {step.deliverables}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
