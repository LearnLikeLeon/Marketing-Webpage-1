// Mock data for blog posts
const posts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2023-04-18",
    author: "John Doe",
    excerpt:
      "Learn how to build modern web applications with Next.js, the React framework for production.",
    content: `
          Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.
    
          Next.js provides a solution to all of these problems. But more importantly, it puts you and your team in the pit of success when building React applications.
    
          Next.js aims to have best-in-class developer experience and many built-in features, such as:
    
          - An intuitive page-based routing system (with support for dynamic routes)
          - Pre-rendering, both static generation (SSG) and server-side rendering (SSR) are supported on a per-page basis
          - Automatic code splitting for faster page loads
          - Client-side routing with optimized prefetching
          - Built-in CSS and Sass support, and support for any CSS-in-JS library
          - Development environment with Fast Refresh support
          - API routes to build API endpoints with Serverless Functions
          - Fully extendable
    
          Next.js is used in tens of thousands of production-facing websites and web applications, including many of the world's largest brands.
        `,
    // coverImage: "/placeholder.svg?height=600&width=800",
    coverImage:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/HR+Analysis/Demographic+-+Dashboard.png",
    readingTime: 5,
    tags: ["React", "Next.js", "Web Development"],
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    date: "2023-05-22",
    author: "Jane Smith",
    excerpt:
      "Discover how to build beautiful user interfaces quickly with Tailwind CSS utility-first approach.",
    content: `
          Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
    
          Instead of opinionated predesigned components, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.
    
          Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
    
          It's fast, flexible, and reliable — with zero-runtime.
    
          Tailwind CSS is different from frameworks like Bootstrap, Foundation, or Bulma in that it's not a UI kit. It doesn't have a default theme, and there are no built-in UI components. It comes with a menu of predesigned widgets to build your site with, but doesn't impose design decisions that are difficult to undo.
    
          If you're looking for a framework that comes with a menu of predesigned widgets to build your site with, Tailwind might not be the right framework for you. But if you want a framework that enables you to design custom UIs with speed and ease, then Tailwind is just what you're looking for.
        `,
    // coverImage: "/placeholder.svg?height=600&width=800",
    coverImage:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/HR+Analysis/Demographic+-+Dashboard.png",
    readingTime: 7,
    tags: ["CSS", "Tailwind", "Design"],
  },
  {
    slug: "building-a-blog-with-nextjs",
    title: "Building a Blog with Next.js",
    date: "2023-06-10",
    author: "Alex Johnson",
    excerpt:
      "Step-by-step guide to creating your own blog using Next.js, MDX, and Tailwind CSS.",
    content: `
          Creating a blog with Next.js is a great way to showcase your writing while learning modern web development techniques. In this guide, we'll walk through the process of building a blog from scratch.
    
          We'll cover:
          
          1. Setting up a Next.js project
          2. Creating dynamic routes for blog posts
          3. Using MDX for writing content
          4. Styling with Tailwind CSS
          5. Adding features like search and categories
          6. Deploying your blog to Vercel
    
          Next.js is perfect for blogs because it provides both static site generation for fast page loads and server-side rendering when you need it. This means your blog will be blazing fast and SEO-friendly.
    
          With MDX, you can write your blog posts in Markdown but also include React components when you need more complex features. This gives you the simplicity of Markdown with the power of React.
    
          Tailwind CSS makes styling your blog straightforward with its utility-first approach. You can create a beautiful, responsive design without writing custom CSS.
    
          By the end of this guide, you'll have a fully functional blog that you can continue to customize and expand with new features.
        `,
    // coverImage: "/placeholder.svg?height=600&width=800",
    coverImage:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/HR+Analysis/Demographic+-+Dashboard.png",
    readingTime: 10,
    tags: ["Next.js", "MDX", "Blog"],
  },
  {
    slug: "api-routes-in-nextjs",
    title: "Creating API Routes in Next.js",
    date: "2023-07-05",
    author: "Sam Wilson",
    excerpt:
      "Learn how to build backend functionality directly in your Next.js application using API routes.",
    content: `
          Next.js has a built-in API routes feature that allows you to create serverless functions as part of your Next.js application. This means you can build your frontend and backend within the same project.
    
          API routes provide a straightforward solution to building your API with Next.js. Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page.
    
          For example, the following API route pages/api/hello.js returns a JSON response with a status code of 200:
    
          \`\`\`
          export default function handler(req, res) {
            res.status(200).json({ name: 'John Doe' })
          }
          \`\`\`
    
          API routes can be dynamic, just like pages. For instance, if you create a file called pages/api/posts/[id].js, then the route /api/posts/1, /api/posts/abc, etc. will all be handled by that file.
    
          You can use API routes for various purposes:
          
          - Creating a public API for your application
          - Handling form submissions
          - Integrating with third-party services
          - Server-side authentication
          - And much more
    
          With API routes, you don't need to set up a separate backend server for simple applications, which can significantly simplify your development process.
        `,
    // coverImage: "/placeholder.svg?height=600&width=800",
    coverImage:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/HR+Analysis/Demographic+-+Dashboard.png",
    readingTime: 8,
    tags: ["Next.js", "API", "Backend"],
  },
  {
    slug: "responsive-design-principles",
    title: "Responsive Design Principles for Modern Web Apps",
    date: "2023-08-12",
    author: "Emma Davis",
    excerpt:
      "Essential principles and techniques for creating responsive web applications that work on any device.",
    content: `
          Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It's essential in today's world where users access websites from devices of all shapes and sizes.
    
          Here are some key principles of responsive design:
    
          1. Fluid Grids: Use relative units like percentages instead of fixed units like pixels for layout elements.
    
          2. Flexible Images: Images should adapt to fit their containers and not overflow their boundaries.
    
          3. Media Queries: Use CSS media queries to apply different styles based on the device characteristics.
    
          4. Mobile-First Approach: Design for mobile devices first, then enhance the design for larger screens.
    
          5. Touch-Friendly Interface: Ensure interactive elements are large enough and have enough spacing for touch interactions.
    
          6. Performance Optimization: Optimize performance for mobile devices with potentially slower connections.
    
          7. Content Prioritization: Determine what content is most important and ensure it's accessible on all devices.
    
          When implementing responsive design, tools like Tailwind CSS can be incredibly helpful. Tailwind provides utility classes that make it easy to create responsive layouts without writing custom media queries.
    
          For example, with Tailwind, you can use classes like 'sm:flex' to apply flex display only on small screens and above, or 'lg:hidden' to hide elements on large screens.
    
          By following these principles and using the right tools, you can create web applications that provide an optimal viewing experience across a wide range of devices.
        `,
    // coverImage: "/placeholder.svg?height=600&width=800",
    coverImage:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/HR+Analysis/Demographic+-+Dashboard.png",
    readingTime: 6,
    tags: ["Responsive Design", "CSS", "UX"],
  },
  {
    slug: "state-management-in-react",
    title: "State Management in React Applications",
    date: "2023-09-20",
    author: "Michael Brown",
    excerpt:
      "Compare different state management solutions for React applications and learn when to use each one.",
    content: `
          State management is a critical aspect of building React applications, especially as they grow in complexity. There are several approaches to managing state in React, each with its own strengths and use cases.
    
          1. Local Component State: React's built-in useState hook is perfect for managing state that belongs to a single component. It's simple and doesn't require any additional libraries.
    
          2. Context API: React's Context API allows you to share state across multiple components without prop drilling. It's great for global state that doesn't change frequently, like user authentication or theme preferences.
    
          3. Redux: A popular state management library that implements a predictable state container. Redux is ideal for large applications with complex state logic and frequent updates.
    
          4. Zustand: A minimalist state management solution that uses hooks. It's simpler than Redux but still powerful enough for most applications.
    
          5. Jotai: An atomic approach to state management, where each piece of state is an atom. This makes it easy to compose and reuse state logic.
    
          6. React Query: Specifically designed for managing server state (data fetched from an API). It handles caching, background updates, and stale data automatically.
    
          When choosing a state management solution, consider:
          
          - The size and complexity of your application
          - How frequently the state changes
          - Whether the state needs to be shared across many components
          - The learning curve for your team
          - Performance requirements
    
          For many applications, starting with local state and Context API is sufficient. As your application grows, you can introduce more sophisticated solutions like Redux or Zustand for specific parts of your state.
    
          Remember that you don't have to use a single solution for all state in your application. It's common to use different approaches for different types of state.
        `,
    // coverImage: "/placeholder.svg?height=600&width=800",
    coverImage:
      "https://esanalysis-public-files.s3.us-east-2.amazonaws.com/website/all-projects/Power+BI+Projects/HR+Analysis/Demographic+-+Dashboard.png",
    readingTime: 9,
    tags: ["React", "State Management", "Redux"],
  },
];

export async function getAllPosts() {
  // Sort posts by date in descending order
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
