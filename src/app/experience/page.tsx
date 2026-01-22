import { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Experience",
  description:
    "My professional experience as a Full Stack Developer, including work history, internships, and freelance projects.",
  pathname: "/experience",
});

export default function ExperiencePage() {
  return <ExperienceContent />;
}
