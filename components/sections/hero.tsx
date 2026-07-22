import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal, RevealItem, MaskReveal } from "@/components/ui/reveal";
import { GIFTING_CONTACT_EMAIL, GIFTING_STORE_URL } from "@/data/gifting";

/** Compact trust signals that reassure a corporate buyer at first glance. */
const TRUST_POINTS = [
  "Since 1935",
  "Family-Owned",
  "San Francisco",
  "Thousands of happy customers",
];

/**
 * Hero — the page's most important section. Its job is not to sell coffee but
 * to answer "what do I do next?" by naming both gifting paths immediately.
 * Content leads; the lifestyle image supports.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="texture-grain relative isolate flex min-h-[88vh] items-center overflow-hidden bg-paper py-16 sm:py-20 lg:py-24"
    >
      {/* Warm ambient wash for depth behind the type */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 top-0 -z-10 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(31,90,69,0.12),transparent_62%)] blur-2xl"
      />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Copy column */}
        <div className="max-w-2xl">
          <Reveal delay={0.05}>
            <Eyebrow>Corporate Gifting · Since 1935</Eyebrow>
          </Reveal>

          <h1 className="mt-7 font-display text-[length:var(--text-display)] font-normal leading-[var(--text-display--line-height)] text-ink">
            <MaskReveal delay={0.1}>Thoughtful coffee</MaskReveal>
            <MaskReveal delay={0.2}>gifts for clients,</MaskReveal>
            <MaskReveal delay={0.3}>
              teams &amp; <span className="italic text-forest">partners</span>.
            </MaskReveal>
          </h1>

          <Reveal stagger delay={0.5} className="mt-8 flex flex-col gap-8">
            <RevealItem
              as="span"
              className="block max-w-xl text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-olive-muted"
            >
              Whether you&rsquo;re sending appreciation gifts to five clients or
              holiday gifts to five hundred employees, we&rsquo;ll help you
              choose the right gifting experience.
            </RevealItem>

            <RevealItem className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a href={GIFTING_STORE_URL}>
                  Start Self-Service Order
                  <ArrowRight
                    className="size-4 transition-transform duration-[var(--duration-hover)] ease-[var(--ease-editorial)] group-hover/button:translate-x-1"
                    strokeWidth={1.75}
                  />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={`mailto:${GIFTING_CONTACT_EMAIL}`}>Talk About Bulk Orders</a>
              </Button>
            </RevealItem>

            <RevealItem
              as="ul"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-olive-faint"
            >
              {TRUST_POINTS.map((point, index) => (
                <li key={point} className="flex items-center gap-5">
                  {index > 0 ? (
                    <span aria-hidden className="size-1 rounded-full bg-brass/60" />
                  ) : null}
                  {point}
                </li>
              ))}
            </RevealItem>
          </Reveal>
        </div>

        {/* Image column */}
        <Reveal delay={0.3} className="relative">
          <figure className="relative">
            <MaskReveal delay={0.35}>
              <MediaFrame
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=80"
                alt="A freshly poured cup of Graffeo coffee beside dark roasted beans on a warm wooden table"
                aspect="aspect-[4/5]"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
                className="shadow-[var(--shadow-lift)]"
              />
            </MaskReveal>

            {/* Floating heritage seal */}
            <figcaption className="absolute -bottom-6 -left-6 hidden rounded-card border border-line bg-cream/95 px-6 py-5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:block">
              <p className="font-display text-3xl leading-none text-forest">90</p>
              <p className="mt-1 max-w-[9rem] text-xs leading-snug text-olive-muted">
                years of roasting, one bag at a time
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
