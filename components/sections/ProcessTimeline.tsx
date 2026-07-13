"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Hammer,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We map how your organisation actually operates — processes, systems, pain points — before recommending anything.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Architecture, workflows, and interfaces designed around your team, with prototypes you can react to early.",
  },
  {
    icon: Hammer,
    title: "Build",
    description:
      "Our in-house engineers ship in short, visible iterations — with testing, staging environments, and honest timelines.",
  },
  {
    icon: TrendingUp,
    title: "Support & Scale",
    description:
      "Training, maintenance, and a roadmap that grows with you. We stay accountable long after launch day.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading
        eyebrow="How we work"
        title="A process built for trust"
        description="Four clear phases, one accountable team, no black boxes."
      />
      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6"
      >
        {/* Connecting line on desktop. */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
        />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.li key={step.title} variants={fadeUp} className="relative">
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-brand-bright shadow-lg shadow-primary/5">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="md:mt-5">
                  <p className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:mt-2">
                {step.description}
              </p>
            </motion.li>
          );
        })}
      </motion.ol>
    </section>
  );
}
