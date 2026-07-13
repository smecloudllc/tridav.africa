import type { Metadata } from "next";

import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital transformation, IT consultancy, ERP implementation, and custom software development for African businesses and institutions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid fade-mask-b" />
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-bright">
            Services
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Strategy, systems, and software — under one roof
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Most consultancies advise. We advise, then build, then support what
            we built. Here&apos;s how each service works and what&apos;s
            included.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl divide-y divide-border px-4 sm:px-6">
        {services.map((service, index) => (
          <ServiceDetail key={service.slug} slug={service.slug} index={index} />
        ))}
      </div>

      <CTASection />
    </>
  );
}
