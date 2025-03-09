import { getAllClassifiedPosts } from "../../staticFiles/posts_classified";
import { SingleProjectCard } from "../../components/cards/SingleProjectCard";

export const metadata = {
  title: "Blog | Projects Blog",
  description: "Read all my completed projects posts",
};

export default async function BlogPage() {
  const projects = await getAllClassifiedPosts();

  return (
    <div className="flex flex-col justify-center mx-auto">
      <div className="justify-center mx-auto">
        <h1 className="text-3xl font-bold tracking-tight m-4">
          All Blog Posts
        </h1>
        <p className="text-muted-foreground mb-8">
          Browse through our collection of articles and tutorials
        </p>
      </div>
      <section className="mx-auto max-w-7xl m-8 ">
        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((post) => (
            <SingleProjectCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
