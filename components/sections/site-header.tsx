"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/ui/wordmark";
import { PRIMARY_CTA, PRIMARY_NAV } from "@/data/navigation";
import { cn } from "@/lib/utils";

/**
 * Sticky site header. Transparent over the hero, then settles onto a frosted
 * paper bar once scrolled. Ships an accessible off-canvas menu on mobile.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-[var(--ease-editorial)]",
        scrolled
          ? "border-b border-line/80 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container
        as="nav"
        aria-label="Primary"
        className={cn(
          "flex items-center justify-between gap-8 transition-[height] duration-500 ease-[var(--ease-editorial)]",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Wordmark />

        <ul className="hidden items-center gap-9 lg:flex">
          {PRIMARY_NAV.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-2 text-sm font-medium text-ink/80 transition-colors hover:text-forest"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-forest transition-transform duration-300 ease-[var(--ease-editorial)] group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <a href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</a>
          </Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-ink lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-haspopup="dialog"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="size-6" strokeWidth={1.5} />
        </button>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  const reduceMotion = useReducedMotion();

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-forest-deep/30 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-paper px-6 py-6 shadow-[var(--shadow-lift)]"
            initial={reduceMotion ? undefined : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: "100%" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <Wordmark />
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full text-ink"
                aria-label="Close menu"
                onClick={onClose}
              >
                <X className="size-6" strokeWidth={1.5} />
              </button>
            </div>

            <ul className="mt-12 flex flex-col gap-1">
              {PRIMARY_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block border-b border-line py-4 font-display text-2xl text-ink transition-colors hover:text-forest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <Button asChild size="lg" className="w-full">
                <a href={PRIMARY_CTA.href} onClick={onClose}>
                  {PRIMARY_CTA.label}
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
