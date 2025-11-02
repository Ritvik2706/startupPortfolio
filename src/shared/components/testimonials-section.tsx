import { Star } from "lucide-react"
import { Card, CardContent } from "@/shared/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Gérante, Boulangerie Lune",
    avatar: "/woman-baker.png",
    rating: 5,
    quote:
      "WebCraft a transformé ma présence en ligne. Mon site est magnifique et mes clients le trouvent facilement sur Google !",
  },
  {
    name: "Thomas Martin",
    role: "Coach sportif indépendant",
    avatar: "/man-coaching.png",
    rating: 5,
    quote:
      "Équipe réactive et professionnelle. Le site était prêt en 8 jours et correspond exactement à ce que je voulais.",
  },
  {
    name: "Sophie Laurent",
    role: "Présidente, Association Nova",
    avatar: "/professional-woman.png",
    rating: 5,
    quote:
      "Un excellent rapport qualité-prix. Le site est moderne, rapide et facile à mettre à jour. Je recommande vivement !",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Ils nous font confiance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Découvrez les retours de nos clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
