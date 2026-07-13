import type { Metadata } from "next";

import { PortfolioExplorer } from "@/components/sections/PortfolioExplorer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Live platforms designed, built, and shipped in-house by Tridav — across education, logistics, finance, sustainability, and enterprise operations.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid fade-mask-b" />
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-32 sm:px-6 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-bright">
            Portfolio
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Proof, not promises
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every platform below was designed, engineered, and shipped by our
            in-house team. It&apos;s the same discipline we bring to client
            projects.
          </p>
        </div>
      </section>

      <PortfolioExplorer />
      <CTASection />
    </>
  );
}
