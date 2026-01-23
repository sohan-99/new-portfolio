export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  email: string;
  phone?: string;
  location: string;
  availability: "available" | "busy" | "unavailable";
  resumeUrl: string;
  bio: string;
  shortBio: string;
  socials: SocialLink[];
}

export const personalInfo: PersonalInfo = {
  name: "Sohanur Rahman Jahin",
  firstName: "Sohanur",
  lastName: "Rahman",
  role: "Full Stack MERN Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "sohan75632@gmail.com",
  phone: "+880 1722562608",
  location: "Bogura, Bangladesh",
  availability: "available",
  resumeUrl: "/resume.pdf",
  shortBio:
    "Passionate Full Stack Developer specializing in the MERN stack and Next.js. I build performant, scalable, and user-friendly web applications.",
  bio: `I'm a passionate Full Stack Developer with expertise in building modern web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js. With a strong foundation in both frontend and backend development, I create scalable, performant, and user-friendly solutions.

My journey in web development started with a curiosity about how websites work, which evolved into a career dedicated to crafting exceptional digital experiences. I believe in writing clean, maintainable code and following best practices in software development.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I'm always excited about new challenges and opportunities to grow as a developer.`,
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/sohan-99",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sohanur-tech",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sohanurrahman",
      icon: "twitter",
    },
    {
      name: "Email",
      url: "mailto:sohan75632@gmail.com",
      icon: "email",
    },
  ],
};

export const stats = [
  { label: "Years Experience", value: "5+", suffix: "" },
  { label: "Projects Completed", value: "50", suffix: "+" },
  { label: "Happy Clients", value: "30", suffix: "+" },
  { label: "GitHub Repos", value: "100", suffix: "+" },
];

export const whatIDo = [
  {
    title: "Full Stack Development",
    description:
      "Building complete web applications from database design to user interface using the MERN stack and Next.js.",
    icon: "code",
  },
  {
    title: "API Development",
    description:
      "Designing and developing RESTful APIs with proper authentication, validation, and documentation.",
    icon: "api",
  },
  {
    title: "Frontend Architecture",
    description:
      "Creating scalable frontend architectures with React, state management, and component libraries.",
    icon: "layout",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed, SEO, and accessibility to deliver the best user experience.",
    icon: "speed",
  },
];
