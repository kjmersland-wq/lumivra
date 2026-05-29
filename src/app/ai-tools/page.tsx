import type { Metadata } from "next"
import { SectionHero } from "@/components/sections/SectionHero"
import { AiRecommendationDemo } from "@/components/sections/AiRecommendationDemo"

export const metadata: Metadata = {
  title: "AI Wellness Tools",
  description: "A frontend-only AI wellness recommendation demo for sleep, energy, focus, and recovery.",
}

export default function AiToolsPage() {
  return (
    <div>
      <SectionHero eyebrow="AI Wellness Tools" title="Fast, simple wellness guidance with mock AI logic" description="This is intentionally frontend-only. It lets people type a goal and get category-based wellness suggestions without any real API integration yet." />
      <AiRecommendationDemo />
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {[
            "Sleep suggestions map to calm evenings, better bedroom habits, and magnesium-based support.",
            "Energy suggestions focus on steady performance and cleaner caffeine timing.",
            "Focus suggestions prioritize deep work, clean nootropics, and distraction control.",
            "Recovery suggestions blend stress support, sleep quality, and post-training habits.",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
