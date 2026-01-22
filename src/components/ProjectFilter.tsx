"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiX } from "react-icons/fi";
import { projectCategories, type ProjectCategory } from "@/data/projects";

interface ProjectFilterProps {
  activeFilter: ProjectCategory;
  onFilterChange: (category: ProjectCategory) => void;
}

export default function ProjectFilter({
  activeFilter,
  onFilterChange,
}: ProjectFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 md:mb-12">
      {/* Desktop filters */}
      <div className="hidden md:flex items-center justify-center gap-2 flex-wrap">
        {projectCategories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => onFilterChange(category.id as ProjectCategory)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
              activeFilter === category.id
                ? "text-white"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {activeFilter === category.id && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Mobile filter */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium w-full justify-between"
        >
          <span className="flex items-center gap-2">
            <FiFilter className="w-4 h-4" />
            {projectCategories.find((c) => c.id === activeFilter)?.label}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiX
              className={`w-4 h-4 transition-opacity ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden"
            >
              <div className="flex flex-col gap-1 p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                {projectCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      onFilterChange(category.id as ProjectCategory);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                      activeFilter === category.id
                        ? "bg-primary-500 text-white"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
