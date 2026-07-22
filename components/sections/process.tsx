import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GrowLine } from "@/components/ui/grow-line";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { PROCESS_STEPS } from "@/data/gifting";

/**
 * "How It Works" — Choose → Customize → Send → Delight. A calm four-beat
 * narrative that dissolves the corporate buyer's real fear: complexity. On
 * desktop the steps are connected by a line that draws itself into place.
 */
export function Process() {
  return (
    <Section id="process" tone="cream">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Four steps, and the hard parts are ours."
          description="You bring the intention; we carry the logistics — including the address-chasing and packing that usually eat an afternoon."
        />

        <div className="relative mt-16 lg:mt-24">
          {/* Connector line, aligned to the centre of the step icons */}
          <GrowLine className="absolute inset-x-[12.5%] top-8 hidden lg:block" />

          <Reveal
            stagger
            as="ol"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <RevealItem
                  as="li"
                  key={step.number}
                  className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left"
                >
                  <span className="relative z-10 grid size-16 place-items-center rounded-full border border-line-strong bg-cream text-forest shadow-[var(--shadow-card)]">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-eyebrow text-brass-ink">
                    Step {step.number}
                  </span>
                  <h3 className="font-display text-xl font-normal text-ink">
                    {step.title}
                  </h3>
                  <p className="max-w-xs text-[0.95rem] leading-relaxed text-olive-muted lg:max-w-none">
                    {step.description}
                  </p>
                </RevealItem>
              );
            })}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
