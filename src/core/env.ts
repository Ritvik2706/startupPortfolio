import { z } from "zod"

/**
 * Minimal Zod-safe environment variables
 * Add more variables as needed
 */
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  // Add other env vars here as needed
  // Example: DATABASE_URL: z.string().url().optional(),
})

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV || "development",
  // Add other process.env accesses here
})

