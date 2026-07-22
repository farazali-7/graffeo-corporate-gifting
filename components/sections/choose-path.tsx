import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PathCard } from "@/components/sections/path-card";
import { GIFTING_PATHS } from "@/data/gifting";

/**
 * "Which option fits me?" — the page's decision architecture. Two clearly
 * differentiated paths so a corporate buyer self-selects within seconds and
 * clicks through, rather than emailing support.
 */
export function ChoosePath() {
  return (
    <Section id="choose" tone="deep" spacing="default">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Which Option Fits You"
          title="Two ways to gift. Pick the one that sounds like you."
          description="Most buyers know within a sentence. Choose self-serve to send today, or the concierge program when scale, branding, or invoicing come into play."
          className="mx-auto"
        />

        <Reveal
          stagger
          as="ul"
          className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8"
        >
          {GIFTING_PATHS.map((path) => (
            <PathCard key={path.id} path={path} />
          ))}
        </Reveal>

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
