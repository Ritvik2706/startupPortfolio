import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WebCraft - Sites modernes, rapides et abordables",
  description:
    "Micro-agence spécialisée dans la création de sites vitrines rapides et abordables pour petites entreprises et associations.",
  generator: "v0.app",
  openGraph: {
    title: "WebCraft - Sites modernes, rapides et abordables",
    description:
      "Micro-agence spécialisée dans la création de sites vitrines rapides et abordables pour petites entreprises et associations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCraft - Sites modernes, rapides et abordables",
    description:
      "Micro-agence spécialisée dans la création de sites vitrines rapides et abordables pour petites entreprises et associations.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
