import { MediaFrame } from "@/components/ui/media-frame";
import { PointerParallax } from "@/components/ui/pointer-parallax";
import { Reveal, MaskReveal } from "@/components/ui/reveal";
import { HERO_IMAGE } from "@/data/hero";

/**
 * The hero's supporting media — a lifestyle gift photograph in a 20px frame,
 * revealed with a longer "curtain" mask and given a whisper of pointer
 * parallax, with a floating heritage seal. Occupies 5 of the 12 columns.
 */
export function HeroImage() {
  return (
    <Reveal delay={0.9} className="relative lg:col-span-5">
      <PointerParallax className="relative">
        <figure className="group relative">
          <MaskReveal delay={0.95} duration={1.2}>
            <MediaFrame
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
              zoom="subtle"
              className="rounded-[1.25rem] shadow-[var(--shadow-lift)]"
            />
          </MaskReveal>

          <figcaption className="absolute -bottom-6 -left-6 hidden rounded-[1.25rem] border border-line bg-cream/95 px-6 py-5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:block">
            <p className="font-display text-3xl leading-none text-forest">90</p>
            <p className="mt-1 max-w-[9rem] text-xs leading-snug text-olive-muted">
              years of roasting, one bag at a time
            </p>
          </figcaption>
        </figure>
      </PointerParallax>
    </Reveal>
  );
}
