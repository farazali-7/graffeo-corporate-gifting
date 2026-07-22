import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { ComparisonValue } from "@/components/sections/comparison-value";
import { COMPARISON_ROWS } from "@/data/gifting";

const COLUMNS = [
  { key: "selfServe", label: "Self-Service" },
  { key: "concierge", label: "Custom + Bulk" },
] as const;

/**
 * "Compare the options" — resolves any lingering doubt. A semantic, column-
 * aware table on larger screens (see ComparisonTable); on mobile the same data
 * reflows into per-criterion cards so nothing is squeezed into unreadable
 * columns.
 */
export function Comparison() {
  return (
    <Section id="compare" tone="deep" spacing="tight">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Side by Side"
          title="The full comparison, in plain terms."
          description="No fine print. Here is exactly how the two paths differ across the things corporate buyers actually ask about."
        />

        {/* Desktop / tablet: interactive, column-aware table */}
        <ComparisonTable />

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
                {COLUMNS.map(({ key, label }) => (
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
