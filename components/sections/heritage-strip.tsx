import { Container } from "@/components/ui/container";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { HERITAGE_STATS } from "@/data/gifting";

/**
 * A quiet band of heritage proof points directly under the hero — the
 * corporate buyer's first reassurance that this roaster has done this before.
 */
export function HeritageStrip() {
  return (
    <section
      id="heritage"
      aria-label="Graffeo by the numbers"
      className="border-y border-line bg-paper-deep"
    >
      <Container>
        <Reveal
          stagger
          as="ul"
          className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x"
        >
          {HERITAGE_STATS.map((stat, index) => (
            <RevealItem
              as="li"
              key={stat.label}
              className={[
                "flex flex-col gap-2 px-2 py-8 sm:px-6 lg:py-12",
                index < 2 ? "border-b border-line lg:border-b-0" : "",
                index % 2 === 0 ? "border-r border-line lg:border-r-0" : "",
              ].join(" ")}
            >
              <span className="font-display text-4xl font-normal text-forest lg:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm leading-snug text-olive-muted">
                {stat.label}
              </span>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
