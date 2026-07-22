import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealItem } from "@/components/ui/reveal";
import { HERO_ACTIONS } from "@/data/hero";

/**
 * The hero's paired calls to action: a dominant self-service primary and a
 * quieter custom-order secondary. A staggered child of the hero <Reveal>.
 * Buttons are full-width and stacked on mobile, inline from the sm breakpoint.
 */
export function HeroButtons() {
  const { primary, secondary } = HERO_ACTIONS;

  return (
    <RevealItem className="flex flex-col gap-6 sm:flex-row sm:gap-4">
      <Button asChild size="lg" className="h-[3.25rem] w-full px-7 sm:w-auto">
        <a href={primary.href}>
          {primary.label}
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
        <a href={secondary.href}>{secondary.label}</a>
      </Button>
    </RevealItem>
  );
}
