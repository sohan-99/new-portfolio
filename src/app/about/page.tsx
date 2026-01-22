import { Metadata } from "next";
import AboutContent from "./AboutContent";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "About",
  description:
    "Learn more about Sohanur Rahman, a Full Stack MERN Developer with expertise in React, Node.js, MongoDB, and Next.js.",
  pathname: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
