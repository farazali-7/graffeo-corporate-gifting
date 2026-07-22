import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal, RevealItem, MaskReveal } from "@/components/ui/reveal";
import { HeroButtons } from "@/components/sections/hero/hero-buttons";
import { TrustRow } from "@/components/sections/hero/trust-row";
import { HERO_EYEBROW, HERO_SUBCOPY } from "@/data/hero";

/**
 * The hero's copy column (7 of 12): eyebrow, mask-revealed headline, and a
 * staggered group of subcopy, actions, and trust signals. Content is sourced
 * from the data layer; only the headline's typographic emphasis lives here.
 */
export function HeroContent() {
  return (
    <div className="lg:col-span-7">
      <div className="max-w-[620px]">
        <Reveal delay={0.05}>
          <Eyebrow>{HERO_EYEBROW}</Eyebrow>
        </Reveal>

        <h1 className="mt-7 font-display text-[length:var(--text-display)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          <MaskReveal delay={0.3}>Thoughtful coffee</MaskReveal>
          <MaskReveal delay={0.42}>gifts for clients,</MaskReveal>
          <MaskReveal delay={0.54}>
            teams &amp; <span className="italic text-forest">partners</span>.
          </MaskReveal>
        </h1>

        <Reveal stagger delay={0.5} className="mt-8 flex flex-col gap-8">
          <RevealItem
            as="span"
            className="block max-w-[38rem] text-[length:var(--text-lead)] leading-[1.7] text-olive-muted"
          >
            {HERO_SUBCOPY}
          </RevealItem>

          <HeroButtons />
          <TrustRow />
        </Reveal>
      </div>
    </div>
  );
}
