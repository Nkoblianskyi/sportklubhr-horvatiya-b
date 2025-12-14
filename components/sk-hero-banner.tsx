"use client"
import { Trophy, Shield, TrendingUp, Zap, Calendar } from "lucide-react"

export function SkHeroBanner() {
  const getCurrentDate = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.toLocaleDateString("hr-HR", { month: "long" })
    const year = date.getFullYear()
    return `${day}. ${month} ${year}.`
  }

  return (
    <section className="relative pt-6 pb-3 md:pt-16 md:pb-12 overflow-hidden min-h-[250px] md:min-h-[500px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Sports stadium background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/football-stadium-crowd-atmosphere-dramatic-lightin.jpg')",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-sk-navy/95 via-sk-navy/90 to-sk-navy-dark/95" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 80px)",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-1.5 md:mb-6 inline-block">
            <div className="px-2 py-0.5 md:px-6 md:py-2 bg-sk-red text-sk-white font-display md:text-xs uppercase tracking-widest border-2 border-sk-red-dark shadow-lg text-sm">
              Najbolji Betting Operatori
            </div>
          </div>

          {/* Main Heading - компактніше на мобільних */}
          <h1 className="font-display leading-tight sm:text-xl md:text-5xl lg:text-6xl font-bold text-sk-white mb-1.5 md:mb-4 text-2xl">
            STRUČNE RECENZIJE
            <br />
            <span className="text-sk-red">NAJBOLJIH</span>
            <br />
            KLADIONICA
          </h1>

          {/* Description only on large screens */}
          <p className="hidden md:block text-sk-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-4 md:mb-6 font-serif px-4">
            Nezavisne recenzije, detaljne analize i ekskluzivni bonusi za najbolje betting operatore u Hrvatskoj.
            Sigurno, pouzdano i odgovorno klađenje.
          </p>

          {/* Trust indicators on mobile */}
          <div className="flex md:hidden justify-center items-center gap-3 px-2 mt-2">
            <div className="flex flex-col items-center">
              <Trophy className="w-4 h-4 text-sk-gold mb-0.5" />
              <p className="text-sk-white text-[8px] font-bold font-display uppercase">Top Operatori</p>
            </div>

            <div className="flex flex-col items-center">
              <Shield className="w-4 h-4 text-sk-gold mb-0.5" />
              <p className="text-sk-white text-[8px] font-bold font-display uppercase">100% Sigurno</p>
            </div>

            <div className="flex flex-col items-center">
              <TrendingUp className="w-4 h-4 text-sk-gold mb-0.5" />
              <p className="text-sk-white text-[8px] font-bold font-display uppercase">Najbolje Kvote</p>
            </div>

            <div className="flex flex-col items-center">
              <Zap className="w-4 h-4 text-sk-gold mb-0.5" />
              <p className="text-sk-white text-[8px] font-bold font-display uppercase">Brze Isplate</p>
            </div>
          </div>

          {/* Trust indicators on desktop */}
          <div className="hidden md:grid grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
            <div className="p-3">
              <Trophy className="w-7 h-7 text-sk-gold mx-auto mb-2" />
              <p className="text-sk-white text-sm font-bold mb-1 font-display">TOP OPERATORI</p>
              <p className="text-sk-white/80 text-xs">Verificirani i licencirani</p>
            </div>

            <div className="p-3">
              <Shield className="w-7 h-7 text-sk-gold mx-auto mb-2" />
              <p className="text-sk-white text-sm font-bold mb-1 font-display">100% SIGURNO</p>
              <p className="text-sk-white/80 text-xs">Zaštita podataka</p>
            </div>

            <div className="p-3">
              <TrendingUp className="w-7 h-7 text-sk-gold mx-auto mb-2" />
              <p className="text-sk-white text-sm font-bold mb-1 font-display">NAJBOLJE KVOTE</p>
              <p className="text-sk-white/80 text-xs">Usporedba u stvarnom vremenu</p>
            </div>

            <div className="p-3">
              <Zap className="w-7 h-7 text-sk-gold mx-auto mb-2" />
              <p className="text-sk-white text-sm font-bold mb-1 font-display">BRZE ISPLATE</p>
              <p className="text-sk-white/80 text-xs">Provjereni operatori</p>
            </div>
          </div>

          <div className="mt-3 md:mt-6 flex items-center justify-center gap-2 text-sk-white/70 text-xs md:text-sm">
            <Calendar className="w-4 h-4" />
            <span>Posljednje ažuriranje: {getCurrentDate()}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
