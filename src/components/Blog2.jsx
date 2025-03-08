import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogCard } from "../components/BlogCard";
import { getAllPosts } from "../staticFiles/posts";

export default async function Blog2() {
  const posts = await getAllPosts();

  return (
    <div className="container py-10 space-y-10">
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to Our Blog
        </h1>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl">
          Discover the latest insights, tutorials, and stories from our team.
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Latest Posts</h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
