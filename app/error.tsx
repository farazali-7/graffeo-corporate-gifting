"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * Route-level error boundary. Catches errors thrown while rendering the page
 * (keeping the root layout intact) and offers a recovery path, styled to the
 * editorial system rather than the framework default.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface for observability; replace with your logger of choice.
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="text-xs font-medium uppercase tracking-eyebrow text-brass-ink">
        Something interrupted the brew
      </span>
      <h1 className="font-display text-[length:var(--text-h2)] font-normal leading-[var(--text-h2--line-height)] text-ink">
        A quiet hiccup on our end.
      </h1>
      <p className="text-[length:var(--text-lead)] leading-relaxed text-olive-muted">
        Please try again — if it persists, reach us at{" "}
        <a
          href="mailto:gifting@graffeo.com"
          className="text-forest underline underline-offset-4"
        >
          gifting@graffeo.com
        </a>
        .
      </p>
      <Button type="button" onClick={reset} size="md" className="mt-2">
        Try again
      </Button>
      {error.digest ? (
        <p className="text-xs text-olive-faint">Reference: {error.digest}</p>
      ) : null}
    </main>
  );
}
