import { Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { TESTIMONIALS } from "@/data/content";

/**
 * Social proof from corporate clients — the reassurance that this roaster has
 * handled sends at scale before. Rendered on the deep forest surface for a
 * single moment of contrast in the page's rhythm.
 */
export function Testimonials() {
  return (
    <Section tone="forest" grain aria-label="What corporate clients say">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow tone="onDark">Trusted at Scale</Eyebrow>
          <p className="mt-6 font-display text-[length:var(--text-h2)] font-normal leading-[var(--text-h2--line-height)] text-balance text-paper">
            Sends that look like weeks of work — handled in an afternoon.
          </p>
        </Reveal>

        <Reveal
          stagger
          as="ul"
          className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <RevealItem as="li" key={t.name}>
              <figure className="flex h-full flex-col gap-6 rounded-lg border border-paper/12 bg-paper/[0.03] p-8 sm:p-10">
                <Quote
                  className="size-8 text-copper-soft"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <blockquote className="flex-1 font-display text-[1.5rem] font-normal leading-snug text-pretty text-paper/95">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex flex-col gap-0.5 border-t border-paper/12 pt-6">
                  <span className="font-medium text-paper">{t.name}</span>
                  <span className="text-sm text-paper/60">
                    {t.role}, {t.company}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
