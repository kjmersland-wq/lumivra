export type Category =
  | "sleep"
  | "energy"
  | "recovery"
  | "aging"
  | "focus"
  | "performance"

export interface Product {
  id: string
  name: string
  brand: string
  category: Category
  rating: number
  reviewCount: number
  price: string
  originalPrice?: string
  description: string
  personalNote: string
  pros: string[]
  cons: string[]
  bestFor: string
  affiliateUrl: string
  imageAlt: string
  badge?: string
  featured?: boolean
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  personalNote: string
  category: Category
  readingTime: number
  publishedAt: string
  imageAlt: string
  tags: string[]
  featured?: boolean
}

export interface WellnessRoutine {
  id: string
  title: string
  description: string
  personalNote: string
  duration: string
  difficulty: "Enkel" | "Moderat" | "Avansert"
  category: Category
  steps: string[]
}
