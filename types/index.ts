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
  cta: { label: string; href: string; external?: boolean };
  /** Marks the recommended default path for visual emphasis. */
  featured?: boolean;
}

/**
 * A single row in the side-by-side comparison. A boolean renders as a
 * check/dash glyph; a string renders as a short value — never a paragraph.
 */
export interface ComparisonRow {
  criterion: string;
  selfServe: string | boolean;
  concierge: string | boolean;
}

/** A numbered step in the "how it works" narrative. */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/** An editorial "why Graffeo" reassurance column (photo + title + lines). */
export interface WhyPoint {
  title: string;
  lines: string[];
  image: string;
  alt: string;
}

/** A single frame in the corporate-gifting inspiration gallery. */
export interface GalleryItem {
  caption: string;
  image: string;
  alt: string;
  /** Optional emphasis to drive an editorial, non-uniform masonry rhythm. */
  wide?: boolean;
  tall?: boolean;
}

/** A question/answer pair for the accessible FAQ accordion. */
export interface FaqItem {
  question: string;
  answer: string;
}

/** A small trust/heritage statistic. */
export interface HeritageStat {
  value: string;
  label: string;
}
