import {
  Boxes,
  ClipboardCheck,
  CreditCard,
  Gift,
  Handshake,
  MailPlus,
  MapPinOff,
  Package,
  Palette,
  Sparkles,
  Truck,
  Wallet,
} from "lucide-react";
import type {
  ComparisonRow,
  GiftingPath,
  HeritageStat,
  ProcessStep,
} from "@/types";

/**
 * Destination for the self-service store (Zest). Kept as a single constant so
 * it can be pointed at the live storefront URL in one place.
 */
export const GIFTING_STORE_URL = "#choose";
/** Where custom / bulk enquiries are routed. */
export const GIFTING_CONTACT_EMAIL = "gifting@graffeo.com";

/** Heritage proof points shown in the "Trusted Since 1935" band. */
export const HERITAGE_STATS: HeritageStat[] = [
  { value: "1935", label: "Roasting in North Beach" },
  { value: "3 Gen", label: "Family owned & operated" },
  { value: "48 hrs", label: "From roast to dispatch" },
  { value: "500+", label: "Companies gifted last season" },
];

/**
 * The two purchasing paths. This fork is the core decision architecture of
 * the page — every buyer should self-identify within seconds.
 */
export const GIFTING_PATHS: GiftingPath[] = [
  {
    id: "self-serve",
    eyebrow: "Self-Service",
    title: "Multi-Recipient Orders",
    description:
      "Send curated coffee gifts to a group in minutes. Ideal for holiday teams, remote employees, and client appreciation — with no addresses required from you.",
    bestFor: [
      "Holiday & client gifts",
      "Remote teams",
      "Small to medium orders",
      "You want to send today",
    ],
    highlights: [
      { icon: MapPinOff, label: "No addresses needed" },
      { icon: Gift, label: "Personalized note" },
      { icon: CreditCard, label: "Self checkout" },
    ],
    cta: { label: "Go to Gifting Store", href: GIFTING_STORE_URL },
    featured: true,
  },
  {
    id: "concierge",
    eyebrow: "Custom Orders",
    title: "Custom + Bulk",
    description:
      "Work with our team on branded packaging, bulk pricing, and large or recurring sends — built for events, conferences, and employee welcome kits.",
    bestFor: [
      "Large companies, 50–5,000+",
      "Custom branding & packaging",
      "Events & conferences",
      "Employee welcome kits",
    ],
    highlights: [
      { icon: Palette, label: "Custom branding" },
      { icon: Wallet, label: "Bulk pricing" },
      { icon: Handshake, label: "Dedicated support" },
    ],
    cta: {
      label: `Email ${GIFTING_CONTACT_EMAIL}`,
      href: `mailto:${GIFTING_CONTACT_EMAIL}`,
      external: true,
    },
  },
];

/**
 * Side-by-side breakdown. Booleans render as check/dash glyphs; strings as
 * short values — decision confidence at a glance, never a wall of prose.
 */
export const COMPARISON_ROWS: ComparisonRow[] = [
  { criterion: "Recipients", selfServe: "1 – 50", concierge: "50 – 5,000+" },
  { criterion: "Custom branding", selfServe: false, concierge: true },
  { criterion: "Personalized gift notes", selfServe: true, concierge: true },
  { criterion: "Bulk pricing", selfServe: false, concierge: true },
  {
    criterion: "Support",
    selfServe: "Email & help center",
    concierge: "Dedicated specialist",
  },
  {
    criterion: "Checkout",
    selfServe: "Card, self-serve",
    concierge: "Invoice, PO or card",
  },
  {
    criterion: "Shipping",
    selfServe: "3 – 5 business days",
    concierge: "Scheduled window",
  },
];

/** The reassuring four-beat narrative: Choose → Customize → Send → Delight. */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Choose",
    description:
      "Pick your gifting experience — self-service for groups, or custom for branded and bulk sends. No account needed to begin.",
    icon: Boxes,
  },
  {
    number: "02",
    title: "Customize",
    description:
      "Add a personalized gift message. For custom orders, we bring in your branding, packaging, and any hand-notes.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Send",
    description:
      "Upload a list, or let recipients enter their own address privately — no chasing details, no shared spreadsheets.",
    icon: MailPlus,
  },
  {
    number: "04",
    title: "Delight",
    description:
      "Fresh-roasted coffee arrives beautifully packaged, dispatched within 48 hours, with your name on the note.",
    icon: Package,
  },
];

/** Icons reused by the comparison column headers. */
export const COMPARISON_ICONS = {
  selfServe: Boxes,
  concierge: ClipboardCheck,
  shipping: Truck,
} as const;
