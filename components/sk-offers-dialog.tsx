"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, X, CheckCircle } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { SzhBettingSite } from "@/types/szh-betting-types"

interface SkOffersDialogProps {
  sites: SzhBettingSite[]
}

export function SkOffersDialog({ sites }: SkOffersDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starElements.push(<Star key={i} className="h-3 w-3 fill-sk-gold text-sk-gold" />)
      } else {
        starElements.push(<Star key={i} className="h-3 w-3 text-sk-border" />)
      }
    }

    return starElements
  }

  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[480px] max-h-[85vh] p-0 border-2 border-sk-navy bg-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 z-10 w-7 h-7 bg-white hover:bg-sk-navy border-2 border-sk-navy rounded-sm flex items-center justify-center text-sk-navy hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative">
          <div className="relative bg-sk-navy px-4 py-4 md:py-5 border-b-4 border-sk-red">
            <div className="flex items-center justify-center gap-2 mb-2">
              <h2 className="font-display text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                Ekskluzivna Ponuda
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-white font-bold text-xs uppercase tracking-wide">
                Najbolja ponuda za hrvatske igrače
              </p>
            </div>
          </div>

          <div className="px-4 py-4 md:py-5 bg-white">
            <div className="relative bg-black h-20 md:h-24 w-full max-w-[220px] mx-auto mb-4 border-2 border-sk-border shadow-md overflow-hidden p-3">
              <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain p-2" />
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center justify-center gap-0.5">{renderStars(topSite.stars)}</div>
              <span className="font-display text-xl md:text-2xl text-sk-navy font-bold">
                {topSite.rating.toFixed(1)}
              </span>
              <span className="text-sk-text-light text-xs">({topSite.reviews})</span>
            </div>

            <div className="relative bg-sk-grey-light p-3 md:p-4 text-center border-2 border-sk-red shadow-lg mb-4 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-sk-red"></div>

              <div className="text-sk-red text-xs uppercase font-bold tracking-widest mb-2 font-display">
                Bonus Dobrodošlice
              </div>
              <p className="font-display font-black text-sk-navy text-2xl md:text-3xl leading-tight uppercase tracking-tight mb-1">
                {topSite.bonus}
              </p>
              {topSite.dopBonus && <p className="text-sk-text-light text-xs font-medium">{topSite.dopBonus}</p>}
            </div>

            <a
              href={topSite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-sk-red hover:bg-sk-red-dark text-white text-sm md:text-base font-black font-display text-center transition-all transform hover:scale-[1.02] mb-3 uppercase tracking-wider shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Preuzmi Bonus Sada
            </a>

            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-sk-grey-light border-2 border-sk-border p-2 text-center shadow-sm">
                <div className="text-sk-navy text-lg font-display font-bold mb-0.5">#{1}</div>
                <div className="text-sk-text-light text-xs font-medium">Rang</div>
              </div>
              <div className="bg-sk-grey-light border-2 border-sk-border p-2 text-center shadow-sm">
                <CheckCircle className="w-5 h-5 text-sk-green mx-auto mb-0.5" />
                <div className="text-sk-text-light text-xs font-medium">Sigurno</div>
              </div>
              <div className="bg-sk-grey-light border-2 border-sk-border p-2 text-center shadow-sm">
                <div className="text-sk-navy text-lg font-display font-bold mb-0.5">24/7</div>
                <div className="text-sk-text-light text-xs font-medium">Podrška</div>
              </div>
            </div>

            <div className="text-center bg-sk-grey-light border border-sk-border p-3">
              <p className="text-xs text-sk-text-light leading-relaxed font-medium">
                18+ | Primjenjuju se Uvjeti | Odgovorno Klađenje
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
