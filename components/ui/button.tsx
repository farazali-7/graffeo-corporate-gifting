import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button system. Deliberately restrained: one solid forest primary that owns
 * the page's primary action, plus quiet secondary/ghost/link variants so
 * hierarchy never competes. All sizes meet the 44px touch-target minimum.
 */
const buttonVariants = cva(
  cn(
    "group/button inline-flex select-none items-center justify-center gap-2 whitespace-nowrap",
    "font-sans font-medium tracking-tight",
    "transition-[background-color,color,border-color,transform,box-shadow] duration-300 ease-[var(--ease-editorial)]",
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-forest",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:translate-y-px",
  ),
  {
    variants: {
      variant: {
        primary:
          "rounded-pill bg-forest text-paper shadow-[0_1px_2px_rgba(18,39,28,0.25)] hover:bg-forest-deep",
        secondary:
          "rounded-pill border border-line-strong bg-transparent text-ink hover:border-forest hover:text-forest",
        ghost:
          "rounded-pill bg-transparent text-ink hover:bg-ink/[0.05]",
        onDark:
          "rounded-pill bg-paper text-forest-deep hover:bg-cream",
        link:
          "rounded-none px-0 text-forest underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-11 px-5 text-sm",
        md: "h-12 px-7 text-[0.95rem]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as the child element (e.g. an anchor) while keeping button styles. */
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
