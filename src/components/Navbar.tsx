"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated" && !!session;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex items-center justify-between gap-4 h-14 rounded-full border px-3 pl-4 transition-all duration-500",
          isScrolled
            ? "max-w-4xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-slate-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40"
            : "max-w-6xl bg-transparent border-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary-400/40 group-hover:ring-primary-400 transition">
            <Image
              src="/favicon.png"
              alt="Sohan"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
            sohanur<span className="text-primary-400">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3.5 py-1.5 group"
            >
              <span
                className={cn(
                  "relative z-10 text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                )}
              >
                {link.label}
              </span>
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-slate-900/5 dark:bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {isLoggedIn && (
            <Link
              href="/dashboard"
              className="hidden md:inline-flex px-3.5 py-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              Dashboard
            </Link>
          )}
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
          >
            Hire Me
          </Link>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden w-10 h-10 rounded-full bg-slate-900/5 dark:bg-white/10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-slate-900 shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-4 py-3 rounded-2xl font-display text-2xl font-semibold transition-colors duration-200",
                          pathname === link.href
                            ? "bg-primary-400/10 text-primary-500 dark:text-primary-300"
                            : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  {isLoggedIn && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.1 }}
                    >
                      <Link
                        href="/dashboard"
                        className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                      >
                        Dashboard
                      </Link>
                    </motion.div>
                  )}
                </nav>

                <div className="mt-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      href="/contact"
                      className="btn-primary w-full text-center"
                    >
                      Hire Me
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
