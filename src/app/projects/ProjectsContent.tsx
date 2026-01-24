"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProjectsContent() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleFilterChange = (category: ProjectCategory) => {
    setActiveFilter(category);
    setVisibleCount(6);
  };

  return (
    <div className="pt-20 md:pt-24">
      <section className="py-12 bg-gradient-mesh">
        <div className="container-custom">
          <SectionHeader
            badge="My Work"
            title="Featured"
            titleHighlight="Projects"
            description="A collection of my best work showcasing my skills in full-stack development, from concept to deployment."
          />

          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
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

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}

          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-12"
            >
              <button onClick={handleLoadMore} className="btn-secondary">
                Load More Projects
              </button>
            </motion.div>
          )}

          {!hasMore && filteredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-12"
            >
              <p className="text-slate-500 dark:text-slate-400">
                You've seen all {filteredProjects.length} projects
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
