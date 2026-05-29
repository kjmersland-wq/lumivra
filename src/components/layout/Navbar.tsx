"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/sleep", label: "Sleep" },
  { href: "/energy", label: "Energy & Focus" },
  { href: "/recovery", label: "Recovery" },
  { href: "/aging", label: "Healthy Aging" },
  { href: "/comparisons", label: "Compare" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ", highlight: true },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "nav-blur bg-white dark:bg-[#0f100f] border-b border-[var(--border)] shadow-sm"
            : "nav-blur bg-white dark:bg-[#0f100f] border-b border-[var(--border)] shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--accent-green)] to-[var(--accent-blue)] flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                <Sparkles className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-[var(--foreground)] dark:text-[#f8f8f2] transition-colors duration-200 group-hover:text-[var(--accent-green)]">
                Lumivra
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "link-underline px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive && "is-active",
                      link.highlight
                        ? "text-[var(--accent-green)] bg-[var(--accent-green)]/10 hover:bg-[var(--accent-green)]/20"
                        : "text-[var(--foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] dark:text-white/95 dark:hover:text-white dark:font-semibold",
                      isActive && !link.highlight && "bg-[var(--muted)]"
                    )}
                  >
                    {link.highlight && <Sparkles className="inline w-3 h-3 mr-1 mb-0.5" />}
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors dark:text-[#e4e8dc] dark:hover:text-white"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}
              <Link
                href="/faq"
                className="btn-premium hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--accent-green)] text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[var(--accent-green)]/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                FAQ
              </Link>
              <button
                className="lg:hidden p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors dark:text-[#e4e8dc] dark:hover:text-white"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[var(--background)] z-50 lg:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
                <span className="font-semibold text-[var(--foreground)]">Lumivra</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-[var(--muted)] text-[var(--muted-foreground)]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-3 py-3 rounded-xl text-sm font-medium transition-colors",
                      link.highlight
                        ? "text-[var(--accent-green)] bg-[var(--accent-green)]/10"
                        : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-[var(--border)]">
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-3 rounded-xl text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)] block"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-3 rounded-xl text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)] block"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
