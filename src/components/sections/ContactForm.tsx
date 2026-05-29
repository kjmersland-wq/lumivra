"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Clock, MessageSquare, Send, Shield } from "lucide-react"

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", consent: false })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <motion.div initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 rounded-full bg-[var(--accent-green)]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-[var(--accent-green)]" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">Message received</h2>
        <p className="text-[var(--muted-foreground)] mb-6">Thanks for reaching out. We typically respond within 2 business days. GDPR requests are handled within 30 days.</p>
        <a href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent-green)] text-white font-medium hover:opacity-90 transition-opacity text-sm">
          Back to Lumivra
        </a>
      </motion.div>
    )
  }

  const subjects = ["General question", "Editorial / content feedback", "Product suggestion", "Affiliate partnership enquiry", "Privacy / GDPR request", "Technical issue", "Other"]

  return (
    <motion.form initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">Name <span className="text-[var(--muted-foreground)] font-normal">(optional)</span></label>
        <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" autoComplete="name" className="w-full bg-[var(--muted)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:ring-2 focus:ring-[var(--accent-green)] transition" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">Email address <span className="text-red-400">*</span></label>
        <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" autoComplete="email" className="w-full bg-[var(--muted)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:ring-2 focus:ring-[var(--accent-green)] transition" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">Subject <span className="text-red-400">*</span></label>
        <select id="subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full bg-[var(--muted)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--accent-green)] transition appearance-none cursor-pointer">
          <option value="" disabled>Select a subject...</option>
          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">Message <span className="text-red-400">*</span></label>
        <textarea id="message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what's on your mind..." className="w-full bg-[var(--muted)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:ring-2 focus:ring-[var(--accent-green)] transition resize-none" />
      </div>
      <div className="bg-[var(--muted)] border border-[var(--border)] rounded-xl p-4">
        <label className="flex gap-3 cursor-pointer">
          <input type="checkbox" required checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-0.5 w-4 h-4 accent-[var(--accent-green)] cursor-pointer shrink-0" />
          <span className="text-xs text-[var(--muted-foreground)] leading-relaxed">I have read and agree to the <a href="/privacy" className="text-[var(--accent-green)] underline underline-offset-2">Privacy Policy</a>. I understand my personal data will be processed by KM TECH LABS solely to respond to this enquiry and deleted within 12 months. I can request erasure at any time. <span className="text-red-400">*</span></span>
        </label>
      </div>
      <button type="submit" disabled={loading || !form.consent} className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[var(--accent-green)] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
        {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send message</>}
      </button>
      <div className="grid sm:grid-cols-2 gap-3 text-xs text-[var(--muted-foreground)]">
        <div className="flex items-center gap-2 bg-[var(--muted)] border border-[var(--border)] rounded-xl px-3 py-2"><Clock className="w-3.5 h-3.5 text-[var(--accent-green)]" /> Response within 2 business days</div>
        <div className="flex items-center gap-2 bg-[var(--muted)] border border-[var(--border)] rounded-xl px-3 py-2"><Shield className="w-3.5 h-3.5 text-[var(--accent-green)]" /> GDPR requests answered within 30 days</div>
      </div>
    </motion.form>
  )
}
