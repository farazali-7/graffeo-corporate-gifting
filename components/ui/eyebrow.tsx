import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  /** Light variant for use on the dark forest background. */
  tone?: "default" | "onDark";
}

/**
 * The editorial section label: a small-caps, letter-spaced kicker preceded
 * by a short hairline. Used above every section heading for vertical rhythm.
 */
export function Eyebrow({ children, className, tone = "default" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs font-medium uppercase tracking-eyebrow",
        tone === "onDark" ? "text-copper-soft" : "text-copper",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-8",
          tone === "onDark" ? "bg-copper-soft/60" : "bg-copper/50",
        )}
      />
      {children}
    </span>
  );
}
