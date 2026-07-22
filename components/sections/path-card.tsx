import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { GiftingPath } from "@/types";

interface PathCardProps {
  path: GiftingPath;
}

/**
 * One side of the decision fork. The featured (self-serve) path is rendered
 * on the forest surface to establish an unmistakable primary route, while the
 * concierge path stays quietly premium on cream.
 */
export function PathCard({ path }: PathCardProps) {
  const featured = Boolean(path.featured);

  return (
    <RevealItem
      as="li"
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border p-8 sm:p-10",
        "transition-[transform,box-shadow] duration-500 ease-[var(--ease-editorial)]",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
        featured
          ? "border-forest-deep bg-forest-deep text-paper"
          : "border-line bg-cream text-ink",
      )}
    >
      {featured ? (
        <span className="absolute right-8 top-8 rounded-pill bg-copper/90 px-3 py-1 text-[0.6875rem] font-medium uppercase tracking-eyebrow text-paper">
          Most Popular
        </span>
      ) : null}

      <Eyebrow tone={featured ? "onDark" : "default"}>{path.eyebrow}</Eyebrow>

      <h3
        className={cn(
          "mt-5 font-display text-[length:var(--text-h3)] font-normal leading-tight",
          featured ? "text-paper" : "text-ink",
        )}
      >
        {path.title}
      </h3>

      <p
        className={cn(
          "mt-4 text-[0.975rem] leading-relaxed",
          featured ? "text-paper/75" : "text-stone",
        )}
      >
        {path.description}
      </p>

      {/* Self-identification cues */}
      <ul className="mt-8 flex flex-col gap-3">
        {path.bestFor.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                featured ? "bg-paper/15 text-paper" : "bg-forest/10 text-forest",
              )}
            >
              <Check className="size-3" strokeWidth={2.5} />
            </span>
            <span
              className={cn(
                "text-[0.95rem]",
                featured ? "text-paper/90" : "text-ink/85",
              )}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* Operational highlights */}
      <ul
        className={cn(
          "mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t pt-6",
          featured ? "border-paper/15" : "border-line",
        )}
      >
        {path.highlights.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className={cn(
              "flex items-center gap-2 text-[0.8125rem]",
              featured ? "text-paper/70" : "text-stone",
            )}
          >
            <Icon className="size-4" strokeWidth={1.5} />
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-9 pt-1">
        <Button
          asChild
          size="lg"
          variant={featured ? "onDark" : "secondary"}
          className="w-full sm:w-auto"
        >
          <a href={path.cta.href}>
            {path.cta.label}
            <ArrowRight
              className="size-4 transition-transform duration-300 ease-[var(--ease-editorial)] group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </a>
        </Button>
      </div>
    </RevealItem>
  );
}
