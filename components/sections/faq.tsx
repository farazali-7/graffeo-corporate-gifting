import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { FAQS } from "@/data/content";

/**
 * "Frequently asked" — deliberately front-and-centre to answer the exact
 * questions that generate support tickets before they're ever sent. An
 * editorial two-column layout keeps the heading anchored while answers scroll.
 */
export function Faq() {
  return (
    <Section id="faq" tone="paper">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Before You Ask"
            title="Questions, answered."
            description="The things corporate buyers ask most — so you can move without waiting on a reply."
          />
          <Reveal delay={0.15} className="mt-8">
            <Button asChild variant="secondary" size="md">
              <a href="#final-cta">Still have a question?</a>
            </Button>
          </Reveal>
        </div>

        <Reveal>
          <Accordion items={FAQS} defaultOpen={0} />
        </Reveal>
      </Container>
    </Section>
  );
}
