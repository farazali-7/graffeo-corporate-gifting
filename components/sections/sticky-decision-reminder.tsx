"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { EASE_EDITORIAL } from "@/lib/motion";
import { GIFTING_CONTACT_EMAIL, GIFTING_STORE_URL } from "@/data/gifting";

/**
 * A small, always-available helper that appears once the hero has scrolled
 * away: "Need help choosing?" with both paths one tap away. Its copy becomes
 * context-aware near the end of the page (once the FAQ is reached), and it
 * steps aside when the final CTA — which already offers the same actions —
 * comes into view. Dismissible, and motion-reduced-friendly.
 */
export function StickyDecisionReminder() {
  const reduceMotion = useReducedMotion();
  const [pastHero, setPastHero] = useState(false);
  const [atClose, setAtClose] = useState(false); // FAQ reached → context shift
  const [nearFinalCta, setNearFinalCta] = useState(false); // step aside
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const faq = document.getElementById("faq");
    const finalCta = document.getElementById("final-cta");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === "faq") setAtClose(entry.isIntersecting);
          if (entry.target.id === "final-cta")
            setNearFinalCta(entry.isIntersecting);
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    if (faq) observer.observe(faq);
    if (finalCta) observer.observe(finalCta);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !nearFinalCta && !dismissed;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.aside
          aria-label="Gifting help"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
          className="fixed inset-x-4 bottom-4 z-40 sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <div className="mx-auto flex max-w-md items-center gap-4 rounded-pill border border-line bg-cream/95 py-2.5 pl-5 pr-2.5 shadow-[var(--shadow-lift)] backdrop-blur-md">
            <p className="text-[0.9rem] font-medium text-ink">
              {atClose ? "Ready to send your first gift?" : "Need help choosing?"}
            </p>
            <div className="flex items-center gap-3 text-[0.85rem]">
              <a
                href={GIFTING_STORE_URL}
                className="whitespace-nowrap font-medium text-forest underline-offset-4 hover:underline"
              >
                Self-Service
              </a>
              <span aria-hidden className="h-4 w-px bg-line-strong" />
              <a
                href={`mailto:${GIFTING_CONTACT_EMAIL}`}
                className="whitespace-nowrap font-medium text-forest underline-offset-4 hover:underline"
              >
                Custom
              </a>
            </div>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss gifting help"
              className="grid size-8 shrink-0 place-items-center rounded-full text-olive-faint transition-colors hover:bg-ink/[0.05] hover:text-ink"
            >
              <X className="size-4" strokeWidth={1.75} />
            </button>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
