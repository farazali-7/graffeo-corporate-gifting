import type { FooterColumn, NavLink } from "@/types";

/** In-page and site navigation. Corporate Gifting is surfaced explicitly. */
export const PRIMARY_NAV: NavLink[] = [
  { label: "The Options", href: "#choose" },
  { label: "How It Works", href: "#process" },
  { label: "Collections", href: "#collections" },
  { label: "Questions", href: "#faq" },
];

export const PRIMARY_CTA: NavLink = {
  label: "Start a Gift Order",
  href: "#choose",
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Gifting",
    links: [
      { label: "Self-Serve Gifting", href: "#choose" },
      { label: "Concierge Program", href: "#choose" },
      { label: "Collections", href: "#collections" },
      { label: "Volume Pricing", href: "#faq" },
    ],
  },
  {
    title: "The Roastery",
    links: [
      { label: "Our Story", href: "#heritage" },
      { label: "North Beach", href: "#heritage" },
      { label: "Roasting Method", href: "#process" },
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
