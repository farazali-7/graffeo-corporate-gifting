"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

interface AccordionProps {
  items: FaqItem[];
  /** Index of the item open on first render, if any. */
  defaultOpen?: number;
}

/**
 * A fully accessible single-expand accordion built without a UI library.
 * Uses native <button> triggers with aria-expanded/aria-controls and a
 * region-labelled panel, and animates height only when motion is allowed.
 */
export function Accordion({ items, defaultOpen }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null);

  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item, index) => (
        <AccordionRow
          key={item.question}
          item={item}
          isOpen={open === index}
          onToggle={() => setOpen((prev) => (prev === index ? null : index))}
        />
      ))}
    </ul>
  );
}

interface AccordionRowProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionRow({ item, isOpen, onToggle }: AccordionRowProps) {
  const reduceMotion = useReducedMotion();
  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <li>
      <h3 className="m-0">
        <button
          type="button"
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={cn(
            "group flex w-full items-center justify-between gap-6 py-7 text-left",
            "transition-colors duration-300 ease-[var(--ease-editorial)]",
            "min-h-[44px] hover:text-forest focus-visible:text-forest",
          )}
        >
          <span className="font-display text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-normal text-ink group-hover:text-forest">
            {item.question}
          </span>
          <span
            aria-hidden
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-full border border-line-strong text-olive-muted",
              "transition-[transform,background-color,color,border-color] duration-[var(--duration-hover)] ease-[var(--ease-editorial)]",
              "group-hover:border-forest group-hover:bg-forest group-hover:text-paper",
              isOpen && "rotate-180 border-forest bg-forest text-paper",
            )}
          >
            <ChevronDown className="size-4" strokeWidth={1.75} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            key="panel"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 pr-12 text-[1.0625rem] leading-relaxed text-olive-muted">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
