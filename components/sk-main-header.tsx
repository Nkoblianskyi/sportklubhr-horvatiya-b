"use client"
import { SkLogo } from "./sk-logo"

export function SkMainHeader() {
  return (
    <header className="bg-sk-white border-b-2 border-sk-navy fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-1"></div>

          <SkLogo size="md" />

          <div className="flex-1 flex justify-end">
            <div className="px-3 py-1 bg-sk-red text-sk-white text-xs font-bold font-display border-2 border-sk-red-dark">
              18+
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
