import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ScrollRevealProvider } from "@/hooks/use-scroll-reveal"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kyle & Kylie - Pianos, Tours & Entertainment Sri Lanka",
  description:
    "Your trusted partner for pianos, Sri Lankan tours, and live entertainment since 2015. Premium piano sales & rentals, personalized holiday packages, and professional event entertainment.",
  generator: "v0.app",
  icons: {
    icon: "/images/logo_round.png",
    apple: "/images/logo_round.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ScrollRevealProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </ScrollRevealProvider>
        <Analytics />
      </body>
    </html>
  )
}
