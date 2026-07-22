import type { Variants } from "motion/react";

/**
 * Motion design tokens — the single source of truth for animation timing and
 * easing across the page. Mirrors the CSS custom properties (--duration-hover,
 * --ease-editorial) so JS-driven and CSS-driven motion stay in lockstep.
 */

/** Canonical durations in seconds. */
export const DURATION = {
  fast: 0.22,
  medium: 0.4,
  slow: 0.7,
} as const;

/** The one organic, editorial easing curve used everywhere. */
export const EASE_EDITORIAL = [0.22, 0.61, 0.36, 1] as const;

/** Shared scroll-trigger config: reveal once, at ~25% visibility. */
export const REVEAL_VIEWPORT = { once: true, amount: 0.25 } as const;

/** Distance (px) a fading element rises into place. */
export const FADE_RISE = 24;

/** Default stagger between related children (seconds). */
export const STAGGER_STEP = 0.12;

/** A gentle fade-and-rise, used for the bulk of scroll reveals. */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: FADE_RISE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_EDITORIAL },
  },
};

/** A container that sequences its <fadeUpVariants> children. */
export function staggerVariants(
  staggerChildren = STAGGER_STEP,
  delayChildren = 0.05,
): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };
}
