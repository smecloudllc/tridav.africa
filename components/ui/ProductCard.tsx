"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { fadeUp } from "@/lib/motion";
import type { Product } from "@/lib/data/products";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const CardInner = (
    <motion.article
      variants={fadeUp}
      whileHover={{ rotateX: 2.5, rotateY: -2.5, y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ transformPerspective: 900 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 hover:border-primary/40"
    >
      {/* Abstract visual header instead of stock imagery. */}
      <div
        aria-hidden
        className={cn(
          "relative h-36 overflow-hidden border-b border-border bg-gradient-to-br",
          product.gradient,
        )}
      >
        <div className="absolute inset-0 bg-dots opacity-60" />
        {product.logoSrc ? (
          <span className="absolute bottom-4 left-5 flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white p-2 shadow-sm">
            <Image
              src={product.logoSrc}
              alt={`${product.name} logo`}
              width={40}
              height={40}
              className="size-full object-contain"
            />
          </span>
        ) : (
          <span className="absolute bottom-4 left-5 flex size-12 items-center justify-center rounded-xl border border-white/10 bg-background/70 text-lg font-bold text-foreground backdrop-blur">
            {product.monogram}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight">
            {product.name}
          </h3>
          <span className="shrink-0 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            {product.category}
          </span>
        </div>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <span
          className={cn(
            "mt-4 inline-flex items-center gap-1 text-sm font-medium",
            product.live ? "text-brand-bright" : "text-muted-foreground",
          )}
        >
          {product.live ? (
            <>
              <span>Visit site</span>
              <ArrowUpRight
                className="size-4 -translate-x-1 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </>
          ) : (
            "Coming soon"
          )}
        </span>
      </div>
    </motion.article>
  );

  if (!product.live) return CardInner;

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${product.name} — visit site (opens in new tab)`}
      className="h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {CardInner}
    </a>
  );
}
