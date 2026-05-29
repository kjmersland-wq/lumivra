import { ReactNode } from "react"
import { Badge } from "@/components/ui/Badge"

interface SectionHeroProps {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

export function SectionHero({ eyebrow, title, description, children }: SectionHeroProps) {
  return (
    <section className="pt-28 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="green" className="mb-4">{eyebrow}</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight mb-5">
            {title}
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}
