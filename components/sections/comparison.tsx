import { Check, Minus } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { COMPARISON_ICONS, COMPARISON_ROWS } from "@/data/gifting";
import { cn } from "@/lib/utils";

const HEADS = [
  { key: "selfServe", label: "Self-Service", icon: COMPARISON_ICONS.selfServe },
  { key: "concierge", label: "Custom + Bulk", icon: COMPARISON_ICONS.concierge },
] as const;

/** Renders a boolean as an on-brand check/dash glyph, or a string verbatim. */
function ComparisonValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center text-forest">
        <span className="grid size-5 place-items-center rounded-full bg-forest/10">
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

/**
 * "Compare the options" — resolves any lingering doubt. A semantic table on
 * larger screens; on mobile the same data reflows into per-criterion cards so
 * nothing is squeezed into unreadable columns.
 */
export function Comparison() {
  return (
    <Section id="compare" tone="paper" spacing="tight">
      <Container>
        <SectionHeading
          eyebrow="Side by Side"
          title="The full comparison, in plain terms."
          description="No fine print. Here is exactly how the two paths differ across the things corporate buyers actually ask about."
        />

        {/* Desktop / tablet: semantic table */}
        <Reveal className="mt-14 hidden md:block">
          <div className="overflow-hidden rounded-card border border-line">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Comparison of Graffeo self-service and custom + bulk gifting
              </caption>
              <thead>
                <tr className="bg-cream">
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
                      className={cn(
                        "px-6 py-5",
                        key === "concierge" && "bg-forest/[0.04]",
                      )}
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon className="size-5 text-forest" strokeWidth={1.5} />
                        <span className="font-display text-lg text-ink">
                          {label}
                        </span>
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.criterion} className="align-middle">
                    <th
                      scope="row"
                      className="px-6 py-5 text-[0.95rem] font-medium text-ink"
                    >
                      {row.criterion}
                    </th>
                    <td className="px-6 py-5 text-[0.95rem] text-olive-muted">
                      <ComparisonValue value={row.selfServe} />
                    </td>
                    <td className="bg-forest/[0.04] px-6 py-5 text-[0.95rem] text-ink">
                      <ComparisonValue value={row.concierge} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile: per-criterion cards */}
        <Reveal stagger as="ul" className="mt-12 flex flex-col gap-4 md:hidden">
          {COMPARISON_ROWS.map((row) => (
            <li
              key={row.criterion}
              className="rounded-card border border-line bg-cream p-5"
            >
              <p className="text-xs font-medium uppercase tracking-eyebrow text-olive-faint">
                {row.criterion}
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-4">
                {HEADS.map(({ key, label }) => (
                  <div key={key} className="flex flex-col gap-1.5">
                    <dt className="text-[0.75rem] font-medium text-forest">
                      {label}
                    </dt>
                    <dd className="text-[0.9rem] text-ink">
                      <ComparisonValue
                        value={key === "selfServe" ? row.selfServe : row.concierge}
                      />
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
