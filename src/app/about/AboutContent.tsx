"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiDownload,
  FiCode,
  FiServer,
  FiLayout,
  FiZap,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";
import { personalInfo, whatIDo, stats } from "@/data/personal";
import { skills, skillCategories, getSkillsByCategory } from "@/data/skills";
import { education, certifications } from "@/data/experience";
import SkillCard from "@/components/SkillCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/ui/MotionWrapper";

const whatIDoIcons: Record<string, React.ElementType> = {
  code: FiCode,
  api: FiServer,
  layout: FiLayout,
  speed: FiZap,
};

export default function AboutContent() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="section bg-gradient-mesh">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar */}
            <FadeInLeft>
              <div className="relative">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl transform rotate-6 opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl transform -rotate-3 opacity-30" />
                  {/* Profile Image */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src="/sohan.png"
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -bottom-4 -right-4 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                  >
                    <span className="text-sm font-medium text-slate-900 dark:text-white">
                      2+ Years Experience
                    </span>
                  </motion.div>
                </div>
              </div>
            </FadeInLeft>

            {/* Content */}
            <FadeInRight>
              <div>
                <span className="badge mb-4">About Me</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                  Hi, I'm{" "}
                  <span className="gradient-text">{personalInfo.name}</span>
                </h1>
                <p className="text-xl text-primary-500 font-medium mb-4">
                  {personalInfo.role}
                </p>
                <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {personalInfo.bio.split("\n\n")[0]}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {personalInfo.bio.split("\n\n")[1]}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="btn-primary"
                  >
                    <FiDownload className="w-4 h-4" />
                    Download CV
                  </a>
                  <Link href="/contact" className="btn-secondary">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeader
            badge="Services"
            title="What I"
            titleHighlight="Do"
            description="I offer a wide range of services to help bring your ideas to life."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIDo.map((service, index) => {
              const Icon = whatIDoIcons[service.icon] || FiCode;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card p-6 text-center group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-slate-50 dark:bg-slate-800/50">
        <div className="container-custom">
          <SectionHeader
            badge="Skills"
            title="My Technical"
            titleHighlight="Expertise"
            description="A comprehensive overview of my technical skills and proficiency levels."
          />

          <div className="space-y-12">
            {skillCategories.map((category) => {
              const categorySkills = getSkillsByCategory(category.id);
              return (
                <FadeInUp key={category.id}>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
                      {category.label}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categorySkills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <FadeInLeft>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <FiBookOpen className="w-6 h-6 text-primary-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Education
                  </h2>
                </div>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <motion.div
                      key={edu.id}
                      whileHover={{ x: 5 }}
                      className="card p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shrink-0">
                          <span className="text-white font-bold">
                            {edu.institution.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white">
                            {edu.degree} in {edu.field}
                          </h3>
                          <p className="text-primary-500 font-medium text-sm">
                            {edu.institution}
                          </p>
                          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                            {edu.startDate} - {edu.endDate}
                          </p>
                          {edu.grade && (
                            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                              {edu.grade}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInLeft>

            {/* Certifications */}
            <FadeInRight>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center">
                    <FiAward className="w-6 h-6 text-secondary-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Certifications
                  </h2>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      whileHover={{ x: 5 }}
                      className="card p-6"
                    >
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-primary-500 font-medium text-sm">
                        {cert.issuer}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                        Issued: {cert.issueDate}
                        {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
                      </p>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 mt-2"
                        >
                          View Credential →
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
