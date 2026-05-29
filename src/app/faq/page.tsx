import type { Metadata } from "next"
import Link from "next/link"
import type { ComponentType } from "react"
import { HelpCircle, Shield, Stethoscope, BadgeCheck, MessageSquare } from "lucide-react"
import { SectionHero } from "@/components/sections/SectionHero"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Lumivra: product recommendations, affiliate transparency, GDPR/privacy, medical disclaimers, and contact.",
}

type FaqItem = {
  question: string
  answer: string
}

const faqSections: { title: string; icon: ComponentType<{ className?: string }>; items: FaqItem[] }[] = [
  {
    title: "Products & Recommendations",
    icon: BadgeCheck,
    items: [
      {
        question: "How does Lumivra choose products to feature?",
        answer:
          "We prioritize clinical evidence, ingredient quality, dosing transparency, manufacturing standards, and practical real-world usefulness. A product can be popular and still not pass our filter if the formulation is weak or the claims are exaggerated.",
      },
      {
        question: "Do you test products personally?",
        answer:
          "Where possible, yes. We combine hands-on use with evidence review. Personal experience never replaces research, but it helps us explain what a product may feel like in day-to-day life.",
      },
      {
        question: "Why do ratings and reviews appear on product cards?",
        answer:
          "Ratings are editorial context signals to help compare options quickly. They are not medical effectiveness scores and should be interpreted alongside each product's pros, cons, and intended use case.",
      },
      {
        question: "Can I use your recommendations as a complete supplement plan?",
        answer:
          "Treat our recommendations as educational guidance, not a fixed prescription. Your goals, medications, sleep, training load, and medical history all matter. Start simple, test one change at a time, and consult a qualified health professional when needed.",
      },
    ],
  },
  {
    title: "Medical & Safety",
    icon: Stethoscope,
    items: [
      {
        question: "Is Lumivra medical advice?",
        answer:
          "No. Lumivra is for informational and educational purposes only. Content does not constitute medical advice, diagnosis, or treatment.",
      },
      {
        question: "Who should be extra careful with supplements?",
        answer:
          "If you are pregnant, breastfeeding, under 18, have a chronic condition, or take prescription medication, discuss supplements with your clinician first. Interactions and contraindications are real and can be serious.",
      },
      {
        question: "What is the safest way to start a new protocol?",
        answer:
          "Use a low-friction baseline: optimize sleep schedule, hydration, protein intake, and light exposure first. Add one supplement at a time, track response for 2-4 weeks, and stop quickly if side effects occur.",
      },
    ],
  },
  {
    title: "Affiliate & Editorial Independence",
    icon: HelpCircle,
    items: [
      {
        question: "How does Lumivra make money?",
        answer:
          "Lumivra may earn affiliate revenue when readers buy through selected product pathways. This helps fund research and site operations.",
      },
      {
        question: "Do commissions influence rankings or recommendations?",
        answer:
          "No. Editorial criteria come first. Products that do not meet quality standards are not recommended, even if commercial terms are available.",
      },
      {
        question: "Are sponsored reviews accepted?",
        answer:
          "We do not sell guaranteed positive coverage. If a commercial relationship exists in the future, it will be clearly disclosed and separated from independent editorial judgment.",
      },
    ],
  },
  {
    title: "Privacy, Data & GDPR",
    icon: Shield,
    items: [
      {
        question: "What personal data do you collect?",
        answer:
          "Only necessary data, such as contact form details and newsletter information when you submit it voluntarily. We apply data minimization and avoid unnecessary tracking.",
      },
      {
        question: "How can I request data access or deletion?",
        answer:
          "Use the contact form and choose a privacy-related subject. We handle access, rectification, and erasure requests in line with GDPR timelines.",
      },
      {
        question: "Do you sell personal data?",
        answer:
          "No. Lumivra does not sell personal data to advertisers or data brokers.",
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <div>
      <SectionHero
        eyebrow="FAQ"
        title="Clear answers before you change anything"
        description="This FAQ covers how Lumivra works, how recommendations are evaluated, how privacy is handled, and when to involve a licensed medical professional."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="btn-premium inline-flex items-center justify-center rounded-xl bg-[var(--accent-green)] text-white px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[var(--accent-green)]/20"
          >
            Ask a question
          </Link>
          <Link
            href="/privacy"
            className="btn-premium inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-4 py-2.5 text-sm font-medium hover:bg-[var(--muted)] transition-colors"
          >
            Privacy details
          </Link>
        </div>
      </SectionHero>

      <section className="pb-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {faqSections.map((section) => {
            const Icon = section.icon
            return (
              <div key={section.title} className="premium-surface hover-lift rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-[var(--accent-green)]" />
                  <h2 className="text-lg sm:text-xl font-semibold text-[var(--foreground)]">{section.title}</h2>
                </div>

                <div className="space-y-3">
                  {section.items.map((item) => (
                    <details key={item.question} className="group premium-surface hover-lift rounded-2xl border border-[var(--border)] bg-[var(--muted)] px-4 py-3">
                      <summary className="cursor-pointer list-none font-medium text-[var(--foreground)] flex items-start justify-between gap-3">
                        <span>{item.question}</span>
                        <span className="text-[var(--muted-foreground)] group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="text-sm leading-relaxed text-[var(--muted-foreground)] mt-3">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            )
          })}

          <div className="premium-surface hover-lift rounded-3xl border border-[var(--border)] bg-[var(--muted)] p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-[var(--accent-green)]" />
              <p className="font-semibold text-[var(--foreground)]">Still need help?</p>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              If your question is specific to your situation, send it through the contact form. For privacy requests, include enough detail for us to verify and process your request efficiently.
            </p>
            <Link
              href="/contact"
              className="btn-premium inline-flex items-center justify-center rounded-xl bg-[var(--accent-green)] text-white px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[var(--accent-green)]/20"
            >
              Open contact form
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}