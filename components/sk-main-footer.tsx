import Link from "next/link"
import Image from "next/image"
import { SkLogo } from "./sk-logo"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function SkMainFooter() {
  return (
    <footer className="bg-sk-navy border-t border-sk-border relative z-10">
      <div className="container mx-auto px-4 max-w-[1400px] py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <SkLogo size="md" variant="light" />
            </div>
            <p className="text-sk-grey-light leading-relaxed text-sm mb-6">
              Vaš pouzdani izvor za stručne recenzije i analize najboljih betting operatora u Hrvatskoj.
            </p>

          </div>

          <div className="md:col-span-2">
            <h3 className="text-sk-white font-display text-sm mb-4 uppercase tracking-wider">Navigacija</h3>
            <ul className="flex flex-wrap gap-6">
              <li>
                <Link
                  href="/about"
                  className="text-sk-grey-light hover:text-sk-red transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-sk-red rounded-full"></span>O Nama
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sk-grey-light hover:text-sk-gold transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-sk-gold rounded-full"></span>
                  Politika Kolačića
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sk-grey-light hover:text-sk-gold transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-sk-gold rounded-full"></span>
                  Politika Privatnosti
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Gaming Section */}
        <div className="border-t border-sk-border pt-8 mb-8">
          <div className="bg-sk-surface border border-sk-border rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-12 h-12 bg-sk-red flex items-center justify-center rounded-lg">
                  <span className="text-white text-lg font-bold font-display">18+</span>
                </div>
                <div>
                  <h4 className="text-sk-white font-bold text-base">Odgovorno Klađenje</h4>
                  <p className="text-xs text-sk-grey-light">Samo za punoljetne osobe</p>
                </div>
              </div>
              <p className="text-sm text-sk-grey-light leading-relaxed">
                Klađenje može uzrokovati ovisnost. Ako trebate pomoć, posjetite{" "}
                <Link
                  href="https://www.hupis.hr/klok"
                  className="text-sk-red hover:text-sk-red-light font-medium underline"
                >
                  HUPIS
                </Link>{" "}
                ili nazovite besplatnu liniju za pomoć.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6">
              <Link
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded-lg bg-white">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain px-1.5" />
                </div>
              </Link>
              <Link
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded-lg bg-white">
                  <Image src="/gamecare.svg" alt="GamCare" fill className="object-contain px-1.5" />
                </div>
              </Link>
              <Link
                href="https://www.gamstop.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded-lg bg-white">
                  <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain px-1.5" />
                </div>
              </Link>
              <Link
                href="https://www.hupis.hr/klok"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded-lg bg-white">
                  <Image src="/hupis.png" alt="Hupis" fill className="object-contain px-1.5" />
                </div>
              </Link>
              <Link
                href="https://www.pbsvi.hr/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded-lg bg-white">
                  <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain px-1.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sk-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-sk-grey-light text-center md:text-left">
              © {new Date().getFullYear()} SportKlubHR.com. Sva prava pridržana.
            </p>
            <p className="text-xs text-sk-grey-light text-center md:text-right">
              Nezavisne recenzije betting operatora u Hrvatskoj
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
