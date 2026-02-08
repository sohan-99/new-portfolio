"use client";

import { useState, useEffect }from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects, type ProjectCategory } from "@/data/projects";

export default function ProjectsContent() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container-custom">
        {/* Header */}
        <SectionHeader
          badge="Portfolio"
          title="My Projects"
          description="Explore my latest work and side projects"
        />

        {/* Filter */}
        <ProjectFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
