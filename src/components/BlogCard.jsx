import React from "react";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({ post }) {
  const coverImageStyle = {
    width: "auto",
    height: "auto",
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-auto overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <Image
            src={post.coverImage}
            alt="ui/ux review check"
            width={250}
            height={200}
            style={coverImageStyle}
          />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {post.title}
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </p>
          <Link href={`/project/${post.slug}`} className="block">
            <h3 className="text-xl font-bold leading-tight hover:underline">
              Read more ...
            </h3>
          </Link>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center -space-x-3">
            {/* 1st Author */}
            <Image
              alt="Dr. Edwige"
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              width={250}
              height={200}
              src="https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg"
            />

            {/* 2nd Author */}

            {/* 
            <Image
              alt="Tania Andrew"
              // src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              src="https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/HR+Analysis/Demographic+-+Dashboard.png"
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              width={250}
              height={200}
            />
            */}
          </div>
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
            January 10
          </p>
        </div>
      </div>
    </div>
  );
}
