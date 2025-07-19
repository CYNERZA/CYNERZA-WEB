import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-cynerza-purple text-white hover:bg-cynerza-purple/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-cynerza-purple/20 bg-transparent text-cynerza-purple hover:bg-cynerza-purple/10 hover:border-cynerza-purple/40 dark:border-cynerza-purple/30 dark:text-cynerza-purple-light dark:hover:bg-cynerza-purple/10 dark:hover:border-cynerza-purple/50",
        secondary:
          "bg-cynerza-purple/10 text-cynerza-purple hover:bg-cynerza-purple/20 dark:bg-cynerza-purple/20 dark:text-cynerza-purple-light dark:hover:bg-cynerza-purple/30 shadow-sm hover:shadow",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-cynerza-purple underline-offset-4 hover:underline hover:text-cynerza-purple/80 dark:text-cynerza-purple-light dark:hover:text-cynerza-purple/90",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-6 text-base font-semibold",
        xl: "h-14 rounded-lg px-8 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
