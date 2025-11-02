"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Mail, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const [honeypot, setHoneypot] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (honeypot) return

    // TODO: Connect to backend API endpoint /api/contact
    console.log("Form submitted:", formData)

    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Parlons de votre projet cette semaine</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Obtenez un devis personnalisé en moins de 24h
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean@exemple.fr"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Type de projet *</Label>
                    <Select
                      required
                      value={formData.projectType}
                      onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                    >
                      <SelectTrigger id="projectType">
                        <SelectValue placeholder="Sélectionnez un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vitrine">Site vitrine</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="refonte">Refonte</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget estimé</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    >
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Sélectionnez une fourchette" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<1000">{"< 1 000€"}</SelectItem>
                        <SelectItem value="1000-2000">1 000€ - 2 000€</SelectItem>
                        <SelectItem value="2000-5000">2 000€ - 5 000€</SelectItem>
                        <SelectItem value=">5000">{"> 5 000€"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre projet en quelques mots..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full" disabled={isSubmitted}>
                    {isSubmitted ? (
                      "Message envoyé ✓"
                    ) : (
                      <>
                        Envoyer ma demande
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {isSubmitted && (
                    <p className="text-sm text-center text-accent">Merci ! Nous vous répondrons dans les 24h.</p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <div className="space-y-6">
              <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Discuter sur WhatsApp</h3>
                      <p className="text-sm text-muted-foreground mb-4">Réponse rapide et conseils personnalisés</p>
                      <Button asChild variant="default" className="rounded-full">
                        <a href="https://wa.me/33612345678" target="_blank" rel="noopener noreferrer">
                          Discuter maintenant
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email direct</h3>
                      <p className="text-sm text-muted-foreground mb-4">Pour les demandes détaillées</p>
                      <a href="mailto:contact@webcraft.fr" className="text-sm text-primary hover:underline">
                        contact@webcraft.fr
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="glass rounded-2xl p-6 space-y-3">
                <h3 className="font-semibold">Nos engagements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Réponse sous 24h maximum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Devis gratuit et sans engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Accompagnement personnalisé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
