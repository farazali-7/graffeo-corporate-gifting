import { Leaf, PackageOpen, Stamp } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal, RevealItem, MaskReveal } from "@/components/ui/reveal";

const PILLARS = [
  {
    icon: Leaf,
    title: "Small-batch, always fresh",
    body: "The same beans we roast for North Beach — never a separate, lesser gift line. Dispatched within 48 hours of roasting.",
  },
  {
    icon: PackageOpen,
    title: "Presented with intention",
    body: "Hand-tied boxes, considered notes, and packaging that feels received rather than delivered.",
  },
  {
    icon: Stamp,
    title: "Handled end to end",
    body: "Addresses, branding, invoicing, and delivery — carried by one team so your name is the only one your recipient sees.",
  },
];

/**
 * "What is corporate gifting?" — the orienting narrative. Frames the service
 * as heritage craftsmanship applied to business gifting, then names the three
 * things a buyer actually gets.
 */
export function WhatIsGifting() {
  return (
    <Section tone="paper" grain>
      <Container className="grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
        {/* Editorial image with mask reveal */}
        <Reveal className="order-last lg:order-first">
          <MaskReveal>
            <MediaFrame
              src="https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=1000&q=80"
              alt="A roaster's hands scooping freshly roasted coffee beans into a paper bag"
              aspect="aspect-[5/6]"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="shadow-[var(--shadow-card)]"
            />
          </MaskReveal>
        </Reveal>

        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="What Corporate Gifting Means Here"
            title={
              <>
                A ninety-year-old craft,
                <br className="hidden sm:block" /> sent on your behalf.
              </>
            }
            description="Corporate gifting at Graffeo isn't a catalog add-on. It's our roastery doing what it has always done — carefully — and delivering it to the people who matter to your business, without the logistical weight landing on your desk."
          />

          <Reveal stagger as="ul" className="flex flex-col gap-6">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <RevealItem
                as="li"
                key={title}
                className="flex gap-5 border-t border-line pt-6"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-forest/8 text-forest">
                  <Icon className="size-5" strokeWidth={1.5} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-xl font-normal text-ink">
                    {title}
                  </h3>
                  <p className="max-w-md text-[0.975rem] leading-relaxed text-olive-muted">
                    {body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
