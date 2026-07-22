import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { GIFTING_CONTACT_EMAIL, GIFTING_STORE_URL } from "@/data/gifting";

/**
 * The closing action — a full forest field that deliberately breaks the
 * page's light rhythm. Restates the fork one last time so no visitor leaves
 * without a clear next click, over a barely-there coffee-bean motif.
 */
export function FinalCta() {
  return (
    <Section id="final-cta" tone="forest" className="overflow-hidden">
      {/* Coffee-bean motif, ~6% opacity */}
      <div
        aria-hidden
        className="bean-motif pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
      />
      {/* Soft warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(183,138,74,0.22),transparent_65%)] blur-2xl"
      />

      <Container>
        <Reveal
          stagger
          className="mx-auto flex max-w-2xl flex-col items-center gap-8 py-8 text-center sm:py-12"
        >
          <RevealItem as="span">
            <Eyebrow tone="onDark">Ready When You Are</Eyebrow>
          </RevealItem>

          <RevealItem
            as="span"
            className="block font-display text-[length:var(--text-h1)] font-normal leading-[var(--text-h1--line-height)] text-balance text-paper"
          >
            Ready to make someone&rsquo;s day?
          </RevealItem>

          <RevealItem
            as="span"
            className="block max-w-xl text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-paper/70"
          >
            Start a self-service order in minutes, or request a custom program
            for something branded and at scale. Either way, the logistics are
            ours.
          </RevealItem>

          <RevealItem className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="onDark">
              <a href={GIFTING_STORE_URL}>
                Start Self-Service
                <ArrowRight
                  className="size-4 transition-transform duration-[var(--duration-hover)] ease-[var(--ease-editorial)] group-hover/button:translate-x-1"
                  strokeWidth={1.75}
                />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-forest-deep"
            >
              <a href={`mailto:${GIFTING_CONTACT_EMAIL}`}>Request Custom Order</a>
            </Button>
          </RevealItem>
        </Reveal>
      </Container>
    </Section>
  );
}
