import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { GALLERY_ITEMS } from "@/data/content";
import { cn } from "@/lib/utils";

/**
 * Corporate-gifting inspiration. Rather than testimonials, we show what
 * gifting looks like — captioned by occasion so a buyer can picture the moment
 * that fits them. A column masonry with mixed aspect ratios gives an
 * editorial, magazine-like asymmetry; captions rise in under a gentle grade.
 */
export function Gallery() {
  return (
    <Section id="gallery" tone="cream">
      <Container>
        <SectionHeading
          eyebrow="Gifting, Pictured"
          title="What it looks like to be remembered."
          description="From a single client note to a conference full of welcome kits — a glimpse of the moments our coffee gets to be part of."
        />

        <Reveal
          stagger
          as="ul"
          className="mt-14 gap-5 sm:columns-2 lg:mt-20 lg:columns-3 lg:gap-6 [&>li]:mb-5 lg:[&>li]:mb-6"
        >
          {GALLERY_ITEMS.map((item, index) => (
            <RevealItem
              as="li"
              key={item.caption}
              className="break-inside-avoid"
            >
              <figure className="group relative overflow-hidden rounded-card border border-line shadow-[var(--shadow-card)]">
                <div
                  className={cn(
                    "media-grain relative overflow-hidden bg-stone",
                    item.ratio,
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.04]"
                  />
                </div>

                {/* Gentle gradient grade: always present on touch, hover-revealed on desktop */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/10 to-transparent opacity-80 transition-opacity duration-500 ease-[var(--ease-editorial)] lg:opacity-0 lg:group-hover:opacity-100"
                />

                {/* Caption rises 8px into place on hover */}
                <figcaption className="absolute inset-x-0 bottom-0 p-5 transition-[transform,opacity] duration-500 ease-[var(--ease-editorial)] lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  <span className="text-sm font-medium text-paper drop-shadow-sm">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
