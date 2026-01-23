import { Metadata } from "next";

const siteConfig = {
  name: "Sohanur Rahman Jahin",
  title: "Sohanur Rahman Jahin | Full Stack MERN Developer",
  description:
    "Full Stack MERN Developer specializing in building scalable web applications with MongoDB, Express.js, React.js, Node.js, and Next.js. Expert in TypeScript, Tailwind CSS, and modern web development.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sohan.page",
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/sohan-99",
    linkedin: "https://linkedin.com/in/sohanur-tech",
    email: "sohan75632@gmail.com",
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
    "Software Engineer",
    "Tailwind CSS",
    "Web Applications",
    "Scalable Web Apps",
    "sohan.page",
    "Sohanur Rahman Jahin",
    "sohan-99",
    "sohanur-tech",
    "Sohanur Rahman Portfolio",
    "Md. Sohanur Rahman Jahin",
    "Jahin Sohanur Rahman",
    " Sohanur R. Jahin",
    "Sohanur Rahman Developer",
    "Sohanur Rahman Software Engineer",
    "Sohanur Rahman Full Stack",
    "Sohanur Rahman MERN",
    "sohan",
    "sohanur",
    "jahin",
    "Md. Jahin",
    "Rahman",
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
    icons: {
      icon: [
        {
          url: "/favicon.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/favicon.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
    manifest: "/manifest.json",
  };
}

export { siteConfig };
