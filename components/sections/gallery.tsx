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
 * that fits them. A column-based masonry gives an editorial, non-uniform
 * rhythm without stretching any image.
 */
export function Gallery() {
  return (
    <Section id="gallery" tone="paper" grain>
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
                    item.tall
                      ? "aspect-[3/4]"
                      : item.wide
                        ? "aspect-[16/10]"
                        : "aspect-[4/3]",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.02]"
                  />
                </div>
                {/* Scrim ensures caption contrast over any photograph */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-deep/70 to-transparent"
                />
                <figcaption className="absolute bottom-4 left-4">
                  <span className="rounded-pill bg-paper/90 px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-eyebrow text-forest-deep backdrop-blur-sm">
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
