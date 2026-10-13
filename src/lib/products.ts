export type ProductCategory = "applications" | "learning";

export type SpasProduct = {
  id: string;
  name: string;
  url: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  platforms?: string[];
  iconSrc: string;
  iconAlt: string;
};

export const PRODUCT_CATEGORIES: { id: ProductCategory; title: string; lead: string }[] = [
  {
    id: "applications",
    title: "Mobile & web applications",
    lead: "Consumer and business apps we build and operate on iOS, Android, and the web.",
  },
  {
    id: "learning",
    title: "AI learning management",
    lead: "Learning platforms with AI-assisted course building, content, and delivery.",
  },
];

export const SPAS_PRODUCTS: SpasProduct[] = [
  {
    id: "scoutify",
    name: "Scoutify",
    url: "https://www.scoutify.finance",
    category: "applications",
    categoryLabel: "Mobile & web",
    description: "AI-assisted stock research — watchlists, market pulse, and plain-language insights on iPhone, Android, and the web.",
    platforms: ["iOS", "Android", "Web"],
    iconSrc: "/products/scoutify.png",
    iconAlt: "Scoutify app icon",
  },
  {
    id: "miamaestra",
    name: "MiaMaestra LMS",
    url: "https://www.miamaestra.com",
    category: "learning",
    categoryLabel: "AI LMS",
    description: "AI learning management service for courses, rich content, assessments, and learner progress.",
    iconSrc: "/products/miamaestra.svg",
    iconAlt: "MiaMaestra logo",
  },
];
