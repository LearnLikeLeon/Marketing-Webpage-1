"use client";

import Image from "next/image";

const posts_classified = [
  {
    id: 1,
    href: "https://github.com/Songonge/Power-BI-Projects/blob/main/Credit%20Scoring%20Analysis/Credit_Scoring_Report.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/Credit+Scoring+Analysis/Credit+Scoring+Analysis+Dashboard.png",

    techStack: "Power BI",

    title: "Credit Risk Evaluation",
    description:
      "The project involves the analysis of credit scoring for the German Credit Data. It aimed at exploring the data to look for the greatest correlations with whether or not credit was granted and creating an interactive dashboard via Power BI to visualize the model results.",
    date: "December, 2024",
    datetime: "2024-12-15",
    category: { title: "Finance", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  {
    id: 2,
    href: "https://github.com/Songonge/Looker-Studio-Projects/blob/main/Employee%20Analysis/Employee_Analysis_Report.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Looker+Studio+Projects/Employee+Analysis+Dashboard.png",

    techStack: "Looker Studio",

    title: "Employee Demographics Analysis",
    description:
      "This project focuses on analyzing employee demographics within different departments and leadership roles for different countries and providing insights regarding leadership roles, years of experience, and industries.",
    date: "January, 2025",
    datetime: "2025-01-25",
    category: { title: "HR", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  {
    id: 3,
    href: "https://github.com/Songonge/Excel-Projects/blob/main/Sales%20Analysis/Sales_Analysis_Report.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Excel+Projects/Sales+Analysis+in+the+USA/Sales+Analysis+Dashboard.png",

    techStack: "Excel",

    title: "Sales Analysis in the USA",
    description:
      "This project focused on analyzing sales performance, customer segmentation, and product trends for a Superstore business. The project involved data cleaning, exploratory data analysis, visualization, and deriving insights to aid decision-making.",
    date: "January, 2025",
    datetime: "2025-01-29",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  {
    id: 4,
    href: "https://github.com/Songonge/AWS-Projects/blob/main/SAAS%20Sales%20Analysis/Sales_Analysis.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/AWS+QuickSight+Projects/SAAS+Sales+Analysis/SAAS+Sales+Analysis+Dashboard.png",
    techStack: "Amazon QuickSight",
    title: "SAAS Sales Analysis",
    description:
      "The project involved analyzing SAAS sales data, identifying key business metrics, and developing interactive visualizations using Amazon QuickSight which will serve as a decision-support tool, helping stakeholders identify patterns, optimize sales strategies, and enhance profitability.",
    date: "February, 2025",
    datetime: "2025-02-11",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  {
    id: 5,
    href: "https://github.com/Songonge/Tableau-Projects/blob/main/Donation%20Analysis/Donation_Analysis_Report.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Tableau+Projects/Donation+Analysis+Dashboard.png",
    techStack: "Tableau",
    title: "Donation Analysis",
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
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  {
    id: 6,
    href: "https://github.com/Songonge/Power-BI-Projects/blob/main/Spotify%20Songs%20Analysis%202023/Spotify_Songs_Analysis.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/Spotify+Songs+Analysis+2023/Spotify+Dashboard.png",
    techStack: "Power BI",
    title: "Spotify Songs Analysis",
    description:
      "This project provides an analysis of Spotify songs for the year 2023. The dataset includes famous songs listed on Spotify and describes each song's popularity and attributes on different music platforms.",
    date: "September, 2023",
    datetime: "2024-09-08",
    category: { title: "Business Intelligence", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  {
    id: 7,
    href: "https://github.com/Songonge/Power-BI-Projects/blob/main/Flight%20Delays%20and%20Cancelation%20Analysis/Flight_Delays_Analysis.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/Flight+Delays+Analysis/Flights+Analysis+Dashboard.png",

    techStack: "Power BI",

    title: "Flight Delays and Cancelation Analysis",
    description:
      "This project focuses on analyzing flight status based on data collected from different airports during the year 2015. The project was completed during my internship at CognoRise Infotech.",
    date: "June, 2024",
    datetime: "2024-06-01",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  {
    id: 8,
    href: "https://github.com/Songonge/Power-BI-Projects/blob/main/Netflix%20Content%20Analysis/Netflix%20Content%20Analysis.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/Netflix+Content+Analysis/Netflix+Dashboard.png",
    techStack: "Power BI",
    title: "Netflix Content Analysis",
    description:
      "This project provides a profound learning experience in data analytics by utilizing real-world data from Netflix to assess content from 2008 to 2021. It aims at implementing data analysis techniques to gain insights into watched trends, product performance, and customer preferences.",
    date: "May, 2024",
    datetime: "2024-05-20",
    category: { title: "Business Intelligence", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  {
    id: 9,
    href: "https://github.com/Songonge/Power-BI-Projects/blob/main/HR%20Analysis/HR_Analytics_Report.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/HR+Analysis/Demographic+-+Dashboard.png",
    techStack: "Power BI",
    title: "HR Analytics",
    description:
      "This project aims at evaluating the current human resources practices within the organization, identifying key areas for improvement, and providing actionable recommendations aimed at enhancing workforce efficiency, employee satisfaction, and overall organizational performance.",
    date: "May, 2024",
    datetime: "2024-05-20",
    category: { title: "Human Resources", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  {
    id: 10,
    href: "https://github.com/Songonge/Excel-Projects/blob/main/Netflix%20Content%20Analysis/Netflix_Content_Analysis.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Excel+Projects/Netflix+Content+Analysis/Nextflix+Dashboard+Excel.png",
    techStack: "Excel",
    title: "Netflix Content Analysis",
    description:
      "This project provides a profound learning experience in data analytics by utilizing real-world data from Netflix to assess content from 2008 to 2021. It aims at implementing data analysis techniques to gain insights into watched trends, product performance, and customer preferences.",
    date: "May, 2024",
    datetime: "2024-05-20",
    category: { title: "Business Intelligence", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  {
    id: 11,
    href: "https://github.com/Songonge/AWS-Projects/blob/main/Loan%20Analysis/Loan_Analysis.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/AWS+QuickSight+Projects/Loan+Analysis/Loan+Analysis+Dashboard.png",
    techStack: "Amazon QuickSight",
    title: "Loan Analysis",
    description:
      "This project examines trends in the loan domain to shed light on the debt challenges facing many consumers. By analyzing lending patterns across different locations and credit profiles, it aims to identify opportunities for more affordable options that can help ease financial burdens and set citizens up for long-term prosperity.",
    date: "June, 2024",
    datetime: "2024-06-27",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  {
    id: 12,
    href: "https://github.com/Songonge/Power-BI-Projects/blob/main/Sales%20Analysis/Sales_Analysis_Report.md",
    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/Sales+Analysis/Sales+Analysis+Dashboard.png",
    techStack: "Power BI",
    title: "Sales Analysis by Product",
    description:
      "The project is focused on data analytics and is carefully planned to reveal patterns and insights hidden in complex datasets. Power BI was used to facilitate the extraction of critical insights.",
    date: "April, 2024",
    datetime: "2024-04-01",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
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
              <i className="m-2">
                Excel, Power BI, Tableau, Amazon QuickSight, SQL, Python and
                R-Programming, and AWS.
              </i>
            </b>
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts_classified.map((post) => (
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
