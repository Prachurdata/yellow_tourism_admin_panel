import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-red-100 text-red-700 dark:bg-red-900/10 dark:text-red-400 border border-red-200 dark:border-red-800",
        outline:
          "text-foreground border border-input hover:bg-accent hover:text-accent-foreground",
        success:
          "bg-green-100 text-green-700 dark:bg-green-900/10 dark:text-green-400 border border-green-200 dark:border-green-800",
        warning:
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/10 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800",
        info:
          "bg-blue-100 text-blue-700 dark:bg-blue-900/10 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
      }
    },
    defaultVariants: {
      variant: "default",
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants } 