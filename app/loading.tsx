/**
 * Route-level loading UI. The page is largely static so this is rarely seen,
 * but it guarantees a calm, on-brand first paint during any navigation or
 * streaming boundary — a warm field with a quiet pulsing seal.
 */
export default function Loading() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-paper">
      <div className="flex flex-col items-center gap-4" role="status" aria-live="polite">
        <span className="grid size-14 animate-pulse place-items-center rounded-full border border-line-strong text-forest">
          <span className="font-display text-2xl leading-none">G</span>
        </span>
        <span className="text-xs uppercase tracking-eyebrow text-olive-faint">
          Brewing
        </span>
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
