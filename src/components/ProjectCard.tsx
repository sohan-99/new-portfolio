"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="card overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100 dark:bg-slate-700">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
            <span className="text-6xl font-bold text-slate-300 dark:text-slate-600">
              {project.title.charAt(0)}
            </span>
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="View on GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="View live demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="badge capitalize">{project.category}</span>
          </div>
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
