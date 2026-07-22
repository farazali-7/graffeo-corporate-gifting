"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  DURATION,
  EASE_EDITORIAL,
  fadeUpVariants,
  REVEAL_VIEWPORT,
  staggerVariants,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealTag =
  | "div"
  | "section"
  | "span"
  | "li"
  | "ul"
  | "ol"
  | "p"
  | "figure"
  | "tbody"
  | "tr";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  /** Seconds to delay the animation for hand-orchestrated sequencing. */
  delay?: number;
  /** Stagger children that are themselves <Reveal> / motion items. */
  stagger?: boolean;
}

// Motion timing/easing come from the central motion system (@/lib/motion).
const container = staggerVariants();
const item = fadeUpVariants;

/**
 * The single scroll-reveal primitive: a gentle fade-and-rise on entry.
 * Honors prefers-reduced-motion by rendering content statically. When
 * `stagger` is set, direct <RevealItem> children animate in sequence.
 */
export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  stagger = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      variants={stagger ? container : item}
      transition={
        stagger ? undefined : { delay, duration: DURATION.slow, ease: EASE_EDITORIAL }
      }
    >
      {children}
    </MotionTag>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
}

/** A child of a staggered <Reveal>. Inherits the parent's sequence. */
export function RevealItem({
  children,
  className,
  as = "div",
}: RevealItemProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  );
}

interface MaskRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Reveal duration in seconds. Longer for the hero's curtain image. */
  duration?: number;
}

/**
 * An editorial mask reveal: content rises out from behind a clip, used for
 * hero headlines and image frames. Falls back to a static block when
 * reduced motion is requested.
 */
export function MaskReveal({
  children,
  className,
  delay = 0,
  duration = 0.9,
}: MaskRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={cn("block", className)}>{children}</span>;
  }

  return (
    <span className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration, ease: EASE_EDITORIAL, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
