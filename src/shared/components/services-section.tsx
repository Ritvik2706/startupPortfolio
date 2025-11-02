import { Globe, ShoppingCart, RefreshCw, Wrench } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

const services = [
  {
    icon: Globe,
    title: "Site vitrine",
    points: ["Design moderne et responsive", "Optimisé pour le SEO", "Hébergement inclus 1 an"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce light",
    points: ["Boutique en ligne simple", "Paiement sécurisé intégré", "Gestion des produits facile"],
  },
  {
    icon: RefreshCw,
    title: "Refonte & SEO",
    points: ["Modernisation de votre site", "Amélioration du référencement", "Audit complet inclus"],
  },
  {
    icon: Wrench,
    title: "Maintenance",
    points: ["Mises à jour régulières", "Support technique prioritaire", "Sauvegardes automatiques"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Nos services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Des solutions adaptées à vos besoins et à votre budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                  Voir détails
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
