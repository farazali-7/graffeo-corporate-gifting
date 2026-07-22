"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

type RevealTag =
  | "div"
  | "section"
  | "span"
  | "li"
  | "ul"
  | "ol"
  | "p"
  | "figure";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  /** Seconds to delay the animation for hand-orchestrated sequencing. */
  delay?: number;
  /** Stagger children that are themselves <Reveal> / motion items. */
  stagger?: boolean;
}

// Brand motion spec: organic editorial easing, slow and never springy.
const EASE = [0.22, 0.61, 0.36, 1] as const;
const DURATION = 0.7;
const STAGGER = 0.12; // 120ms between related elements

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
};

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
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger ? container : item}
      transition={stagger ? undefined : { delay, duration: DURATION, ease: EASE }}
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
}

/**
 * An editorial mask reveal: content rises out from behind a clip, used for
 * hero headlines and image frames. Falls back to a static block when
 * reduced motion is requested.
 */
export function MaskReveal({ children, className, delay = 0 }: MaskRevealProps) {
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
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
