"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * A 2px forest reading-progress line pinned to the very top of the viewport.
 * Reflects document scroll (not a decorative loop), so it is kept even under
 * reduced-motion — the spring is simply cosmetic smoothing.
 */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-forest"
    />
  );
}
