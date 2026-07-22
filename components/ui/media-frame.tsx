import Image from "next/image";
import { cn } from "@/lib/utils";

/** Hover zoom intensity. "subtle" is an almost-invisible 1.01; "normal" 1.02. */
type Zoom = "none" | "subtle" | "normal";

interface MediaFrameProps {
  src: string;
  alt: string;
  /** Responsive sizes hint for the optimizer. */
  sizes: string;
  /** Aspect ratio utility (e.g. "aspect-[4/5]"). */
  aspect: string;
  priority?: boolean;
  className?: string;
  /** Restrained hover zoom on the image (used within grouped, hoverable cards). */
  zoom?: Zoom;
}

const ZOOM_CLASS: Record<Zoom, string> = {
  none: "",
  subtle:
    "transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.01]",
  normal:
    "transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.02]",
};

/**
 * The single image treatment used across the page: a rounded frame with a
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
  zoom = "none",
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
        className={cn("object-cover", ZOOM_CLASS[zoom])}
      />
    </div>
  );
}
