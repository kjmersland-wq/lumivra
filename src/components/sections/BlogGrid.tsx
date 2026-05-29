import { BlogPost } from "@/lib/types"
import { BlogCard } from "@/components/ui/BlogCard"

export function BlogGrid({ posts, featured = false }: { posts: BlogPost[]; featured?: boolean }) {
  return (
    <div className={featured ? "grid lg:grid-cols-2 gap-6" : "grid sm:grid-cols-2 xl:grid-cols-3 gap-6"}>
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} variant={featured && index === 0 ? "featured" : "default"} />
      ))}
    </div>
  )
}
