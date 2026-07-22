import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { DecisionBoard } from "@/components/sections/decision/decision-board";

/**
 * "Which option fits me?" — the page's decision architecture. A two-question
 * assistant routes unsure buyers to one of two clearly differentiated paths,
 * so a corporate buyer self-selects within seconds and clicks through rather
 * than emailing support.
 */
export function ChoosePath() {
  return (
    <Section id="choose" tone="paper" spacing="default">
      <Container>
        <SectionHeading
          align="center"
          index="01"
          eyebrow="Choose Your Gifting Path"
          title="Two ways to gift. Pick the one that sounds like you."
          description="Most buyers know within a sentence. Send to a group yourself today, or work with our team on custom, branded, and bulk orders."
          className="mx-auto"
        />

        <DecisionBoard />

        <Reveal
          as="p"
          className="mt-10 text-center text-sm text-olive-muted"
          delay={0.1}
        >
          Still weighing it up? The full breakdown is just below.
        </Reveal>
      </Container>
    </Section>
  );
}
