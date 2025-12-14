import { Shield, TrendingUp, Gift, Zap, CreditCard, MessageCircle } from "lucide-react"

export function SzhReviewMethodology() {
  const criteria = [
    { icon: Shield, label: "Licenca i sigurnost", weight: "25%" },
    { icon: TrendingUp, label: "Kvote i ponuda", weight: "20%" },
    { icon: Gift, label: "Bonusni programi", weight: "15%" },
    { icon: Zap, label: "Korisnicko iskustvo", weight: "20%" },
    { icon: CreditCard, label: "Metode placanja", weight: "10%" },
    { icon: MessageCircle, label: "Podrska korisnicima", weight: "10%" },
  ]

  const ratings = [
    { range: "9.0 - 10.0", label: "Izvrsno", desc: "Vrhunske platforme" },
    { range: "7.5 - 8.9", label: "Vrlo dobro", desc: "Visoka kvaliteta usluge" },
    { range: "6.0 - 7.4", label: "Dobro", desc: "Solidni operateri" },
    { range: "4.0 - 5.9", label: "Zadovoljavajuce", desc: "Osnovne funkcije" },
    { range: "0.0 - 3.9", label: "Ispod standarda", desc: "Ne preporucujemo" },
  ]

  return (
    <section className="py-12 md:py-16 bg-mag-surface">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <div className="mb-10">
          <span className="text-mag-green text-xs uppercase tracking-[0.3em] font-medium">Metodologija</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-mag-black mt-2 mb-3">Kriteriji Ocjenjivanja</h2>
          <p className="text-mag-grey text-sm">
            Svaka platforma prolazi detaljno testiranje prema sest kljucnih kategorija
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {criteria.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="bg-mag-white p-4 border-t-2 border-mag-green">
                <Icon className="w-5 h-5 text-mag-green mb-2" />
                <h3 className="font-medium text-xs text-mag-black mb-1 leading-tight">{item.label}</h3>
                <p className="text-lg font-serif font-bold text-mag-black">{item.weight}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-mag-white border border-mag-border p-5 md:p-6">
          <h3 className="font-serif text-xl font-bold text-mag-black mb-5">Skala Ocjena</h3>

          <div className="space-y-2 mb-5">
            {ratings.map((rating, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-3 ${
                  index === 0
                    ? "bg-mag-green text-mag-white"
                    : index === 1
                      ? "bg-mag-green-light text-mag-white"
                      : index === 2
                        ? "bg-mag-steel text-mag-white"
                        : index === 3
                          ? "bg-mag-grey text-mag-white"
                          : "bg-mag-charcoal text-mag-white"
                }`}
              >
                <div className="text-lg font-mono font-bold min-w-[90px]">{rating.range}</div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{rating.label}</div>
                  <p className="text-xs opacity-85">{rating.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-mag-grey text-center pt-4 border-t border-mag-border">
            Nezavisne ocjene temeljene na 45-dnevnom testiranju. Azuriranje kvartalno.
          </p>
        </div>
      </div>
    </section>
  )
}
