import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal, RevealItem, MaskReveal } from "@/components/ui/reveal";

/**
 * Hero — the page's thesis in one screen: corporate gifting, made effortless,
 * from a heritage roaster. Owns the single primary CTA and an editorial
 * image frame with a mask reveal.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="texture-grain relative isolate overflow-hidden bg-paper pb-20 pt-32 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-44"
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
            <MaskReveal delay={0.1}>Unforgettable</MaskReveal>
            <MaskReveal delay={0.2}>coffee gifts,</MaskReveal>
            <MaskReveal delay={0.3}>
              <span className="italic text-forest">without</span> the
            </MaskReveal>
            <MaskReveal delay={0.4}>logistics.</MaskReveal>
          </h1>

          <Reveal stagger delay={0.55} className="mt-8 flex flex-col gap-8">
            <RevealItem
              as="span"
              className="block max-w-xl text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-olive-muted"
            >
              Send small-batch coffee to clients, teams, and partners — one
              order, one invoice, zero chased addresses. Roasted in North Beach,
              San Francisco, and dispatched within 48 hours.
            </RevealItem>

            <RevealItem className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a href="#choose">
                  Start a Gift Order
                  <ArrowRight
                    className="size-4 transition-transform duration-300 ease-[var(--ease-editorial)] group-hover/button:translate-x-1"
                    strokeWidth={1.75}
                  />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="#choose">Compare the Options</a>
              </Button>
            </RevealItem>

            <RevealItem
              as="span"
              className="flex items-center gap-3 text-sm text-olive-faint"
            >
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              Trusted by 500+ companies last gifting season
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
