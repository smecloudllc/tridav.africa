import type { Metadata } from "next";

import { AboutContent } from "@/components/sections/AboutContent";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tridav is a technology consultancy headquartered in Accra, bringing world-class software engineering to businesses and institutions across Africa — and beyond.",
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CTASection />
    </>
  );
}
