"use client";

import { useState } from "react";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { ComparisonValue } from "@/components/sections/comparison-value";
import { COMPARISON_ICONS, COMPARISON_ROWS } from "@/data/gifting";
import { cn } from "@/lib/utils";

type ColumnKey = "selfServe" | "concierge";

const HEADS = [
  { key: "selfServe", label: "Self-Service", icon: COMPARISON_ICONS.selfServe },
  { key: "concierge", label: "Custom + Bulk", icon: COMPARISON_ICONS.concierge },
] as const;

/**
 * The desktop comparison table. Rows reveal in sequence and gently highlight
 * on hover; hovering anywhere in a column makes that whole column glow, so the
 * eye can follow one path top-to-bottom while deciding.
 */
export function ComparisonTable() {
  const [activeColumn, setActiveColumn] = useState<ColumnKey | null>(null);

  const columnGlow = (key: ColumnKey) =>
    activeColumn === key
      ? key === "concierge"
        ? "bg-forest/[0.08]"
        : "bg-forest/[0.06]"
      : key === "concierge"
        ? "bg-forest/[0.04]"
        : undefined;

  const hoverProps = (key: ColumnKey) => ({
    onMouseEnter: () => setActiveColumn(key),
    onMouseLeave: () => setActiveColumn(null),
  });

  return (
    <div className="mt-14 hidden md:block">
      <div className="overflow-hidden rounded-card border border-line bg-cream">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Comparison of Graffeo self-service and custom + bulk gifting
          </caption>
          <thead>
            <tr className="border-b border-line">
              <th
                scope="col"
                className="w-2/5 px-6 py-5 text-sm font-medium uppercase tracking-eyebrow text-olive-faint"
              >
                Feature
              </th>
              {HEADS.map(({ key, label, icon: Icon }) => (
                <th
                  key={key}
                  scope="col"
                  {...hoverProps(key)}
                  className={cn(
                    "px-6 py-5 transition-colors duration-[var(--duration-hover)]",
                    columnGlow(key),
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="size-5 text-forest" strokeWidth={1.5} />
                    <span className="font-display text-lg text-ink">{label}</span>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <Reveal as="tbody" stagger className="divide-y divide-line">
            {COMPARISON_ROWS.map((row) => (
              <RevealItem
                as="tr"
                key={row.criterion}
                className="group align-middle transition-colors duration-[var(--duration-hover)] hover:bg-forest/[0.02]"
              >
                <th
                  scope="row"
                  className="px-6 py-5 text-[0.95rem] font-medium text-ink"
                >
                  {row.criterion}
                </th>
                <td
                  {...hoverProps("selfServe")}
                  className={cn(
                    "px-6 py-5 text-[0.95rem] text-olive-muted transition-colors duration-[var(--duration-hover)] group-hover:text-ink",
                    columnGlow("selfServe"),
                  )}
                >
                  <ComparisonValue value={row.selfServe} />
                </td>
                <td
                  {...hoverProps("concierge")}
                  className={cn(
                    "px-6 py-5 text-[0.95rem] text-ink transition-colors duration-[var(--duration-hover)]",
                    columnGlow("concierge"),
                  )}
                >
                  <ComparisonValue value={row.concierge} />
                </td>
              </RevealItem>
            ))}
          </Reveal>
        </table>
      </div>
    </div>
  );
}
