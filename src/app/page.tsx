import type { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { NewsletterSignup } from "@/components/ui/NewsletterSignup"
import { BlogGrid } from "@/components/sections/BlogGrid"
import { ProductGrid } from "@/components/sections/ProductGrid"
import { products, blogPosts, routines } from "@/lib/data"
import Link from "next/link"
import { Badge } from "@/components/ui/Badge"
import { ChevronRight, Sparkles, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Wellness Affiliate Platform",
  description:
    "Lumivra helps you improve sleep, energy, recovery, focus, and healthy aging with evidence-based content and premium recommendations.",
}

export default function HomePage() {
  const featured = products.filter((product) => product.featured)
  const latest = blogPosts.filter((post) => post.featured)

  return (
    <div>
      <Hero />

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Top wellness picks this month",
                text: "A refined shortlist of products I would actually keep in my own stack.",
                href: "/comparisons",
              },
              {
                title: "Trending products",
                text: "What readers are asking about most right now — from sleep to longevity.",
                href: "/comparisons",
              },
              {
                title: "Featured wellness routines",
                text: "Practical routines built around energy, recovery, and deep sleep.",
                href: "/blog",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group premium-surface hover-lift shimmer-on-hover rounded-3xl bg-[var(--card)] border border-[var(--border)] p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="green">Insight</Badge>
                  <ChevronRight className="w-4 h-4 text-[var(--muted-foreground)] group-hover:text-[var(--accent-green)] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-8 flex-wrap">
            <div>
              <Badge variant="gold" className="mb-3">
                Top picks this month
              </Badge>
              <h2 className="text-3xl font-bold text-[var(--foreground)] mb-2">
                Best-in-class products, selected with care
              </h2>
              <p className="text-[var(--muted-foreground)] max-w-2xl">
                Premium products, honest pros and cons, and a tone that feels more like a trusted advisor than a sales page.
              </p>
            </div>
            <Link href="/comparisons" className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-green)]">
              View comparison hub <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          <ProductGrid products={featured} />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <Badge variant="blue" className="mb-3">
                Wellness routines
              </Badge>
              <h2 className="text-3xl font-bold text-[var(--foreground)] mb-3">
                Structured routines for sleep, recovery, and energy
              </h2>
              <p className="text-[var(--muted-foreground)] mb-6">
                These are simple systems I use myself. They are designed to be realistic, calm, and easy to fit into a busy week.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {routines.map((routine) => (
                  <div key={routine.id} className="premium-surface hover-lift rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                    <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2">
                      {routine.duration} · {routine.difficulty}
                    </p>
                    <h3 className="font-semibold text-[var(--foreground)] mb-2">{routine.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{routine.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="grid grid-cols-2 gap-3">
                <img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=500&fit=crop&auto=format&q=80" alt="Soft minimal bedroom with natural light" className="rounded-2xl h-48 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=600&h=500&fit=crop&auto=format&q=80" alt="Focused work desk with notebook and coffee" className="rounded-2xl h-48 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=500&fit=crop&auto=format&q=80" alt="Calm recovery and meditation scene" className="rounded-2xl h-48 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=500&fit=crop&auto=format&q=80" alt="Athletic energy and movement scene" className="rounded-2xl h-48 w-full object-cover" />
              </div>
              <div className="mt-5 flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Sparkles className="w-4 h-4 text-[var(--accent-green)]" /> Calm, intelligent, premium wellness editorial
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-8 flex-wrap">
            <div>
              <Badge variant="blue" className="mb-3">
                Latest articles
              </Badge>
              <h2 className="text-3xl font-bold text-[var(--foreground)] mb-2">
                Honest articles with a strong editorial point of view
              </h2>
            </div>
            <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-green)]">
              Open blog <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          <BlogGrid posts={latest} featured />
        </div>
      </section>

      <NewsletterSignup />
    </div>
  )
}
