import type { Metadata } from "next"
import { Bolt, Brain, Target } from "lucide-react"
import { SectionHero } from "@/components/sections/SectionHero"
import { ProductGrid } from "@/components/sections/ProductGrid"
import { products } from "@/lib/data"

export const metadata: Metadata = {
  title: "Energy & Focus",
  description: "Practical tools, supplements, and routines for steady energy and deep focus.",
}

export default function EnergyPage() {
  const energyProducts = products.filter((product) => product.category === "energy" || product.category === "focus")

  return (
    <div>
      <SectionHero eyebrow="Energy & Focus" title="Build energy that lasts past lunch" description="This page is for people who want cleaner mornings, better output, and fewer spikes and crashes. The emphasis here is on steady performance, not hype." />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-4">
          {[
            { icon: Bolt, title: "Morning energy", text: "Light exposure, hydration, and creatine support are the highest-ROI changes." },
            { icon: Brain, title: "Cognitive clarity", text: "The best focus stacks feel clean: no jitters, no crash, no fake urgency." },
            { icon: Target, title: "Deep work", text: "Simple systems beat complicated hacks every time when the goal is consistent output." },
          ].map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
                <Icon className="w-5 h-5 text-[var(--accent-green)] mb-3" />
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">{card.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{card.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={energyProducts} />
        </div>
      </section>
    </div>
  )
}
