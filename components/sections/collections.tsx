import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { COLLECTIONS } from "@/data/content";

/**
 * A restrained, gallery-style preview of curated gift collections. Not a
 * catalog — three considered options that make the self-serve path tangible.
 */
export function Collections() {
  return (
    <Section id="collections" tone="paper" grain>
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Curated to Gift"
            title="A few ways to begin."
            description="Ready-made collections, roasted to order. Each can be sent as-is or used as the starting point for a bespoke concierge send."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button asChild variant="link" size="md">
              <a href="#choose">
                View all collections
                <ArrowUpRight className="size-4" strokeWidth={1.75} />
              </a>
            </Button>
          </Reveal>
        </div>

        <Reveal
          stagger
          as="ul"
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8"
        >
          {COLLECTIONS.map((item) => (
            <RevealItem as="li" key={item.name}>
              <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-cream shadow-[var(--shadow-card)] transition-[box-shadow,border-color,transform] duration-500 ease-[var(--ease-editorial)] hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[var(--shadow-lift)]">
                <div className="media-grain relative aspect-[4/3] overflow-hidden bg-stone">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="text-xs font-medium uppercase tracking-eyebrow text-brass-ink">
                    {item.origin}
                  </p>
                  <h3 className="font-display text-2xl font-normal text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-1 flex-1 text-[0.95rem] leading-relaxed text-olive-muted">
                    {item.note}
                  </p>
                  <p className="mt-4 border-t border-line pt-4 font-display text-lg text-forest">
                    {item.priceFrom}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
