import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "default" | "onDark";
  /** Heading level for correct document outline; defaults to h2. */
  as?: "h2" | "h3";
  className?: string;
}

/**
 * Composed section header — eyebrow, display-serif title, and optional lead.
 * Encapsulates the page's heading rhythm so every section stays consistent.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
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
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <Heading
        className={cn(
          "font-display text-balance text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] font-normal",
          tone === "onDark" ? "text-paper" : "text-ink",
          centered && "max-w-3xl",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "text-pretty text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)]",
            tone === "onDark" ? "text-paper/70" : "text-stone",
            centered ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
