"use client"

import { bettingSitesHR } from "@/types/szh-betting-types"
import { SkHeroBanner } from "@/components/sk-hero-banner"
import { SkBettingRatings } from "@/components/sk-betting-ratings"
import { SzhReviewMethodology } from "@/components/szh-review-methodology"
import { SkOffersDialog } from "@/components/sk-offers-dialog"
import { SzhEditorPicks } from "@/components/szh-editor-picks"
import { SzhAboutUs } from "@/components/szh-about-us"
import { SzhResponsibleGaming } from "@/components/szh-responsible-gaming"
import { SzhFaq } from "@/components/szh-faq"
import { SkMainHeader } from "@/components/sk-main-header"
import { SkMainFooter } from "@/components/sk-main-footer"

export default function SportKlubHRPage() {
  return (
    <div className="min-h-screen bg-sk-dark">
      <SkMainHeader />
      <main className="max-w-[1400px] mx-auto pt-16 md:pt-20">
        <SkHeroBanner />
        <SkBettingRatings sites={bettingSitesHR} />
        <SzhAboutUs />
        <SzhResponsibleGaming />
        <SzhReviewMethodology />
        <SzhEditorPicks sites={bettingSitesHR} />
        <SzhFaq />
      </main>
      <SkMainFooter />
      <SkOffersDialog sites={bettingSitesHR} />
    </div>
  )
}
