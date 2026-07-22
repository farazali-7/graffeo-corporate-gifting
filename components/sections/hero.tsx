import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MediaFrame } from "@/components/ui/media-frame";
import { PointerParallax } from "@/components/ui/pointer-parallax";
import { ScrollCue } from "@/components/ui/scroll-cue";
import { Reveal, RevealItem, MaskReveal } from "@/components/ui/reveal";
import { GIFTING_CONTACT_EMAIL, GIFTING_STORE_URL } from "@/data/gifting";

/** Compact, editorial trust signals shown directly beneath the CTAs. */
const TRUST_POINTS = [
  "Family-Owned Since 1935",
  "Roasted in San Francisco",
  "Trusted by Restaurants & Hotels",
];

/**
 * Hero — the page's most important section. Its job is not to sell coffee but
 * to answer "what do I do next?" by naming both gifting paths immediately.
 * Content leads on a 7-column measure; the lifestyle image supports on 5.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="texture-grain relative isolate flex min-h-[44rem] items-center overflow-hidden bg-paper py-16 md:min-h-[85vh] md:py-20 lg:min-h-[92vh]"
    >
      {/* Warm ambient wash for depth behind the type */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 top-0 -z-10 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(31,90,69,0.12),transparent_62%)] blur-2xl"
      />

      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Copy column — 7 of 12 */}
        <div className="lg:col-span-7">
          <div className="max-w-[620px]">
            <Reveal delay={0.05}>
              <Eyebrow>Corporate Gifting · Since 1935</Eyebrow>
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
                Whether you&rsquo;re thanking loyal clients, celebrating your
                team, or sending holiday gifts at scale, Graffeo offers a gifting
                experience that&rsquo;s simple, elegant, and memorable.
              </RevealItem>

              <RevealItem className="flex flex-col gap-6 sm:flex-row sm:gap-4">
                <Button asChild size="lg" className="h-[3.25rem] w-full px-7 sm:w-auto">
                  <a href={GIFTING_STORE_URL}>
                    Start Self-Service Order
                    <ArrowRight
                      className="size-4 transition-transform duration-[var(--duration-hover)] ease-[var(--ease-editorial)] group-hover/button:translate-x-1"
                      strokeWidth={1.75}
                    />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="h-[3.25rem] w-full px-7 sm:w-auto"
                >
                  <a href={`mailto:${GIFTING_CONTACT_EMAIL}`}>Request Custom Order</a>
                </Button>
              </RevealItem>

              <RevealItem
                as="ul"
                className="flex flex-col gap-x-6 gap-y-2.5 text-[0.8125rem] uppercase tracking-[0.12em] text-olive-faint sm:flex-row sm:flex-wrap sm:items-center"
              >
                {TRUST_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="size-1.5 shrink-0 rounded-full bg-brass"
                    />
                    {point}
                  </li>
                ))}
              </RevealItem>
            </Reveal>
          </div>
        </div>

        {/* Image column — 5 of 12 */}
        <Reveal delay={0.9} className="relative lg:col-span-5">
          <PointerParallax className="relative">
            <figure className="group relative">
              <MaskReveal delay={0.95} duration={1.2}>
                <MediaFrame
                  src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1100&q=80"
                  alt="A partially opened premium coffee gift box tied with ribbon on a warm wooden table"
                  aspect="aspect-[4/5]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                  zoom="subtle"
                  className="rounded-[1.25rem] shadow-[var(--shadow-lift)]"
                />
              </MaskReveal>

              {/* Floating heritage seal */}
              <figcaption className="absolute -bottom-6 -left-6 hidden rounded-[1.25rem] border border-line bg-cream/95 px-6 py-5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:block">
                <p className="font-display text-3xl leading-none text-forest">90</p>
                <p className="mt-1 max-w-[9rem] text-xs leading-snug text-olive-muted">
                  years of roasting, one bag at a time
                </p>
              </figcaption>
            </figure>
          </PointerParallax>
        </Reveal>
      </Container>

      {/* "There is more below" cue */}
      <ScrollCue className="absolute bottom-8 left-6 hidden lg:flex xl:left-12" />
    </section>
  );
}
