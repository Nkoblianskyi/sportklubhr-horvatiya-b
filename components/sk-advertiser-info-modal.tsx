"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Info, Shield, CheckCircle, AlertTriangle } from "lucide-react"

interface SkAdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SkAdvertiserInfoModal({ isOpen, onClose }: SkAdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-[600px] bg-sk-surface border-2 border-sk-cyan rounded-xl">
        {/* Header */}
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-sk-cyan rounded-lg flex items-center justify-center">
              <Info className="w-5 h-5 text-sk-dark" />
            </div>
            <DialogTitle className="font-display text-2xl text-sk-white uppercase">O Portalu</DialogTitle>
          </div>
          <div className="h-1 bg-gradient-cyan-pink rounded-full"></div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Mission Section */}
          <div className="bg-sk-darker border border-sk-border rounded-lg p-5">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-sk-green mt-0.5" />
              <div>
                <h3 className="font-display text-lg text-sk-white uppercase mb-2">Naša Misija</h3>
                <p className="text-sm text-sk-grey-light leading-relaxed">
                  SportKlubHR.com je nezavisna platforma za recenzije i usporedbe betting operatora u Hrvatskoj. Naš
                  cilj je pružiti transparentne, objektivne i detaljne informacije kako biste donijeli informirane
                  odluke.
                </p>
              </div>
            </div>
          </div>

          {/* How We Work */}
          <div className="space-y-3">
            <h3 className="font-display text-lg text-sk-white uppercase flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-sk-cyan" />
              Kako Radimo
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-sk-darker border border-sk-border rounded-lg p-4">
                <div className="w-6 h-6 bg-sk-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sk-dark text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-sk-white font-bold text-sm mb-1">Nezavisno Testiranje</h4>
                  <p className="text-sk-grey text-xs leading-relaxed">
                    Svaki operator prolazi kroz temeljitu analizu i testiranje prema našim stručnim kriterijima.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-sk-darker border border-sk-border rounded-lg p-4">
                <div className="w-6 h-6 bg-sk-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sk-dark text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-sk-white font-bold text-sm mb-1">Objektivno Ocjenjivanje</h4>
                  <p className="text-sk-grey text-xs leading-relaxed">
                    Naše ocjene temelje se na transparentnoj metodologiji i realnim iskustvima korisnika.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-sk-darker border border-sk-border rounded-lg p-4">
                <div className="w-6 h-6 bg-sk-pink rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sk-dark text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-sk-white font-bold text-sm mb-1">Redovito Ažuriranje</h4>
                  <p className="text-sk-grey text-xs leading-relaxed">
                    Informacije i recenzije redovito ažuriramo kako bismo osigurali najnovije podatke.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-sk-orange/10 border border-sk-orange rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-sk-orange flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sk-orange font-bold text-sm mb-2">Važna Napomena</h4>
                <p className="text-sk-grey-light text-xs leading-relaxed">
                  Sportklubhr.com može primati naknadu od nekih operatora koji su prikazani na stranici. To ne utječe na
                  naše ocjene ili preporuke. Uvijek klađenje shvaćajte kao zabavu i igrajte odgovorno. 18+
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
