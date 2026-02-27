export interface Skill {
  name: string;
  iconName: string;
  level: number; // 1-100
  category: "frontend" | "backend" | "database" | "tools";
  color: string;
  url: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "React.js",
    iconName: "SiReact",
    level: 95,
    category: "frontend",
    color: "#61DAFB",
    url: "https://react.dev",
  },
  {
    name: "Next.js",
    iconName: "SiNextdotjs",
    level: 92,
    category: "frontend",
    color: "#000000",
    url: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    iconName: "SiTypescript",
    level: 90,
    category: "frontend",
    color: "#3178C6",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    iconName: "SiJavascript",
    level: 95,
    category: "frontend",
    color: "#F7DF1E",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Tailwind CSS",
    iconName: "SiTailwindcss",
    level: 95,
    category: "frontend",
    color: "#06B6D4",
    url: "https://tailwindcss.com",
  },
  {
    name: "Redux",
    iconName: "SiRedux",
    level: 85,
    category: "frontend",
    color: "#764ABC",
    url: "https://redux.js.org",
  },
  {
    name: "Framer Motion",
    iconName: "SiFramer",
    level: 85,
    category: "frontend",
    color: "#0055FF",
    url: "https://www.framer.com/motion",
  },
  {
    name: "HTML5",
    iconName: "SiHtml5",
    level: 98,
    category: "frontend",
    color: "#E34F26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    iconName: "SiCss3",
    level: 95,
    category: "frontend",
    color: "#1572B6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Sass",
    iconName: "SiSass",
    level: 85,
    category: "frontend",
    color: "#CC6699",
    url: "https://sass-lang.com",
  },
  
  {
    name: "Firebase",
    iconName: "SiFirebase",
    level: 85,
    category: "frontend",
    color: "#FFCA28",
    url: "https://firebase.google.com",
  },
  {
    name: "Bootstrap",
    iconName: "SiBootstrap",
    level: 88,
    category: "frontend",
    color: "#7952B3",
    url: "https://getbootstrap.com",
  },
  {
    name: "Material UI",
    iconName: "SiMui",
    level: 82,
    category: "frontend",
    color: "#007FFF",
    url: "https://mui.com",
  },
  {
    name: "SCSS",
    iconName: "SiSass",
    level: 85,
    category: "frontend",
    color: "#CC6699",
    url: "https://sass-lang.com",
  },
  {
    name: "Zustand",
    iconName: "SiReact",
    level: 80,
    category: "frontend",
    color: "#61DAFB",
    url: "https://zustand-demo.pmnd.rs",
  },
  {
    name: "TanStack Query",
    iconName: "SiReactquery",
    level: 78,
    category: "frontend",
    color: "#FF4154",
    url: "https://tanstack.com/query",
  },

  // Backend
  {
    name: "Node.js",
    iconName: "SiNodedotjs",
    level: 92,
    category: "backend",
    color: "#339933",
    url: "https://nodejs.org",
  },
  {
    name: "Express.js",
    iconName: "SiExpress",
    level: 90,
    category: "backend",
    color: "#000000",
    url: "https://expressjs.com",
  },
  {
    name: "Socket.io",
    iconName: "SiSocketdotio",
    level: 80,
    category: "backend",
    color: "#010101",
    url: "https://socket.io",
  },
  {
    name: "Prisma",
    iconName: "SiPrisma",
    level: 82,
    category: "backend",
    color: "#2D3748",
    url: "https://www.prisma.io",
  },
  {
    name: "NestJS",
    iconName: "SiNestjs",
    level: 75,
    category: "backend",
    color: "#E0234E",
    url: "https://nestjs.com",
  },
  {
    name: "JWT",
    iconName: "SiJsonwebtokens",
    level: 88,
    category: "backend",
    color: "#000000",
    url: "https://jwt.io",
  },
  {
    name: "REST API",
    iconName: "SiPostman",
    level: 92,
    category: "backend",
    color: "#FF6C37",
    url: "https://restfulapi.net",
  },
  {
    name: "OAuth",
    iconName: "SiAuth0",
    level: 80,
    category: "backend",
    color: "#EB5424",
    url: "https://oauth.net",
  },

  // Database
  {
    name: "MongoDB",
    iconName: "SiMongodb",
    level: 90,
    category: "database",
    color: "#47A248",
    url: "https://www.mongodb.com",
  },
  {
    name: "PostgreSQL",
    iconName: "SiPostgresql",
    level: 78,
    category: "database",
    color: "#4169E1",
    url: "https://www.postgresql.org",
  },
  {
    name: "Redis",
    iconName: "SiRedis",
    level: 70,
    category: "database",
    color: "#DC382D",
    url: "https://redis.io",
  },
  
  {
    name: "MySQL",
    iconName: "SiMysql",
    level: 82,
    category: "database",
    color: "#4479A1",
    url: "https://www.mysql.com",
  },
  

  // Tools
  {
    name: "Git",
    iconName: "SiGit",
    level: 92,
    category: "tools",
    color: "#F05032",
    url: "https://git-scm.com",
  },
  {
    name: "GitHub",
    iconName: "SiGithub",
    level: 95,
    category: "tools",
    color: "#181717",
    url: "https://github.com",
  },
  {
    name: "Figma",
    iconName: "SiFigma",
    level: 75,
    category: "tools",
    color: "#F24E1E",
    url: "https://www.figma.com",
  },
  {
    name: "Postman",
    iconName: "SiPostman",
    level: 88,
    category: "tools",
    color: "#FF6C37",
    url: "https://www.postman.com",
  },
  {
    name: "npm",
    iconName: "SiNpm",
    level: 92,
    category: "tools",
    color: "#CB3837",
    url: "https://www.npmjs.com",
  },
  {
    name: "Yarn",
    iconName: "SiYarn",
    level: 88,
    category: "tools",
    color: "#2C8EBB",
    url: "https://yarnpkg.com",
  },
  {
    name: "Jest",
    iconName: "SiJest",
    level: 75,
    category: "tools",
    color: "#C21325",
    url: "https://jestjs.io",
  },
  {
    name: "Cypress",
    iconName: "SiCypress",
    level: 70,
    category: "tools",
    color: "#17202C",
    url: "https://www.cypress.io",
  },

  // Database & DevOps
  {
    name: "Docker",
    iconName: "SiDocker",
    level: 72,
    category: "database",
    color: "#2496ED",
    url: "https://www.docker.com",
  },
  {
    name: "AWS",
    iconName: "FaAws",
    level: 65,
    category: "database",
    color: "#232F3E",
    url: "https://aws.amazon.com",
  },
  {
    name: "Linux",
    iconName: "SiLinux",
    level: 75,
    category: "database",
    color: "#FCC624",
    url: "https://www.linux.org",
  },
  {
    name: "Nginx",
    iconName: "SiNginx",
    level: 70,
    category: "database",
    color: "#009639",
    url: "https://nginx.org",
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
