import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { GiftingPath } from "@/types";

interface PathCardProps {
  path: GiftingPath;
  /** Marks this card as the assistant's recommendation for the buyer. */
  recommended?: boolean;
}

/**
 * One side of the decision fork — an editorial decision panel. The featured
 * (self-service) path sits on the forest surface to establish an unmistakable
 * primary route; the custom path stays quietly premium on warm white. The
 * entire panel is a single stretched link, so a click anywhere routes the
 * buyer onward, while the whole card lifts before the cursor reaches the CTA.
 * When the decision assistant recommends it, the panel gains a quiet ring.
 */
export function PathCard({ path, recommended = false }: PathCardProps) {
  const featured = Boolean(path.featured);
  const Icon = path.icon;

  return (
    <RevealItem
      as="li"
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.25rem] border p-8 sm:p-12",
        "transition-[transform,box-shadow,border-color] duration-[260ms] ease-[var(--ease-editorial)]",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
        "focus-within:-translate-y-1 focus-within:shadow-[var(--shadow-lift)]",
        featured
          ? "border-forest-deep bg-forest-deep text-paper"
          : "border-line bg-cream text-ink hover:border-line-strong",
        recommended &&
          "shadow-[var(--shadow-lift)] ring-2 ring-brass ring-offset-2 ring-offset-paper",
      )}
    >
      {recommended ? (
        <span className="absolute right-8 top-8 rounded-pill bg-brass px-3 py-1 text-[0.6875rem] font-medium uppercase tracking-eyebrow text-forest-deep">
          Recommended for you
        </span>
      ) : featured ? (
        <span className="absolute right-8 top-8 rounded-pill bg-brass px-3 py-1 text-[0.6875rem] font-medium uppercase tracking-eyebrow text-forest-deep">
          Most Popular
        </span>
      ) : null}

      {/* Top icon */}
      <span
        className={cn(
          "grid size-12 place-items-center rounded-full",
          featured ? "bg-paper/12 text-paper" : "bg-forest/8 text-forest",
        )}
      >
        <Icon className="size-6" strokeWidth={1.5} />
      </span>

      <div className="mt-6">
        <Eyebrow tone={featured ? "onDark" : "default"}>{path.eyebrow}</Eyebrow>
      </div>

      <h3
        className={cn(
          "mt-4 font-display text-[length:var(--text-h3)] font-normal leading-tight",
          featured ? "text-paper" : "text-ink",
        )}
      >
        {path.title}
      </h3>

      <p
        className={cn(
          "mt-4 text-[0.975rem] leading-relaxed",
          featured ? "text-paper/75" : "text-olive-muted",
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
        {path.highlights.map(({ icon: HighlightIcon, label }) => (
          <li
            key={label}
            className={cn(
              "flex items-center gap-2 text-[0.8125rem]",
              featured ? "text-paper/70" : "text-olive-muted",
            )}
          >
            <HighlightIcon className="size-4" strokeWidth={1.5} />
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
          {/* Stretched link: ::after covers the whole panel, making it clickable */}
          <a
            href={path.cta.href}
            className="after:absolute after:inset-0 after:rounded-[1.25rem] after:content-['']"
          >
            {path.cta.label}
            <ArrowRight
              className="size-4 transition-transform duration-[260ms] ease-[var(--ease-editorial)] group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </a>
        </Button>
      </div>
    </RevealItem>
  );
}
