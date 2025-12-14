import { Shield, TrendingUp, Users, Award, Target, BookOpen } from "lucide-react"

export function SzhAboutUs() {
  return (
    <section className="py-16 md:py-20 bg-mag-surface">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-14">
          <span className="text-mag-green text-xs uppercase tracking-[0.3em] font-medium">O Nama</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 text-mag-black leading-tight mt-3">
            Sportska Analitika
            <br />
            <span className="text-mag-green">Koju Mozete Vjerovati</span>
          </h2>
          <p className="text-base md:text-lg text-mag-grey max-w-2xl mx-auto leading-relaxed">
            NajboljeSport HR je nezavisna redakcija posvecena objektivnoj evaluaciji platformi za sportsko kladenje.
            Primjenjujemo novinarsku metodologiju u analizi industrije.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="bg-mag-white p-5 text-center border-t-2 border-mag-green">
            <div className="text-3xl font-serif font-bold text-mag-black mb-1">35+</div>
            <div className="text-xs text-mag-grey font-medium uppercase tracking-wide">Analiziranih Platformi</div>
          </div>
          <div className="bg-mag-white p-5 text-center border-t-2 border-mag-terracotta">
            <div className="text-3xl font-serif font-bold text-mag-black mb-1">2025</div>
            <div className="text-xs text-mag-grey font-medium uppercase tracking-wide">Aktualne Recenzije</div>
          </div>
          <div className="bg-mag-white p-5 text-center border-t-2 border-mag-steel">
            <div className="text-3xl font-serif font-bold text-mag-black mb-1">100%</div>
            <div className="text-xs text-mag-grey font-medium uppercase tracking-wide">Urednicka Neovisnost</div>
          </div>
          <div className="bg-mag-white p-5 text-center border-t-2 border-mag-green">
            <div className="text-3xl font-serif font-bold text-mag-black mb-1">45</div>
            <div className="text-xs text-mag-grey font-medium uppercase tracking-wide">Dana Testiranja</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          <article className="bg-mag-white p-6 border-l-2 border-mag-green">
            <Shield className="w-6 h-6 text-mag-green mb-4" />
            <h3 className="font-serif text-lg font-bold text-mag-black mb-2">Verifikacija Licenci</h3>
            <p className="text-mag-grey text-sm leading-relaxed">
              Provjeravamo regulatorni status svakog operatera. Preporucujemo iskljucivo platforme s vazecim dozvolama
              za hrvatsko trziste i transparentnim poslovanjem.
            </p>
          </article>

          <article className="bg-mag-white p-6 border-l-2 border-mag-terracotta">
            <TrendingUp className="w-6 h-6 text-mag-terracotta mb-4" />
            <h3 className="font-serif text-lg font-bold text-mag-black mb-2">Metodicka Analiza</h3>
            <p className="text-mag-grey text-sm leading-relaxed">
              Koristimo strukturirani pristup evaluaciji s definiranim kriterijima. Svaka ocjena proizlazi iz
              visednevnog testiranja stvarnih funkcionalnosti.
            </p>
          </article>

          <article className="bg-mag-white p-6 border-l-2 border-mag-steel">
            <Users className="w-6 h-6 text-mag-steel mb-4" />
            <h3 className="font-serif text-lg font-bold text-mag-black mb-2">Korisnicka Perspektiva</h3>
            <p className="text-mag-grey text-sm leading-relaxed">
              Testiramo sve aspekte korisnickog iskustva - od registracije do isplate. Dokumentiramo stvarne situacije s
              kojima se susrecu korisnici.
            </p>
          </article>

          <article className="bg-mag-white p-6 border-l-2 border-mag-green">
            <Award className="w-6 h-6 text-mag-green mb-4" />
            <h3 className="font-serif text-lg font-bold text-mag-black mb-2">Urednicka Ekspertiza</h3>
            <p className="text-mag-grey text-sm leading-relaxed">
              Tim analticara s dugogodisnjim iskustvom u sportskoj industriji i detaljnim poznavanjem specificnosti
              hrvatskog trzista.
            </p>
          </article>

          <article className="bg-mag-white p-6 border-l-2 border-mag-terracotta">
            <Target className="w-6 h-6 text-mag-terracotta mb-4" />
            <h3 className="font-serif text-lg font-bold text-mag-black mb-2">Kontinuirano Pracenje</h3>
            <p className="text-mag-grey text-sm leading-relaxed">
              Redovito azuriramo recenzije prema promjenama na platformama. Trziste se mijenja, a nase informacije prate
              te promjene.
            </p>
          </article>

          <article className="bg-mag-white p-6 border-l-2 border-mag-steel">
            <BookOpen className="w-6 h-6 text-mag-steel mb-4" />
            <h3 className="font-serif text-lg font-bold text-mag-black mb-2">Edukativni Pristup</h3>
            <p className="text-mag-grey text-sm leading-relaxed">
              Promicemo informirano koristenje usluga kladenja. Transparentno objasnjvamo rizike i naglasavamo odgovoran
              pristup.
            </p>
          </article>
        </div>

        <div className="bg-mag-green p-8 md:p-10 text-mag-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Nasa Urednicka Politika</h3>
            <p className="text-base leading-relaxed mb-3 opacity-95">
              Objektivnost i transparentnost temelji su naseg rada. U industriji prepunoj promotivnog sadrzaja, mi
              donosimo provjerene cinjenice bez senzacionalizma.
            </p>
            <p className="text-sm leading-relaxed opacity-85">
              Ne prihvacamo placanja za povoljnije ocjene. Partnerski odnosi ne utjecu na urednicke odluke. Nedostaci
              platformi uvijek su jasno navedeni.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
