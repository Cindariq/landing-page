import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // ── Cindariq design system ──
        primary: "bg-ember text-smoke hover:bg-ember/90 active:bg-ember/80",
        secondary:
          "border border-cinder bg-transparent text-cinder hover:bg-cinder hover:text-smoke",
        ghost: "bg-transparent text-cinder hover:bg-cinder/5",
        link: "bg-transparent text-ember underline-offset-4 hover:underline",
        // ── shadcn/ui originals kept for internal primitives ──
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        // Cindariq sizes (PRD §5.1)
        sm: "h-9 px-4 text-[14px] has-[>svg]:px-3", // 36px
        md: "h-11 px-6 text-[16px] has-[>svg]:px-5", // 44px
        lg: "h-14 px-8 text-[16px] has-[>svg]:px-6", // 56px
        // shadcn originals
        default: "h-9 px-4 py-2 text-sm has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  iconLeft,
  iconRight,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  }) {
  // asChild delegates to a child element via Slot — icons are not supported in
  // asChild mode because Slot.Root requires exactly one React element child.
  if (asChild) {
    return (
      <Slot.Root
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Slot.Root>
    );
  }

  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {iconLeft != null && <span aria-hidden="true">{iconLeft}</span>}
      {children}
      {iconRight != null && <span aria-hidden="true">{iconRight}</span>}
    </button>
  );
}

export { Button, buttonVariants };
