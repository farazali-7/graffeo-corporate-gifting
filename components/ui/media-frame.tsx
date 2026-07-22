import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaFrameProps {
  src: string;
  alt: string;
  /** Responsive sizes hint for the optimizer. */
  sizes: string;
  /** Aspect ratio utility (e.g. "aspect-[4/5]"). */
  aspect: string;
  priority?: boolean;
  className?: string;
  /** Adds a restrained hover zoom (max 1.02, per brand spec). */
  interactive?: boolean;
}

/**
 * The single image treatment used across the page: a 16px-radius frame with a
 * warm paper-grain grade and a soft stone tone underneath (a quiet loading
 * state that also prevents any flash of empty space). Keeps every photograph
 * feeling authentic and materially consistent — never a bare, AI-clean render.
 */
export function MediaFrame({
  src,
  alt,
  sizes,
  aspect,
  priority = false,
  className,
  interactive = false,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "media-grain relative isolate overflow-hidden rounded-card bg-stone",
        aspect,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover",
          interactive &&
            "transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.02]",
        )}
      />
    </div>
  );
}
