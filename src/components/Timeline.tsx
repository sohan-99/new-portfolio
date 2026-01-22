"use client";

import { motion } from "framer-motion";
import { Experience } from "@/data/experience";
import { formatDate } from "@/lib/utils";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiExternalLink,
} from "react-icons/fi";

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
}

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

function TimelineItem({ experience, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-slate-900 transform -translate-x-1/2 md:-translate-x-1/2 z-10">
        <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20" />
      </div>

      {/* Content */}
      <div
        className={`flex-1 pl-8 md:pl-0 ${
          isEven ? "md:pr-12 md:text-right" : "md:pl-12"
        }`}
      >
        <motion.div
          whileHover={{ y: -5 }}
          className="card p-6 md:p-8"
        >
          {/* Header */}
          <div
            className={`flex flex-wrap items-start gap-4 mb-4 ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
              <FiBriefcase className="w-5 h-5 text-primary-500" />
            </div>

            <div className={`flex-1 ${isEven ? "md:text-right" : ""}`}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {experience.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    {experience.company}
                    <FiExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="font-medium text-primary-500">
                    {experience.company}
                  </span>
                )}
                <span className="hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1">
                  <FiMapPin className="w-3 h-3" />
                  {experience.location}
                </span>
              </div>
            </div>
          </div>

          {/* Date and type */}
          <div
            className={`flex flex-wrap items-center gap-3 mb-4 ${
              isEven ? "md:justify-end" : ""
            }`}
          >
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <FiCalendar className="w-4 h-4" />
              {formatDate(experience.startDate)} -{" "}
              {experience.endDate === "Present"
                ? "Present"
                : formatDate(experience.endDate)}
            </span>
            <span className="badge capitalize text-xs">{experience.type}</span>
          </div>

          {/* Description */}
          <p
            className={`text-slate-600 dark:text-slate-400 mb-4 ${
              isEven ? "md:text-right" : ""
            }`}
          >
            {experience.description}
          </p>

          {/* Responsibilities */}
          <div className="mb-4">
            <h4
              className={`text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 ${
                isEven ? "md:text-right" : ""
              }`}
            >
              Key Responsibilities:
            </h4>
            <ul
              className={`space-y-1 text-sm text-slate-600 dark:text-slate-400 ${
                isEven ? "md:text-right" : ""
              }`}
            >
              {experience.responsibilities.slice(0, 3).map((resp, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <span className="text-primary-500 mt-1">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div
            className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}
          >
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div
              className={`mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 ${
                isEven ? "md:text-right" : ""
              }`}
            >
              <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
                Key Achievements:
              </h4>
              <ul
                className={`space-y-1 text-sm text-slate-600 dark:text-slate-400 ${
                  isEven ? "md:text-right" : ""
                }`}
              >
                {experience.achievements.slice(0, 2).map((achievement, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
