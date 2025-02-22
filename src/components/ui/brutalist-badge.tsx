"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const brutalistBadgeVariants = cva(
  "inline-flex items-center rounded-md border-2 border-black px-3 py-1 text-sm font-bold transition-all",
  {
    variants: {
      variant: {
        default: "bg-pink-200 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        outline: "bg-pink-200/50 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BrutalistBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof brutalistBadgeVariants> {}

export function BrutalistBadge({ 
  className, 
  variant, 
  ...props 
}: BrutalistBadgeProps) {
  return (
    <div className={cn(brutalistBadgeVariants({ variant }), className)} {...props} />
  )
} 