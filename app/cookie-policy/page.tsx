import { SkMainHeader } from "@/components/sk-main-header"
import { SkMainFooter } from "@/components/sk-main-footer"
import { Cookie, Settings, Shield, Info } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SkMainHeader />

      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        <article className="bg-white border border-sk-border rounded-lg p-6 md:p-10 shadow-sm">
          <header className="text-center mb-10 pb-6 border-b border-sk-border">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cookie className="w-8 h-8 text-sk-accent" />
              <h1 className="font-display text-3xl md:text-5xl font-bold text-sk-navy uppercase">Politika Kolačića</h1>
            </div>
            <p className="text-sk-text-light text-sm">
              Ažurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="text-xs text-sk-accent mt-1 font-bold">SportKlubHR.com</p>
          </header>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-5 h-5 text-sk-primary" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">Definicija Kolačića</h2>
              </div>
              <p className="text-sk-text-light text-sm leading-relaxed">
                Kolačići su male tekstualne datoteke koje web preglednici pohranjuju na korisničkom uređaju. Omogućavaju
                stranicama prepoznavanje korisnika i pamćenje postavki između posjeta, čime se poboljšava funkcionalnost
                i korisničko iskustvo.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-sk-accent" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">Primjena na Našoj Stranici</h2>
              </div>
              <p className="text-sk-text-light text-sm leading-relaxed mb-3">
                sportklubhr.com koristi kolačiće u sljedeće svrhe:
              </p>
              <ul className="space-y-2 text-sk-text-light text-sm">
                {[
                  "Osiguravanje temeljnih funkcionalnosti navigacije",
                  "Pohrana korisničkih preferencija i postavki",
                  "Prikupljanje anonimiziranih statističkih podataka",
                  "Analiza obrazaca korištenja za unapređenje sadržaja",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-sk-grey/30 p-3 rounded-lg">
                    <span className="w-1.5 h-1.5 bg-sk-accent mt-2 flex-shrink-0 rounded-full"></span>
                    <span className="text-sk-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-sk-navy mb-4 uppercase">Kategorije Kolačića</h2>

              <div className="space-y-4">
                <div className="border-l-4 border-sk-primary pl-5 py-3 bg-blue-50 rounded-r-lg">
                  <h3 className="font-bold text-sk-navy mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-sk-primary" />
                    Neophodni Kolačići
                  </h3>
                  <p className="text-sk-text-light text-sm leading-relaxed">
                    Esencijalni za funkcioniranje stranice. Omogućavaju osnovne radnje poput navigacije i pristupa
                    zaštićenim područjima. Bez ovih kolačića stranica ne može ispravno funkcionirati.
                  </p>
                </div>

                <div className="border-l-4 border-sk-accent pl-5 py-3 bg-red-50 rounded-r-lg">
                  <h3 className="font-bold text-sk-navy mb-2 flex items-center gap-2">
                    <Settings className="w-4 h-4 text-sk-accent" />
                    Analitički Kolačići
                  </h3>
                  <p className="text-sk-text-light text-sm leading-relaxed">
                    Služe za mjerenje posjeta i izvora prometa. Prikupljeni podaci su agregirani i anonimizirani, te se
                    koriste isključivo za poboljšanje performansi stranice.
                  </p>
                </div>

                <div className="border-l-4 border-sk-gold pl-5 py-3 bg-amber-50 rounded-r-lg">
                  <h3 className="font-bold text-sk-navy mb-2 flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-sk-gold" />
                    Funkcionalni Kolačići
                  </h3>
                  <p className="text-sk-text-light text-sm leading-relaxed">
                    Omogućavaju napredne funkcionalnosti i personalizaciju. Mogu biti postavljeni od nas ili vanjskih
                    pružatelja usluga integriranih na stranici.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-sk-primary" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">Upravljanje Postavkama</h2>
              </div>
              <p className="text-sk-text-light text-sm leading-relaxed mb-2">
                Preglednici standardno prihvaćaju kolačiće, no korisnici mogu prilagoditi postavke privatnosti prema
                vlastitim preferencijama. Onemogućavanje kolačića može ograničiti funkcionalnost nekih dijelova
                stranice.
              </p>
              <p className="text-sk-text-light text-sm leading-relaxed">
                Upute za upravljanje kolačićima dostupne su u dokumentaciji vašeg web preglednika.
              </p>
            </section>

            <section className="bg-sk-grey/20 p-6 border-l-4 border-sk-primary rounded-lg">
              <h2 className="font-display text-xl font-bold text-sk-navy mb-3 uppercase">Kontakt</h2>
              <p className="text-sk-text-light text-sm leading-relaxed mb-2">Za upite vezane uz politiku kolačića:</p>
              <p className="text-sk-primary text-sm font-bold">info@sportklubhr.com</p>
            </section>
          </div>
        </article>
      </div>

      <SkMainFooter />
    </div>
  )
}
