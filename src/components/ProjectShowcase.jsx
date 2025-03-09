import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllClassifiedPosts } from "../staticFiles/posts_classified";
import { SingleProjectCard } from "../components/cards/SingleProjectCard";

export default async function ProjectShowcase() {
  const projects = await getAllClassifiedPosts();
  return (
    <div className="bg-white py-24 sm:py-10 font-serif">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Project Showcases
          </h2>
          <p className="mt-2 indent-8 text-lg leading-8 text-gray-600 text-justify">
            A list of my top data analysis projects is given below. The
            technology stack used for some of these projects is:
            <b>
              <i className="m-2">
                Excel, Power BI, Tableau, Amazon QuickSight, SQL, Python and
                R-Programming, and AWS.
              </i>
            </b>
          </p>
        </div>

        <section className="border-t border-gray-200">
          <div className="flex items-center justify-between m-4">
            <h2 className="text-2xl font-bold tracking-tight">Latest Posts</h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-lg font-semibold text-blue-600"
            >
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-8">
            {projects.slice(0, 3).map((post) => (
              <SingleProjectCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
