import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { GIFTING_CONTACT_EMAIL, GIFTING_STORE_URL } from "@/data/gifting";

/**
 * The closing action. Restates the fork one last time — send now, or speak to
 * a specialist — so no visitor leaves without a clear next click.
 */
export function FinalCta() {
  return (
    <Section id="final-cta" tone="deep" grain spacing="tight">
      <Container className="relative overflow-hidden rounded-card border border-forest/15 bg-forest-deep px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(183,138,74,0.26),transparent_65%)] blur-2xl"
        />

        <Reveal stagger className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-7">
          <RevealItem as="span">
            <Eyebrow tone="onDark">Ready When You Are</Eyebrow>
          </RevealItem>

          <RevealItem
            as="span"
            className="block font-display text-[length:var(--text-h1)] font-normal leading-[var(--text-h1--line-height)] text-balance text-paper"
          >
            Ready to send great coffee?
          </RevealItem>

          <RevealItem
            as="span"
            className="block max-w-xl text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-paper/70"
          >
            Start a self-service order in minutes, or talk to our team about a
            custom program. Either way, the logistics are ours.
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
              <a href={`mailto:${GIFTING_CONTACT_EMAIL}`}>Talk to Our Team</a>
            </Button>
          </RevealItem>
        </Reveal>
      </Container>
    </Section>
  );
}
