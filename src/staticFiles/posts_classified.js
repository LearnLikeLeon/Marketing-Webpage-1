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
    category: { title: "Technology", href: "#" },
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
    id: 2,
    title: "Credit Risk Evaluation",
    date: "December 12, 2024",
    author: "Dr. Edwige",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/Credit+Scoring+Analysis/Credit+Scoring+Analysis+Dashboard.png",

    description:
      "The project involves the analysis of credit scoring for the German Credit Data. It aimed at exploring the data to look for the greatest correlations with whether or not credit was granted and creating an interactive dashboard via Power BI to visualize the model results.",

    techStack: "Power Bi",
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
    slug: "employee-demographics-analysis",
    id: 3,
    title: "Employee Demographics Analysis",
    date: "January 25, 2025",
    author: "Dr. Edwige",

    projectImageUrl:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Looker+Studio+Projects/Employee+Analysis+Dashboard.png",

    description:
      "This project focuses on analyzing employee data from different countries and providing insights regarding leadership roles, years of experience, industries, and leadership positions.",

    techStack: "Excel",
    category: { title: "HR", href: "#" },
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
