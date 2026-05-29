import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, ChevronRight, Sparkles } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { ReadingProgress } from "@/components/ui/ReadingProgress"
import { Badge } from "@/components/ui/Badge"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug)
  if (!post) return { title: "Article not found" }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 2)

  return (
    <article className="bg-[var(--background)]">
      <ReadingProgress />
      <div className="pt-24 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Badge variant="green">{post.category}</Badge>
            <span className="text-sm text-[var(--muted-foreground)] flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readingTime} min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] leading-tight mb-5">{post.title}</h1>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-3xl mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-8">
            <Sparkles className="w-4 h-4 text-[var(--accent-green)]" />
            Written with a personal tone, but grounded in research and practical experience.
          </div>
          <img
            src={
              post.category === "sleep"
                ? "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1400&h=760&fit=crop&auto=format&q=80"
                : post.category === "energy"
                ? "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=1400&h=760&fit=crop&auto=format&q=80"
                : post.category === "recovery"
                ? "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1400&h=760&fit=crop&auto=format&q=80"
                : post.category === "aging"
                ? "https://images.unsplash.com/photo-1559181567-c3190938eff6?w=1400&h=760&fit=crop&auto=format&q=80"
                : "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&h=760&fit=crop&auto=format&q=80"
            }
            alt={post.imageAlt}
            className="w-full h-[280px] sm:h-[420px] object-cover rounded-3xl border border-[var(--border)]"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid lg:grid-cols-[0.76fr_0.24fr] gap-10">
        <div className="space-y-8">
          <section id="overview">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-3">Overview</h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              {post.personalNote} This article keeps the advice grounded: if something is only mildly useful, I say that. If something is genuinely high-ROI, I say that too.
            </p>
          </section>

          <section id="what-you-need-to-know">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-3">What you need to know</h2>
            <div className="space-y-3 text-[var(--muted-foreground)] leading-relaxed">
              <p>First, look at sleep and recovery before adding more products. Most people are trying to supplement around an avoidable problem.</p>
              <p>Second, pay attention to consistency. Wellness routines work best when they are boring enough to repeat.</p>
              <p>Third, use products with a clear purpose. Each item should solve a specific problem, not just decorate a stack.</p>
            </div>
          </section>

          <section id="practical-takeaways">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-3">Practical takeaways</h2>
            <ul className="space-y-2 text-[var(--muted-foreground)]">
              <li className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span>Keep the evening routine simple and repeatable.</span></li>
              <li className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span>Focus on products that support your baseline, not miracle fixes.</span></li>
              <li className="flex gap-2"><span className="text-[var(--accent-green)]">→</span><span>Use one change at a time so you can actually judge the result.</span></li>
            </ul>
          </section>

          <section id="affiliate-note" className="rounded-3xl border border-[var(--border)] bg-[var(--muted)] p-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">Affiliate note</h2>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              Some product mentions may link to affiliate partners. That does not change the editorial standard, and it does not affect the price you pay.
            </p>
          </section>
        </div>

        <aside className="space-y-4 sticky top-24 self-start">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-3">On this page</p>
            <nav className="space-y-2 text-sm">
              {[
                ["Overview", "#overview"],
                ["What you need to know", "#what-you-need-to-know"],
                ["Practical takeaways", "#practical-takeaways"],
                ["Affiliate note", "#affiliate-note"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="flex items-center justify-between gap-2 text-[var(--muted-foreground)] hover:text-[var(--accent-green)] transition-colors">
                  <span>{label}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </nav>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Related articles</p>
            <div className="space-y-3">
              {related.map((item) => (
                <Link key={item.id} href={`/blog/${item.slug}`} className="block text-sm text-[var(--muted-foreground)] hover:text-[var(--accent-green)] transition-colors">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}
