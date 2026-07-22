import type { FooterColumn, NavLink } from "@/types";

/** The slim announcement bar surfaced above the navigation. */
export const ANNOUNCEMENT = {
  message: "Holiday Corporate Gifting Available",
  detail: "Plan ahead for teams & clients",
  cta: { label: "Learn More", href: "#choose" },
} as const;

/** In-page navigation. Anchors map to the page's decision-first sections. */
export const PRIMARY_NAV: NavLink[] = [
  { label: "The Options", href: "#choose" },
  { label: "How It Works", href: "#process" },
  { label: "Why Graffeo", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Questions", href: "#faq" },
];

export const PRIMARY_CTA: NavLink = {
  label: "Start Self-Service Order",
  href: "#choose",
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Corporate Gifting",
    links: [
      { label: "Multi-Recipient Orders", href: "#choose" },
      { label: "Custom + Bulk", href: "#choose" },
      { label: "Gifting Inspiration", href: "#gallery" },
      { label: "Volume Pricing", href: "#faq" },
    ],
  },
  {
    title: "The Roastery",
    links: [
      { label: "Since 1935", href: "#heritage" },
      { label: "Why Graffeo", href: "#why" },
      { label: "How It Works", href: "#process" },
      { label: "Wholesale", href: "#faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Frequently Asked", href: "#faq" },
      { label: "Contact a Specialist", href: "#final-cta" },
      { label: "Shipping & Returns", href: "#faq" },
      { label: "Corporate Invoicing", href: "#faq" },
    ],
  },
];
