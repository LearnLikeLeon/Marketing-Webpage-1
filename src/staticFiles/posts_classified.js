const posts_classified = [
  {
    slug: "tech-solution-analysis",
    id: 1,
    title: "Tech Solution Analysis",
    date: "March 7, 2025",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/Tech+Solution/Tech_Dashboard.png",

    description:
      "The goal of this data analysis report is to provide an in-depth review of project performance, budget allocation, and expenses. It analyzes various projects across multiple domains of technology, reflecting the organization’s strategic priorities. It ends by deriving meaningful insights and provide recommendations for the company to excel.",

    techStack: "Power BI",
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
    slug: "sales-analysis-in-the-usa",
    id: 2,
    title: "Sales Analysis in the USA",
    date: "January 29, 2025",
    author: "Dr. Edwige",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Excel+Projects/Sales+Analysis+in+the+USA/Sales+Analysis+Dashboard.png",

    description:
      "This project focuses on analyzing sales performance, customer segmentation, and product trends for a Superstore business. The dataset contained sales transactions across various regions, customer segments, product categories, and subcategories.",

    techStack: "Excel",
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
    slug: "saas-sales-analysis",
    id: 3,
    title: "SAAS Sales Analysis",
    date: "February 11, 2025",
    author: "Dr. Edwige",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/AWS+QuickSight+Projects/SAAS+Sales+Analysis/SAAS+Sales+Analysis+Dashboard.png",

    description:
      "This project aims to design and implement a Sales Analysis Dashboard that visualizes key performance indicators (KPIs) such as total sales, profit, customer distribution, and industry trends.",

    techStack: "Amazon QuickSight",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },
  //

  {
    slug: "employee-demographics-analysis",
    id: 4,
    title: "Employee Demographics Analysis",
    date: "January 25, 2025",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Looker+Studio+Projects/Employee+Analysis+Dashboard.png",

    description:
      "This project focuses on analyzing employee data from different countries and providing insights regarding leadership roles, years of experience, industries, and leadership positions.",

    techStack: "Looker Studio",
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
    slug: "credit-risk-evaluation",
    id: 5,
    title: "Credit Risk Evaluation",
    date: "December 12, 2024",
    author: "Dr. Edwige",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/Credit+Scoring+Analysis/Credit+Scoring+Analysis+Dashboard.png",

    description:
      "The project involves the analysis of credit scoring for the German Credit Data. It aimed at exploring the data to look for the greatest correlations with whether or not credit was granted and creating an interactive dashboard via Power BI to visualize the model results.",

    techStack: "Power BI",
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
    slug: "donation-analysis",
    id: 6,
    title: "Donation Analysis",
    date: "July 07, 2024",
    author: "Dr. Edwige",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Tableau+Projects/Donation+Analysis+Dashboard.png",

    description:
      "This project evaluates donation patterns, donor behaviors, and fundraising effectiveness to optimize future campaigns and maximize contributions. It involves analyzing data on donation amounts, frequency, and donor demographics.",

    techStack: "Tableau",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },

  //
  {
    slug: "spotify-songs-analysis",
    id: 7,
    title: "Spotify Songs Analysis",
    date: "September 8, 2024",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/Spotify+Songs+Analysis+2023/Spotify+Dashboard.png",

    description:
      "This project provides an analysis of Spotify songs for the year 2023. The dataset includes famous songs listed on Spotify and describes each song's popularity and attributes on different music platforms.",

    techStack: "Power BI",
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
    slug: "flight-delays-and-cancellations-analysis",
    id: 8,
    title: "Flight Delays and Cancellations Analysis",
    date: "June 01, 2024",
    author: "Dr. Edwige",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/Flight+Delays+Analysis/Flights+Analysis+Dashboard.png",

    description:
      "This project focuses on analyzing flight status based on data collected from different airports during the year 2015. It leverages data analytics to analyze flight status from different airports.",

    techStack: "Power BI",
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
    slug: "netflix-content-analysis",
    id: 9,
    title: "Netflix Content Analysis",
    date: "May 20, 2024",
    author: "Dr. Edwige",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Excel+Projects/Netflix+Content+Analysis/Nextflix+Dashboard.png",

    description:
      "This project provides a profound learning experience in data analytics by utilizing real-world data from Netflix to assess content from 2008 to 2021. It aims at implementing data analysis techniques to gain insights into watched trends, product performance, and customer preferences.",

    techStack: "Excel",
    category: { title: "Business Intelligence", href: "#" },
    author: {
      name: "Dr. Edwige",
      role: "Researcher / Analyst",
      href: "#",
      imageUrl:
        "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/author/Author_1.jpg",
    },
  },
  //

  {
    slug: "hr-analytics",
    id: 10,
    title: "HR Analytics",
    date: "May 10, 2024",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/HR+Analysis/Demographic+-+Dashboard.png",

    description:
      "This project aims at evaluating the current human resources practices within the organization, identifying key areas for improvement, and providing actionable recommendations aimed at enhancing workforce efficiency, employee satisfaction, and overall organizational performance.",

    techStack: "Power BI",
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
    slug: "loan-analysis",
    id: 11,
    title: "Loan Analysis",
    date: "June 25, 2024",
    author: "Dr. Edwige",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/AWS+QuickSight+Projects/Loan+Analysis/Loan+Analysis+Dashboard.png",

    description:
      "This project examines trends in the loan domain to shed light on the debt challenges facing many consumers. By analyzing lending patterns across different locations and credit profiles, it aims to identify opportunities for more affordable options that can help ease financial burdens and set citizens up for long-term prosperity.",

    techStack: "Amazon QuickSight",
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
    slug: "product-sales-analysis",
    id: 12,
    title: "Product Sales Analysis",
    date: "May 20, 2024",
    author: "Dr. Edwige",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/Sales+Analysis/Sales+Analysis+Dashboard.png",

    description:
      "This project leverages data analytics to reveal patterns and insights hidden in product sales datasets. Its aim id to extract valuable insights to enhance strategic decision-making.",

    techStack: "Power BI",
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

export async function getAllClassifiedPosts() {
  // Sort posts by date in descending order
  return [...posts_classified].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getClassifiedPostBySlug(slug) {
  return posts_classified.find((post) => post.slug === slug);
}
