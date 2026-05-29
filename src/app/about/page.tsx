import type { Metadata } from "next"
import { SectionHero } from "@/components/sections/SectionHero"
import { Badge } from "@/components/ui/Badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Lumivra and the editorial standard behind the site.",
}

export default function AboutPage() {
  return (
    <div>
      <SectionHero eyebrow="About Lumivra" title="Built to feel calm, intelligent, and trustworthy" description="Lumivra is a premium wellness affiliate platform shaped around honest content, thoughtful recommendations, and a Scandinavian-inspired design language." />

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
            <Badge variant="green" className="mb-4">Editorial standard</Badge>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              I built Lumivra to avoid the usual affiliate-site noise: aggressive banners, fake urgency, and medical overreach. Every page is intended to read like a clean, useful editorial guide.
            </p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">What you can expect</h2>
            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
              {[
                "Evidence-based product reviews written in plain English.",
                "A personal tone without fake hype or medical claims.",
                "Layouts that stay readable and polished on mobile and desktop.",
                "Clear disclosures and legal pages for GDPR and EU compliance.",
                "A Cloudflare-first build approach for fast static delivery.",
              ].map((item) => (
                <li key={item} className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Mission</p>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">Make high-quality wellness guidance feel premium, understandable, and easy to act on.</p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Operator</p>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">Developed and operated by KM TECH LABS in Kristiansand, Norway. Org.nr. 934 044 029.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-2">Want to get in touch?</h2>
            <p className="text-sm text-[var(--muted-foreground)]">Use the contact form and we will reply personally.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[var(--accent-green)] text-white text-sm font-medium hover:opacity-90 transition-opacity">
            Contact form
          </Link>
        </div>
      </section>
    </div>
  )
}
