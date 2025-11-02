import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion"

const faqs = [
  {
    question: "Quels sont les délais de réalisation ?",
    answer:
      "En moyenne, un site vitrine est livré en 10 jours ouvrés. Pour un projet e-commerce ou plus complexe, comptez 3 à 4 semaines. Nous pouvons accélérer le processus si nécessaire.",
  },
  {
    question: "Le SEO de base, qu'est-ce que ça inclut ?",
    answer:
      "Nous optimisons les balises meta, la structure HTML, les images, la vitesse de chargement et créons un sitemap. Pour un SEO avancé (recherche de mots-clés, stratégie de contenu), optez pour le plan Pro.",
  },
  {
    question: "Proposez-vous un service de maintenance ?",
    answer:
      "Oui ! Nous proposons des contrats de maintenance mensuels incluant les mises à jour, les sauvegardes, le support technique et les modifications mineures. Contactez-nous pour un devis personnalisé.",
  },
  {
    question: "Qui est propriétaire du code source ?",
    answer:
      "Vous êtes propriétaire à 100% du code source et de tous les fichiers de votre site. Nous vous fournissons l'accès complet à la fin du projet.",
  },
  {
    question: "L'hébergement est-il inclus ?",
    answer:
      "Oui, la première année d'hébergement est incluse dans tous nos plans. Ensuite, vous pouvez renouveler avec nous (environ 100€/an) ou choisir votre propre hébergeur.",
  },
  {
    question: "Pouvez-vous reprendre un site existant ?",
    answer:
      "Absolument ! Nous pouvons moderniser, optimiser ou migrer votre site existant. Nous réalisons d'abord un audit gratuit pour évaluer les besoins et vous proposer un devis adapté.",
  },
  {
    question: "Puis-je modifier mon site moi-même après la livraison ?",
    answer:
      "Oui, nous utilisons des CMS intuitifs ou vous fournissons une formation pour gérer votre contenu en autonomie. Une documentation complète est également fournie.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les virements bancaires, cartes bancaires et proposons un paiement échelonné en 2 à 4 fois sans frais pour faciliter votre investissement.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Questions fréquentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Tout ce que vous devez savoir avant de démarrer
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
