import type { Metadata } from "next"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using the Lumivra website.",
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-[var(--accent-green)]" />
            <span className="text-sm font-medium text-[var(--accent-green)]">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">Terms of Use</h1>
          <p className="text-[var(--muted-foreground)]">Last updated: <strong>29 May 2026</strong></p>
        </div>

        <div className="space-y-10 text-[var(--foreground)]">

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">1. Acceptance of Terms</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              By accessing or using Lumivra (operated by <strong>KM TECH LABS</strong>, Kristiansand, Norway, org.nr. 934 044 029), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">2. Not Medical Advice</h2>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl mb-3">
              <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">Important Health Disclaimer</p>
              <p className="text-sm text-amber-800 dark:text-amber-300">
                The content on Lumivra is for <strong>informational and educational purposes only</strong>. It does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before starting any supplement, diet, or wellness protocol — particularly if you are pregnant, nursing, taking medication, or have a medical condition.
              </p>
            </div>
            <p className="text-sm text-[var(--muted-foreground)]">
              Individual results vary. Statements about products have not been evaluated by the European Medicines Agency (EMA) or the Norwegian Medicines Agency (NoMA).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">3. Affiliate Disclosure</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Lumivra participates in affiliate programmes. When you click certain product links and make a purchase, we may earn a commission at no additional cost to you. This never influences our editorial content — we only recommend products we have independently researched and believe in. For full details, see our{" "}
              <a href="/affiliate-disclosure" className="text-[var(--accent-green)] underline underline-offset-2">Affiliate Disclosure</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">4. Intellectual Property</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              All original content on Lumivra — including text, design, graphics, and code — is the property of KM TECH LABS and protected by copyright law. You may not reproduce, distribute, or create derivative works without prior written permission. Photography is sourced from Unsplash under their open licence and credited accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">5. Limitation of Liability</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              To the maximum extent permitted by applicable Norwegian and EU law, KM TECH LABS shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or any products recommended herein. Our total liability shall not exceed the amount paid by you to us in the twelve months preceding the claim (typically zero, as access to this site is free).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">6. Third-Party Links</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Lumivra contains links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of those sites. Linking does not imply endorsement beyond what is stated in our editorial content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">7. Governing Law & Jurisdiction</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              These terms are governed by the laws of <strong>Norway</strong>. Any disputes shall be subject to the jurisdiction of the courts of Agder, Norway, without prejudice to your rights as a consumer under applicable EU consumer protection law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">8. Changes to Terms</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              We may update these terms at any time. The &quot;Last updated&quot; date above will reflect when changes were made. Continued use of Lumivra constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">9. Contact</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Questions about these terms? Use our{" "}
              <a href="/contact" className="text-[var(--accent-green)] underline underline-offset-2">contact form</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
