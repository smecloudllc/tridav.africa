import {
  Code2,
  Compass,
  Boxes,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  /** One-liner used on the home page cards. */
  summary: string;
  /** Longer paragraph used on the /services page. */
  description: string;
  includes: string[];
  caseStudy?: {
    product: string;
    note: string;
    href: string;
  };
}

export const services: Service[] = [
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    icon: Workflow,
    summary:
      "Turn paper-based, manual operations into fast, measurable digital processes.",
    description:
      "We help organisations move from spreadsheets, paper trails, and ageing systems to modern digital operations. From process digitization to cloud migration and legacy system modernization, we map how your business actually runs today and rebuild it for speed, visibility, and scale.",
    includes: [
      "Process audit and digitization roadmap",
      "Cloud migration planning and execution",
      "Legacy system modernization and data migration",
      "Change management and staff onboarding",
      "Post-launch measurement and optimisation",
    ],
    caseStudy: {
      product: "SmartWaste Africa",
      note: "digitized waste collection scheduling, tracking, and reporting for municipal operations.",
      href: "/portfolio",
    },
  },
  {
    slug: "it-consultancy",
    title: "IT Consultancy",
    icon: Compass,
    summary:
      "Independent technology strategy from a team that ships software, not just slides.",
    description:
      "Technology decisions are expensive to get wrong. We advise boards, founders, and IT leads on technology strategy, systems architecture, and vendor selection, grounded in what we learn shipping our own products. You get recommendations we would build ourselves, not a generic framework.",
    includes: [
      "Technology strategy and multi-year roadmaps",
      "Systems architecture design and review",
      "Tech due diligence for investments and acquisitions",
      "Vendor and platform selection",
      "Security, backup, and infrastructure audits",
    ],
  },
  {
    slug: "erp-implementation",
    title: "ERP Implementation",
    icon: Boxes,
    summary:
      "Custom ERP builds and integrations that fit how your organisation actually works.",
    description:
      "Off-the-shelf ERPs often fight the way African SMEs and institutions really operate. We design and implement ERP systems around your actual workflows, including finance, billing, inventory, HR, and reporting, then integrate them with the tools and payment rails you already use.",
    includes: [
      "Requirements discovery and process mapping",
      "Custom ERP build or platform configuration",
      "Billing, payments, and reconciliation modules",
      "Integration with existing systems and payment providers",
      "Training, support, and phased rollout",
    ],
    caseStudy: {
      product: "RevCollect",
      note: "our revenue collection platform digitizing billing, payments, and reconciliation for institutions.",
      href: "/portfolio",
    },
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    icon: Code2,
    summary:
      "Web, mobile, and enterprise applications engineered end-to-end in-house.",
    description:
      "When no product on the market fits, we build it. Our in-house engineering team has shipped platforms across education, logistics, finance, and sustainability, so we bring product-grade discipline to client work: real version control, testing, CI/CD, and long-term maintainability.",
    includes: [
      "Web and mobile application development",
      "Enterprise platforms and internal tools",
      "API design and third-party integrations",
      "UI/UX design and prototyping",
      "Ongoing maintenance and feature delivery",
    ],
    caseStudy: {
      product: "EduInsight",
      note: "a full school management platform we designed, built, and operate ourselves.",
      href: "/portfolio",
    },
  },
];
