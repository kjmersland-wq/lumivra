import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { Star, ArrowRight, BadgeCheck } from "lucide-react"
import { SectionHero } from "@/components/sections/SectionHero"
import { sleepSupplementComparison, products } from "@/lib/data"

export const metadata: Metadata = {
  title: "Product Comparisons",
  description: "Clean, premium comparison layouts for sleep, focus, recovery, and longevity products.",
}

export default function ComparisonsPage() {
  const topProducts = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4)

  return (
    <div>
      <SectionHero eyebrow="Product Comparisons" title="Choose the right product with more confidence" description="A calm, premium comparison hub built for real decision-making. I keep the layouts readable on mobile, with tables and decision cues that stay useful on smaller screens." />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6">
            <Tabs defaultValue="sleep" className="w-full">
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[var(--muted)] p-2 rounded-2xl mb-6">
                <TabsTrigger value="sleep" className="rounded-xl px-3 py-2 text-sm data-[state=active]:bg-[var(--card)]">Sleep</TabsTrigger>
                <TabsTrigger value="energy" className="rounded-xl px-3 py-2 text-sm data-[state=active]:bg-[var(--card)]">Energy</TabsTrigger>
                <TabsTrigger value="recovery" className="rounded-xl px-3 py-2 text-sm data-[state=active]:bg-[var(--card)]">Recovery</TabsTrigger>
                <TabsTrigger value="longevity" className="rounded-xl px-3 py-2 text-sm data-[state=active]:bg-[var(--card)]">Longevity</TabsTrigger>
              </TabsList>
              <TabsContent value="sleep" className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[720px]">
                    <thead>
                      <tr className="text-left text-[var(--muted-foreground)] border-b border-[var(--border)]">
                        <th className="py-3 pr-4">Product</th>
                        <th className="py-3 pr-4">Brand</th>
                        <th className="py-3 pr-4">Rating</th>
                        <th className="py-3 pr-4">Onset</th>
                        <th className="py-3 pr-4">Best for</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sleepSupplementComparison.map((item) => (
                        <tr key={item.name} className="border-b border-[var(--border)] last:border-b-0">
                          <td className="py-4 pr-4 font-medium text-[var(--foreground)]">{item.name}</td>
                          <td className="py-4 pr-4 text-[var(--muted-foreground)]">{item.brand}</td>
                          <td className="py-4 pr-4 text-[var(--foreground)] flex items-center gap-1"><Star className="w-4 h-4 text-[var(--accent-gold)] fill-[var(--accent-gold)]" /> {item.rating}</td>
                          <td className="py-4 pr-4 text-[var(--muted-foreground)]">{item.onset}</td>
                          <td className="py-4 pr-4 text-[var(--muted-foreground)]">{item.verdict}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              {[
                { value: "energy", title: "Energy stack comparison" },
                { value: "recovery", title: "Recovery stack comparison" },
                { value: "longevity", title: "Longevity stack comparison" },
              ].map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <div className="grid md:grid-cols-2 gap-4">
                    {topProducts.map((product) => (
                      <div key={`${tab.value}-${product.id}`} className="rounded-2xl border border-[var(--border)] bg-[var(--muted)] p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-[var(--foreground)]">{product.name}</h3>
                            <p className="text-sm text-[var(--muted-foreground)]">{product.brand}</p>
                          </div>
                          <BadgeCheck className="w-5 h-5 text-[var(--accent-green)]" />
                        </div>
                        <p className="text-sm text-[var(--muted-foreground)] mt-3 leading-relaxed">{product.description}</p>
                        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--accent-green)]">Read review <ArrowRight className="w-4 h-4" /></div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}
