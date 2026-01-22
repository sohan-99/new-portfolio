export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  category: "frontend" | "fullstack" | "mern" | "backend";
  github?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
    longDescription:
      "Built a comprehensive e-commerce solution featuring user authentication with JWT, product catalog with advanced filtering, shopping cart with persistent storage, Stripe payment integration, order management, and admin dashboard for inventory control.",
    image: "/projects/ecommerce.jpg",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Stripe", "Tailwind CSS"],
    category: "mern",
    github: "https://github.com/sohanurrahman/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
    date: "2025-01",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    longDescription:
      "Developed a project management tool with real-time collaboration using Socket.io, drag-and-drop task boards, team workspaces, file attachments, deadline notifications, and comprehensive analytics dashboard.",
    image: "/projects/taskmanager.jpg",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redux"],
    category: "mern",
    github: "https://github.com/sohanurrahman/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
    date: "2024-11",
  },
  {
    id: "social-media-dashboard",
    title: "Social Media Dashboard",
    description:
      "A comprehensive social media analytics dashboard with data visualization and reporting features.",
    longDescription:
      "Created an analytics dashboard that aggregates data from multiple social platforms, featuring interactive charts with Chart.js, customizable widgets, automated report generation, and team collaboration features.",
    image: "/projects/dashboard.jpg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Chart.js", "Tailwind CSS"],
    category: "fullstack",
    github: "https://github.com/sohanurrahman/social-dashboard",
    liveUrl: "https://social-dashboard-demo.vercel.app",
    featured: true,
    date: "2024-09",
  },
  {
    id: "blog-platform",
    title: "Developer Blog Platform",
    description:
      "A modern blog platform with MDX support, syntax highlighting, and SEO optimization.",
    longDescription:
      "Built a performant blog platform with MDX for rich content, Prism.js for code highlighting, full-text search, RSS feed generation, and optimized for SEO with dynamic OG images.",
    image: "/projects/blog.jpg",
    techStack: ["Next.js", "TypeScript", "MDX", "Tailwind CSS", "Vercel"],
    category: "frontend",
    github: "https://github.com/sohanurrahman/dev-blog",
    liveUrl: "https://devblog-demo.vercel.app",
    featured: false,
    date: "2024-08",
  },
  {
    id: "real-estate-app",
    title: "Real Estate Listing App",
    description:
      "A property listing platform with advanced search, map integration, and virtual tour features.",
    longDescription:
      "Developed a real estate platform with property listings, advanced search with filters, Google Maps integration, virtual property tours, user favorites, and agent contact system.",
    image: "/projects/realestate.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Google Maps API", "Cloudinary"],
    category: "mern",
    github: "https://github.com/sohanurrahman/real-estate",
    liveUrl: "https://realestate-demo.vercel.app",
    featured: false,
    date: "2024-06",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracking App",
    description:
      "A health and fitness tracking application with workout logging, progress charts, and goal setting.",
    longDescription:
      "Created a fitness app with workout logging, exercise library, progress tracking with charts, goal setting, calorie tracking, and social features for workout sharing.",
    image: "/projects/fitness.jpg",
    techStack: ["React Native", "Node.js", "MongoDB", "Express", "Chart.js"],
    category: "fullstack",
    github: "https://github.com/sohanurrahman/fitness-tracker",
    featured: false,
    date: "2024-04",
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Generator",
    description:
      "A SaaS platform that helps developers create stunning portfolio websites without coding.",
    longDescription:
      "Built a portfolio generator SaaS with customizable templates, drag-and-drop editor, custom domain support, analytics, and one-click deployment to various platforms.",
    image: "/projects/portfolio.jpg",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Stripe", "AWS S3", "Tailwind CSS"],
    category: "mern",
    github: "https://github.com/sohanurrahman/portfolio-generator",
    liveUrl: "https://portfolio-gen-demo.vercel.app",
    featured: true,
    date: "2024-02",
  },
  {
    id: "chat-application",
    title: "Real-Time Chat App",
    description:
      "A real-time messaging application with group chats, file sharing, and video calls.",
    longDescription:
      "Developed a chat application with real-time messaging using WebSockets, group chat functionality, file and media sharing, video/voice calls with WebRTC, and end-to-end encryption.",
    image: "/projects/chat.jpg",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC", "Redis"],
    category: "mern",
    github: "https://github.com/sohanurrahman/chat-app",
    featured: false,
    date: "2024-01",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "mern", label: "MERN Stack" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]["id"];
