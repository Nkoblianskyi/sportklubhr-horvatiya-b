import { Shield, Lock, AlertCircle, Heart } from "lucide-react"

export function SzhResponsibleGaming() {
  return (
    <section className="py-16 md:py-20 bg-mag-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="mb-14">
          <span className="text-mag-green text-xs uppercase tracking-[0.3em] font-medium">Odgovorno Kladenje</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 text-mag-black leading-tight mt-3">
            Informirani Pristup Kladenju
          </h2>
          <div className="w-16 h-0.5 bg-mag-green mb-6"></div>
          <div className="max-w-3xl">
            <p className="text-base text-mag-black leading-relaxed mb-4">
              Sportsko kladenje moze biti oblik zabave ako se prakticira s razumijevanjem i kontrolom. Odgovorno
              kladenje podrazumijeva postavljanje jasnih granica i prepoznavanje vlastitih obrazaca ponasanja.
            </p>
            <p className="text-sm text-mag-grey leading-relaxed">
              Svi licencirani operateri u Hrvatskoj duzni su pruzati alate za kontrolu kladenja i podrsku korisnicima.
              Informirajte se o dostupnim opcijama prije koristenja usluga.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <article className="bg-mag-surface p-6 border-l-2 border-mag-green">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-mag-green flex-shrink-0 mt-0.5" />
              <h3 className="font-serif text-xl font-bold text-mag-black">Kontrola Financija</h3>
            </div>
            <p className="text-sm text-mag-grey leading-relaxed mb-4">
              Definiranje financijskih granica prije pocetka kladenja temelj je odgovornog pristupa. Pridrzavanje
              postavljenih limita stiti od nezeljenih posljedica.
            </p>
            <ul className="space-y-1.5 text-sm text-mag-grey">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-green mt-2 flex-shrink-0"></span>
                Limiti depozita ogranicavaju uplatu sredstava
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-green mt-2 flex-shrink-0"></span>
                Limiti gubitka stite od velikih financijskih steta
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-green mt-2 flex-shrink-0"></span>
                Limiti sesija kontroliraju vrijeme provedeno na platformi
              </li>
            </ul>
          </article>

          <article className="bg-mag-surface p-6 border-l-2 border-mag-terracotta">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-5 h-5 text-mag-terracotta flex-shrink-0 mt-0.5" />
              <h3 className="font-serif text-xl font-bold text-mag-black">Prepoznavanje Rizika</h3>
            </div>
            <p className="text-sm text-mag-grey leading-relaxed mb-4">
              Problematicno kladenje razvija se postupno. Vazno je prepoznati rane pokazatelje i pravovremeno reagirati
              na promjene u vlastitom ponasanju.
            </p>
            <ul className="space-y-1.5 text-sm text-mag-grey">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-terracotta mt-2 flex-shrink-0"></span>
                Koristenje sredstava namijenjenih drugim potrebama
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-terracotta mt-2 flex-shrink-0"></span>
                Pokusaji nadoknade gubitaka povecanjem uloga
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-terracotta mt-2 flex-shrink-0"></span>
                Zanemarivanje obveza zbog aktivnosti kladenja
              </li>
            </ul>
          </article>

          <article className="bg-mag-surface p-6 border-l-2 border-mag-steel">
            <div className="flex items-start gap-3 mb-3">
              <Lock className="w-5 h-5 text-mag-steel flex-shrink-0 mt-0.5" />
              <h3 className="font-serif text-xl font-bold text-mag-black">Opcije Samoisljucenja</h3>
            </div>
            <p className="text-sm text-mag-grey leading-relaxed mb-4">
              Svi operateri nude mogucnost privremenog ili trajnog iskljucenja s platforme. Ova opcija dostupna je u
              postavkama korisnickog racuna.
            </p>
            <ul className="space-y-1.5 text-sm text-mag-grey">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-steel mt-2 flex-shrink-0"></span>
                Privremeno iskljucenje od 24 sata do 6 mjeseci
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-steel mt-2 flex-shrink-0"></span>
                Trajno iskljucenje bez mogucnosti reaktivacije
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-steel mt-2 flex-shrink-0"></span>
                Nacionalni registar za zastitu na svim platformama
              </li>
            </ul>
          </article>

          <article className="bg-mag-surface p-6 border-l-2 border-mag-green">
            <div className="flex items-start gap-3 mb-3">
              <Heart className="w-5 h-5 text-mag-green flex-shrink-0 mt-0.5" />
              <h3 className="font-serif text-xl font-bold text-mag-black">Strucna Podrska</h3>
            </div>
            <p className="text-sm text-mag-grey leading-relaxed mb-4">
              Profesionalne organizacije pruzaju besplatnu i povjerljivu pomoc osobama koje se suocavaju s
              problematicnim kladenjem ili njihovim obiteljima.
            </p>
            <ul className="space-y-1.5 text-sm text-mag-grey">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-green mt-2 flex-shrink-0"></span>
                Nacionalna linija za besplatno savjetovanje
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-green mt-2 flex-shrink-0"></span>
                Grupe podrske za dijeljenje iskustava
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-mag-green mt-2 flex-shrink-0"></span>
                Profesionalna terapija s licenciranim strucnjacima
              </li>
            </ul>
          </article>
        </div>

        <div className="bg-mag-charcoal text-mag-white p-6 md:p-8">
          <h3 className="font-serif text-xl font-bold mb-4">Vazne Napomene</h3>
          <div className="space-y-3 text-sm leading-relaxed opacity-90">
            <p>
              <strong className="text-mag-white">Dobna granica:</strong> Usluge kladenja dostupne su iskljucivo
              punoljetnim osobama. Operateri provode verifikaciju dobi prilikom registracije.
            </p>
            <p>
              <strong className="text-mag-white">Financijski rizik:</strong> Kladenje ukljucuje rizik gubitka ulozenih
              sredstava. Nema garancije pozitivnog ishoda bilo kojeg uloga.
            </p>
            <p>
              <strong className="text-mag-white">Sigurnost podataka:</strong> Licencirani operateri koriste standardne
              sigurnosne protokole za zastitu korisnickih podataka.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
