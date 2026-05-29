import type { Metadata } from "next"
import { HeartPulse, Snowflake, Activity } from "lucide-react"
import { SectionHero } from "@/components/sections/SectionHero"
import { ProductGrid } from "@/components/sections/ProductGrid"
import { products, routines } from "@/lib/data"

export const metadata: Metadata = {
  title: "Recovery & Stress",
  description: "Modern recovery tools, stress support, and routines for better adaptation.",
}

export default function RecoveryPage() {
  const recoveryProducts = products.filter((product) => product.category === "recovery" || product.category === "sleep")

  return (
    <div>
      <SectionHero eyebrow="Recovery & Stress" title="Recover with more intention" description="Recovery is where progress happens. The best systems combine stress management, sleep support, and smart training recovery habits." />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-4">
          {[
            { icon: HeartPulse, title: "Stress resilience", text: "Adaptogens and basic recovery habits help keep the system steady." },
            { icon: Snowflake, title: "Cold exposure", text: "Useful when done lightly and consistently, not as a punishment ritual." },
            { icon: Activity, title: "Training recovery", text: "Protein, electrolytes, and sleep matter far more than people want to admit." },
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
          <ProductGrid products={recoveryProducts} />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {routines.filter((routine) => routine.category === "recovery" || routine.category === "sleep").map((routine) => (
            <div key={routine.id} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2">{routine.duration} · {routine.difficulty}</p>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">{routine.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">{routine.description}</p>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                {routine.steps.map((step) => <li key={step} className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span>{step}</span></li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
