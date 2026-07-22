import Link from "next/link";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  tone?: "default" | "onDark";
}

/**
 * The Graffeo wordmark. A typeset lockup — display serif name over a
 * letter-spaced heritage line — rather than a raster logo, so it stays crisp
 * at any size and inherits the page's type system.
 */
export function Wordmark({ className, tone = "default" }: WordmarkProps) {
  return (
    <Link
      href="/"
      aria-label="Graffeo Coffee Roasting Company — home"
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-display text-2xl font-normal tracking-tight",
          tone === "onDark" ? "text-paper" : "text-ink",
        )}
      >
        Graffeo
      </span>
      <span
        className={cn(
          "mt-1 text-[0.5625rem] font-medium uppercase tracking-eyebrow",
          tone === "onDark" ? "text-paper/55" : "text-olive-faint",
        )}
      >
        Est. 1935 · North Beach
      </span>
    </Link>
  );
}
