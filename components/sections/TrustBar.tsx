"use client";

import { motion } from "framer-motion";

import { fadeIn, viewportOnce } from "@/lib/motion";

// TODO: replace styled placeholders with real client names/logos when available.
const placeholderClients = [
  "Ridge Academy",
  "Volta Logistics",
  "Meridian SME",
  "Accra Metro",
  "Coastline Pharma",
];

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
          Trusted by schools, SMEs, and logistics operators across Ghana
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {placeholderClients.map((name) => (
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
