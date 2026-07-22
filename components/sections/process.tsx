import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { PROCESS_STEPS } from "@/data/gifting";

/**
 * "How it works" — a calm, four-step operational narrative that answers the
 * corporate buyer's real anxiety: is this going to be easy, and who handles
 * the hard parts?
 */
export function Process() {
  return (
    <Section id="process" tone="cream">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Effortless, from first email to final delivery."
          description="Four steps. You bring the intention; we carry the logistics — including the parts that usually eat an afternoon."
        />

        <Reveal
          stagger
          as="ol"
          className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {PROCESS_STEPS.map((step) => (
            <RevealItem
              as="li"
              key={step.number}
              className="relative flex flex-col gap-4 border-t border-line-strong pt-6"
            >
              <span
                aria-hidden
                className="font-display text-5xl font-normal text-forest/25"
              >
                {step.number}
              </span>
              <h3 className="font-display text-xl font-normal text-ink">
                {step.title}
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-olive-muted">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
