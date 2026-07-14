"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid fade-mask-b" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[360px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6 lg:py-32"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl"
        >
          Ready to transform how your business runs?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Tell us where your operations hurt. We&apos;ll show you what modern
          systems can do about it, with a clear roadmap and honest numbers.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="group h-11 px-6 text-sm">
            <Link href="/contact">
              Book a Consultation
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 px-6 text-sm"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
