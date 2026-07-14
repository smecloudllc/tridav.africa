export type ProductCategory =
  | "Education"
  | "Sustainability"
  | "Logistics"
  | "Finance & Revenue"
  | "Public Sector";

export interface Product {
  name: string;
  category: ProductCategory;
  description: string;
  url: string;
  /** Two-letter monogram shown in the card's logo badge when logoSrc is absent. */
  monogram: string;
  /** Path to a real product logo (public/products/…). Falls back to the monogram if unset. */
  logoSrc?: string;
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
    logoSrc: "/products/eduinsight.png",
    gradient: "from-foreground/20 via-foreground/8 to-transparent",
    live: true,
  },
  {
    name: "SmartWaste Africa",
    category: "Sustainability",
    description:
      "A digital platform for smarter waste collection scheduling, tracking, and reporting.",
    url: "https://smartwaste.africa",
    monogram: "Sw",
    logoSrc: "/products/smartwaste.jpg",
    gradient: "from-foreground/25 via-foreground/10 to-transparent",
    live: true,
  },
  {
    name: "LogiTrak",
    category: "Logistics",
    description:
      "A logistics and delivery tracking platform giving customers real-time visibility into shipments.",
    url: "https://logitrak.apptray.cc/customer",
    monogram: "Lt",
    logoSrc: "/products/logitrak.svg",
    gradient: "from-foreground/16 via-foreground/6 to-transparent",
    live: true,
  },
  {
    name: "RevCollect",
    category: "Finance & Revenue",
    description:
      "A revenue collection platform helping institutions digitize billing, payments, and reconciliation.",
    url: "https://revcollect.apptray.cc",
    monogram: "Rc",
    gradient: "from-foreground/22 via-foreground/9 to-transparent",
    live: true,
  },
  {
    name: "PIMS",
    category: "Public Sector",
    description:
      "An online services platform for Ghana's correctional system, coordinating visit scheduling, partner organisation access, and day-to-day administration in one place.",
    url: "https://gpims.apptray.cc/",
    monogram: "Gp",
    gradient: "from-foreground/18 via-foreground/7 to-transparent",
    live: true,
  },
];

export const productCategories: ProductCategory[] = [
  "Education",
  "Logistics",
  "Finance & Revenue",
  "Sustainability",
  "Public Sector",
];
