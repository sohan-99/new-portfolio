export interface Skill {
  name: string;
  iconName: string;
  level: number; // 1-100
  category: "frontend" | "backend" | "database" | "tools";
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
    name: "Firebase",
    iconName: "SiFirebase",
    level: 85,
    category: "frontend",
    color: "#FFCA28",
  },
  {
    name: "Bootstrap",
    iconName: "SiBootstrap",
    level: 88,
    category: "frontend",
    color: "#7952B3",
  },
  {
    name: "Material UI",
    iconName: "SiMui",
    level: 82,
    category: "frontend",
    color: "#007FFF",
  },
  {
    name: "SCSS",
    iconName: "SiSass",
    level: 85,
    category: "frontend",
    color: "#CC6699",
  },
  {
    name: "Zustand",
    iconName: "SiReact",
    level: 80,
    category: "frontend",
    color: "#61DAFB",
  },
  {
    name: "TanStack Query",
    iconName: "SiReactquery",
    level: 78,
    category: "frontend",
    color: "#FF4154",
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
  {
    name: "NestJS",
    iconName: "SiNestjs",
    level: 75,
    category: "backend",
    color: "#E0234E",
  },
  {
    name: "JWT",
    iconName: "SiJsonwebtokens",
    level: 88,
    category: "backend",
    color: "#000000",
  },
  {
    name: "REST API",
    iconName: "SiPostman",
    level: 92,
    category: "backend",
    color: "#FF6C37",
  },
  {
    name: "OAuth",
    iconName: "SiAuth0",
    level: 80,
    category: "backend",
    color: "#EB5424",
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
  
  {
    name: "MySQL",
    iconName: "SiMysql",
    level: 82,
    category: "database",
    color: "#4479A1",
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

  // Database & DevOps
  {
    name: "Docker",
    iconName: "SiDocker",
    level: 72,
    category: "database",
    color: "#2496ED",
  },
  {
    name: "AWS",
    iconName: "FaAws",
    level: 65,
    category: "database",
    color: "#232F3E",
  },
  {
    name: "Linux",
    iconName: "SiLinux",
    level: 75,
    category: "database",
    color: "#FCC624",
  },
  {
    name: "Nginx",
    iconName: "SiNginx",
    level: 70,
    category: "database",
    color: "#009639",
  },
];

export const skillCategories = [
  { id: "frontend", label: "Frontend", description: "Building beautiful user interfaces" },
  { id: "backend", label: "Backend", description: "Server-side development & APIs" },
  { id: "database", label: "Database & DevOps", description: "Data storage, deployment & infrastructure" },
  { id: "tools", label: "Tools", description: "Development & productivity tools" },
] as const;

export type SkillCategory = (typeof skillCategories)[number]["id"];

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((skill) => skill.category === category);
}
