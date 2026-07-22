import type { FaqItem, GiftCollection, Testimonial } from "@/types";

/**
 * Curated gift collections. Images are warm, authentic coffee photography
 * served through next/image. Swap `image` for owned assets in production.
 */
export const COLLECTIONS: GiftCollection[] = [
  {
    name: "The North Beach",
    origin: "Signature Espresso Blend",
    note: "Our house roast in a hand-tied gift box with two ceramic cups.",
    priceFrom: "From $58",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    alt: "Dark roasted espresso coffee beans in a warm ceramic cup on a wooden surface",
  },
  {
    name: "The Roaster's Trio",
    origin: "Three Single Origins",
    note: "A curated journey through Ethiopia, Colombia, and Sumatra.",
    priceFrom: "From $84",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=80",
    alt: "Three kraft-paper bags of single origin whole bean coffee arranged on linen",
  },
  {
    name: "The Executive",
    origin: "Reserve & Accoutrements",
    note: "Reserve micro-lot beans, a pour-over set, and Italian biscotti.",
    priceFrom: "From $145",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
    alt: "An elegant pour-over coffee setup with freshly brewed coffee and beans nearby",
  },
];

/** Corporate testimonials — proof this roaster has done this before. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We sent Graffeo to 340 clients for the holidays. One email, one invoice, zero chased addresses. It looked like we'd spent weeks on it.",
    name: "Marielle Chen",
    role: "Head of Client Experience",
    company: "Hartwell & Reed",
  },
  {
    quote:
      "The concierge team custom-branded every box and collected addresses for us. Our people still bring it up months later.",
    name: "David Okafor",
    role: "Office Experience Lead",
    company: "Northlight Studios",
  },
];

/** FAQs written to answer the exact questions that generate support tickets. */
export const FAQS: FaqItem[] = [
  {
    question: "Can I send gifts without collecting everyone's address?",
    answer:
      "Yes. With the Concierge Program we send each recipient a private link to enter their own shipping details, so no one has to share their address with you. For self-serve orders, you can upload a spreadsheet of addresses at checkout.",
  },
  {
    question: "How many gifts can I send at once?",
    answer:
      "Self-serve handles up to 50 recipients comfortably. For anything larger — up to several thousand — the Concierge Program is purpose-built, with dedicated production and delivery scheduling.",
  },
  {
    question: "Can the gifts be branded with our company logo?",
    answer:
      "Concierge orders include custom ribbon, printed gift cards, and logo-embossed boxes. Self-serve orders ship in our signature packaging with a personalized note from your team.",
  },
  {
    question: "Do you offer invoicing and purchase orders?",
    answer:
      "Concierge orders can be paid by invoice, purchase order, or card, with net terms available for qualifying companies. Self-serve checkout accepts all major cards and issues an itemized receipt instantly.",
  },
  {
    question: "How quickly can everything ship?",
    answer:
      "Every gift is dispatched within 48 hours of roasting for freshness. Self-serve orders typically arrive in 3–5 business days. For large concierge sends, we agree on a delivery window up front and hit it.",
  },
  {
    question: "Who do I contact if something goes wrong?",
    answer:
      "Concierge clients have a single named specialist from first email to final delivery. Self-serve orders are supported by our North Beach team by email, with most replies inside one business day.",
  },
];
