"use client";

import { motion } from "framer-motion";
import { Skill } from "@/data/skills";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiFigma,
  SiPostman,
  SiPrisma,
  SiSocketdotio,
  SiRedis,
  SiHtml5,
  SiCss3,
  SiSass,
  SiFramer,
  SiVite,
  SiJest,
  SiCypress,
  SiLinux,
  SiNpm,
  SiYarn,
  SiFirebase,
  SiBootstrap,
  SiMui,
  SiReactquery,
  SiNestjs,
  SiJsonwebtokens,
  SiSupabase,
  SiMysql,
  SiNginx,
  SiAuth0,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { IconType } from "react-icons";

// Icon mapping
const iconMap: Record<string, IconType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiFigma,
  SiPostman,
  SiPrisma,
  SiSocketdotio,
  SiRedis,
  SiHtml5,
  SiCss3,
  SiSass,
  SiFramer,
  SiVite,
  SiJest,
  SiCypress,
  SiLinux,
  SiNpm,
  SiYarn,
  SiFirebase,
  SiBootstrap,
  SiMui,
  SiReactquery,
  SiNestjs,
  SiJsonwebtokens,
  SiSupabase,
  SiMysql,
  SiNginx,
  SiAuth0,
  FaAws,
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = iconMap[skill.iconName] || SiReact;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="card p-4 md:p-6 group cursor-pointer"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <Icon
            className="w-6 h-6 transition-transform"
            style={{ color: skill.color }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2 truncate">
            {skill.name}
          </h3>

          {/* Progress bar */}
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
              }}
            />
          </div>

          {/* Level percentage */}
          <div className="mt-1 text-right">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {skill.level}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Compact version for smaller displays
export function SkillCardCompact({ skill, index }: SkillCardProps) {
  const Icon = iconMap[skill.iconName] || SiReact;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all cursor-pointer group"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${skill.color}15` }}
      >
        <Icon className="w-5 h-5" style={{ color: skill.color }} />
      </div>
      <span className="text-xs font-medium text-slate-600 dark:text-slate-300 text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}
