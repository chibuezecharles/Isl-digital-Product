import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary-100 text-primary-foreground hover:bg-primary-100/90",
        "outline-primary":
          "border border-primary-100 text-primary-100 bg-transparent hover:bg-primary-hover hover:border-primary-hover hover:text-primary-foreground",
        outline: "border border-[#002B8B] text-[#1E1E1E] bg-transparent ",
        secondary: "bg-grey-800 hover:bg-grey-700 text-red-500",
        ghost: "hover:bg-grey-700 hover:text-grey-200",
        link: "text-primary-100 underline-offset-4 hover:underline",
        plain: "bg-white text-grey-500 hover:bg-grey-900",
        rounded: "bg-primary-100 text-white rounded-full hover:bg-primary-200",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
