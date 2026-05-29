"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"

interface NewsletterSignupProps {
  variant?: "inline" | "section"
  title?: string
  subtitle?: string
}

export function NewsletterSignup({
  variant = "section",
  title = "The Lumivra Weekly",
  subtitle = "Honest, research-backed wellness insights every week. No sponsored content — just what actually works.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        {submitted ? (
          <div className="flex items-center gap-2 text-[var(--accent-green)] text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>You&apos;re in. Check your inbox!</span>
          </div>
        ) : (
          <>
            <div className="premium-surface hover-lift flex items-center gap-2 flex-1 bg-[var(--card)] border border-[var(--border)] rounded-xl px-3 py-2.5">
              <Mail className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none w-full"
              />
            </div>
            <button
              type="submit"
              className="btn-premium group shimmer-on-hover px-4 py-2.5 rounded-xl bg-[var(--accent-green)] text-white text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1.5 whitespace-nowrap shadow-lg shadow-[var(--accent-green)]/20"
            >
              Subscribe <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </>
        )}
      </form>
    )
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-green)]/5 via-transparent to-[var(--accent-blue)]/5" />
      <div className="relative max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 rounded-full px-4 py-1.5 mb-6">
            <Mail className="w-3.5 h-3.5 text-[var(--accent-green)]" />
            <span className="text-xs font-medium text-[var(--accent-green)]">Weekly Newsletter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">{title}</h2>
          <p className="text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">{subtitle}</p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-3 text-[var(--accent-green)] text-lg font-medium"
            >
              <CheckCircle className="w-6 h-6" />
              <span>You&apos;re in the loop. Welcome to Lumivra.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="premium-surface hover-lift flex items-center gap-2 flex-1 bg-[var(--card)] border border-[var(--border)] rounded-xl px-4 py-3 shadow-sm">
                <Mail className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none w-full"
                />
              </div>
              <button
                type="submit"
                className="btn-premium group shimmer-on-hover px-6 py-3 rounded-xl bg-[var(--accent-green)] text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent-green)]/20"
              >
                Subscribe <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>
          )}
          <p className="text-xs text-[var(--muted-foreground)] mt-4">
            Join 12,000+ readers. No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
