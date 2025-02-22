"use client"

import { cn } from "@/lib/utils"

interface HeaderProps {
  className?: string
  progress?: number
}

export function Header({ className, progress }: HeaderProps) {
  return (
    <div className={cn("w-full px-4 py-3 border-b", className)}>
      <div className="container flex flex-col gap-2 max-w-3xl mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold">AI Tool Selector</h1>
        </div>

        {progress !== undefined && (
          <div className="w-full h-4 bg-white border-4 border-black rounded-full overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div 
              className="h-full bg-pink-200 transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  )
} 