import { Product } from "@/lib/types"
import { ProductCard } from "@/components/ui/ProductCard"

export function ProductGrid({ products, compact = false }: { products: Product[]; compact?: boolean }) {
  return (
    <div className={compact ? "grid sm:grid-cols-2 xl:grid-cols-4 gap-4" : "grid sm:grid-cols-2 xl:grid-cols-3 gap-6"}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variant={compact ? "compact" : "default"} />
      ))}
    </div>
  )
}
