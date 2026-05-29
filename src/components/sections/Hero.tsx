"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, TrendingUp, Moon, Zap } from "lucide-react"

const stats = [
  { label: "Products tested", value: "200+" },
  { label: "Hours of research", value: "1,400+" },
  { label: "Monthly readers", value: "95K+" },
  { label: "Years of data", value: "4+" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7f3] via-[#fafaf9] to-[#f0f4ff] dark:from-[#0d1a12] dark:via-[#111110] dark:to-[#0d1020]" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-green)]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--accent-blue)]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent-gold)]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/25 rounded-full px-4 py-1.5 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-green)]" />
          <span className="text-sm font-medium text-[var(--accent-green)]">
            Evidence-based wellness — no fluff
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-tight mb-6"
        >
          Live Brighter.{" "}
          <span className="gradient-text">Age Smarter.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I&apos;ve spent four years testing supplements, tracking sleep, and reading the science so you don&apos;t have to. Here&apos;s everything I&apos;ve learned about energy, recovery, focus, and living well for longer.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-16"
        >
          <Link
            href="/ai-tools"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--accent-green)] text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[var(--accent-green)]/20"
          >
            <Sparkles className="w-4 h-4" />
            Try AI Wellness Tools
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--muted)] text-[var(--foreground)] font-medium border border-[var(--border)] hover:bg-[var(--border)] transition-colors"
          >
            Read the Research
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[var(--foreground)]">{stat.value}</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Hero image — split panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {[
            {
              img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=500&fit=crop&auto=format&q=80",
              alt: "Peaceful white linen bedroom with soft morning light streaming through curtains",
              label: "Better Sleep",
              icon: <Moon className="w-4 h-4" />,
              href: "/sleep",
              color: "from-blue-500/80",
            },
            {
              img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format&q=80",
              alt: "Athletic person running on scenic coastal path at golden hour",
              label: "Energy & Performance",
              icon: <Zap className="w-4 h-4" />,
              href: "/energy",
              color: "from-green-500/80",
              tall: true,
            },
            {
              img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop&auto=format&q=80",
              alt: "Person meditating peacefully in nature with soft bokeh background",
              label: "Recovery & Aging",
              icon: <TrendingUp className="w-4 h-4" />,
              href: "/recovery",
              color: "from-amber-500/80",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`group relative overflow-hidden rounded-2xl ${card.tall ? "sm:row-span-1" : ""}`}
            >
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${card.color} to-transparent opacity-70`} />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  {card.icon}
                  <span className="font-semibold text-sm">{card.label}</span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
