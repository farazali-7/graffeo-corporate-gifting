import type { LucideIcon } from "lucide-react";

/** A navigation link, used in both header and footer. */
export interface NavLink {
  label: string;
  href: string;
}

/** A grouped column of links in the footer. */
export interface FooterColumn {
  title: string;
  links: NavLink[];
}

/** One of the two primary purchasing paths the page routes buyers toward. */
export interface GiftingPath {
  id: "self-serve" | "concierge";
  eyebrow: string;
  title: string;
  description: string;
  /** Plain-language cues that help a buyer self-identify with this path. */
  bestFor: string[];
  highlights: { icon: LucideIcon; label: string }[];
  cta: { label: string; href: string };
  /** Marks the recommended default path for visual emphasis. */
  featured?: boolean;
}

/** A single row in the side-by-side comparison of the two paths. */
export interface ComparisonRow {
  criterion: string;
  selfServe: string;
  concierge: string;
}

/** A numbered step in the "how it works" narrative. */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

/** A curated gift offering shown in the collections grid. */
export interface GiftCollection {
  name: string;
  origin: string;
  note: string;
  priceFrom: string;
  image: string;
  alt: string;
}

/** A question/answer pair for the accessible FAQ accordion. */
export interface FaqItem {
  question: string;
  answer: string;
}

/** A corporate client testimonial. */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

/** A small trust/heritage statistic. */
export interface HeritageStat {
  value: string;
  label: string;
}
