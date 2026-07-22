"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A hairline that draws itself left-to-right as it scrolls into view — used to
 * visually connect sequential steps. Falls back to a static line under
 * reduced-motion. Decorative only (aria-hidden).
 */
export function GrowLine({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <span
      aria-hidden
      className={cn("block h-px overflow-hidden bg-line-strong", className)}
    >
      <motion.span
        className="block h-full w-full origin-left bg-forest/40"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
      />
    </span>
  );
}
