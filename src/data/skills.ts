export interface Skill {
  name: string;
  iconName: string;
  level: number; // 1-100
  category: "frontend" | "backend" | "database" | "tools" | "devops";
  color: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "React.js",
    iconName: "SiReact",
    level: 95,
    category: "frontend",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    iconName: "SiNextdotjs",
    level: 92,
    category: "frontend",
    color: "#000000",
  },
  {
    name: "TypeScript",
    iconName: "SiTypescript",
    level: 90,
    category: "frontend",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    iconName: "SiJavascript",
    level: 95,
    category: "frontend",
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    iconName: "SiTailwindcss",
    level: 95,
    category: "frontend",
    color: "#06B6D4",
  },
  {
    name: "Redux",
    iconName: "SiRedux",
    level: 85,
    category: "frontend",
    color: "#764ABC",
  },
  {
    name: "Framer Motion",
    iconName: "SiFramer",
    level: 85,
    category: "frontend",
    color: "#0055FF",
  },
  {
    name: "HTML5",
    iconName: "SiHtml5",
    level: 98,
    category: "frontend",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    iconName: "SiCss3",
    level: 95,
    category: "frontend",
    color: "#1572B6",
  },
  {
    name: "Sass",
    iconName: "SiSass",
    level: 85,
    category: "frontend",
    color: "#CC6699",
  },
  {
    name: "Vite",
    iconName: "SiVite",
    level: 88,
    category: "frontend",
    color: "#646CFF",
  },

  // Backend
  {
    name: "Node.js",
    iconName: "SiNodedotjs",
    level: 92,
    category: "backend",
    color: "#339933",
  },
  {
    name: "Express.js",
    iconName: "SiExpress",
    level: 90,
    category: "backend",
    color: "#000000",
  },
  {
    name: "Socket.io",
    iconName: "SiSocketdotio",
    level: 80,
    category: "backend",
    color: "#010101",
  },
  {
    name: "Prisma",
    iconName: "SiPrisma",
    level: 82,
    category: "backend",
    color: "#2D3748",
  },

  // Database
  {
    name: "MongoDB",
    iconName: "SiMongodb",
    level: 90,
    category: "database",
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    iconName: "SiPostgresql",
    level: 78,
    category: "database",
    color: "#4169E1",
  },
  {
    name: "Redis",
    iconName: "SiRedis",
    level: 70,
    category: "database",
    color: "#DC382D",
  },

  // Tools
  {
    name: "Git",
    iconName: "SiGit",
    level: 92,
    category: "tools",
    color: "#F05032",
  },
  {
    name: "GitHub",
    iconName: "SiGithub",
    level: 95,
    category: "tools",
    color: "#181717",
  },
  {
    name: "Figma",
    iconName: "SiFigma",
    level: 75,
    category: "tools",
    color: "#F24E1E",
  },
  {
    name: "Postman",
    iconName: "SiPostman",
    level: 88,
    category: "tools",
    color: "#FF6C37",
  },
  {
    name: "npm",
    iconName: "SiNpm",
    level: 92,
    category: "tools",
    color: "#CB3837",
  },
  {
    name: "Yarn",
    iconName: "SiYarn",
    level: 88,
    category: "tools",
    color: "#2C8EBB",
  },
  {
    name: "Jest",
    iconName: "SiJest",
    level: 75,
    category: "tools",
    color: "#C21325",
  },
  {
    name: "Cypress",
    iconName: "SiCypress",
    level: 70,
    category: "tools",
    color: "#17202C",
  },

  // DevOps
  {
    name: "Docker",
    iconName: "SiDocker",
    level: 72,
    category: "devops",
    color: "#2496ED",
  },
  {
    name: "Vercel",
    iconName: "SiVercel",
    level: 90,
    category: "devops",
    color: "#000000",
  },
  {
    name: "AWS",
    iconName: "SiAmazonaws",
    level: 65,
    category: "devops",
    color: "#232F3E",
  },
  {
    name: "Linux",
    iconName: "SiLinux",
    level: 75,
    category: "devops",
    color: "#FCC624",
  },
];

export const skillCategories = [
  { id: "frontend", label: "Frontend", description: "Building beautiful user interfaces" },
  { id: "backend", label: "Backend", description: "Server-side development & APIs" },
  { id: "database", label: "Database", description: "Data storage & management" },
  { id: "tools", label: "Tools", description: "Development & productivity tools" },
  { id: "devops", label: "DevOps", description: "Deployment & infrastructure" },
] as const;

export type SkillCategory = (typeof skillCategories)[number]["id"];

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((skill) => skill.category === category);
}
