"use server"

import { z } from "zod"

/**
 * Contact form submission schema
 */
const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  projectType: z.enum(["vitrine", "ecommerce", "refonte", "maintenance", "autre"]),
  budget: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Server action for contact form submission
 * Includes basic validation
 */
export async function submitContactForm(data: unknown) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(data)

    // TODO: Send email, save to database, or integrate with external service
    // For now, just log the validated data
    console.log("Contact form submission:", validatedData)

    return {
      success: true,
      message: "Votre message a été envoyé avec succès",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Données invalides",
        details: error.errors,
      }
    }

    return {
      success: false,
      error: "Une erreur est survenue lors de l'envoi",
    }
  }
}

