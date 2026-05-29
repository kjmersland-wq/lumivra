"use client"

import { useState } from "react"
import type { Metadata } from "next"
import { motion } from "framer-motion"
import { Send, CheckCircle, MessageSquare, Clock, Shield } from "lucide-react"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", consent: false })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) return
    setLoading(true)
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const subjects = [
    "General question",
    "Editorial / content feedback",
    "Product suggestion",
    "Affiliate partnership enquiry",
    "Privacy / GDPR request",
    "Technical issue",
    "Other",
  ]

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--background)] pt-24 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md px-4"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--accent-green)]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[var(--accent-green)]" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">Message received</h2>
          <p className="text-[var(--muted-foreground)] mb-6">
            Thanks for reaching out. We typically respond within 2 business days. If your enquiry is a GDPR / data request, we will respond within 30 days as required by law.
          </p>
          <a href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent-green)] text-white font-medium hover:opacity-90 transition-opacity text-sm">
            Back to Lumivra
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-[var(--accent-green)]" />
            <span className="text-sm font-medium text-[var(--accent-green)]">Get in touch</span>
          </div>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">Contact Lumivra</h1>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            Have a question, feedback, or a GDPR/privacy request? We read every message and respond personally.
          </p>

          {/* Info badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="flex items-center gap-2 bg-[var(--muted)] border border-[var(--border)] rounded-xl px-3 py-2">
              <Clock className="w-3.5 h-3.5 text-[var(--accent-green)]" />
              <span className="text-xs text-[var(--muted-foreground)]">Response within 2 business days</span>
            </div>
            <div className="flex items-center gap-2 bg-[var(--muted)] border border-[var(--border)] rounded-xl px-3 py-2">
              <Shield className="w-3.5 h-3.5 text-[var(--accent-green)]" />
              <span className="text-xs text-[var(--muted-foreground)]">GDPR requests answered within 30 days</span>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
              Name <span className="text-[var(--muted-foreground)] font-normal">(optional)</span>
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              autoComplete="name"
              className="w-full bg-[var(--muted)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:ring-2 focus:ring-[var(--accent-green)] transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
              Email address <span className="text-red-400">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              autoComplete="email"
              className="w-full bg-[var(--muted)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:ring-2 focus:ring-[var(--accent-green)] transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
              Subject <span className="text-red-400">*</span>
            </label>
            <select
              id="subject"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full bg-[var(--muted)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--accent-green)] transition appearance-none cursor-pointer"
            >
              <option value="" disabled>Select a subject...</option>
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us what's on your mind..."
              className="w-full bg-[var(--muted)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:ring-2 focus:ring-[var(--accent-green)] transition resize-none"
            />
          </div>

          {/* GDPR consent checkbox */}
          <div className="bg-[var(--muted)] border border-[var(--border)] rounded-xl p-4">
            <label className="flex gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="mt-0.5 w-4 h-4 accent-[var(--accent-green)] cursor-pointer shrink-0"
              />
              <span className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                I have read and agree to the{" "}
                <a href="/privacy" className="text-[var(--accent-green)] underline underline-offset-2">Privacy Policy</a>.
                I understand my personal data (email address and message) will be processed by KM TECH LABS solely to respond to this enquiry and deleted within 12 months.
                I can request erasure at any time. <span className="text-red-400">*</span>
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !form.consent}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[var(--accent-green)] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send message
              </>
            )}
          </button>

          <p className="text-xs text-center text-[var(--muted-foreground)]">
            We do not display a public email address. All contact is handled through this form.
          </p>
        </motion.form>

        {/* Company info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-5 bg-[var(--muted)] border border-[var(--border)] rounded-2xl text-sm text-[var(--muted-foreground)]"
        >
          <p className="font-medium text-[var(--foreground)] mb-1">KM TECH LABS</p>
          <p>Kristiansand, Norway · Org.nr. 934 044 029</p>
          <p className="mt-2 text-xs">
            For GDPR/data requests, select &quot;Privacy / GDPR request&quot; as the subject. We will respond within <strong>30 days</strong> as required by GDPR Art. 12.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
