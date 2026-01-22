"use client";

import { motion } from "framer-motion";
import { skills, skillCategories, getSkillsByCategory } from "@/data/skills";
import { SkillCardCompact } from "@/components/SkillCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TechStack() {
  return (
    <section className="section bg-slate-50 dark:bg-slate-800/50">
      <div className="container-custom">
        <SectionHeader
          badge="Tech Stack"
          title="Technologies I"
          titleHighlight="Work With"
          description="I specialize in modern web technologies and frameworks to build scalable applications."
        />

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.id);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    {category.label}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                  {categorySkills.map((skill, index) => (
                    <SkillCardCompact
                      key={skill.name}
                      skill={skill}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
