import { Metadata } from "next";

const siteConfig = {
  name: "Md. Sohanur Rahman Jahin",
  title: "Sohanur Rahman | Full Stack MERN Developer",
  description:
    "Full Stack MERN Developer specializing in building scalable web applications with MongoDB, Express.js, React.js, Node.js, and Next.js. Expert in TypeScript, Tailwind CSS, and modern web development.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sohanurrahman.dev",
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/sohanurrahman",
    linkedin: "https://linkedin.com/in/sohanurrahman",
    email: "sohanurrahmans68@gmail.com",
  },
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "MongoDB",
    "Express.js",
    "JavaScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Sohanur Rahman",
    "Portfolio",
  ],
};

export function generateSEO({
  title,
  description,
  image,
  noIndex = false,
  pathname = "",
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  pathname?: string;
} = {}): Metadata {
  const seoTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  const seoDescription = description || siteConfig.description;
  const seoImage = image || siteConfig.ogImage;
  const url = `${siteConfig.url}${pathname}`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: seoTitle,
      description: seoDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: "@sohanurrahman",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
  };
}

export { siteConfig };
