export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
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
    id: "senior-fullstack-dev",
    title: "Senior Full Stack Developer",
    company: "TechSolutions Inc.",
    companyUrl: "https://techsolutions.example.com",
    location: "Remote",
    type: "full-time",
    startDate: "2024-01",
    endDate: "Present",
    description:
      "Leading development of enterprise-grade web applications using the MERN stack and Next.js. Mentoring junior developers and establishing best practices for code quality and architecture.",
    responsibilities: [
      "Architected and developed scalable full-stack applications serving 100K+ users",
      "Led a team of 4 developers in building a real-time collaboration platform",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Conducted code reviews and established coding standards",
      "Optimized application performance achieving 95+ Lighthouse scores",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AWS", "Docker"],
    achievements: [
      "Reduced page load time by 40% through optimization",
      "Successfully delivered 3 major projects ahead of schedule",
      "Mentored 2 junior developers to mid-level positions",
    ],
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    company: "Digital Agency Pro",
    companyUrl: "https://digitalagencypro.example.com",
    location: "Dhaka, Bangladesh",
    type: "full-time",
    startDate: "2022-06",
    endDate: "2023-12",
    description:
      "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Collaborated with design team to implement pixel-perfect UIs with smooth animations.",
    responsibilities: [
      "Built responsive web applications for 10+ clients",
      "Developed RESTful APIs and integrated third-party services",
      "Implemented authentication systems with JWT and OAuth",
      "Collaborated with UI/UX designers to implement designs",
      "Maintained and improved legacy codebases",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
    achievements: [
      "Increased client satisfaction rate to 95%",
      "Delivered 15+ projects successfully",
      "Reduced bug reports by 30% through comprehensive testing",
    ],
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    company: "StartupHub",
    companyUrl: "https://startuphub.example.com",
    location: "Dhaka, Bangladesh",
    type: "full-time",
    startDate: "2021-03",
    endDate: "2022-05",
    description:
      "Focused on building interactive user interfaces with React and modern CSS. Worked closely with backend team to integrate APIs and ensure seamless user experiences.",
    responsibilities: [
      "Developed responsive UI components using React",
      "Integrated REST APIs with frontend applications",
      "Implemented state management with Redux",
      "Ensured cross-browser compatibility",
      "Participated in agile development processes",
    ],
    technologies: ["React", "JavaScript", "Redux", "CSS3", "Sass", "Git"],
    achievements: [
      "Built a component library used across 5 projects",
      "Improved mobile responsiveness by 50%",
    ],
  },
  {
    id: "freelance-developer",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    type: "freelance",
    startDate: "2020-01",
    endDate: "2021-02",
    description:
      "Provided web development services to small businesses and startups. Handled full project lifecycle from requirements gathering to deployment and maintenance.",
    responsibilities: [
      "Developed custom websites for small businesses",
      "Created e-commerce solutions using various platforms",
      "Provided ongoing maintenance and support",
      "Managed client relationships and project timelines",
      "Handled hosting setup and domain configuration",
    ],
    technologies: ["React", "Node.js", "MongoDB", "WordPress", "HTML/CSS", "JavaScript"],
    achievements: [
      "Completed 20+ projects with 5-star reviews",
      "Built a recurring client base of 10+ businesses",
    ],
  },
  {
    id: "web-dev-intern",
    title: "Web Development Intern",
    company: "TechStart Bangladesh",
    companyUrl: "https://techstart.example.com",
    location: "Dhaka, Bangladesh",
    type: "internship",
    startDate: "2019-06",
    endDate: "2019-12",
    description:
      "Gained hands-on experience in web development fundamentals. Learned industry best practices and contributed to live projects under senior developer guidance.",
    responsibilities: [
      "Assisted in frontend development tasks",
      "Learned version control with Git",
      "Participated in daily standups and sprint planning",
      "Fixed bugs and implemented minor features",
      "Documented code and created technical specifications",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git"],
    achievements: [
      "Received full-time offer after internship completion",
      "Contributed to 3 client projects",
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
