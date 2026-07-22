import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { FAQS } from "@/data/content";

/**
 * "Frequently asked" — deliberately front-and-centre to answer the exact
 * questions that generate support tickets before they're ever sent. A single
 * centred column (≈820px) keeps the focus on reading and resolving doubt.
 */
export function Faq() {
  return (
    <Section id="faq" tone="deep">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Before You Ask"
          title="Questions, answered."
          description="The things corporate buyers ask most — so you can move without waiting on a reply."
          className="mx-auto"
        />

        <div className="mx-auto mt-12 w-full max-w-[820px] lg:mt-16">
          <Reveal>
            <Accordion items={FAQS} defaultOpen={0} />
          </Reveal>

          <Reveal delay={0.1} className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-[0.95rem] text-olive-muted">
              Still have a question we haven&rsquo;t answered?
            </p>
            <Button asChild variant="secondary" size="md">
              <a href="#final-cta">Talk to our gifting team</a>
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
