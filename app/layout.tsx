import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather, Oswald } from "next/font/google"
import "./globals.css"
import { SkCookieConsent } from "@/components/sk-cookie-consent"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SportKlub HR - Najbolji Betting Operatori u Hrvatskoj 2025",
  description:
    "Otkrijte najbolje online kladionice u Hrvatskoj. Stručne recenzije, usporedbe kvota i ekskluzivni bonusi za 2025. Sigurno i odgovorno klađenje.",
  keywords: [
    "sportklubhr",
    "sportklubhr.com",
    "sportsko klađenje Hrvatska",
    "najbolje kladionice Hrvatska",
    "online klađenje",
    "betting operatori",
    "športske kvote",
    "bonus za klađenje",
    "klađenje uživo",
    "nogometno klađenje",
    "košarkaško klađenje",
    "tenis klađenje",
    "sigurne kladionice",
    "odgovorno klađenje Hrvatska",
  ],
  authors: [{ name: "SportKlub HR" }],
  openGraph: {
    title: "SportKlub HR - Najbolji Betting Operatori u Hrvatskoj",
    description: "Otkrijte najbolje online kladionice u Hrvatskoj. Stručne recenzije i usporedbe.",
    url: "https://sportklubhr.com",
    siteName: "SportKlub HR",
    locale: "hr_HR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SkRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className={`${inter.variable} ${merriweather.variable} ${oswald.variable}`}>
      <body className={inter.className}>
        {children}
        <SkCookieConsent />
      </body>
    </html>
  )
}
