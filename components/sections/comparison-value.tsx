import { Check, Minus } from "lucide-react";

/**
 * Renders a comparison cell value: a boolean becomes an on-brand check/dash
 * glyph (with an sr-only label); a string renders verbatim. Framework-neutral
 * so it can be used from both the server card layout and the client table.
 */
export function ComparisonValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center text-forest">
        <span className="grid size-5 place-items-center rounded-full bg-forest/10 transition-transform duration-[var(--duration-hover)] ease-[var(--ease-editorial)] group-hover:scale-110">
          <Check className="size-3" strokeWidth={2.5} />
        </span>
        <span className="sr-only">Included</span>
      </span>
    ) : (
      <span className="inline-flex items-center text-olive-faint">
        <Minus className="size-4" strokeWidth={1.75} aria-hidden />
        <span className="sr-only">Not included</span>
      </span>
    );
  }
  return <>{value}</>;
}
