"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from "react-icons/fi";
import { personalInfo } from "@/data/personal";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/sohan-99", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/sohanur-tech", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com/sohan-99", label: "Twitter" },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white">
                Sohan<span className="text-primary-500">.</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mb-6">
              {personalInfo.shortBio}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-500 hover:border-primary-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                {personalInfo.location}
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      personalInfo.availability === "available"
                        ? "bg-green-500"
                        : personalInfo.availability === "busy"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  />
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    {personalInfo.availability === "available"
                      ? "Available for work"
                      : personalInfo.availability === "busy"
                      ? "Limited availability"
                      : "Not available"}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm text-center sm:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            Built with{" "}
            <span className="text-red-500">♥</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/25 flex items-center justify-center hover:bg-primary-600 transition-colors duration-200 z-40"
        aria-label="Back to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
