import type { Metadata } from "next"
import { MessageSquare, Mail, Shield } from "lucide-react"
import { ContactForm } from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Lumivra through the form only. No public email address is published.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-[var(--accent-green)]" />
            <span className="text-sm font-medium text-[var(--accent-green)]">Get in touch</span>
          </div>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">Contact Lumivra</h1>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            Have a question, feedback, or a GDPR/privacy request? We read every message and respond personally.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="flex items-center gap-2 bg-[var(--muted)] border border-[var(--border)] rounded-xl px-3 py-2">
              <Mail className="w-3.5 h-3.5 text-[var(--accent-green)]" />
              <span className="text-xs text-[var(--muted-foreground)]">No public email address</span>
            </div>
            <div className="flex items-center gap-2 bg-[var(--muted)] border border-[var(--border)] rounded-xl px-3 py-2">
              <Shield className="w-3.5 h-3.5 text-[var(--accent-green)]" />
              <span className="text-xs text-[var(--muted-foreground)]">GDPR requests answered within 30 days</span>
            </div>
          </div>
        </div>

        <ContactForm />

        <div className="mt-8 p-5 bg-[var(--muted)] border border-[var(--border)] rounded-2xl text-sm text-[var(--muted-foreground)]">
          <p className="font-medium text-[var(--foreground)] mb-1">KM TECH LABS</p>
          <p>Kristiansand, Norway · Org.nr. 934 044 029</p>
          <p className="mt-2 text-xs">
            For GDPR/data requests, select &quot;Privacy / GDPR request&quot; as the subject. We will respond within 30 days as required by GDPR Art. 12.
          </p>
        </div>
      </div>
    </div>
  )
}
