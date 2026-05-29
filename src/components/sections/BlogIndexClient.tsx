"use client"

import { useMemo, useState } from "react"
import { BlogPost } from "@/lib/types"
import { BlogGrid } from "@/components/sections/BlogGrid"
import { Badge } from "@/components/ui/Badge"

const categories = ["all", "sleep", "energy", "recovery", "aging", "focus"] as const

type Category = (typeof categories)[number]

export function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState<Category>("all")

  const filtered = useMemo(() => {
    if (category === "all") return posts
    return posts.filter((post) => post.category === category)
  }, [category, posts])

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              category === item
                ? "bg-[var(--accent-green)] text-white border-[var(--accent-green)]"
                : "bg-[var(--card)] text-[var(--muted-foreground)] border-[var(--border)] hover:text-[var(--foreground)]"
            }`}
          >
            {item === "all" ? "All" : item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
      <div className="mb-4">
        <Badge variant="blue">{filtered.length} articles</Badge>
      </div>
      <BlogGrid posts={filtered} />
    </div>
  )
}
