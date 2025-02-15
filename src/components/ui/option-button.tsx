"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface OptionButtonProps {
  text: string
  selected?: boolean
  onClick?: () => void
  className?: string
}

export function OptionButton({ 
  text, 
  selected, 
  onClick, 
  className 
}: OptionButtonProps) {
  return (
    <Button
      variant={selected ? "default" : "outline"}
      className={cn(
        "w-full justify-between",
        selected && "bg-primary text-primary-foreground",
        className
      )}
      onClick={onClick}
    >
      <span>{text}</span>
      {selected && <Check className="w-4 h-4 ml-2" />}
    </Button>
  )
} 