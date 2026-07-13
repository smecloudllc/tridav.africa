export type ProductCategory =
  | "Education"
  | "Storage & Infrastructure"
  | "Sustainability"
  | "Logistics"
  | "Enterprise"
  | "Finance & Revenue";

export interface Product {
  name: string;
  category: ProductCategory;
  description: string;
  url: string;
  /** Two-letter monogram shown in the card's logo badge. */
  monogram: string;
  /** Tailwind gradient classes for the card's visual header. */
  gradient: string;
  live: boolean;
}

// NOTE: descriptions are placeholders inferred from product names —
// replace with accurate 1–2 sentence descriptions once available.
export const products: Product[] = [
  {
    name: "EduInsight",
    category: "Education",
    description:
      "A school management platform helping institutions run admissions, academics, and administration in one place.",
    url: "https://eduinsight.pro",
    monogram: "Ed",
    gradient: "from-sky-500/25 via-blue-600/15 to-transparent",
    live: true,
  },
  {
    name: "SMEVault",
    category: "Storage & Infrastructure",
    description:
      "A secure document and data storage system built for small and medium enterprises.",
    url: "#", // TODO: add live URL
    monogram: "SV",
    gradient: "from-slate-400/25 via-blue-500/10 to-transparent",
    live: false,
  },
  {
    name: "SmartWaste Africa",
    category: "Sustainability",
    description:
      "A digital platform for smarter waste collection scheduling, tracking, and reporting.",
    url: "https://smartwaste.africa",
    monogram: "Sw",
    gradient: "from-emerald-500/25 via-teal-600/15 to-transparent",
    live: true,
  },
  {
    name: "LogiTrak",
    category: "Logistics",
    description:
      "A logistics and delivery tracking platform giving customers real-time visibility into shipments.",
    url: "https://logitrak.apptray.cc/customer",
    monogram: "Lt",
    gradient: "from-amber-500/25 via-orange-600/15 to-transparent",
    live: true,
  },
  {
    name: "Syntra",
    category: "Enterprise",
    description:
      "An enterprise operations platform streamlining internal workflows and reporting.",
    url: "https://syntra.apptray.cc",
    monogram: "Sy",
    gradient: "from-violet-500/25 via-purple-600/15 to-transparent",
    live: true,
  },
  {
    name: "RevCollect",
    category: "Finance & Revenue",
    description:
      "A revenue collection platform helping institutions digitize billing, payments, and reconciliation.",
    url: "https://revcollect.apptray.cc",
    monogram: "Rc",
    gradient: "from-cyan-500/25 via-blue-600/15 to-transparent",
    live: true,
  },
];

export const productCategories: ProductCategory[] = [
  "Education",
  "Logistics",
  "Finance & Revenue",
  "Sustainability",
  "Storage & Infrastructure",
  "Enterprise",
];
