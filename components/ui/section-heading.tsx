import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "default" | "onDark";
  /** Optional editorial index (e.g. "01") rendered before the eyebrow. */
  index?: string;
  /** Heading level for correct document outline; defaults to h2. */
  as?: "h2" | "h3";
  className?: string;
}

/**
 * Composed section header — optional index, eyebrow, display-serif title, and
 * lead — revealed as a fade-up stagger (heading → lead). Encapsulates the
 * page's heading rhythm so every section stays consistent.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  index,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      stagger
      className={cn(
        "flex flex-col gap-5",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <RevealItem
        as="div"
        className={cn("flex items-center gap-4", centered && "justify-center")}
      >
        {index ? (
          <span
            aria-hidden
            className={cn(
              "font-display text-sm leading-none",
              tone === "onDark" ? "text-brass-soft" : "text-brass-ink",
            )}
          >
            {index}
          </span>
        ) : null}
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </RevealItem>

      <RevealItem as="div">
        <Heading
          className={cn(
            "font-display text-balance text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] font-normal",
            tone === "onDark" ? "text-paper" : "text-ink",
            centered && "max-w-3xl",
          )}
        >
          {title}
        </Heading>
      </RevealItem>

      {description ? (
        <RevealItem
          as="p"
          className={cn(
            "text-pretty text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)]",
            tone === "onDark" ? "text-paper/70" : "text-olive-muted",
            centered ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {description}
        </RevealItem>
      ) : null}
    </Reveal>
  );
}
