export interface Experience {
  id: string;
  title: string;
  company?: string;
  companyUrl?: string;
  location?: string;
  type: "full-time" | "part-time" | "contract" | "freelance" | "internship";
  startDate: string;
  endDate: string | "Present";
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    id: "fullstack-developer-araxlab",
    title: "Full Stack Developer",
    company: "Araxlab",
    location: "Remote",
    type: "full-time",
    startDate: "2025-12",
    endDate: "Present",
    description:
      "Working on full-stack web applications using modern JavaScript technologies. Responsible for developing features, maintaining code quality, and collaborating with a distributed team.",
    responsibilities: [
      "Developed and maintained full-stack features using Next.js and Node.js",
      "Worked with databases to manage and structure application data",
      "Collaborated with team members to plan and implement new features",
      "Reviewed code and followed best practices for clean architecture",
      "Improved application performance and user experience",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS",
      "Docker",
      "JWT",
      "Prisma",
      "Express.js",
      "Redux"
    ],
    achievements: [
      "Improved application performance through optimization",
      "Delivered multiple features within deadlines",
      "Helped maintain a stable and scalable codebase",
    ],
  },

  {
    id: "fullstack-developer-boomdevs",
    title: "Full Stack Developer",
    company: "BoomDevs",
    companyUrl: "https://boomdevs.com",
    location: "Bogura, Bangladesh",
    type: "full-time",
    startDate: "2025-06",
    endDate: "2025-12",
    description:
      "Worked on client-facing web applications with a focus on frontend development using Ant Design and backend integration with Python-based APIs.",
    responsibilities: [
      "Built responsive UI components using React and Ant Design",
      "Integrated frontend applications with Python-based REST APIs",
      "Implemented forms, tables, dashboards, and complex UI flows",
      "Worked closely with designers to ensure pixel-perfect UI",
      "Fixed UI bugs and improved usability across projects",
    ],
    technologies: [
      "Next.js",
      "Ant Design",
      "JavaScript",
      "TypeScript",
      "Python",
      "REST APIs",
      "GSAP",
      "Rtk Query",
      "Zustand",
    ],
    achievements: [
      "Successfully delivered multiple client projects",
      "Improved UI consistency using Ant Design components",
      "Reduced UI-related issues through better component structure",
    ],
  },

  {
    id: "freelance-developer",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    type: "freelance",
    startDate: "2024-08",
    endDate: "2025-06",
    description:
      "Provided web development services to small businesses and startups, handling development, deployment, and maintenance.",
    responsibilities: [
      "Built custom websites and web applications based on client needs",
      "Developed frontend interfaces using Next.js and Tailwind CSS",
      "Integrated backend functionality using Node.js and databases",
      "Communicated directly with clients to gather requirements",
      "Handled deployment, hosting, and basic maintenance",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "MySQL",
      "Firebase",
      "Socket.io",
      
    ],
    achievements: [
      "Completed multiple client projects successfully",
      "Built long-term relationships with repeat clients",
      "Delivered projects with positive client feedback",
    ],
  },

  {
    id: "web-dev-intern",
    title: "Web Development Intern",
    company: "GeekyAnts",
    companyUrl: "https://geekyants.com",
    location: "Remote",
    type: "internship",
    startDate: "2024-02",
    endDate: "2024-08",
    description:
      "Learned web development fundamentals and contributed to live projects under senior developer guidance.",
    responsibilities: [
      "Assisted in frontend development using React and Tailwind CSS",
      "Fixed bugs and implemented small features",
      "Used Git for version control and collaboration",
      "Participated in daily standups and sprint planning",
      "Helped document code and technical changes",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "MongoDB",
    ],
    achievements: [
      "Successfully completed internship program",
      "Contributed to multiple client projects",
      "Gained strong foundation in professional workflows",
    ],
  },
];

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "bsc-cse",
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    institution: "Bangladesh University of Engineering and Technology",
    location: "Dhaka, Bangladesh",
    startDate: "2016",
    endDate: "2020",
    grade: "CGPA: 3.75/4.00",
    description:
      "Focused on software engineering, data structures, algorithms, and web technologies. Participated in programming competitions and tech events.",
  },
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "meta-frontend",
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    issueDate: "2023-06",
    credentialUrl: "https://coursera.org/verify/professional-cert/example",
  },
  {
    id: "aws-cloud",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "2023-03",
    expiryDate: "2026-03",
    credentialUrl: "https://aws.amazon.com/verification",
  },
  {
    id: "mongodb-associate",
    name: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    issueDate: "2022-11",
    credentialUrl: "https://university.mongodb.com/certification",
  },
];
