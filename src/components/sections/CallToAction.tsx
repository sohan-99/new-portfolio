"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { personalInfo } from "@/data/personal";

export default function CallToAction() {
  return (
    <section className="section bg-slate-50 dark:bg-slate-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-500 p-8 md:p-12 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Available for new opportunities
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Let's Build Something{" "}
              <span className="text-white/90">Amazing Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 mb-8"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-medium rounded-xl hover:bg-white/90 transition-colors shadow-lg shadow-black/10 group"
              >
                Get in Touch
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
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
