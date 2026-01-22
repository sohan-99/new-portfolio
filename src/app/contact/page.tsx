import { Metadata } from "next";
import ContactContent from "./ContactContent";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Contact",
  description:
    "Get in touch with Sohanur Rahman for web development projects, collaborations, or any inquiries.",
  pathname: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
