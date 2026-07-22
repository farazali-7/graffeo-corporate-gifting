import { RevealItem } from "@/components/ui/reveal";
import { HERO_TRUST_POINTS } from "@/data/hero";

/**
 * The hero trust row — a quiet, uppercase list of heritage signals, revealed
 * last in the hero sequence. A staggered child of the surrounding <Reveal>.
 */
export function TrustRow() {
  return (
    <RevealItem
      as="ul"
      className="flex flex-col gap-x-6 gap-y-2.5 text-[0.8125rem] uppercase tracking-[0.12em] text-olive-faint sm:flex-row sm:flex-wrap sm:items-center"
    >
      {HERO_TRUST_POINTS.map((point) => (
        <li key={point} className="flex items-center gap-2">
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-brass" />
          {point}
        </li>
      ))}
    </RevealItem>
  );
}
