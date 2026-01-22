"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import Timeline from "@/components/Timeline";
import SectionHeader from "@/components/ui/SectionHeader";
import { FadeInUp } from "@/components/ui/MotionWrapper";

export default function ExperienceContent() {
  // Calculate total years of experience
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="section bg-gradient-mesh">
        <div className="container-custom">
          <SectionHeader
            badge="Career Path"
            title="Professional"
            titleHighlight="Experience"
            description="My journey as a developer, from internship to senior positions, building scalable applications and leading teams."
          />

          {/* Stats */}
          <FadeInUp delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-1">
                  {yearsOfExperience}+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Years Experience
                </div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-1">
                  {experiences.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Positions Held
                </div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-1">
                  50+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Projects Completed
                </div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-1">
                  30+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Happy Clients
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Work <span className="gradient-text">History</span>
            </h2>
            <Timeline experiences={experiences} />
          </motion.div>
        </div>
      </section>

      {/* Skills from Experience */}
      <section className="section bg-slate-50 dark:bg-slate-800/50">
        <div className="container-custom">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Key <span className="gradient-text">Achievements</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-12">
                Highlights from my career that showcase my impact and growth as
                a developer.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Led Development Teams",
                description:
                  "Successfully led teams of up to 4 developers in building enterprise applications.",
                icon: "👥",
              },
              {
                title: "Performance Optimization",
                description:
                  "Achieved 95+ Lighthouse scores and reduced page load times by 40%.",
                icon: "⚡",
              },
              {
                title: "Scalable Architecture",
                description:
                  "Built applications serving 100K+ users with robust, scalable architectures.",
                icon: "🏗️",
              },
              {
                title: "CI/CD Implementation",
                description:
                  "Reduced deployment time by 60% through automated pipelines.",
                icon: "🚀",
              },
              {
                title: "Mentorship",
                description:
                  "Mentored junior developers, helping them grow to mid-level positions.",
                icon: "🎓",
              },
              {
                title: "Client Satisfaction",
                description:
                  "Maintained 95% client satisfaction rate across all projects.",
                icon: "⭐",
              },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card p-6"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
