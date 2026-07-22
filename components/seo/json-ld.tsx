import type { FaqItem } from "@/types";

const SITE_URL = "https://gifting.graffeo.com";

/** Serializes a JSON-LD object into a script tag (server-rendered). */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Data is static and author-controlled; safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization schema — heritage roaster identity for rich results. */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Graffeo Coffee Roasting Company",
        url: SITE_URL,
        foundingDate: "1935",
        slogan: "Thoughtful coffee gifts for clients, teams & partners.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "733 Columbus Avenue",
          addressLocality: "San Francisco",
          addressRegion: "CA",
          addressCountry: "US",
        },
      }}
    />
  );
}

/** FAQPage schema built from the on-page questions to reduce support load. */
export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}
