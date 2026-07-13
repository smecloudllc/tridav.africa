"use client";

import { motion } from "framer-motion";

import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <motion.p
        variants={fadeUp}
        className="text-sm font-semibold uppercase tracking-widest text-brand-bright"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
