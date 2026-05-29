"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, ArrowRight, Quote } from "lucide-react"
import { BlogPost } from "@/lib/types"
import { Badge } from "./Badge"

const categoryImages: Record<string, string> = {
  sleep: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=500&fit=crop&auto=format&q=80",
  energy: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&auto=format&q=80",
  recovery: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop&auto=format&q=80",
  aging: "https://images.unsplash.com/photo-1559181567-c3190938eff6?w=800&h=500&fit=crop&auto=format&q=80",
  focus: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&h=500&fit=crop&auto=format&q=80",
  performance: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop&auto=format&q=80",
}

const categoryColors: Record<string, "green" | "blue" | "gold" | "muted"> = {
  sleep: "blue",
  energy: "green",
  recovery: "gold",
  aging: "gold",
  focus: "blue",
  performance: "green",
}

interface BlogCardProps {
  post: BlogPost
  variant?: "default" | "featured" | "compact"
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const imgSrc = categoryImages[post.category] || categoryImages.energy
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  if (variant === "compact") {
    return (
      <motion.article whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
        <Link
          href={`/blog/${post.slug}`}
          className="flex gap-4 group p-3 rounded-xl hover:bg-[var(--muted)] transition-colors"
        >
          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
            <img src={imgSrc} alt={post.imageAlt} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="flex-1 min-w-0">
            <Badge variant={categoryColors[post.category] || "muted"} className="mb-1.5">
              {post.category}
            </Badge>
            <h4 className="text-sm font-semibold text-[var(--foreground)] leading-snug line-clamp-2 group-hover:text-[var(--accent-green)] transition-colors">
              {post.title}
            </h4>
            <div className="flex items-center gap-1.5 mt-1">
              <Clock className="w-3 h-3 text-[var(--muted-foreground)]" />
              <span className="text-xs text-[var(--muted-foreground)]">{post.readingTime} min</span>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img
              src={imgSrc}
              alt={post.imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--card)]/20" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant={categoryColors[post.category] || "muted"}>{post.category}</Badge>
              <span className="text-xs text-[var(--muted-foreground)]">{formattedDate}</span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--foreground)] leading-snug mb-3 group-hover:text-[var(--accent-green)] transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">{post.excerpt}</p>
            <div className="bg-[var(--muted)] rounded-xl p-3 mb-5 border-l-2 border-[var(--accent-green)]">
              <div className="flex gap-2">
                <Quote className="w-3 h-3 text-[var(--accent-green)] mt-0.5 shrink-0" />
                <p className="text-xs text-[var(--muted-foreground)] italic leading-relaxed line-clamp-2">
                  {post.personalNote}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                <span className="text-xs text-[var(--muted-foreground)]">{post.readingTime} min read</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--accent-green)] hover:gap-2.5 transition-all"
              >
                Read article <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imgSrc}
          alt={post.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge variant={categoryColors[post.category] || "muted"}>{post.category}</Badge>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3 text-xs text-[var(--muted-foreground)]">
          <span>{formattedDate}</span>
          <span>·</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        <h3 className="font-semibold text-[var(--foreground)] leading-snug mb-2 group-hover:text-[var(--accent-green)] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-1.5 text-sm font-medium text-[var(--accent-green)] hover:gap-2.5 transition-all"
        >
          Read more <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.article>
  )
}
