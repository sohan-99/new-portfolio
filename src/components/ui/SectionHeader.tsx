"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "./MotionWrapper";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <FadeInUp delay={0}>
          <span className="inline-block badge mb-4">{badge}</span>
        </FadeInUp>
      )}
      <FadeInUp delay={0.1}>
        <h2 className="section-title text-slate-900 dark:text-white mb-4">
          {title}
          {titleHighlight && (
            <>
              {" "}
              <span className="gradient-text">{titleHighlight}</span>
            </>
          )}
        </h2>
      </FadeInUp>
      {description && (
        <FadeInUp delay={0.2}>
          <p className={`section-subtitle ${centered ? "" : "max-w-none"}`}>
            {description}
          </p>
        </FadeInUp>
      )}
    </div>
  );
}
