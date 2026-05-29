import type { Metadata } from "next"
import { MoonStar, BedDouble, Sparkles } from "lucide-react"
import { SectionHero } from "@/components/sections/SectionHero"
import { ProductGrid } from "@/components/sections/ProductGrid"
import { products, routines } from "@/lib/data"

export const metadata: Metadata = {
  title: "Better Sleep",
  description: "Premium, science-backed guidance for deeper sleep, calmer evenings, and better recovery.",
}

export default function SleepPage() {
  const sleepProducts = products.filter((product) => product.category === "sleep" || product.category === "recovery")

  return (
    <div>
      <SectionHero
        eyebrow="Better Sleep"
        title="A calmer evening routine starts here"
        description="This page is built around real-world sleep improvement: better wind-down habits, higher-quality supplements, and a bedroom setup that supports recovery instead of fighting it."
      />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4"><MoonStar className="w-4 h-4 text-[var(--accent-blue)]" /><span className="text-sm font-medium text-[var(--accent-blue)]">Sleep optimization</span></div>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-3">What I would fix first</h2>
            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
              {[
                "Get bright natural light within 20 minutes of waking.",
                "Stop caffeine 90 minutes after waking, not immediately.",
                "Use magnesium glycinate and L-theanine 60 minutes before bed.",
                "Keep the bedroom cool, dark, and visually quiet.",
                "Remove all non-essential notifications from the evening.",
              ].map((item) => <li key={item} className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span>{item}</span></li>)}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop&auto=format&q=80" alt="Minimal bedroom with soft morning light" className="rounded-3xl h-64 object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1511688878352-3a2e87c3c4c5?w=800&h=600&fit=crop&auto=format&q=80" alt="Person journaling before bedtime in a calm setting" className="rounded-3xl h-64 object-cover w-full" />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4"><Sparkles className="w-4 h-4 text-[var(--accent-green)]" /><span className="text-sm font-medium text-[var(--accent-green)]">Recommended products</span></div>
          <ProductGrid products={sleepProducts} />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {routines.filter((r) => r.category === "sleep" || r.category === "recovery").map((routine) => (
            <div key={routine.id} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2">{routine.duration} · {routine.difficulty}</p>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">{routine.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">{routine.personalNote}</p>
              <ol className="space-y-2 text-sm text-[var(--muted-foreground)] list-decimal list-inside">
                {routine.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
