"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data/services";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function ServicesGrid() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading
        eyebrow="What we do"
        title="Four ways we move your business forward"
        description="Strategy, systems, and software — delivered by one accountable in-house team, from first workshop to long-term support."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </motion.div>
    </section>
  );
}
