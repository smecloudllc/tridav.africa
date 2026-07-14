export type ProductCategory =
  | "Education"
  | "Sustainability"
  | "Logistics"
  | "Finance & Revenue"
  | "Public Sector"
  | "Agriculture";

export interface Product {
  name: string;
  category: ProductCategory;
  description: string;
  url: string;
  /** Two-letter monogram shown in the card's logo badge when logoSrc is absent. */
  monogram: string;
  /** Path to a real product logo (public/products/…). Falls back to the monogram if unset. */
  logoSrc?: string;
  /** Photo for the card's visual header. Falls back to the abstract gradient if unset. */
  imageSrc?: string;
  /** Tailwind gradient classes for the card's visual header (used as a fallback/overlay base). */
  gradient: string;
  live: boolean;
}

// NOTE: descriptions are placeholders inferred from product names.
// Replace with accurate 1-2 sentence descriptions once available.
export const products: Product[] = [
  {
    name: "EduInsight",
    category: "Education",
    description:
      "A school management platform helping institutions run admissions, academics, and administration in one place.",
    url: "https://eduinsight.pro",
    monogram: "Ed",
    logoSrc: "/products/eduinsight.png",
    imageSrc: "/products/eduinsight-photo.jpg",
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
    logoSrc: "/products/smartwaste.png",
    imageSrc: "/products/smartwaste-photo.jpg",
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
    imageSrc: "/products/logitrak-photo.jpg",
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
    logoSrc: "/products/revcollect.png",
    imageSrc: "/products/revcollect-photo.jpg",
    gradient: "from-foreground/22 via-foreground/9 to-transparent",
    live: true,
  },
  {
    name: "PIMS",
    category: "Public Sector",
    description:
      "A prison information management system that coordinates visit scheduling, partner organisation access, and day-to-day administration. Built to be white-labeled for any country's correctional service.",
    url: "https://gpims.apptray.cc/",
    monogram: "Pi",
    imageSrc: "/products/pims-photo.jpg",
    gradient: "from-foreground/18 via-foreground/7 to-transparent",
    live: true,
  },
  {
    name: "FarmBridge",
    category: "Agriculture",
    description:
      "An agricultural platform connecting farmers to markets, resources, and collective opportunities for growth.",
    url: "#", // TODO: add live URL once available
    monogram: "Fb",
    logoSrc: "/products/farmbridge.png",
    imageSrc: "/products/farmbridge-photo.jpg",
    gradient: "from-foreground/20 via-foreground/8 to-transparent",
    live: false,
  },
];

export const productCategories: ProductCategory[] = [
  "Education",
  "Logistics",
  "Finance & Revenue",
  "Sustainability",
  "Public Sector",
  "Agriculture",
];
