import { cn } from "@/lib/utils";

type ContainerElement = "div" | "section" | "header" | "footer" | "nav";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: ContainerElement;
  /** Narrows to a comfortable reading measure for prose-led blocks. */
  width?: "default" | "prose";
}

/**
 * The single horizontal-rhythm primitive. Centers content, applies the
 * shared max-width and responsive gutters used by every section.
 */
export function Container({
  as: Component = "div",
  width = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 md:px-12 lg:px-20",
        width === "default" ? "max-w-[var(--container-max)]" : "max-w-[var(--container-prose)]",
        className,
      )}
      {...props}
    />
  );
}
