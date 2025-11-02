import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "990€",
    description: "Parfait pour débuter en ligne",
    features: [
      "Site vitrine 3-5 pages",
      "Design responsive",
      "Formulaire de contact",
      "SEO de base",
      "Hébergement 1 an inclus",
    ],
    excluded: ["E-commerce", "Blog", "Multilingue"],
  },
  {
    name: "Pro",
    price: "1 990€",
    description: "Pour les entreprises ambitieuses",
    features: [
      "Site vitrine 5-10 pages",
      "Design sur-mesure",
      "Blog intégré",
      "SEO avancé",
      "Hébergement 1 an inclus",
      "Formation complète",
    ],
    excluded: ["E-commerce avancé"],
    popular: true,
  },
  {
    name: "Business",
    price: "Sur devis",
    description: "Solution complète et personnalisée",
    features: [
      "Site illimité",
      "E-commerce complet",
      "Multilingue",
      "Intégrations avancées",
      "Support prioritaire",
      "Maintenance incluse 3 mois",
    ],
    excluded: [],
  },
]

export function PricingSection() {
  return (
    <section id="tarifs" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Tarifs transparents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Des prix clairs, sans surprise. Paiement en 2 à 4 fois possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : "border-border/50"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.excluded.length > 0 &&
                    plan.excluded.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 opacity-40">
                        <span className="text-muted-foreground">×</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                </div>
                <Button className="w-full rounded-full" variant={plan.popular ? "default" : "outline"} asChild>
                  <a href="#contact">Choisir ce plan</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          💳 Paiement en 2 à 4 fois sans frais disponible
        </p>
      </div>
    </section>
  )
}
