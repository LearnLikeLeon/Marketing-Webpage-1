import React from "react";
import Image from "next/image";
import Link from "next/link";

export function BlogCard_2({ post }) {
  const coverImageStyle = {
    width: "auto",
    height: "auto",
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="relative  flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="flex items-center gap-x-4 text-xs">
          <time className="text-gray-500">{post.date}</time>
          <a
            href={post.category.href}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {post.category.title}
          </a>
        </div>

        <div className="relative mx-auto overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <Image
            className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
            src={`${post.projectImageUrl}`}
            alt="An image of the final project"
            width={250}
            height={200}
            style={coverImageStyle}
          />
        </div>

        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={post.href}>
              <span className="absolute inset-0" />
              {post.techStack} | {post.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 text-justify">
            {post.description.substring(0, 100)}...
          </p>
          <a href={post.href} className="block w-max text-cyan-600">
            Read more
          </a>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            width={50}
            height={50}
            alt="An image of the author"
            src={post.author.imageUrl}
            className="rounded-full bg-gray-50"
          />

          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href={post.author.href}>
                <span className="absolute inset-0" />
                {post.author.name}
              </a>
            </p>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
