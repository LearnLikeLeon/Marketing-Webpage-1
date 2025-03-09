import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, User } from "lucide-react";
import {
  getAllCompletedDetailedProjects,
  getProjectContentBySlug,
} from "@/staticFiles/projects_content";

export async function generateStaticParams() {
  const posts = await getAllCompletedDetailedProjects();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getProjectContentBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The post you are looking for does not exist",
    };
  }

  return {
    title: `${post.title} | ES Analysis Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getProjectContentBySlug(slug);
  const projectImageStyle = {
    width: "auto",
    height: "auto",
  };

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-10 max-w-7xl mx-auto">
      <div className="space-y-4 text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <p className="text-xl text-muted-foreground">{post.description}</p>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>

      {/*   Achieved Goals */}

      <h2 className="text-2xl font-bold"> Achieved Goals : </h2>
      <div className="prose prose-blue max-w-none m-4">
        {post.goals.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {post.projectImageUrl && (
        <div className=" flex mx-auto justify-center items-center m-10 rounded-lg overflow-hidden">
          <Image
            src={post.projectImageUrl || "/placeholder.svg"}
            alt={post.title}
            width={600}
            height={600}
            className="object-cover"
            priority
            style={projectImageStyle}
          />
        </div>
      )}

      {/*   Guided steps */}

      <h2 className="text-2xl font-bold">
        {" "}
        My steps to complete this project :{" "}
      </h2>
      <div className="prose prose-blue max-w-none m-4">
        {post.steps.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/*   Tools : */}

      <h2 className="text-2xl font-bold">
        {" "}
        Required Tools for this project :{" "}
      </h2>
      <div className="prose prose-blue max-w-none m-4">
        {post.tools.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/*   Conclusion */}

      <h2 className="text-2xl font-bold"> Conclusion : </h2>
      <div className="prose prose-blue max-w-none m-4">
        {post.conclusion.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div>
        <p>
          {" "}
          In case you would like to read more about this article, please do fill
          up the contact form available in my{" "}
          <a href="/" className="italic font-bold hover:underline">
            home page
          </a>
          . Thanks for reading....🤗👋
        </p>
      </div>
    </article>
  );
}
