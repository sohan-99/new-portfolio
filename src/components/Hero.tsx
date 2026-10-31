"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";
import { personalInfo, stats } from "@/data/personal";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/sohan-99", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/sohanur-tech", label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

const marquee = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Redux",
  "REST APIs",
  "Docker",
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative container-custom">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur text-sm text-slate-600 dark:text-slate-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-400" />
                </span>
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.95] text-slate-900 dark:text-white"
            >
              I build
              <br />
              <span className="gradient-text animate-gradient-x">digital products</span>
              <br />
              that last.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              I&apos;m <span className="text-slate-900 dark:text-white font-medium">{personalInfo.name}</span>, a{" "}
              {personalInfo.role.toLowerCase()} crafting fast, scalable and
              thoughtfully designed web apps with the MERN stack and Next.js.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/projects" className="btn-primary group">
                See my work
                <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </a>
              <div className="flex items-center gap-2 ml-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary-400 hover:border-primary-400/50 hover:-translate-y-0.5 transition-all"
                  >
                    <social.icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Portrait card */}
          <motion.div variants={item} className="lg:col-span-5 relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary-400/30 via-transparent to-secondary-400/30 blur-2xl" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800">
              <Image
                src="/sohan.png"
                alt={personalInfo.name}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-black/30 backdrop-blur-md px-4 py-3 text-white">
                <div>
                  <p className="font-display font-semibold leading-tight">{personalInfo.firstName} Rahman</p>
                  <p className="text-xs text-white/70 flex items-center gap-1 mt-0.5">
                    <FiMapPin className="w-3 h-3" /> {personalInfo.location}
                  </p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary-300">
                  {personalInfo.role}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] backdrop-blur divide-x divide-y md:divide-y-0 divide-slate-200 dark:divide-white/10 overflow-hidden"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 md:p-8">
              <div className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                {stat.value}
                <span className="text-primary-400">{stat.suffix}</span>
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-16 border-y border-slate-200 dark:border-white/10 py-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...marquee, ...marquee].map((name, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold text-slate-300 dark:text-slate-600 flex items-center gap-12"
            >
              {name}
              <span className="text-primary-400/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
