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
  institutionUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
  achievements?: string[];
}

export const education: Education[] = [
  {
    id: "bsc-cse",
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    institution: "Pundra University of Science & Technology",
    institutionUrl: "https://pundrauniversity.ac.bd/",
    location: "Bangladesh",
    startDate: "2021",
    endDate: "2025",
    description:
      "Currently pursuing comprehensive computer science education with focus on software engineering, algorithms, data structures, and modern web technologies. Actively participating in programming competitions and tech events.",
    achievements: [
      "Maintained strong academic performance throughout the program",
      "Completed multiple software development projects",
      "Participated in programming competitions and hackathons",
      "Gained hands-on experience with modern web technologies",
    ],
  },
  {
    id: "hsc-science",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institution: "Moqbular Rahman Govt. College",
    institutionUrl: "https://mrgovtcollegepanchagarh.org/",
    location: "Panchagarh, Bangladesh",
    startDate: "2019",
    endDate: "2020",
    description:
      "Completed higher secondary education with focus on science subjects including Physics, Chemistry, Mathematics, and Biology. Developed strong analytical and problem-solving skills that laid the foundation for pursuing computer science.",
    achievements: [
      "Achieved strong results in science subjects",
      "Developed interest in mathematics and logical thinking",
      "Participated in academic competitions and science fairs",
      "Built foundation for higher education in technology",
    ],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    institution: "Thekorpara High School",
    institutionUrl: "https://thakarpara-high-school.vercel.app/",
    location: "Bangladesh",
    startDate: "2013",
    endDate: "2018",
    description:
      "Completed secondary education with comprehensive study of science subjects including Mathematics, Physics, Chemistry, and Biology. Built fundamental academic skills and developed curiosity for technology and problem-solving.",
    achievements: [
      "Successfully completed secondary education with science focus",
      "Developed strong foundation in mathematics and sciences",
      "Participated in school academic activities and events",
      "Cultivated interest in technology and computers",
    ],
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
    id: "web-development-programming-hero",
    name: "Complete Web Development Course",
    issuer: "Programming Hero",
    issueDate: "2023-08",
    credentialUrl: "https://drive.google.com/file/d/1S2zfnXCZezwsOCeaQliZMU4bsC4jHPgj/view?usp=sharing",
  },
  {
    id: "nasa-space-apps-2024",
    name: "NASA International Space Apps Challenge - Galactic Problem Solver",
    issuer: "NASA",
    issueDate: "2024-10",
    credentialUrl: "https://drive.google.com/file/d/1FBFWwyzUjYnA_sluD7GJ-GhHLlHz7cw8/view?usp=sharing",
  },
  {
    id: "react-native-ostad",
    name: "Workshop on Mobile App Development with React Native",
    issuer: "Ostad",
    issueDate: "2024-10",
    credentialUrl: "https://drive.google.com/file/d/12Fo68qN6YRjvpp_NWYC-57q7ElKPc0tb/view?usp=sharing",
  },
  {
    id: "smart-cv-grameenphone",
    name: "Smart CV",
    issuer: "Grameenphone Academy",
    issueDate: "2024-11",
    credentialUrl: "https://drive.google.com/file/d/1phqA45Kh-M4mbAR2cfpiynRYlHd_18-6/view?usp=sharing",
  },
  {
    id: "hackathon-pub-2024",
    name: "Hackathon Participation - PUB CSE FEST 2024 (Innov8ors)",
    issuer: "Pundra University of Science & Technology",
    issueDate: "2024-11",
    credentialUrl: "https://drive.google.com/file/d/11bzaWTX9meXU7L-EGoOwoM_iFw6D2wWA/view?usp=sharing",
  },
  {
    id: "programming-contest-pub-2024",
    name: "Programming Contest Participation - PUB CSE FEST 2024 (AlgoMystics)",
    issuer: "Pundra University of Science & Technology",
    issueDate: "2024-11",
    credentialUrl: "https://drive.google.com/file/d/11HlwU4dIVxNIHeC92nTRseH-LIaLJDcj/view?usp=sharing",
  },
  {
    id: "mern-fullstack-grameenphone",
    name: "Full Stack Development with MERN",
    issuer: "Grameenphone Academy (CodersTrust)",
    issueDate: "2024-12",
    credentialUrl: "https://drive.google.com/file/d/10ZYNHrFMmC4jMxb5Fby0pzdPzu8l9V4O/view?usp=sharing",
  },
  {
    id: "campus-ambassador-phitron",
    name: "Campus Ambassador (Phitronista'25) - Certificate of Recognition",
    issuer: "Phitron.io",
    issueDate: "2025-01",
    credentialUrl: "https://drive.google.com/file/d/1PYkFAfNhbmVy1jnWzckRSWQKvI1zdZoq/view?usp=sharing",
  },
  {
    id: "python-basics-uniathena",
    name: "Basics of Python",
    issuer: "UniAthena (Cambridge International Qualifications)",
    issueDate: "2025-03",
    credentialUrl: "https://drive.google.com/file/d/13aYKEZ4DUA7RcbauwsXN9IMHk1TNPT2U/view?usp=sharing",
  },
  {
    id: "html-css-udemy",
    name: "Master HTML and CSS by Building Real World Projects",
    issuer: "Udemy",
    issueDate: "2025-05",
    credentialUrl: "https://drive.google.com/file/d/1PZCm8VqXW36qDENA7ZYIOS5mRSMrdC_k/view?usp=sharing",
  },
  {
    id: "typescript-scrimba",
    name: "Learn TypeScript",
    issuer: "Scrimba",
    issueDate: "2025-06",
    credentialUrl: "https://drive.google.com/file/d/1RisxysWPNdkULSSxESSK32zlPcosulaB/view?usp=sharing",
  },
  {
    id: "prompt-engineering-scrimba",
    name: "Prompt Engineering for Web Developers",
    issuer: "Scrimba",
    issueDate: "2025-06",
    credentialUrl: "https://drive.google.com/file/d/1vgvUvUhyzFTHRsdwhAiumV6pW3C3Jn1c/view?usp=sharing",
  },
];
