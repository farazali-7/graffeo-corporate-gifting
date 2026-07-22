import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button system. One solid forest primary owns the page's single primary
 * action; quiet secondary/ghost/link variants never compete with it. Motion
 * follows the brand spec exactly: a 2px lift with a shadow on hover over
 * 220ms, and a tactile 0.98 compression on press. All sizes clear 44px.
 */
const buttonVariants = cva(
  cn(
    "group/button inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-button",
    "font-sans font-medium tracking-tight",
    "transition-[background-color,color,border-color,transform,box-shadow] duration-[var(--duration-hover)] ease-[var(--ease-editorial)]",
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-forest",
    "disabled:pointer-events-none disabled:opacity-50",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  ),
  {
    variants: {
      variant: {
        primary:
          "bg-forest text-paper hover:bg-forest-deep hover:shadow-[var(--shadow-button)]",
        secondary:
          "border border-forest bg-transparent text-forest hover:bg-forest hover:text-paper hover:shadow-[var(--shadow-button)]",
        ghost:
          "text-ink hover:-translate-y-0 hover:bg-ink/[0.05]",
        onDark:
          "bg-paper text-forest-deep hover:bg-cream hover:shadow-[var(--shadow-lift)]",
        link: cn(
          "rounded-none px-0 text-forest hover:-translate-y-0 active:scale-100",
          // Underline grows left-to-right on hover, never a bare color change
          "bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-[position:0_100%] bg-no-repeat pb-0.5",
          "transition-[background-size] hover:bg-[length:100%_1px]",
        ),
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
