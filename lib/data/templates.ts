import type { Template, Category } from "../types"

export const categories: Category[] = [
  {
    id: "React",
    name: "React",
    description: "Component-based UI library templates",
    icon: "⚛️",
    color: "bg-blue-500",
    templateCount: 12,
  },
  {
    id: "Next.js",
    name: "Next.js",
    description: "Full-stack React framework templates",
    icon: "▲",
    color: "bg-black",
    templateCount: 18,
  },
  {
    id: "Convex",
    name: "Convex",
    description: "Real-time backend platform templates",
    icon: "🔄",
    color: "bg-orange-500",
    templateCount: 8,
  },
  {
    id: "Vite",
    name: "Vite",
    description: "Fast build tool templates",
    icon: "⚡",
    color: "bg-purple-500",
    templateCount: 10,
  },
  {
    id: "PostgreSQL",
    name: "PostgreSQL",
    description: "Database-driven application templates",
    icon: "🐘",
    color: "bg-blue-600",
    templateCount: 15,
  },
  {
    id: "Tailwind CSS",
    name: "Tailwind CSS",
    description: "Utility-first CSS framework templates",
    icon: "🎨",
    color: "bg-cyan-500",
    templateCount: 25,
  },
  {
    id: "TanStack",
    name: "TanStack",
    description: "High-quality data management templates",
    icon: "📊",
    color: "bg-red-500",
    templateCount: 7,
  },
]

export const templates: Template[] = [
  {
    id: "nextjs-dashboard",
    name: "Next.js Admin Dashboard",
    description:
      "A comprehensive admin dashboard built with Next.js 15, featuring user management, analytics, and real-time data visualization. Includes authentication, role-based access control, and responsive design.",
    shortDescription: "Modern admin dashboard with analytics and user management",
    category: "Next.js",
    tags: ["dashboard", "admin", "analytics", "auth"],
    imageUrl: "/modern-admin-dashboard.png",
    demoUrl: "https://nextjs-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/vercel/nextjs-dashboard",
    author: "Vercel Team",
    authorAvatar: "/vercel-team-avatar.jpg",
    createdAt: "2024-01-15",
    updatedAt: "2024-12-01",
    featured: true,
    difficulty: "Intermediate",
    installInstructions:
      "Clone the repository, run npm install, configure environment variables, and start with npm run dev.",
    features: [
      "User authentication and authorization",
      "Real-time analytics dashboard",
      "Data visualization with charts",
      "Responsive design",
      "Dark/light theme support",
      "Role-based access control",
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "NextAuth.js"],
    license: "MIT",
  },
  {
    id: "react-ecommerce",
    name: "React E-commerce Store",
    description:
      "A fully functional e-commerce store built with React, featuring product catalog, shopping cart, checkout process, and payment integration. Optimized for performance and SEO.",
    shortDescription: "Complete e-commerce solution with cart and payments",
    category: "React",
    tags: ["ecommerce", "shopping", "payments", "catalog"],
    imageUrl: "/modern-ecommerce-interface.png",
    demoUrl: "https://react-ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/example/react-ecommerce",
    author: "Commerce Team",
    authorAvatar: "/commerce-team-avatar.jpg",
    createdAt: "2024-02-20",
    updatedAt: "2024-11-15",
    featured: true,
    difficulty: "Advanced",
    installInstructions:
      "Install dependencies with npm install, set up Stripe keys, configure database, and run npm start.",
    features: [
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Secure checkout process",
      "Payment integration with Stripe",
      "User accounts and order history",
      "Admin panel for product management",
    ],
    techStack: ["React 18", "Redux Toolkit", "React Router", "Stripe", "Firebase"],
    license: "MIT",
  },
  {
    id: "convex-chat",
    name: "Real-time Chat App",
    description:
      "A modern chat application powered by Convex for real-time messaging, file sharing, and user presence. Features include message reactions, typing indicators, and message history.",
    shortDescription: "Real-time chat with file sharing and presence",
    category: "Convex",
    tags: ["chat", "realtime", "messaging", "presence"],
    imageUrl: "/modern-chat-app.png",
    demoUrl: "https://convex-chat-demo.vercel.app",
    githubUrl: "https://github.com/example/convex-chat",
    author: "Convex Team",
    authorAvatar: "/convex-team-avatar.jpg",
    createdAt: "2024-03-10",
    updatedAt: "2024-12-05",
    featured: false,
    difficulty: "Intermediate",
    installInstructions:
      "Set up Convex backend, install dependencies, configure authentication, and start development server.",
    features: [
      "Real-time messaging",
      "File and image sharing",
      "User presence indicators",
      "Message reactions and replies",
      "Typing indicators",
      "Message search and history",
    ],
    techStack: ["Convex", "React", "TypeScript", "Tailwind CSS", "Clerk Auth"],
    license: "Apache 2.0",
  },
  {
    id: "vite-portfolio",
    name: "Developer Portfolio",
    description:
      "A sleek and fast developer portfolio built with Vite, showcasing projects, skills, and experience. Features smooth animations, dark mode, and optimized performance.",
    shortDescription: "Fast and modern developer portfolio site",
    category: "Vite",
    tags: ["portfolio", "developer", "showcase", "animations"],
    imageUrl: "/modern-developer-portfolio-website.jpg",
    demoUrl: "https://vite-portfolio-demo.vercel.app",
    githubUrl: "https://github.com/example/vite-portfolio",
    author: "Dev Studio",
    authorAvatar: "/dev-studio-avatar.jpg",
    createdAt: "2024-04-05",
    updatedAt: "2024-11-20",
    featured: false,
    difficulty: "Beginner",
    installInstructions:
      "Clone repository, run npm install, customize content in src/data, and build with npm run build.",
    features: [
      "Responsive design",
      "Smooth scroll animations",
      "Dark/light mode toggle",
      "Project showcase gallery",
      "Contact form integration",
      "SEO optimized",
    ],
    techStack: ["Vite", "React", "Framer Motion", "Tailwind CSS", "EmailJS"],
    license: "MIT",
  },
  {
    id: "postgres-blog",
    name: "Full-Stack Blog Platform",
    description:
      "A comprehensive blog platform with PostgreSQL backend, featuring user authentication, content management, comments system, and SEO optimization. Built for scalability and performance.",
    shortDescription: "Scalable blog platform with CMS features",
    category: "PostgreSQL",
    tags: ["blog", "cms", "postgresql", "fullstack"],
    imageUrl: "/modern-blog-platform.png",
    demoUrl: "https://postgres-blog-demo.vercel.app",
    githubUrl: "https://github.com/example/postgres-blog",
    author: "Blog Team",
    authorAvatar: "/blog-team-avatar.jpg",
    createdAt: "2024-05-12",
    updatedAt: "2024-12-03",
    featured: true,
    difficulty: "Advanced",
    installInstructions:
      "Set up PostgreSQL database, configure environment variables, run migrations, install dependencies, and start server.",
    features: [
      "Rich text editor for posts",
      "User authentication and profiles",
      "Comments and reactions system",
      "Tag-based categorization",
      "SEO optimization",
      "Admin dashboard for content management",
    ],
    techStack: ["Next.js", "PostgreSQL", "Prisma", "NextAuth.js", "Tailwind CSS"],
    license: "GPL-3.0",
  },
  {
    id: "tailwind-components",
    name: "UI Component Library",
    description:
      "A comprehensive collection of reusable UI components built with Tailwind CSS. Includes buttons, forms, modals, navigation, and layout components with extensive customization options.",
    shortDescription: "Comprehensive UI component library with Tailwind",
    category: "Tailwind CSS",
    tags: ["components", "ui", "library", "design-system"],
    imageUrl: "/ui-component-library-showcase.jpg",
    demoUrl: "https://tailwind-components-demo.vercel.app",
    githubUrl: "https://github.com/example/tailwind-components",
    author: "UI Team",
    authorAvatar: "/ui-team-avatar.jpg",
    createdAt: "2024-06-08",
    updatedAt: "2024-11-28",
    featured: false,
    difficulty: "Beginner",
    installInstructions: "Install via npm, import components, and customize with Tailwind CSS classes.",
    features: [
      "Over 50 reusable components",
      "Fully customizable with Tailwind",
      "TypeScript support",
      "Accessibility compliant",
      "Dark mode support",
      "Storybook documentation",
    ],
    techStack: ["React", "Tailwind CSS", "TypeScript", "Storybook", "Headless UI"],
    license: "MIT",
  },
  {
    id: "tanstack-table",
    name: "Advanced Data Table",
    description:
      "A powerful data table implementation using TanStack Table with features like sorting, filtering, pagination, column resizing, and virtual scrolling for large datasets.",
    shortDescription: "Feature-rich data table with virtual scrolling",
    category: "TanStack",
    tags: ["table", "data", "sorting", "filtering"],
    imageUrl: "/advanced-data-table-interface.jpg",
    demoUrl: "https://tanstack-table-demo.vercel.app",
    githubUrl: "https://github.com/example/tanstack-table",
    author: "Data Team",
    authorAvatar: "/data-team-avatar.jpg",
    createdAt: "2024-07-15",
    updatedAt: "2024-12-01",
    featured: false,
    difficulty: "Intermediate",
    installInstructions: "Install TanStack Table, set up data source, configure columns, and implement table features.",
    features: [
      "Advanced sorting and filtering",
      "Column resizing and reordering",
      "Virtual scrolling for performance",
      "Export to CSV/Excel",
      "Inline editing capabilities",
      "Responsive design",
    ],
    techStack: ["TanStack Table", "React", "TypeScript", "Tailwind CSS", "React Virtual"],
    license: "MIT",
  },
]

export const getFeaturedTemplates = (): Template[] => {
  return templates.filter((template) => template.featured)
}

export const getTemplatesByCategory = (category: string): Template[] => {
  return templates.filter((template) => template.category === category)
}

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find((template) => template.id === id)
}

export const searchTemplates = (query: string): Template[] => {
  const lowercaseQuery = query.toLowerCase()
  return templates.filter(
    (template) =>
      template.name.toLowerCase().includes(lowercaseQuery) ||
      template.description.toLowerCase().includes(lowercaseQuery) ||
      template.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
