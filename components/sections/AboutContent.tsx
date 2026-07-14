"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  Lightbulb,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Wrench,
    title: "Builders first",
    description:
      "We earn our advice by shipping. Every recommendation is grounded in software we've actually built and operate.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable end-to-end",
    description:
      "One team owns strategy, delivery, and support. No hand-offs to third parties, no finger-pointing.",
  },
  {
    icon: Lightbulb,
    title: "Context-aware engineering",
    description:
      "We design for the realities of African operations — connectivity, payments, devices, and how teams actually work.",
  },
  {
    icon: Handshake,
    title: "Long-term partners",
    description:
      "Transformation isn't a hand-over. We train teams, maintain systems, and stay invested in outcomes.",
  },
];

const whyUs = [
  "Full-stack, in-house delivery — strategy through support, one accountable team",
  "A live product portfolio proving we can ship and operate real platforms",
  "Experience across education, logistics, finance, sustainability, and enterprise ops",
  "Enterprise discipline: version control, testing, staging, honest timelines",
];

export function AboutContent() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid fade-mask-b" />
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 lg:pt-40"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-brand-bright"
          >
            About Tridav
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl"
          >
            World-class engineering, built for African business
          </motion.h1>
          <motion.div
            variants={fadeUp}
            className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <p>
              Tridav started with a simple frustration: African businesses and
              institutions were being sold technology strategy by firms that
              had never shipped software, and software by vendors who
              disappeared after launch.
            </p>
            <p>
              So we built both muscles under one roof. Today, our team —
              headquartered in Accra and working across the continent —
              designs, engineers, and operates a portfolio of live platforms —
              across education, logistics, finance, and sustainability — and
              brings that same product discipline to every consulting and
              transformation engagement.
            </p>
            <p>
              Our mission is straightforward:{" "}
              <span className="text-foreground">
                bring world-class software engineering to African businesses
                and institutions
              </span>{" "}
              — not as a luxury, but as standard practice.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Our values"
          title="How we show up"
          align="left"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 sm:grid-cols-2"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="rounded-xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary text-brand-bright">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <SectionHeading
            eyebrow="Why us"
            title="Advisors who build. Builders who advise."
            description="The difference between Tridav and a typical consultancy is simple: when the strategy deck is done, we're the ones who build it."
            align="left"
          />
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4 self-center"
          >
            {whyUs.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm leading-relaxed"
              >
                <span
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-bright"
                  aria-hidden
                />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  );
}
