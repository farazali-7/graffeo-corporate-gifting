"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A restrained "there is more below" cue: a hairline track with a segment
 * that drifts downward. Fades in only after the hero has had a beat to land
 * (2s), and holds still under reduced-motion. Decorative (aria-hidden).
 */
export function ScrollCue({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={cn("flex items-center gap-3", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <span className="text-[0.625rem] font-medium uppercase tracking-eyebrow text-olive-faint">
        Scroll
      </span>
      <span className="relative block h-12 w-px overflow-hidden bg-line-strong">
        {!reduceMotion ? (
          <motion.span
            className="absolute inset-x-0 top-0 block h-4 bg-forest"
            animate={{ y: ["-100%", "300%"] }}
            transition={{
              duration: 1.9,
              repeat: Infinity,
              ease: [0.5, 0, 0.5, 1],
            }}
          />
        ) : null}
      </span>
    </motion.div>
  );
}
