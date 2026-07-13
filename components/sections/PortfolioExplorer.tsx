"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ProductCard } from "@/components/ui/ProductCard";
import {
  productCategories,
  products,
  type ProductCategory,
} from "@/lib/data/products";
import { cn } from "@/lib/utils";

type Filter = "All" | ProductCategory;

export function PortfolioExplorer() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
      <div
        role="group"
        aria-label="Filter products by category"
        className="flex flex-wrap gap-2"
      >
        {(["All", ...productCategories] as Filter[]).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              filter === category
                ? "border-primary bg-primary/15 text-foreground"
                : "border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((product) => (
            <motion.div
              key={product.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">
          No products in this category yet.
        </p>
      )}
    </section>
  );
}
