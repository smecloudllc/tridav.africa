"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="hero-dark relative overflow-hidden bg-background text-foreground">
      {/* Atmospheric background: blueprint grid + gradient glow blobs. */}
      <div aria-hidden className="absolute inset-0 bg-grid fade-mask-b" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute right-[-160px] top-1/3 h-[320px] w-[320px] rounded-full bg-foreground/10 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-brand-bright" aria-hidden />
            Technology consultancy · Africa &amp; beyond
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            The digital transformation partner for{" "}
            <span className="text-gradient">African business</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Tridav helps institutions and growing companies modernize how they
            run — through digital transformation, IT consultancy, ERP
            implementation, and custom software engineered entirely in-house.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
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
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            {["In-house engineering", "6+ products shipped", "Enterprise-grade delivery"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-brand-bright" aria-hidden />
                  {item}
                </li>
              ),
            )}
          </motion.ul>
        </motion.div>

        {/* Terminal + metric cards mockup — "we build real software". */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          aria-hidden
          className="relative hidden select-none md:block"
        >
          <div className="rounded-xl border border-border bg-card/90 shadow-2xl shadow-primary/10 backdrop-blur">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-foreground/50" />
              <span className="size-2.5 rounded-full bg-foreground/30" />
              <span className="size-2.5 rounded-full bg-foreground/15" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                tridav — deploy
              </span>
            </div>
            <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-muted-foreground">
                <span className="text-success">➜</span> tridav deploy
                --client erp-production
              </p>
              <p className="text-muted-foreground">
                <span className="text-brand-bright">info</span> Building
                modules: billing · inventory · reports
              </p>
              <p className="text-muted-foreground">
                <span className="text-brand-bright">info</span> Migrating
                legacy records… <span className="text-foreground">48,204 ok</span>
              </p>
              <p className="text-muted-foreground">
                <span className="text-success">success</span> Deployed in
                2.4s — all checks passing
              </p>
              <p className="text-muted-foreground">
                <span className="text-success">➜</span>{" "}
                <span className="animate-pulse">▍</span>
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.65, ease: "easeOut" }}
            className="absolute -bottom-8 -left-8 w-44 rounded-xl border border-border bg-card p-4 shadow-xl"
          >
            <p className="text-xs text-muted-foreground">Revenue collected</p>
            <p className="mt-1 text-xl font-bold tracking-tight">₵ 2.4M</p>
            <div className="mt-2 flex items-end gap-1">
              {[35, 55, 40, 70, 62, 85, 100].map((h, i) => (
                <span
                  key={i}
                  className="w-3 rounded-sm bg-primary/70"
                  style={{ height: `${h * 0.32}px` }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.8, ease: "easeOut" }}
            className="absolute -right-6 -top-8 w-40 rounded-xl border border-border bg-card p-4 shadow-xl"
          >
            <p className="text-xs text-muted-foreground">System uptime</p>
            <p className="mt-1 text-xl font-bold tracking-tight text-success">
              99.9%
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              last 90 days
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
