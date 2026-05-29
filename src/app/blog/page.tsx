import type { Metadata } from "next"
import { SectionHero } from "@/components/sections/SectionHero"
import { blogPosts } from "@/lib/data"
import { BlogIndexClient } from "@/components/sections/BlogIndexClient"

export const metadata: Metadata = {
  title: "Blog",
  description: "A premium editorial blog covering sleep, energy, recovery, healthy aging, and focus.",
}

export default function BlogPage() {
  const featured = blogPosts.filter((post) => post.featured)

  return (
    <div>
      <SectionHero eyebrow="Blog" title="Editorial articles with a calmer point of view" description="Browse research-led articles, category filters, and practical insights written in a personal, more human tone." />
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Featured reading</p>
              <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-3">What readers start with</h2>
              <div className="space-y-4">
                {featured.map((post) => (
                  <div key={post.id} className="rounded-2xl bg-[var(--muted)] border border-[var(--border)] p-4">
                    <p className="text-sm font-medium text-[var(--foreground)]">{post.title}</p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">{post.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <BlogIndexClient posts={blogPosts} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
