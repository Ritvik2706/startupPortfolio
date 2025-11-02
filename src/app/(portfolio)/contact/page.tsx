import { ContactForm } from "@/features/contact/components/ContactForm"

/**
 * Contact page
 */
export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-balance">Contactez-nous</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Parlons de votre projet cette semaine
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  )
}

