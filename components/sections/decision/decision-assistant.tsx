"use client";

import { useEffect, useId, useState } from "react";
import { Sparkles } from "lucide-react";
import {
  CUSTOMIZATION_OPTIONS,
  CUSTOMIZATION_QUESTION,
  recommendPath,
  VOLUME_OPTIONS,
  VOLUME_QUESTION,
  type AssistantOption,
  type CustomizationId,
  type GiftVolumeId,
} from "@/data/decision-assistant";
import type { GiftingPath } from "@/types";
import { cn } from "@/lib/utils";

interface DecisionAssistantProps {
  paths: GiftingPath[];
  recommendedId: GiftingPath["id"] | null;
  onRecommend: (id: GiftingPath["id"] | null) => void;
}

/**
 * A two-question assistant that quietly routes an unsure buyer. It resolves a
 * recommendation the moment both questions are answered and lifts it up to the
 * board, which highlights the matching path. Built on native radios so it is
 * keyboard- and screen-reader-friendly out of the box.
 */
export function DecisionAssistant({
  paths,
  recommendedId,
  onRecommend,
}: DecisionAssistantProps) {
  const [volume, setVolume] = useState<GiftVolumeId | null>(null);
  const [customization, setCustomization] = useState<CustomizationId | null>(
    null,
  );

  useEffect(() => {
    if (volume && customization) {
      onRecommend(recommendPath(volume, customization));
    } else {
      onRecommend(null);
    }
  }, [volume, customization, onRecommend]);

  const recommended = paths.find((p) => p.id === recommendedId);

  return (
    <div className="mx-auto max-w-3xl rounded-[1.25rem] border border-line bg-cream p-6 shadow-[var(--shadow-card)] sm:p-8">
      <div className="flex items-center gap-2.5">
        <Sparkles className="size-4 text-brass-ink" strokeWidth={1.75} />
        <p className="text-xs font-medium uppercase tracking-eyebrow text-brass-ink">
          Not sure which fits? Answer two questions.
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <QuestionGroup
          legend={VOLUME_QUESTION}
          options={VOLUME_OPTIONS}
          value={volume}
          onChange={setVolume}
        />
        <QuestionGroup
          legend={CUSTOMIZATION_QUESTION}
          options={CUSTOMIZATION_OPTIONS}
          value={customization}
          onChange={setCustomization}
        />
      </div>

      {/* Live recommendation, announced politely to assistive tech */}
      <p aria-live="polite" className="mt-6 min-h-6 text-[0.95rem] text-olive-muted">
        {recommended ? (
          <>
            We&rsquo;d suggest{" "}
            <span className="font-medium text-forest">{recommended.title}</span>{" "}
            — highlighted below.
          </>
        ) : null}
      </p>
    </div>
  );
}

interface QuestionGroupProps<T extends string> {
  legend: string;
  options: AssistantOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
}

function QuestionGroup<T extends string>({
  legend,
  options,
  value,
  onChange,
}: QuestionGroupProps<T>) {
  const name = useId();

  return (
    <fieldset>
      <legend className="text-[0.95rem] font-medium text-ink">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2.5">
        {options.map((option) => {
          const selected = value === option.id;
          return (
            <label
              key={option.id}
              className={cn(
                "cursor-pointer rounded-pill border px-4 py-2 text-[0.85rem] transition-colors duration-[var(--duration-hover)] ease-[var(--ease-editorial)]",
                "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-forest",
                selected
                  ? "border-forest bg-forest text-paper"
                  : "border-line-strong bg-transparent text-ink hover:border-forest",
              )}
            >
              <input
                type="radio"
                name={name}
                value={option.id}
                checked={selected}
                onChange={() => onChange(option.id)}
                className="sr-only"
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
