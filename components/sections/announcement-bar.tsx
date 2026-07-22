"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ANNOUNCEMENT } from "@/data/navigation";

/**
 * Slim heritage-green announcement bar. Slides down once on load (never
 * loops), reserves its own height to avoid layout shift, and is dismissible.
 * Communicates that corporate gifting exists — the current site does not.
 */
export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      {visible ? (
        <motion.aside
          aria-label="Announcement"
          initial={reduceMotion ? false : { height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="overflow-hidden bg-forest text-paper"
        >
          <Container className="relative flex h-10 items-center justify-center gap-x-3 gap-y-1 text-center">
            <p className="flex flex-wrap items-center justify-center gap-x-2 text-[0.8125rem] leading-none">
              <span className="font-medium">{ANNOUNCEMENT.message}</span>
              <span aria-hidden className="hidden text-paper/40 sm:inline">
                ·
              </span>
              <span className="hidden text-paper/70 sm:inline">
                {ANNOUNCEMENT.detail}
              </span>
              <a
                href={ANNOUNCEMENT.cta.href}
                className="group ml-1 inline-flex items-center gap-1 font-medium text-brass-soft underline-offset-4 hover:underline"
              >
                {ANNOUNCEMENT.cta.label}
                <ArrowRight
                  className="size-3 transition-transform duration-[var(--duration-hover)] ease-[var(--ease-editorial)] group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </a>
            </p>

            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="absolute right-3 grid size-8 place-items-center rounded-full text-paper/70 transition-colors hover:bg-paper/10 hover:text-paper sm:right-6"
            >
              <X className="size-4" strokeWidth={1.75} />
            </button>
          </Container>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
