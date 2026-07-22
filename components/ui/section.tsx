import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Surface tone; drives background and default text color. */
  tone?: "paper" | "deep" | "cream" | "forest";
  /** Overlay the faint paper-grain texture for depth. */
  grain?: boolean;
  /** Tighten vertical padding for closely-related bands. */
  spacing?: "default" | "tight";
}

const TONE_CLASSES: Record<NonNullable<SectionProps["tone"]>, string> = {
  paper: "bg-paper text-ink",
  deep: "bg-paper-deep text-ink",
  cream: "bg-cream text-ink",
  forest: "bg-forest-deep text-paper",
};

/**
 * Vertical-rhythm primitive. Owns section padding, background tone, and the
 * optional grain overlay so no section reinvents its own spacing.
 */
export function Section({
  tone = "paper",
  grain = false,
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative isolate",
        spacing === "default"
          ? "py-20 sm:py-28 lg:py-36"
          : "py-14 sm:py-16 lg:py-20",
        TONE_CLASSES[tone],
        grain && "texture-grain",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
