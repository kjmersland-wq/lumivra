"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star, ThumbsUp, ThumbsDown, ExternalLink, Quote } from "lucide-react"
import { Product } from "@/lib/types"
import { Badge } from "./Badge"

const categoryImages: Record<string, string> = {
  sleep: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop&auto=format&q=80",
  energy: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format&q=80",
  recovery: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&auto=format&q=80",
  aging: "https://images.unsplash.com/photo-1559181567-c3190938eff6?w=600&h=400&fit=crop&auto=format&q=80",
  focus: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=600&h=400&fit=crop&auto=format&q=80",
  performance: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&auto=format&q=80",
}

const badgeVariant: Record<string, "green" | "blue" | "gold" | "muted"> = {
  "Editor's Pick": "green",
  "Top Rated": "blue",
  "Best Value": "gold",
  "Longevity Pick": "gold",
  "Focus Favorite": "blue",
  "Most Popular": "green",
}

interface ProductCardProps {
  product: Product
  variant?: "default" | "compact"
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const imgSrc = categoryImages[product.category] || categoryImages.energy

  if (variant === "compact") {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="relative h-36 overflow-hidden">
          <img
            src={imgSrc}
            alt={product.imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          {product.badge && (
            <div className="absolute top-3 left-3">
              <Badge variant={badgeVariant[product.badge] || "muted"}>{product.badge}</Badge>
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs text-[var(--muted-foreground)] mb-1">{product.brand}</p>
          <h3 className="font-semibold text-sm text-[var(--foreground)] mb-2 leading-snug">{product.name}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-[var(--accent-gold)] fill-[var(--accent-gold)]" />
              <span className="text-xs font-medium text-[var(--foreground)]">{product.rating}</span>
              <span className="text-xs text-[var(--muted-foreground)]">({product.reviewCount.toLocaleString()})</span>
            </div>
            <span className="font-bold text-[var(--foreground)] text-sm">{product.price}</span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imgSrc}
          alt={product.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.badge && (
            <Badge variant={badgeVariant[product.badge] || "muted"}>{product.badge}</Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-black/80 rounded-lg px-2 py-1">
          <span className="font-bold text-[var(--foreground)] text-sm">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-[var(--muted-foreground)] line-through ml-1">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="mb-3">
          <p className="text-xs font-medium text-[var(--accent-green)] uppercase tracking-wider mb-1">
            {product.brand}
          </p>
          <h3 className="font-semibold text-lg text-[var(--foreground)] leading-snug">{product.name}</h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= Math.floor(product.rating)
                    ? "text-[var(--accent-gold)] fill-[var(--accent-gold)]"
                    : "text-[var(--border)] fill-[var(--border)]"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-[var(--foreground)]">{product.rating}</span>
          <span className="text-sm text-[var(--muted-foreground)]">
            ({product.reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Personal note */}
        <div className="bg-[var(--muted)] rounded-xl p-4 mb-4 border-l-2 border-[var(--accent-green)]">
          <div className="flex gap-2">
            <Quote className="w-3.5 h-3.5 text-[var(--accent-green)] mt-0.5 shrink-0" />
            <p className="text-xs text-[var(--muted-foreground)] italic leading-relaxed">
              {product.personalNote}
            </p>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <ThumbsUp className="w-3.5 h-3.5 text-[var(--accent-green)]" />
              <span className="text-xs font-semibold text-[var(--foreground)]">Pros</span>
            </div>
            <ul className="space-y-1">
              {product.pros.slice(0, 3).map((pro) => (
                <li key={pro} className="text-xs text-[var(--muted-foreground)] flex gap-1.5">
                  <span className="text-[var(--accent-green)] mt-0.5">+</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <ThumbsDown className="w-3.5 h-3.5 text-red-400" />
              <span className="text-xs font-semibold text-[var(--foreground)]">Cons</span>
            </div>
            <ul className="space-y-1">
              {product.cons.map((con) => (
                <li key={con} className="text-xs text-[var(--muted-foreground)] flex gap-1.5">
                  <span className="text-red-400 mt-0.5">−</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Best for */}
        <div className="bg-[var(--accent-green)]/5 border border-[var(--accent-green)]/20 rounded-xl px-3 py-2 mb-4">
          <p className="text-xs font-medium text-[var(--accent-green)]">
            Best for: <span className="text-[var(--foreground)]">{product.bestFor}</span>
          </p>
        </div>

        {/* CTA */}
        <Link
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[var(--accent-green)] text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity"
        >
          Check Price
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.article>
  )
}
