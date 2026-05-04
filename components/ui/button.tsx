"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-medium text-[14px] leading-none border border-transparent rounded-md transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-700 text-brand-50 hover:bg-brand-800",
        secondary:
          "bg-white text-ink-800 border-ink-200 hover:bg-ink-50 hover:border-ink-300",
        tertiary:
          "bg-transparent text-brand-700 hover:bg-brand-50",
        ghost:
          "bg-transparent text-ink-500 hover:bg-ink-50 hover:text-ink-800",
        danger:
          "bg-status-critical text-white hover:bg-[#a8281f]",
      },
      size: {
        sm: "text-[12px] px-[10px] py-[6px] gap-1.5 rounded-sm",
        md: "px-[14px] py-[9px]",
        lg: "text-[16px] px-[18px] py-[12px] gap-[10px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
