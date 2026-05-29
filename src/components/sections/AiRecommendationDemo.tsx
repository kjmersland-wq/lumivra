"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/Badge"
import { aiResponses } from "@/lib/data"

const prompts = [
  "I want better sleep",
  "I need more focus",
  "I want more energy",
  "How can I recover better?",
]

export function AiRecommendationDemo() {
  const [query, setQuery] = useState("I want better sleep")

  const result = useMemo(() => {
    const normalized = query.toLowerCase()
    if (normalized.includes("sleep")) return aiResponses.sleep
    if (normalized.includes("focus")) return aiResponses.focus
    if (normalized.includes("energy")) return aiResponses.energy
    if (normalized.includes("recover")) return aiResponses.recovery
    return aiResponses.sleep
  }, [query])

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="blue">Frontend Demo</Badge>
              <Sparkles className="w-4 h-4 text-[var(--accent-blue)]" />
            </div>
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">Ask Lumivra AI Wellness Assistant</h3>
            <p className="text-sm text-[var(--muted-foreground)] mb-5 max-w-xl">
              Type a simple goal and get a clean category recommendation with no real API calls. This is mock logic only, built for the UX layer.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {prompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setQuery(prompt)}
                  className={`px-3 py-2 rounded-full text-xs font-medium border transition-colors ${
                    query === prompt
                      ? "bg-[var(--accent-green)] text-white border-[var(--accent-green)]"
                      : "bg-[var(--muted)] text-[var(--muted-foreground)] border-[var(--border)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {prompt}
                </button>
              ))}
            </div>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rows={4}
              className="w-full bg-[var(--muted)] border border-[var(--border)] rounded-2xl p-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:ring-2 focus:ring-[var(--accent-green)] resize-none"
              placeholder="Describe your goal..."
            />
          </div>

          <motion.div
            key={result.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-4 h-4 text-[var(--accent-gold)]" />
              <span className="text-sm font-medium text-[var(--accent-gold)]">Recommendation</span>
            </div>
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">{result.title}</h3>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">{result.summary}</p>
            <div className="space-y-2 mb-5">
              {result.recommendations.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                  <span className="text-[var(--accent-green)] mt-0.5">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
                <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-1">Suggested routine</p>
                <p className="text-sm font-medium text-[var(--foreground)]">{result.routine}</p>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
                <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-1">Related article</p>
                <p className="text-sm font-medium text-[var(--foreground)]">{result.article}</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-green)]" />
              Demo logic only. No external API calls or personal data processing.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
