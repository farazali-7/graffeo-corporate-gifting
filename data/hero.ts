import { GIFTING_CONTACT_EMAIL, GIFTING_STORE_URL } from "@/data/gifting";
import type { NavLink } from "@/types";

/** Hero copy and media, kept out of the presentation layer. */
export const HERO_EYEBROW = "Corporate Gifting · Since 1935";

export const HERO_SUBCOPY =
  "Whether you’re thanking loyal clients, celebrating your team, or sending holiday gifts at scale, Graffeo offers a gifting experience that’s simple, elegant, and memorable.";

/** Compact, editorial trust signals shown directly beneath the CTAs. */
export const HERO_TRUST_POINTS = [
  "Family-Owned Since 1935",
  "Roasted in San Francisco",
  "Trusted by Restaurants & Hotels",
] as const;

/** Primary (self-service) and secondary (custom) hero calls to action. */
export const HERO_ACTIONS: { primary: NavLink; secondary: NavLink } = {
  primary: { label: "Start Self-Service Order", href: GIFTING_STORE_URL },
  secondary: {
    label: "Request Custom Order",
    href: `mailto:${GIFTING_CONTACT_EMAIL}`,
  },
};

export const HERO_IMAGE = {
  src: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1100&q=80",
  alt: "A partially opened premium coffee gift box tied with ribbon on a warm wooden table",
} as const;
