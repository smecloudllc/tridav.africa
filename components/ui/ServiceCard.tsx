"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp } from "@/lib/motion";
import type { Service } from "@/lib/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <motion.div variants={fadeUp} className="h-full">
      <Link
        href={`/services#${service.slug}`}
        className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_32px_-8px_var(--primary-glow)]"
      >
        <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary text-brand-bright transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/15">
          <Icon
            className="size-5 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
            aria-hidden
          />
        </span>
        <h3 className="mt-5 text-lg font-semibold tracking-tight">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-bright">
          Learn more
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </Link>
    </motion.div>
  );
}
