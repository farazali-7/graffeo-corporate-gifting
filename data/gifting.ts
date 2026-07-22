import {
  Boxes,
  ClipboardCheck,
  Clock,
  CreditCard,
  Palette,
  Truck,
  UserRound,
  Wallet,
} from "lucide-react";
import type {
  ComparisonRow,
  GiftingPath,
  HeritageStat,
  ProcessStep,
} from "@/types";

/** Heritage proof points shown beneath the hero. */
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
    eyebrow: "Option One",
    title: "Self-Serve Gifting",
    description:
      "Choose a curated coffee gift, add your recipients, and check out in minutes. Ideal when you know what you want and need it handled today.",
    bestFor: [
      "Up to 50 recipients",
      "You want to order right now",
      "Standard or ready-made gift sets",
    ],
    highlights: [
      { icon: Clock, label: "Live in minutes" },
      { icon: CreditCard, label: "Card checkout" },
      { icon: Truck, label: "Nationwide shipping" },
    ],
    cta: { label: "Browse & Send Gifts", href: "#collections" },
    featured: true,
  },
  {
    id: "concierge",
    eyebrow: "Option Two",
    title: "Concierge Program",
    description:
      "Work one-on-one with a gifting specialist on custom branding, address collection, invoicing, and large or recurring orders. Built for scale.",
    bestFor: [
      "50 to 5,000+ recipients",
      "Custom branding or hand-notes",
      "Invoicing, POs & address collection",
    ],
    highlights: [
      { icon: Palette, label: "Custom branding" },
      { icon: Wallet, label: "Invoice & PO terms" },
      { icon: UserRound, label: "Dedicated specialist" },
    ],
    cta: { label: "Talk to a Specialist", href: "#final-cta" },
  },
];

/** Side-by-side breakdown to resolve any lingering uncertainty. */
export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    criterion: "Best recipient count",
    selfServe: "1 – 50",
    concierge: "50 – 5,000+",
  },
  {
    criterion: "Setup time",
    selfServe: "Minutes, self-guided",
    concierge: "A short call, we build it",
  },
  {
    criterion: "Branding",
    selfServe: "Signature gift notes",
    concierge: "Custom ribbon, cards & logo",
  },
  {
    criterion: "Address collection",
    selfServe: "You upload a list",
    concierge: "We collect for you, privately",
  },
  {
    criterion: "Payment",
    selfServe: "Credit card at checkout",
    concierge: "Invoice, PO or card",
  },
  {
    criterion: "Support",
    selfServe: "Email & help center",
    concierge: "Named specialist, start to finish",
  },
];

/** The reassuring, operational "how it works" narrative. */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Tell us who it's for",
    description:
      "Pick a path and share your recipient count, timing, and any branding you have in mind. No account required to begin.",
  },
  {
    number: "02",
    title: "We curate the roast",
    description:
      "Every gift ships within 48 hours of roasting. Choose a signature collection or let a specialist compose something bespoke.",
  },
  {
    number: "03",
    title: "Addresses, handled",
    description:
      "Upload your list or let us collect addresses on your behalf — recipients never have to share details with you directly.",
  },
  {
    number: "04",
    title: "Sent with intention",
    description:
      "We pack, note, and dispatch nationwide. You receive tracking, a single clean invoice, and one point of contact throughout.",
  },
];

/** Icons reused by the comparison legend/header. */
export const COMPARISON_ICONS = {
  selfServe: Boxes,
  concierge: ClipboardCheck,
} as const;
