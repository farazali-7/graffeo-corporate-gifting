"use client";

import { type ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

interface PointerParallaxProps {
  children: ReactNode;
  className?: string;
  /** Maximum translation in pixels. Kept tiny — this is a whisper, not a ride. */
  max?: number;
}

/**
 * Applies a barely-perceptible pointer-follow to its children (GPU transforms
 * only). Disabled entirely under reduced-motion and on touch (no pointer to
 * follow). Used for the hero image, per the brief's "3–4px maximum" note.
 */
export function PointerParallax({
  children,
  className,
  max = 4,
}: PointerParallaxProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratioX = (event.clientX - rect.left) / rect.width - 0.5;
    const ratioY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(ratioX * max * 2);
    y.set(ratioY * max * 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}
