"use client";

import { motion } from "framer-motion";

import { fadeIn, viewportOnce } from "@/lib/motion";

// TODO: swap for real client logos when available.
const clients = ["GSI", "Ghana Prisons", "Queensland School", "Ministry of Health"];

export function TrustBar() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      aria-label="Who we work with"
      className="border-y border-border bg-card/30"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by agencies, schools, SMEs, and logistics operators across
          Africa
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((name) => (
            <li
              key={name}
              className="font-semibold tracking-wide text-muted-foreground/50"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
