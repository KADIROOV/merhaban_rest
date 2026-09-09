import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display uppercase tracking-menu text-sm transition-colors duration-200 ease-weighted disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  {
    variants: {
      variant: {
        primary:
          "bg-ember text-[#14100D] hover:bg-ember-deep shadow-ember px-7 py-3.5",
        outline:
          "border border-gold/50 text-text hover:border-gold hover:bg-gold/10 px-7 py-3.5",
        ghost: "text-text hover:text-ember px-3 py-2",
        wine: "bg-wine text-text hover:bg-wine/80 px-7 py-3.5",
      },
      size: {
        default: "",
        sm: "text-xs px-5 py-2.5",
        icon: "p-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
