import { SkMainHeader } from "@/components/sk-main-header"
import { SkMainFooter } from "@/components/sk-main-footer"
import { Shield, Lock, Eye, FileText, AlertTriangle, Mail } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SkMainHeader />

      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        <article className="bg-white border border-sk-border rounded-lg p-6 md:p-10 shadow-sm">
          <header className="text-center mb-10 pb-6 border-b border-sk-border">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-sk-primary" />
              <h1 className="font-display text-3xl md:text-5xl font-bold text-sk-navy uppercase">
                Politika Privatnosti
              </h1>
            </div>
            <p className="text-sk-text-light text-sm">
              Ažurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="text-xs text-sk-accent mt-1 font-bold">SportKlubHR.com</p>
          </header>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-sk-accent" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">1. Uvodni Podaci</h2>
              </div>
              <p className="text-sk-text-light text-sm leading-relaxed mb-2">
                Ova politika privatnosti opisuje način na koji sportklubhr.com prikuplja, obrađuje i štiti osobne
                podatke korisnika. Pridržavamo se Opće uredbe o zaštiti podataka (GDPR) i relevantnog hrvatskog
                zakonodavstva.
              </p>
              <p className="text-sk-text-light text-sm leading-relaxed">
                Korištenjem stranice prihvaćate praksu opisanu u ovom dokumentu.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-sk-primary" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">2. Voditelj Obrade</h2>
              </div>
              <p className="text-sk-text-light text-sm leading-relaxed mb-2">
                Voditelj obrade osobnih podataka je sportklubhr.com.
              </p>
              <p className="text-sk-primary text-sm font-bold">Kontakt: privatnost@sportklubhr.com</p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-sk-accent" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">
                  3. Vrste Prikupljenih Podataka
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 p-5 border-l-4 border-sk-primary rounded-lg">
                  <h3 className="font-bold text-sk-navy mb-2 text-sm uppercase tracking-wider">
                    Dobrovoljno Dostavljeni Podaci
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sk-text-light text-sm ml-2">
                    <li>Kontakt podaci prilikom komunikacije</li>
                    <li>Sadržaj poruka i upita</li>
                    <li>Informacije koje korisnik odluči podijeliti</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-5 border-l-4 border-sk-accent rounded-lg">
                  <h3 className="font-bold text-sk-navy mb-2 text-sm uppercase tracking-wider">
                    Automatski Prikupljeni Podaci
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sk-text-light text-sm ml-2">
                    <li>IP adresa i opća lokacija</li>
                    <li>Tehničke karakteristike uređaja i preglednika</li>
                    <li>Podaci o posjećenim stranicama i vremenu pristupa</li>
                    <li>Izvorišna stranica (referrer)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-sk-primary" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">4. Svrha Obrade</h2>
              </div>
              <ul className="space-y-3 text-sk-text-light text-sm">
                {[
                  { label: "Pružanje usluga", desc: "Omogućavanje pristupa sadržaju i informacijama" },
                  { label: "Komunikacija", desc: "Odgovaranje na korisničke upite" },
                  { label: "Analitika", desc: "Poboljšanje sadržaja i funkcionalnosti" },
                  { label: "Sigurnost", desc: "Zaštita od zlouporabe" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-sk-grey/30 p-3 rounded-lg">
                    <span className="w-1.5 h-1.5 bg-sk-primary mt-2 flex-shrink-0 rounded-full"></span>
                    <span className="text-sk-navy">
                      <strong>{item.label}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-amber-50 p-6 border-l-4 border-sk-gold rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-sk-gold" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">5. Pravna Osnova</h2>
              </div>
              <p className="text-sk-text-light text-sm leading-relaxed mb-2">Obrada podataka temelji se na:</p>
              <ul className="list-disc list-inside space-y-1 text-sk-text-light text-sm ml-2">
                <li>Izričitom pristanku korisnika</li>
                <li>Legitimnom interesu za poboljšanje usluga</li>
                <li>Zakonskim obvezama kada je primjenjivo</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-sk-primary" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">6. Dijeljenje Podataka</h2>
              </div>
              <p className="text-sk-text-light text-sm leading-relaxed mb-2">
                Osobni podaci ne prodaju se trećim stranama. Dijeljenje je ograničeno na:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sk-text-light text-sm ml-2">
                <li>Pružatelje tehničkih usluga (hosting, analitika)</li>
                <li>Partnerne stranice pri kliku na vanjske linkove</li>
                <li>Nadležna tijela kada je zakonski obvezno</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-sk-primary" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">7. Sigurnosne Mjere</h2>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sk-text-light text-sm ml-2">
                <li>SSL/TLS enkripcija komunikacije</li>
                <li>Redovite sigurnosne provjere</li>
                <li>Ograničen pristup podacima</li>
                <li>Sigurnosne kopije podataka</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-sk-primary" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">8. Razdoblje Čuvanja</h2>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sk-text-light text-sm ml-2">
                <li>Kontakt podaci: do 2 godine od zadnje komunikacije</li>
                <li>Analitički podaci: do 26 mjeseci</li>
                <li>Podaci kolačića: prema postavkama preglednika</li>
              </ul>
            </section>

            <section className="bg-blue-50 p-6 border-l-4 border-sk-primary rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-sk-primary" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">9. Prava Korisnika</h2>
              </div>
              <p className="text-sk-text-light text-sm leading-relaxed mb-3">Prema GDPR-u imate pravo na:</p>
              <ul className="list-disc list-inside space-y-1.5 text-sk-text-light text-sm ml-2">
                <li>Pristup vašim podacima</li>
                <li>Ispravak netočnih podataka</li>
                <li>Brisanje podataka</li>
                <li>Ograničenje obrade</li>
                <li>Prenosivost podataka</li>
                <li>Prigovor na obradu</li>
              </ul>
              <p className="text-sk-primary text-sm mt-4 font-bold">
                Za ostvarivanje prava kontaktirajte: privatnost@sportklubhr.com
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-sk-primary" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">10. Vanjske Stranice</h2>
              </div>
              <p className="text-sk-text-light text-sm leading-relaxed">
                Stranica sadrži linkove na vanjske web stranice. Nismo odgovorni za njihove prakse privatnosti.
                Preporučujemo pregled politika privatnosti tih stranica.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-sk-accent" />
                <h2 className="font-display text-xl font-bold text-sk-navy uppercase">11. Dobna Granica</h2>
              </div>
              <p className="text-sk-text-light text-sm leading-relaxed">
                Sadržaj stranice namijenjen je isključivo punoljetnim osobama. Ne prikupljamo svjesno podatke od osoba
                mladih od 18 godina.
              </p>
            </section>

            <section className="bg-red-50 p-6 border-2 border-sk-accent rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-sk-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-display text-xl font-bold text-sk-accent mb-3 uppercase">
                    12. Kontakt i Pritužbe
                  </h2>
                  <div className="space-y-2 text-sm">
                    <p className="text-sk-navy">
                      <strong>Email:</strong> <span className="text-sk-primary">privatnost@sportklubhr.com</span>
                    </p>
                    <p className="text-sk-navy">
                      <strong>Web:</strong> <span className="text-sk-primary">sportklubhr.com</span>
                    </p>
                  </div>
                  <p className="text-sk-text-light text-sm mt-3">
                    Pritužbe možete podnijeti Agenciji za zaštitu osobnih podataka (AZOP), Selska cesta 136, 10000
                    Zagreb.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>

      <SkMainFooter />
    </div>
  )
}
