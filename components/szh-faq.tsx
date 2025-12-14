"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

export function SzhFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FaqItem[] = [
    {
      question: "Na temelju kojih kriterija ocjenjujete platforme?",
      answer:
        "Koristimo strukturiranu metodologiju koja obuhvaca sest kljucnih podrucja: regulatorni status i sigurnost, sirina ponude i konkurentnost kvota, kvaliteta bonusnih programa, korisnicko iskustvo i dizajn platforme, dostupnost metoda placanja te kvaliteta korisnicke podrske. Svaka kategorija ima definiranu tezinu u ukupnoj ocjeni.",
    },
    {
      question: "Je li sportsko kladenje legalno u Hrvatskoj?",
      answer:
        "Sportsko kladenje je zakonita aktivnost u Hrvatskoj za punoljetne osobe. Operateri moraju posjedovati vazece dozvole izdane od strane nadleznog regulatornog tijela. Na nasoj stranici prikazujemo iskljucivo licencirane platforme koje posluju u skladu s hrvatskim zakonodavstvom.",
    },
    {
      question: "Kako funkcioniraju bonusi za nove korisnike?",
      answer:
        "Bonusi dobrodoslice su promocijske ponude namijenjene privlacenju novih korisnika. Tipicno ukljucuju dodatna sredstva za kladenje ili besplatne uloge. Za aktivaciju je potrebna registracija i prvi depozit. Svaki bonus ima specificne uvjete koristenja ukljucujuci zahtjeve za proigravanje, minimalne kvote i rok vazenja.",
    },
    {
      question: "Koliko traje proces isplate sredstava?",
      answer:
        "Trajanje isplate ovisi o odabranoj metodi i internim procedurama operatera. E-novcanici poput Skrilla ili Netellera obicno omogucuju najbrze transakcije, cesto unutar 24 sata. Bankovni prijenosi mogu trajati do 5 radnih dana. Prve isplate mogu zahtijevati dodatno vrijeme zbog verifikacije identiteta.",
    },
    {
      question: "Koji su porezni propisi za dobitke od kladenja?",
      answer:
        "U Hrvatskoj dobitci od sportskog kladenja podlijezu porezu na dohodak. Operateri automatski obracunavaju i uplacuju porez prilikom isplate dobitaka. Stopa poreza varira ovisno o visini dobitka. Za detaljne informacije o poreznim obvezama preporucujemo konzultaciju s poreznim savjetnikom.",
    },
    {
      question: "Sto je kladenje uzivo i kako funkcionira?",
      answer:
        "Kladenje uzivo omogucuje postavljanje uloga tijekom trajanja sportskog dogadaja. Kvote se dinamicki prilagodavaju prema tijeku utakmice. Ova vrsta kladenja zahtijeva brzo donosenje odluka i poznavanje sporta. Mnogi operateri nude prijenos dogadaja uzivo kao popratni sadrzaj.",
    },
    {
      question: "Zasto je potrebna verifikacija identiteta?",
      answer:
        "Verifikacija identiteta je zakonska obveza operatera u svrhu sprecavanja pranja novca i zastite maloljetnika. Proces ukljucuje dostavu dokumenata koji potvrduju identitet i adresu. Verifikacija se obicno provodi prije prve isplate i traje 24-72 sata ovisno o operateru.",
    },
    {
      question: "Mogu li koristiti platforme na mobilnom uredaju?",
      answer:
        "Sve moderne platforme nude mobilni pristup kroz prilagodene web stranice ili namjenske aplikacije za iOS i Android sustave. Mobilne verzije pruzaju potpunu funkcionalnost ukljucujuci kladenje uzivo, upravljanje racunom i komunikaciju s korisnickom podrškom.",
    },
    {
      question: "Sto predstavlja opcija prijevremene isplate?",
      answer:
        "Prijevremena isplata (cash out) omogucuje zatvaranje aktivnog uloga prije zavrsetka dogadaja. Ponudeni iznos ovisi o trenutnom stanju i originalnim kvotama. Ova funkcija pruza vecu kontrolu nad ulozima, no ponudeni iznos je obicno nizi od potencijalnog punog dobitka.",
    },
    {
      question: "Kako postaviti ogranicenja za kladenje?",
      answer:
        "Licencirani operateri nude alate za postavljanje razlicitih ogranicenja: limiti depozita, gubitaka, vremena koristenja i pojedinacnih uloga. Postavke su dostupne u korisnickom profilu. Smanjenje limita stupa na snagu odmah, dok povecanje obicno ima razdoblje cekanja od 24-72 sata.",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-mag-white">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <div className="mb-12">
          <span className="text-mag-green text-xs uppercase tracking-[0.3em] font-medium">Cesta Pitanja</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 text-mag-black leading-tight mt-3">
            Pitanja i Odgovori
          </h2>
          <div className="w-16 h-0.5 bg-mag-green mb-5"></div>
          <p className="text-base text-mag-grey leading-relaxed">
            Odgovori na najcesca pitanja o sportskom kladenju i nasoj metodologiji ocjenjivanja.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <article
              key={index}
              className="border border-mag-border bg-mag-white hover:border-mag-green transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <h3 className="font-medium text-mag-black pr-4 text-sm md:text-base">{item.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-mag-green flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 pt-2 border-t border-mag-border">
                  <p className="text-sm text-mag-grey leading-relaxed">{item.answer}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 bg-mag-surface border-l-2 border-mag-green p-6">
          <h3 className="font-serif text-lg font-bold text-mag-black mb-3">Imate dodatna pitanja?</h3>
          <p className="text-sm text-mag-grey leading-relaxed mb-3">
            Ako niste pronasli odgovor na svoje pitanje, kontaktirajte nas putem emaila. Nas tim odgovorit ce u
            najkracem mogucem roku.
          </p>
          <p className="text-sm text-mag-black font-medium">info@najboljesporthr.com</p>
        </div>
      </div>
    </section>
  )
}
