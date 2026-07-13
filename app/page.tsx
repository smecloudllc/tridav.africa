import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { StatsBand } from "@/components/sections/StatsBand";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <PortfolioGrid limit={6} showViewAllLink />
      <ProcessTimeline />
      <StatsBand />
      <CTASection />
    </>
  );
}
