import type { Metadata } from "next"
import { Hourglass, Leaf, ShieldCheck } from "lucide-react"
import { SectionHero } from "@/components/sections/SectionHero"
import { ProductGrid } from "@/components/sections/ProductGrid"
import { products } from "@/lib/data"

export const metadata: Metadata = {
  title: "Healthy Aging",
  description: "Elegant longevity content focused on resilience, maintenance, and healthy aging.",
}

export default function AgingPage() {
  const agingProducts = products.filter((product) => product.category === "aging")

  return (
    <div>
      <SectionHero eyebrow="Healthy Aging" title="A longer life should still feel like a good life" description="Longevity only matters if the day-to-day experience is strong. This page focuses on the basics that keep people capable, sharp, and resilient for longer." />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-4">
          {[
            { icon: ShieldCheck, title: "Metabolic health", text: "The foundation of healthy aging is still sleep, movement, nutrition, and consistency." },
            { icon: Leaf, title: "Gentle supplementation", text: "Aging stacks should feel sustainable and boring in the best possible way." },
            { icon: Hourglass, title: "Long game mindset", text: "Longevity is a decades-long process, not a 30-day challenge." },
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
          <ProductGrid products={agingProducts} />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 grid md:grid-cols-2 gap-6 items-center">
          <img src="https://images.unsplash.com/photo-1559181567-c3190938eff6?w=900&h=700&fit=crop&auto=format&q=80" alt="Elegant mature person in a calm wellness setting" className="rounded-3xl h-72 w-full object-cover" />
          <div>
            <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Healthy aging principle</p>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-3">Small inputs, repeated consistently</h2>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">The best longevity systems are usually unglamorous: strength training, Zone 2, sleep quality, adequate protein, and a supplement stack that supports the basics instead of replacing them.</p>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">If a product promises dramatic reversal, treat it with caution. If it supports recovery, resilience, and daily function, it may be worth considering.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
