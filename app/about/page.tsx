import { SkMainHeader } from "@/components/sk-main-header"
import { SkMainFooter } from "@/components/sk-main-footer"
import { Info, Target, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <SkMainHeader />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sk-navy to-sk-navy-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sk-red rounded-lg flex items-center justify-center">
                <Info size={24} />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">O Nama</h1>
            </div>
            <p className="text-lg md:text-xl text-sk-grey-light max-w-3xl leading-relaxed">
              SportKlubHR.com je vaš pouzdani vodič kroz svijet online klađenja u Hrvatskoj. Pružamo stručne recenzije,
              analize i rangiranja najboljih betting operatora.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Mission */}
              <div className="bg-blue-50 border border-sk-navy/10 rounded-xl p-8">
                <div className="w-14 h-14 bg-sk-navy rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-white" size={28} />
                </div>
                <h2 className="text-2xl font-display font-bold text-sk-navy mb-4">Naša Misija</h2>
                <p className="text-sk-text-light leading-relaxed">
                  Naša misija je pružiti objektivne, temeljite i pravovremene informacije o betting operatorima u
                  Hrvatskoj. Pomažemo korisnicima da donesu informirane odluke kroz transparentne recenzije i stručne
                  analize.
                </p>
              </div>

              {/* Team */}
              <div className="bg-red-50 border border-sk-red/10 rounded-xl p-8">
                <div className="w-14 h-14 bg-sk-red rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h2 className="text-2xl font-display font-bold text-sk-navy mb-4">Naš Tim</h2>
                <p className="text-sk-text-light leading-relaxed">
                  Naš tim čine iskusni stručnjaci sa dugogodišnjim iskustvom u industriji online klađenja. Svaki član
                  tima je strastveni poznavatelj sporta i betting tržišta u Hrvatskoj.
                </p>
              </div>
            </div>

            {/* Methodology */}
            <div className="bg-amber-50 border border-sk-gold/20 rounded-xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-sk-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-sk-navy mb-3">
                    Metodologija Ocjenjivanja
                  </h2>
                  <p className="text-sk-text-light leading-relaxed mb-6">
                    Koristimo sveobuhvatan sustav ocjenjivanja koji uzima u obzir više faktora za objektivno rangiranje
                    betting operatora:
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Bonusi i Promocije", weight: "25%" },
                  { label: "Ponuda Tržišta", weight: "20%" },
                  { label: "Korisničko Iskustvo", weight: "20%" },
                  { label: "Sigurnost i Licenca", weight: "15%" },
                  { label: "Plaćanja i Isplate", weight: "10%" },
                  { label: "Korisnička Podrška", weight: "10%" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-sk-border rounded-lg p-4">
                    <div className="text-sk-gold font-bold text-lg mb-1">{item.weight}</div>
                    <div className="text-sm text-sk-navy font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="mt-12 bg-sk-navy text-white rounded-xl p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Kontaktirajte Nas</h2>
              <p className="text-sk-grey-light leading-relaxed mb-6 max-w-2xl mx-auto">
                Imate pitanja ili prijedloge? Slobodno nas kontaktirajte. Cijenimo povratne informacije naših korisnika
                i trudimo se kontinuirano poboljšavati naše usluge.
              </p>
              <a
                href="mailto:info@sportklubhr.com"
                className="inline-block bg-sk-red hover:bg-sk-red-dark text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                info@sportklubhr.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <SkMainFooter />
    </>
  )
}
