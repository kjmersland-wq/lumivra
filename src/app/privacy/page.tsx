import type { Metadata } from "next"
import { Shield, Mail, MapPin, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Lumivra collects, uses, and protects your personal data — in full compliance with GDPR and EU privacy law.",
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-[var(--accent-green)]" />
            <span className="text-sm font-medium text-[var(--accent-green)]">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">Privacy Policy</h1>
          <p className="text-[var(--muted-foreground)]">
            Last updated: <strong>29 May 2026</strong>
          </p>
          <div className="mt-4 p-4 bg-[var(--accent-green)]/5 border border-[var(--accent-green)]/20 rounded-xl">
            <p className="text-sm text-[var(--muted-foreground)]">
              This Privacy Policy explains how <strong>KM TECH LABS</strong> (org.nr. 934 044 029, Kristiansand, Norway) — the operator of Lumivra — collects, processes, stores, and protects your personal data, in accordance with the{" "}
              <strong>EU General Data Protection Regulation (GDPR)</strong> and the Norwegian Personal Data Act (<em>personopplysningsloven</em>).
            </p>
          </div>
        </div>

        <div className="prose-lumivra space-y-10 text-[var(--foreground)]">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">1. Data Controller</h2>
            <div className="flex flex-col gap-2 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--accent-green)] shrink-0" />
                <div>
                  <strong className="text-[var(--foreground)]">KM TECH LABS</strong><br />
                  Kristiansand, Norway<br />
                  Org.nr. 934 044 029
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-[var(--accent-green)] shrink-0" />
                <div>
                  Contact us via the <a href="/contact" className="text-[var(--accent-green)] underline underline-offset-2">contact form</a> — we do not publish our email address publicly to prevent spam and protect operational security.
                </div>
              </div>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">2. What Personal Data We Collect</h2>
            <p className="text-sm text-[var(--muted-foreground)] mb-3">We follow a strict <strong>data minimisation</strong> principle — we collect only what is necessary.</p>
            <div className="space-y-3">
              {[
                { title: "Email address", detail: "When you voluntarily subscribe to our newsletter or submit the contact form." },
                { title: "Contact form messages", detail: "Name (optional) and message content you submit through our contact form." },
                { title: "Usage data (anonymised)", detail: "Page views, browser type, country (not city), and referrer — collected via privacy-respecting analytics (no individual profiles created)." },
                { title: "Cookies", detail: "Strictly necessary cookies only, unless you consent to additional analytics cookies. See our Cookie Policy." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-3 bg-[var(--muted)] rounded-xl">
                  <FileText className="w-4 h-4 text-[var(--accent-green)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[var(--foreground)]">{item.title}</p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">3. Legal Basis for Processing (GDPR Art. 6)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--muted)]">
                    <th className="text-left p-3 text-[var(--foreground)] font-semibold rounded-tl-lg">Purpose</th>
                    <th className="text-left p-3 text-[var(--foreground)] font-semibold rounded-tr-lg">Legal basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {[
                    ["Newsletter delivery", "Consent (Art. 6(1)(a)) — you may withdraw at any time"],
                    ["Responding to contact form enquiries", "Legitimate interest (Art. 6(1)(f))"],
                    ["Anonymous analytics", "Legitimate interest (Art. 6(1)(f)) — no personal data processed"],
                    ["Legal compliance", "Legal obligation (Art. 6(1)(c))"],
                  ].map(([purpose, basis]) => (
                    <tr key={purpose} className="even:bg-[var(--muted)]/40">
                      <td className="p-3 text-[var(--foreground)]">{purpose}</td>
                      <td className="p-3 text-[var(--muted-foreground)]">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">4. How We Use Your Data</h2>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              {[
                "To send you the newsletter you subscribed to",
                "To respond to your contact form enquiry",
                "To improve site performance and content (anonymised analytics only)",
                "To comply with applicable laws and regulations",
              ].map((item) => (
                <li key={item} className="flex gap-2"><span className="text-[var(--accent-green)]">→</span>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-[var(--muted-foreground)] mt-3">We do <strong>not</strong> sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">5. Data Retention</h2>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span><strong className="text-[var(--foreground)]">Newsletter subscribers:</strong> data retained until you unsubscribe, plus 30 days for processing.</span></li>
              <li className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span><strong className="text-[var(--foreground)]">Contact form messages:</strong> deleted within 12 months of last correspondence.</span></li>
              <li className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span><strong className="text-[var(--foreground)]">Analytics data:</strong> aggregated and anonymised — no individual retention period applies.</span></li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">6. Your Rights Under GDPR</h2>
            <p className="text-sm text-[var(--muted-foreground)] mb-3">As a data subject, you have the following rights under GDPR (Articles 15–22):</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { right: "Right of access (Art. 15)", detail: "Request a copy of the data we hold about you." },
                { right: "Right to rectification (Art. 16)", detail: "Ask us to correct inaccurate personal data." },
                { right: "Right to erasure (Art. 17)", detail: "'Right to be forgotten' — request deletion of your data." },
                { right: "Right to restrict processing (Art. 18)", detail: "Ask us to limit how we use your data." },
                { right: "Right to data portability (Art. 20)", detail: "Receive your data in a structured, machine-readable format." },
                { right: "Right to object (Art. 21)", detail: "Object to processing based on legitimate interest." },
                { right: "Withdraw consent (Art. 7(3))", detail: "Withdraw newsletter consent at any time via unsubscribe link." },
                { right: "Right to lodge a complaint", detail: "File a complaint with Datatilsynet (Norway's DPA) at datatilsynet.no." },
              ].map((item) => (
                <div key={item.right} className="p-3 bg-[var(--muted)] rounded-xl">
                  <p className="text-xs font-semibold text-[var(--accent-green)]">{item.right}</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mt-4">
              To exercise any of these rights, please use our <a href="/contact" className="text-[var(--accent-green)] underline underline-offset-2">contact form</a>. We will respond within <strong>30 days</strong>.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">7. Third-Party Services & Data Transfers</h2>
            <p className="text-sm text-[var(--muted-foreground)] mb-3">We use the following third-party services, each selected for their privacy stance:</p>
            <div className="space-y-2 text-sm">
              {[
                { name: "Cloudflare Pages", use: "Website hosting and CDN", location: "EU/US — Standard Contractual Clauses apply", link: "https://www.cloudflare.com/privacypolicy/" },
                { name: "Unsplash", use: "Photography (images served from Unsplash CDN)", location: "US — GDPR-compliant CDN requests, no personal data shared", link: "https://unsplash.com/privacy" },
              ].map((s) => (
                <div key={s.name} className="flex gap-3 p-3 bg-[var(--muted)] rounded-xl">
                  <div>
                    <p className="font-medium text-[var(--foreground)]">{s.name} — <span className="font-normal text-[var(--muted-foreground)]">{s.use}</span></p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{s.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mt-3">Affiliate links (e.g. Amazon) will set cookies on the merchant&apos;s site when clicked — this is subject to the merchant&apos;s own privacy policy, which we encourage you to review.</p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">8. Security</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or disclosure. Our site is served exclusively over HTTPS. We do not store payment information.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">9. Children&apos;s Privacy</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Lumivra is not directed at children under 16 years of age. We do not knowingly collect personal data from children. If you believe a child has submitted data to us, please contact us immediately via the contact form and we will delete it promptly.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">10. Changes to This Policy</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              We may update this policy to reflect changes in law or our practices. We will update the &quot;Last updated&quot; date at the top of this page. Continued use of Lumivra after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Supervisory authority */}
          <div className="p-5 bg-[var(--muted)] border border-[var(--border)] rounded-2xl">
            <p className="text-sm font-semibold text-[var(--foreground)] mb-2">Supervisory Authority (Norway)</p>
            <p className="text-sm text-[var(--muted-foreground)]">
              You have the right to lodge a complaint with the Norwegian Data Protection Authority:<br />
              <strong>Datatilsynet</strong> — <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-green)] underline underline-offset-2">datatilsynet.no</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
