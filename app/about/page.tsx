import type { Metadata } from "next";

import { AboutContent } from "@/components/sections/AboutContent";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tridav is a Ghana-based technology consultancy bringing world-class software engineering to African businesses and institutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CTASection />
    </>
  );
}
