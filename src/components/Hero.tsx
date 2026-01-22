"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiDownload,
  FiChevronDown,
} from "react-icons/fi";
import { personalInfo, stats } from "@/data/personal";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/sohan-99", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/sohanur-tech", label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary-500/20 blur-3xl"
        />
      </div>

      <div className="relative container-custom py-32 md:py-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="text-slate-900 dark:text-white">Hi, I'm </span>
            <span className="gradient-text animate-gradient-x">
              {personalInfo.firstName}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={item} className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
              {personalInfo.role}
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8"
          >
            {personalInfo.tagline}. I craft{" "}
            <span className="text-primary-500 font-medium">performant</span>,{" "}
            <span className="text-secondary-500 font-medium">scalable</span>, and{" "}
            <span className="text-primary-500 font-medium">user-friendly</span> web
            applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link href="/contact" className="btn-primary group">
              Hire Me
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/projects" className="btn-secondary group">
              View Projects
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-outline group"
            >
              <FiDownload className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 mb-16"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-500 hover:border-primary-500 shadow-sm transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                  <span className="text-primary-500">{stat.suffix}</span>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-500 dark:text-slate-400"
          >
            <span className="text-sm">Scroll down</span>
            <FiChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
