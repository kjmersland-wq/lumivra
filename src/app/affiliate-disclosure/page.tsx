import type { Metadata } from "next"
import { DollarSign, CheckCircle, XCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How Lumivra earns commissions through affiliate links — and how this never affects our editorial independence.",
  robots: { index: true, follow: true },
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-[var(--accent-green)]" />
            <span className="text-sm font-medium text-[var(--accent-green)]">Transparency</span>
          </div>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">Affiliate Disclosure</h1>
          <p className="text-[var(--muted-foreground)]">Last updated: <strong>29 May 2026</strong></p>
        </div>

        <div className="space-y-10 text-[var(--foreground)]">

          <div className="p-5 bg-[var(--accent-green)]/5 border border-[var(--accent-green)]/25 rounded-2xl">
            <p className="text-base font-medium text-[var(--foreground)] mb-2">The short version</p>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              Lumivra earns a small commission when you click certain product links and make a purchase — <strong>at absolutely no extra cost to you</strong>. This is how we keep the site running and the research free to access. It never changes what we recommend. If a product doesn&apos;t pass our standards, we don&apos;t feature it — period.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">How It Works</h2>
            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              Lumivra participates in affiliate programmes, including but not limited to:
            </p>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              {["Amazon Associates (US, UK, DE)", "iHerb Affiliate Programme", "Other supplement brand direct affiliate programmes"].map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-[var(--accent-green)]">→</span><span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--muted-foreground)] mt-4">
              Affiliate links are typically marked with &quot;Check Price&quot; or similar buttons. Clicking these links and purchasing may result in us receiving a commission. The price you pay is identical whether you use our link or navigate directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-[var(--border)] pb-2">Our Editorial Standards</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-green)]" />
                  <span className="text-sm font-semibold text-[var(--foreground)]">What we do</span>
                </div>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  {[
                    "Independently research every product we feature",
                    "Review clinical evidence before recommending",
                    "Include cons and limitations honestly",
                    "Recommend products we personally use or have tested",
                    "Update reviews when new evidence emerges",
                    "Clearly disclose affiliate relationships",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--accent-green)] mt-0.5">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-semibold text-[var(--foreground)]">What we never do</span>
                </div>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  {[
                    "Feature products solely because they pay higher commissions",
                    "Accept payment for positive reviews",
                    "Make false or exaggerated health claims",
                    "Recommend products we wouldn't personally use",
                    "Hide the fact that links are affiliate links",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-red-400 mt-0.5">−</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">EU / Norwegian Consumer Law Compliance</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              This disclosure is provided in accordance with the <strong>EU Unfair Commercial Practices Directive (2005/29/EC)</strong>, the <strong>Norwegian Marketing Control Act</strong> (<em>markedsføringsloven</em>), and the <strong>FTC guidelines</strong> (for US readers). Commercial relationships are clearly identified throughout the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">Questions?</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              If you have any questions about our affiliate relationships or editorial process, please use our{" "}
              <a href="/contact" className="text-[var(--accent-green)] underline underline-offset-2">contact form</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
