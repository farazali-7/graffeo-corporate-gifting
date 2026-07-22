"use client";

import "./globals.css";

/**
 * Root-level error boundary. Replaces the whole document (including the root
 * layout) when an unrecoverable error is thrown, so it renders its own
 * <html>/<body>. Providing our own also sidesteps the Turbopack bug where the
 * builtin global-error module can go missing from the React client manifest.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-paper font-sans text-ink antialiased">
        <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center gap-6 px-6 text-center">
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
          <button
            type="button"
            onClick={reset}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-button bg-forest px-7 text-[0.95rem] font-medium text-paper transition-colors duration-[var(--duration-hover)] hover:bg-forest-deep"
          >
            Try again
          </button>
          {error.digest ? (
            <p className="text-xs text-olive-faint">Reference: {error.digest}</p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
