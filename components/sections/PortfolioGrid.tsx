"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/lib/data/products";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface PortfolioGridProps {
  /** Limit the number of cards (used on the home page). */
  limit?: number;
  showViewAllLink?: boolean;
}

export function PortfolioGrid({ limit, showViewAllLink }: PortfolioGridProps) {
  const items = limit ? products.slice(0, limit) : products;

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 border-t border-border bg-card/20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow="Featured work"
          title="Products we've designed, built, and shipped"
          description="Not just advisory — a portfolio of live platforms serving education, logistics, finance, and sustainability across the region."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </motion.div>

        {showViewAllLink && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 text-center"
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-bright transition-colors hover:text-foreground"
            >
              Explore the full portfolio
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
