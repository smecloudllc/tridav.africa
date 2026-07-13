"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

interface ServiceDetailProps {
  /** Slug only — icon components can't cross the server/client boundary. */
  slug: string;
  index: number;
}

export function ServiceDetail({ slug, index }: ServiceDetailProps) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  const Icon = service.icon;
  const reversed = index % 2 === 1;

  return (
    <motion.section
      id={service.slug}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="scroll-mt-24 grid gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20"
    >
      <motion.div variants={fadeUp} className={cn(reversed && "lg:order-2")}>
        <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-secondary text-brand-bright">
          <Icon className="size-6" aria-hidden />
        </span>
        <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
          {service.title}
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        {service.caseStudy && (
          <Link
            href={service.caseStudy.href}
            className="group mt-6 flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
          >
            <span className="mt-0.5 rounded-md bg-primary/15 px-2 py-1 font-mono text-[11px] font-semibold text-brand-bright">
              CASE
            </span>
            <span className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                {service.caseStudy.product}
              </span>{" "}
              — {service.caseStudy.note}
              <span className="mt-1 flex items-center gap-1 font-medium text-brand-bright">
                See the work
                <ArrowRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </span>
          </Link>
        )}
      </motion.div>

      <motion.div variants={fadeUp} className={cn(reversed && "lg:order-1")}>
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            What&apos;s included
          </h3>
          <ul className="mt-5 space-y-3.5">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="size-3 text-brand-bright" aria-hidden />
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}
