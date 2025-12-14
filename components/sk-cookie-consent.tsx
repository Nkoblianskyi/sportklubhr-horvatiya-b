"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cookie, Shield, X } from "lucide-react"

export function SkCookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-white border-2 border-sk-navy shadow-2xl z-50 overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
      {/* Top accent bar */}
      <div className="h-1 bg-sk-red"></div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sk-navy rounded-sm flex items-center justify-center">
              <Cookie className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-display text-lg text-sk-navy uppercase font-bold">Kolačići</h3>
              <p className="text-xs text-sk-grey-dark">Politika privatnosti</p>
            </div>
          </div>
          <button
            onClick={handleDecline}
            className="text-sk-grey-dark hover:text-sk-navy transition-colors p-1"
            aria-label="Zatvori"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <p className="text-sm text-sk-text-light leading-relaxed mb-4">
          Koristimo kolačiće za poboljšanje funkcionalnosti stranice i analizu prometa. Prihvaćanjem pomažete nam
          pružiti bolje iskustvo.{" "}
          <Link href="/cookie-policy" className="text-sk-navy hover:text-sk-red font-semibold underline">
            Saznaj više
          </Link>
        </p>

        {/* Privacy Badge */}
        <div className="flex items-center gap-2 mb-5 p-3 bg-sk-grey-light/30 rounded-sm border border-sk-border">
          <Shield className="w-4 h-4 text-sk-green" />
          <span className="text-xs text-sk-text-light font-medium">Vaši podaci su sigurni i zaštićeni</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleDecline}
            variant="outline"
            size="sm"
            className="flex-1 border-2 border-sk-navy text-sk-text-light hover:bg-sk-grey-light hover:text-sk-navy bg-transparent font-semibold"
          >
            Odbij
          </Button>
          <Button
            onClick={handleAccept}
            size="sm"
            className="flex-1 bg-sk-navy hover:bg-sk-navy-dark text-white font-bold font-display uppercase tracking-wide"
          >
            Prihvati
          </Button>
        </div>
      </div>
    </div>
  )
}
