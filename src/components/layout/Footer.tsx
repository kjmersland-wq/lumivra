import Link from "next/link"
import { Sparkles, Mail, ArrowRight } from "lucide-react"

const footerLinks = {
  Topics: [
    { href: "/sleep", label: "Better Sleep" },
    { href: "/energy", label: "Energy & Focus" },
    { href: "/recovery", label: "Recovery & Stress" },
    { href: "/aging", label: "Healthy Aging" },
    { href: "/comparisons", label: "Product Comparisons" },
    { href: "/faq", label: "FAQ" },
  ],
  Resources: [
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog/sleep-stack-ultimate-guide", label: "Sleep Stack Guide" },
    { href: "/blog/creatine-not-just-for-gym-bros", label: "Creatine & the Brain" },
    { href: "/blog/nad-longevity-explained", label: "NAD+ Explained" },
    { href: "/about", label: "About Lumivra" },
    { href: "/contact", label: "Contact Us" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/terms", label: "Terms of Use" },
    { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--accent-green)] to-[var(--accent-blue)] flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                <Sparkles className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-xl font-semibold text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent-green)]">Lumivra</span>
            </Link>
            <p className="text-sm text-[var(--foreground)]/80 leading-relaxed max-w-xs mb-6">
              Honest wellness research for people who want to live better, longer. No fluff, no fear-mongering — just what the science says and what actually works.
            </p>
            {/* Mini newsletter */}
            <div className="flex gap-2 max-w-xs">
              <div className="premium-surface hover-lift flex items-center gap-2 flex-1 bg-[var(--card)] border border-[var(--border)] rounded-xl px-3 py-2">
                <Mail className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none w-full"
                />
              </div>
              <button className="btn-premium group p-2.5 rounded-xl bg-[var(--accent-green)] text-white hover:opacity-90 transition-opacity shadow-lg shadow-[var(--accent-green)]/20 shrink-0">
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
            <p className="text-xs text-[var(--muted-foreground)] mt-2">
              Weekly digest. No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-underline inline-flex items-center text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-[var(--foreground)]/70">
              © 2026 Lumivra. All rights reserved.
            </p>
            <p className="text-xs text-[var(--foreground)]/70 max-w-md sm:text-right">
              <strong>Disclosure:</strong> Lumivra earns a commission on qualifying purchases at no extra cost to you. We only recommend products we&apos;ve personally researched and believe in.
            </p>
          </div>
          <p className="text-xs text-[var(--foreground)]/75">
            Developed and operated by{" "}
            <span className="font-medium text-[var(--foreground)]">KM TECH LABS</span>
            {" "}— Kristiansand, Norway &middot; Org.nr. 934 044 029
          </p>
        </div>
      </div>
    </footer>
  )
}
