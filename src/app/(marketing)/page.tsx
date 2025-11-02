import { Header } from "@/shared/components/header"
import { HeroSection } from "@/shared/components/hero-section"
import { ServicesSection } from "@/shared/components/services-section"
import { ProjectCarousel } from "@/features/projects/components/ProjectCarousel"
import { ProcessSection } from "@/shared/components/process-section"
import { PricingSection } from "@/shared/components/pricing-section"
import { TestimonialsSection } from "@/shared/components/testimonials-section"
import { FAQSection } from "@/shared/components/faq-section"
import { ContactForm } from "@/features/contact/components/ContactForm"
import { Footer } from "@/shared/components/footer"

export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectCarousel />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </main>
  )
}

