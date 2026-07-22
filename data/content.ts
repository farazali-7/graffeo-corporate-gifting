import type { FaqItem, GalleryItem, WhyPoint } from "@/types";

/**
 * "Why Graffeo" — three editorial reassurances, each a photograph, a title,
 * and two quiet lines. Emotional trust, not a feature list.
 */
export const WHY_POINTS: WhyPoint[] = [
  {
    title: "Family-Owned",
    lines: [
      "Three generations, one roastery.",
      "Every order still passes through our hands.",
    ],
    image:
      "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=1000&q=80",
    alt: "A roaster tending to coffee beans in a traditional drum roaster",
  },
  {
    title: "Small Batch",
    lines: [
      "The same beans we serve celebrated kitchens.",
      "Roasted to order, never mass-produced.",
    ],
    image:
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=80",
    alt: "Freshly roasted coffee beans cooling in a roastery tray",
  },
  {
    title: "San Francisco Heritage",
    lines: [
      "Roasting in North Beach since 1935.",
      "A recipe time has only refined.",
    ],
    image:
      "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=1000&q=80",
    alt: "Dark roasted coffee beans spilling from a vintage scoop",
  },
];

/**
 * Corporate-gifting inspiration. Per the brief, we show what gifting looks
 * like rather than listing testimonials — captioned so buyers can picture the
 * occasion that fits them. Sizes vary to create an editorial masonry rhythm.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    caption: "Holiday Gifts",
    image:
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=1100&q=80",
    alt: "Wrapped holiday coffee gifts arranged with greenery",
    ratio: "aspect-[4/5]",
  },
  {
    caption: "Client Welcome Kit",
    image:
      "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=1100&q=80",
    alt: "A welcome kit with coffee bags and a handwritten note",
    ratio: "aspect-square",
  },
  {
    caption: "Executive Gift",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1100&q=80",
    alt: "An elegant coffee gift box tied with ribbon on a marble table",
    ratio: "aspect-[3/4]",
  },
  {
    caption: "Employee Appreciation",
    image:
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1300&q=80",
    alt: "Branded coffee gifts laid out for a team on a wooden table",
    ratio: "aspect-[16/10]",
  },
  {
    caption: "Conference Gift",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1100&q=80",
    alt: "Kraft-paper bags of coffee arranged as conference welcome gifts",
    ratio: "aspect-square",
  },
  {
    caption: "Remote Team",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1100&q=80",
    alt: "A warm cup of coffee beside beans, ready to be sent to a remote colleague",
    ratio: "aspect-[4/5]",
  },
];

/** FAQs written to answer the exact decision-anxiety questions from the brief. */
export const FAQS: FaqItem[] = [
  {
    question: "What's the difference between self-service and custom orders?",
    answer:
      "Self-service is our online store for sending curated gifts to up to 50 recipients in minutes — perfect for holiday teams and client appreciation. Custom orders are handled by our team for larger, branded, or recurring sends, with bulk pricing and bespoke packaging.",
  },
  {
    question: "Do I need recipients' addresses?",
    answer:
      "No. For both paths we can send each recipient a private link to enter their own shipping details, so no one has to share an address with you. If you'd rather, you can upload a list at checkout instead.",
  },
  {
    question: "Can I include a personalized message?",
    answer:
      "Always. Every gift includes a personalized note from your team. Custom orders can add printed cards, branded ribbon, and hand-written messages at scale.",
  },
  {
    question: "What's the minimum order for bulk gifting?",
    answer:
      "There's no hard minimum, but custom and bulk pricing is designed for sends of roughly 50 recipients and up. For smaller groups, self-service is faster and just as thoughtful.",
  },
  {
    question: "Can you customize packaging?",
    answer:
      "Yes — custom orders include logo-embossed boxes, branded ribbon, printed cards, and curated accompaniments. Share what you have in mind and we'll compose something that feels unmistakably yours.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Every gift is dispatched within 48 hours of roasting for freshness. Self-service orders typically arrive in 3–5 business days; for large custom sends we agree on a delivery window up front and hit it.",
  },
  {
    question: "Who should I contact for custom requests?",
    answer:
      "Email gifting@graffeo.com and a dedicated specialist will guide you from first note to final delivery — one point of contact the whole way through.",
  },
];
