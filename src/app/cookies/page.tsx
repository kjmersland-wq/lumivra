import type { Metadata } from "next"
import { Cookie } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Lumivra uses cookies — in full compliance with EU ePrivacy Directive and GDPR.",
  robots: { index: true, follow: true },
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Cookie className="w-5 h-5 text-[var(--accent-green)]" />
            <span className="text-sm font-medium text-[var(--accent-green)]">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">Cookie Policy</h1>
          <p className="text-[var(--muted-foreground)]">Last updated: <strong>29 May 2026</strong></p>
          <div className="mt-4 p-4 bg-[var(--accent-green)]/5 border border-[var(--accent-green)]/20 rounded-xl">
            <p className="text-sm text-[var(--muted-foreground)]">
              This Cookie Policy explains how <strong>KM TECH LABS</strong> (Lumivra) uses cookies and similar technologies on this website, in accordance with the <strong>EU ePrivacy Directive</strong>, <strong>GDPR</strong>, and Norwegian law.
            </p>
          </div>
        </div>

        <div className="space-y-10 text-[var(--foreground)]">

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">What Are Cookies?</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you interact with content. Some cookies are essential for the site to function; others are optional and require your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-[var(--border)] pb-2">Cookies We Use</h2>
            <div className="space-y-4">
              {[
                {
                  type: "Strictly Necessary",
                  color: "green" as const,
                  consent: "No consent required",
                  description: "These cookies are essential for the website to function. They cannot be disabled.",
                  examples: [
                    { name: "theme", purpose: "Stores your dark/light mode preference", duration: "1 year", provider: "Lumivra" },
                    { name: "__cf_bm", purpose: "Cloudflare bot management (security)", duration: "30 minutes", provider: "Cloudflare" },
                  ],
                },
                {
                  type: "Analytics (Optional)",
                  color: "blue" as const,
                  consent: "Requires your consent",
                  description: "Anonymous usage analytics to help us understand how visitors use the site. No personal data is stored. Disabled until you consent.",
                  examples: [
                    { name: "_analytics", purpose: "Anonymised page view tracking (no individual profiles)", duration: "Session", provider: "Lumivra (self-hosted)" },
                  ],
                },
                {
                  type: "Affiliate & Third-Party",
                  color: "gold" as const,
                  consent: "Set by third parties when you click affiliate links",
                  description: "When you click an affiliate link (e.g. to Amazon), the merchant may set their own cookies. These are subject to the merchant's own cookie policy, not ours.",
                  examples: [
                    { name: "Merchant cookies", purpose: "Affiliate tracking, shopping cart, preferences", duration: "Varies", provider: "Amazon, etc." },
                  ],
                },
              ].map((cat) => (
                <div key={cat.type} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[var(--foreground)]">{cat.type}</h3>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      cat.color === "green"
                        ? "bg-[var(--accent-green)]/10 text-[var(--accent-green)]"
                        : cat.color === "blue"
                        ? "bg-[var(--accent-blue)]/10 text-[var(--accent-blue)]"
                        : "bg-[var(--accent-gold)]/10 text-[var(--accent-gold)]"
                    }`}>
                      {cat.consent}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] mb-4">{cat.description}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-[var(--muted)]">
                          <th className="text-left p-2 text-[var(--foreground)] font-medium">Name</th>
                          <th className="text-left p-2 text-[var(--foreground)] font-medium">Purpose</th>
                          <th className="text-left p-2 text-[var(--foreground)] font-medium">Duration</th>
                          <th className="text-left p-2 text-[var(--foreground)] font-medium">Provider</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.examples.map((ex) => (
                          <tr key={ex.name} className="border-t border-[var(--border)]">
                            <td className="p-2 font-mono text-[var(--foreground)]">{ex.name}</td>
                            <td className="p-2 text-[var(--muted-foreground)]">{ex.purpose}</td>
                            <td className="p-2 text-[var(--muted-foreground)]">{ex.duration}</td>
                            <td className="p-2 text-[var(--muted-foreground)]">{ex.provider}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">Managing Cookies</h2>
            <p className="text-sm text-[var(--muted-foreground)] mb-3">You can control cookies in several ways:</p>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span><strong className="text-[var(--foreground)]">Cookie banner:</strong> Manage consent preferences using the cookie settings panel when you first visit.</span></li>
              <li className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span><strong className="text-[var(--foreground)]">Browser settings:</strong> Most browsers allow you to block or delete cookies via your privacy/security settings.</span></li>
              <li className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span><strong className="text-[var(--foreground)]">Third-party opt-outs:</strong> For affiliate merchants, consult their individual cookie policies.</span></li>
            </ul>
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <strong>Note:</strong> Disabling strictly necessary cookies may cause parts of the website (such as dark mode) to stop working correctly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">Your Rights</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Under GDPR and the ePrivacy Directive, you have the right to withdraw cookie consent at any time without affecting the lawfulness of prior processing. Please see our{" "}
              <a href="/privacy" className="text-[var(--accent-green)] underline underline-offset-2">Privacy Policy</a> for full details of your rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-[var(--border)] pb-2">Contact</h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              Questions about our cookie use? Please reach us via the{" "}
              <a href="/contact" className="text-[var(--accent-green)] underline underline-offset-2">contact form</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
