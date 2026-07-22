import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { WHY_POINTS } from "@/data/content";

/**
 * "Why Graffeo" — emotional reassurance, not a feature list. Three editorial
 * columns, each a photograph and two quiet lines, that answer the buyer's
 * quietest question: can I trust this roaster with my company's name?
 */
export function WhyGraffeo() {
  return (
    <Section id="why" tone="deep">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why Graffeo"
          title="A gift only a heritage roaster can send."
          description="The reasons companies choose us are the same reasons they come back — quietly, season after season."
          className="mx-auto"
        />

        <Reveal
          stagger
          as="ul"
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10"
        >
          {WHY_POINTS.map((point, index) => (
            <RevealItem
              as="li"
              key={point.title}
              className="group flex flex-col gap-6 sm:last:odd:col-span-2 lg:last:odd:col-span-1"
            >
              <MediaFrame
                src={point.image}
                alt={point.alt}
                aspect="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                zoom="normal"
                priority={index === 0}
              />
              <div className="flex flex-col gap-2.5">
                <h3 className="font-display text-2xl font-normal text-ink">
                  {point.title}
                </h3>
                <div className="flex flex-col gap-1 text-[0.975rem] leading-relaxed text-olive-muted">
                  {point.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
