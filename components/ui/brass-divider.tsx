import { cn } from "@/lib/utils";

/**
 * A custom editorial divider — two brass hairlines flanking a small coffee-bean
 * mark ( ──── ● ──── ). Replaces the bare <hr> for section transitions.
 * Decorative by default; pass an accessible label only if it conveys meaning.
 */
export function BrassDivider({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "onDark";
}) {
  const line = tone === "onDark" ? "bg-brass-soft/40" : "bg-brass/45";
  const bean = tone === "onDark" ? "text-brass-soft" : "text-brass";

  return (
    <div
      aria-hidden
      className={cn("flex items-center justify-center gap-4", className)}
    >
      <span className={cn("h-px w-16 sm:w-24", line)} />
      <svg
        viewBox="0 0 24 24"
        className={cn("size-3.5", bean)}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <ellipse cx="12" cy="12" rx="6" ry="9" transform="rotate(32 12 12)" />
        <path d="M9 6 Q14 12 15 18" />
      </svg>
      <span className={cn("h-px w-16 sm:w-24", line)} />
    </div>
  );
}
