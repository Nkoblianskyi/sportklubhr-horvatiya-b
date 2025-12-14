import Image from "next/image"
import { Star, Award, Medal, TrendingUp } from "lucide-react"
import type { SzhBettingSite } from "@/types/szh-betting-types"
import Link from "next/link"

interface SkRatingListProps {
  sites: SzhBettingSite[]
}

export function SkBettingRatings({ sites }: SkRatingListProps) {
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-sk-gold text-sk-gold" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-sk-border" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-3 w-3 md:h-4 md:w-4">
            <Star className="absolute h-3 w-3 md:h-4 md:w-4 text-sk-border" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-3 w-3 md:h-4 md:w-4 fill-sk-gold text-sk-gold" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const getCardStyle = (index: number) => {
    if (index === 0) {
      return {
        borderColor: "border-sk-navy",
        bgColor: "bg-sk-white",
        badge: "bg-sk-gold text-sk-navy",
        buttonPrimary: "bg-sk-red hover:bg-sk-red-dark text-sk-white",
        rank: "text-sk-navy",
        icon: <Award className="w-3 h-3 md:w-4 md:h-4" />,
      }
    } else if (index === 1) {
      return {
        borderColor: "border-sk-red",
        bgColor: "bg-sk-white",
        badge: "bg-sk-red text-sk-white",
        buttonPrimary: "bg-sk-navy hover:bg-sk-navy-dark text-sk-white",
        rank: "text-sk-red",
        icon: <Medal className="w-3 h-3 md:w-4 md:h-4" />,
      }
    } else if (index === 2) {
      return {
        borderColor: "border-sk-gold",
        bgColor: "bg-sk-white",
        badge: "bg-sk-navy text-sk-white",
        buttonPrimary: "bg-sk-navy hover:bg-sk-navy-dark text-sk-white",
        rank: "text-sk-gold-dark",
        icon: <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />,
      }
    } else {
      return {
        borderColor: "border-sk-border",
        bgColor: "bg-sk-white",
        badge: "bg-sk-grey text-sk-text",
        buttonPrimary: "bg-sk-navy hover:bg-sk-navy-dark text-sk-white",
        rank: "text-sk-text-light",
        icon: null,
      }
    }
  }

  return (
    <section id="rang-lista" className="py-8 md:py-12 lg:py-16 bg-sk-off-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-[1400px]">
        {/* Section Header */}

        {/* Rating Cards Grid */}
        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {sites.map((site, index) => {
            const showBadge = index < 3 && site.badges.length > 0
            const cardStyle = getCardStyle(index)

            return (
              <div
                key={site.id}
                className={`relative overflow-visible transition-all ${cardStyle.bgColor} border-2 ${cardStyle.borderColor} shadow-md hover:shadow-xl`}
              >
                {/* Top Badge */}
                {showBadge && (
                  <div className="absolute -top-2.5 left-3 sm:left-4 md:left-6 lg:left-8 z-10">
                    <div
                      className={`${cardStyle.badge} px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 text-[9px] sm:text-[10px] md:text-xs font-bold font-display uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 md:gap-2 shadow-md`}
                    >
                      {cardStyle.icon}
                      <span className="leading-none">{site.badges[0]}</span>
                    </div>
                  </div>
                )}

                {/* Desktop Layout (1200px+) */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden xl:block cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <div className="grid grid-cols-[100px_280px_1fr_220px_200px] items-center gap-6 p-6 min-h-[160px]">
                    {/* Rank Number */}
                    <div className="flex items-center justify-center">
                      <span className={`font-display text-6xl ${cardStyle.rank} leading-none font-bold`}>
                        #{index + 1}
                      </span>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center justify-center p-4 bg-black border border-sk-border">
                      <div className="relative h-16 w-full">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                    </div>

                    {/* Bonus */}
                    <div className="flex flex-col justify-center px-2">
                      <p className="text-xs font-bold mb-2 uppercase tracking-wider text-sk-navy">Bonus Dobrodošlice</p>
                      <h3 className="font-display text-2xl text-sk-text mb-1 leading-tight">{site.bonus}</h3>
                      {site.dopBonus && <p className="text-sm text-sk-text-light">{site.dopBonus}</p>}
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="font-display text-5xl text-sk-text mb-2 font-bold leading-none">
                        {site.rating.toFixed(1)}
                      </div>
                      <div className="flex items-center justify-center gap-0.5 mb-2">{renderStars(site.rating)}</div>
                      <p className="text-xs text-sk-text-light">({formatNumber(site.reviews)} recenzija)</p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div
                        className={`w-full ${cardStyle.buttonPrimary} transition-all font-bold font-display py-3.5 px-4 text-center uppercase tracking-wider text-sm whitespace-nowrap shadow-md`}
                      >
                        Registriraj Se
                      </div>
                      <span className="text-sk-navy hover:text-sk-red transition-colors text-xs cursor-pointer font-medium">
                        Detaljnije →
                      </span>
                    </div>
                  </div>

                  {/* Terms Footer */}
                  <div className="border-t-2 border-sk-border px-6 py-3 bg-sk-grey-light">
                    <p className="text-sk-text-light text-xs leading-relaxed text-center">
                      18+ | Primjenjuju se uvjeti | Odgovorno klađenje | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                {/* Large Tablet Layout (768px - 1199px) */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block xl:hidden cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <div className="p-4 lg:p-5">
                    {/* Top Row: Rank + Logo */}
                    <div className="flex items-center gap-4 lg:gap-5 mb-4 pb-4 border-b-2 border-sk-border">
                      <span className={`font-display text-4xl lg:text-5xl ${cardStyle.rank} font-bold flex-shrink-0`}>
                        #{index + 1}
                      </span>
                      <div className="flex-1 bg-black p-3 lg:p-4 border border-sk-border">
                        <div className="relative h-12 lg:h-14 w-full">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-display text-3xl lg:text-4xl text-sk-text font-bold mb-1 leading-none">
                          {site.rating.toFixed(1)}
                        </span>
                        <div className="flex gap-0.5">{renderStars(site.rating)}</div>
                      </div>
                    </div>

                    {/* Bottom Row: Bonus + CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex-1 text-center sm:text-left">
                        <p className="text-sk-navy uppercase tracking-wider font-bold text-[10px] lg:text-xs mb-1.5">
                          Bonus Dobrodošlice
                        </p>
                        <h3 className="font-display text-xl lg:text-2xl text-sk-text leading-tight mb-1">
                          {site.bonus}
                        </h3>
                        {site.dopBonus && <p className="text-sk-text-light text-lx lg:text-2xl">{site.dopBonus}</p>}
                      </div>
                      <div className="flex-shrink-0 w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px]">
                        <div
                          className={`w-full ${cardStyle.buttonPrimary} transition-all font-bold font-display py-3 lg:py-3.5 px-4 lg:px-5 text-center uppercase tracking-wider text-xs lg:text-sm shadow-md`}
                        >
                          Registriraj Se
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-sk-grey-light px-4 lg:px-5 py-2.5 lg:py-3 border-t-2 border-sk-border">
                    <p className="text-sk-text-light text-[10px] lg:text-xs leading-relaxed text-center">
                      18+ | Primjenjuju se uvjeti | Odgovorno klađenje
                    </p>
                  </div>
                </Link>

                {/* Mobile Layout (< 768px) */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden block cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <div className="p-3 sm:p-4">
                    {/* First Row: Logo (42% width) + Bonus (rest) */}
                    <div className="flex items-start gap-2.5 sm:gap-3 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b-2 border-sk-border">
                      {/* Logo Column - 42% width */}
                      <div className="w-[42%] flex-shrink-0 flex flex-col items-center justify-center">
                        <div className="bg-black p-2.5 sm:p-3 border border-sk-border w-full">
                          <div className="relative h-10 sm:h-12 w-full">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Bonus Column - rest */}
                      <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <p className="text-sk-navy uppercase tracking-wider font-bold text-[10px] sm:text-xs mb-1.5">
                          Bonus Dobrodošlice
                        </p>
                        <h3 className="font-display text-xl sm:text-2xl text-sk-text leading-tight mb-1">
                          {site.bonus}
                        </h3>
                        {site.dopBonus && <p className="text-sk-text-light text-lx sm:text-2xl">{site.dopBonus}</p>}
                      </div>
                    </div>

                    {/* Second Row: Rating + Stars + Button (3 columns) */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {/* Rating Column */}
                      <div className="flex flex-col items-center justify-center">
                        <span className="font-display text-3xl sm:text-4xl text-sk-text font-bold leading-none mb-1">
                          {site.rating.toFixed(1)}
                        </span>
                        <span className={`font-display text-base sm:text-lg ${cardStyle.rank} font-bold leading-none`}>
                          #{index + 1}
                        </span>
                      </div>

                      {/* Stars Column */}
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex gap-0.5 mb-1">{renderStars(site.rating)}</div>
                        <p className="text-[9px] sm:text-[10px] text-sk-text-light">({formatNumber(site.reviews)})</p>
                      </div>

                      {/* Button Column */}
                      <div className="flex items-center justify-center">
                        <div
                          className={`w-full ${cardStyle.buttonPrimary} transition-all font-bold font-display py-2.5 sm:py-3 px-2 sm:px-3 text-center uppercase tracking-wider text-[10px] sm:text-xs shadow-md`}
                        >
                          Registriraj Se
                        </div>
                      </div>
                    </div>

                    {/* Third Row: Disclaimer (full width) */}
                    <div className="bg-sk-grey-light px-3 sm:px-4 py-2 sm:py-2.5 border border-sk-border text-center">
                      <p className="text-sk-text-light text-[9px] sm:text-[10px] leading-relaxed">
                        18+ | Primjenjuju se uvjeti | Odgovorno klađenje
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
