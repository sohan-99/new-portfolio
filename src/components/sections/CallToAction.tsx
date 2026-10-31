"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { personalInfo } from "@/data/personal";

export default function CallToAction() {
  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/10 bg-slate-900 p-8 md:p-14 lg:p-20"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-60" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-72 bg-primary-400/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-20 w-96 h-72 bg-secondary-400/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/90 text-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400"></span>
              </span>
              Available for new opportunities
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              Let's Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/60 mb-10"
            >
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say
              hi, feel free to reach out!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="btn-primary group"
              >
                Get in Touch
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn border border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                <FiMail className="w-4 h-4" />
                {personalInfo.email}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
