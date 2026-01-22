"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeader
          badge="Portfolio"
          title="Featured"
          titleHighlight="Projects"
          description="Check out some of my recent work that showcases my skills and expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/projects" className="btn-secondary group inline-flex">
            View All Projects
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
