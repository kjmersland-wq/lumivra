import { cn } from "@/lib/utils"
import { ReactNode, ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gold"
  size?: "sm" | "md" | "lg"
  children: ReactNode
  asChild?: boolean
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary:
      "bg-[var(--accent-green)] text-white hover:opacity-90 active:scale-[0.98] shadow-lg shadow-[var(--accent-green)]/20",
    secondary:
      "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--border)] border border-[var(--border)]",
    ghost:
      "text-[var(--foreground)] hover:bg-[var(--muted)] border border-transparent hover:border-[var(--border)]",
    gold:
      "bg-gradient-to-r from-[var(--accent-gold)] to-amber-400 text-white hover:opacity-90 shadow-lg shadow-amber-500/20",
  }

  const sizes = {
    sm: "text-xs px-3 py-2",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-7 py-3.5",
  }

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
