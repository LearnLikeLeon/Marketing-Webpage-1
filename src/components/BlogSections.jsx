"use client";

import Image from "next/image";

const posts = [
  {
    id: 1,
    href: "https://github.com/Songonge/Data-Analytics-Projects/tree/70fa3d5815628fde6f58dc81dca1ddf55b98193d/All%20Projects/Avocado%20Price%20Analysis",
    projectImageUrl:
      // "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Avocado+Price+Analysis/Avocado+Price+Analysis/Avocado+Price+Analysis+Dashboard.png",
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Avocado+Price+Analysis/Avocado+Price+Analysis/Avocado+Analysis+Dashboard.png",

    techStack: "Power BI",

    title: "Avocado Price Analysis",
    // href: "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Avocado+Price+Analysis/Avocado+Price+Analysis/Avocado+Price+Analysis.pdf",
    description:
      "This project aims to check what region in the USA has a high price of avocado and what number of bags of avocados were sold in the years 2015 to 2018.",
    date: "May, 2023",
    datetime: "2023-05-01",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },

  {
    id: 2,
    href: "https://github.com/Songonge/Data-Analytics-Projects/tree/70fa3d5815628fde6f58dc81dca1ddf55b98193d/All%20Projects/Cyclistic%20Rides%20Analysis",
    projectImageUrl:
      // "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Cyclistic+Rides+Analysis/Cyclistic+Ride+Analysis+Dashboard.png",
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Cyclistic+Rides+Analysis/Cyclistic+Analysis+Dashboard.png",
    techStack: "Excel",
    title: "Cyclistic Rides Analysis",
    // href: "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Cyclistic+Rides+Analysis/Cyclistic+Rides+Analysis+Report.pdf",
    description:
      "The purpose of this project is to understand how casual riders and annual members use Cyclistic bikes differently. This will help design a new marketing strategy to convert casual riders into annual members.",
    date: "April, 2022",
    datetime: "2022-04-01",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },

  {
    id: 3,
    href: "https://github.com/Songonge/Data-Analytics-Projects/tree/70fa3d5815628fde6f58dc81dca1ddf55b98193d/All%20Projects/HR%20Analytics",
    projectImageUrl:
      // "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/HR+Analytics/HR+Analytics/Demographic+Dashboard.png",
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/HR+Analytics/HR+Analytics/Demographic+-+Dashboard.png",
    techStack: "Power BI",
    title: "HR Analytics",
    // href: "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/HR+Analytics/HR+Analytics/HR+Analytics+Report.pdf",
    description:
      "The project focuses on data analytics and carefully plans to reveal patterns and insights hidden in complex datasets. I use Power BI to facilitate the extraction of critical insights.",
    date: "July, 2023",
    datetime: "2023-07-01",
    category: { title: "Human Resources", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },

  {
    id: 4,
    href: "https://github.com/Songonge/Data-Analytics-Projects/tree/70fa3d5815628fde6f58dc81dca1ddf55b98193d/All%20Projects/Sales%20Analysis",
    projectImageUrl:
      // "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Sales+Analysis/Sales+Analysis/Sales+Analysis+Dashboard.png",
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Sales+Analysis/Sales+Analysis/Sales+Dashboard.png",
    techStack: "Power BI",
    title: "Sales Analysis",
    // href: "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Sales+Analysis/Sales+Analysis/Sales+Analysis+Report.pdf",
    description:
      "The project dives into data sets about sales and focuses on analyzing the data to derive insights and propose actionable recommendations.",
    date: "June, 2023",
    datetime: "2023-06-16",
    category: { title: "Business Intelligence", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },

  {
    id: 5,
    href: "https://github.com/Songonge/Data-Analytics-Projects/tree/70fa3d5815628fde6f58dc81dca1ddf55b98193d/All%20Projects/Loan%20Analysis",
    projectImageUrl:
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Loan+Analysis/Loan+Analysis/Loan+Analysis+Dashboard.jpg",

    techStack: "Amazon QuickSight",

    title: "Loan Analysis",
    // href: "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Loan+Analysis/Loan+Analysis/Loan+Analysis+Report.pdf",
    description:
      "This project uses Generative BI in action with Amazon Q in QuickSight to provide loan analysis. It generates an executive summary from a loan analysis dashboard created using natural language.",
    date: "June, 2024",
    datetime: "2024-06-01",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },

  {
    id: 6,
    href: "https://github.com/Songonge/Data-Analytics-Projects/tree/70fa3d5815628fde6f58dc81dca1ddf55b98193d/All%20Projects/Donation%20Analysis",
    projectImageUrl:
      "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Donations+Analysis/Donations+Analysis/Donation+Analysis.png",
    techStack: "Tableau",
    title: "Donation Analysis",
    // href: "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/all-projects/Donations+Analysis/Donations+Analysis/Donations+Analysis+Report.pdf",
    description:
      "The Donation Analysis project evaluates donation patterns, donor behaviors, and fundraising effectiveness to optimize future campaigns and maximize contributions. It involves analyzing data on donation amounts, frequency, and donor demographics.",
    date: "July, 2024",
    datetime: "2024-07-30",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://website-image-1.s3.amazonaws.com/Data+analyst_Portfolio+Projects/Author_1.jpg",
    },
  },
];

export default function BlogSections() {
  return (
    <div className="bg-white py-24 sm:py-32 font-serif">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Project Showcases
          </h2>
          <p className="mt-2 indent-8 text-lg leading-8 text-gray-600 text-justify">
            A list of my top data analysis projects is given below. The
            technology stack used for some of these projects is:
            <b>
              <i>
                Excel, Power BI, Tableau, Amazon QuickSight, SQL, Python and
                R-Programming, and AWS.
              </i>
            </b>
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>

              <div className="items-center mx-auto">
                <Image
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src={`${post.projectImageUrl}`}
                  alt="An image of the final project"
                  width={250}
                  height={200}
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
                  {post.description}....
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
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
