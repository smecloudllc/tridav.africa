"use client";

import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

// TODO: confirm real figures before launch.
const stats = [
  { value: 6, suffix: "+", label: "Products shipped" },
  { value: 5, suffix: "", label: "Industries served" },
  { value: 100, suffix: "%", label: "In-house engineering" },
  { value: 4, suffix: "", label: "Core service lines" },
];

export function StatsBand() {
  return (
    <section
      aria-label="Company statistics"
      className="border-y border-border bg-card/30"
    >
      <motion.dl
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="text-center"
          >
            <dd className="text-4xl font-bold tracking-tight text-brand-bright sm:text-5xl">
              <AnimatedCounter to={stat.value} suffix={stat.suffix} />
            </dd>
            <dt className="mt-2 text-sm text-muted-foreground">{stat.label}</dt>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
