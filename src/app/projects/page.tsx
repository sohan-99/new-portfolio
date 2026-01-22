import { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Projects",
  description:
    "Explore my portfolio of web development projects built with React, Next.js, Node.js, MongoDB, and other modern technologies.",
  pathname: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsContent />;
}
