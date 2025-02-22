"use client"

import Image from "next/image"
import { BrutalistButton } from "@/components/ui/brutalist-button"
import { BrutalistBadge } from "@/components/ui/brutalist-badge"
import { useQuestionStore } from "@/store/question-store"
import { calculateScores } from "@/lib/calculate-scores"
import { RefreshCcw } from "lucide-react"
import { tools, type ToolId } from "@/config/tools"

export function ResultsView() {
  const { answers, reset } = useQuestionStore()
  const recommendations = calculateScores(answers)

  // Helper function to normalize tool names to match config keys
  const normalizeToolName = (name: string): ToolId => {
    // Handle special case for Claude Sonnet
    if (name.toLowerCase() === "claudesonnet") return "claudeSonnet"
    return name.toLowerCase() as ToolId
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
          Your Recommended Tools
        </h3>
        <p className="text-lg text-gray-800">
          Based on your answers, here are your best matches:
        </p>
      </div>

      <div className="space-y-6">
        {recommendations.map((tool, index) => {
          const toolId = normalizeToolName(tool.name)
          const toolInfo = tools[toolId]

          return (
            <div 
              key={tool.name}
              className="p-6 rounded-lg border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 border-2 border-black rounded-md flex items-center justify-center bg-white p-2 flex-shrink-0">
                  <Image
                    src={toolInfo.logo}
                    alt={`${toolInfo.name} logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold capitalize mb-2 text-black">
                    {toolInfo.name}
                  </h4>
                  <BrutalistBadge variant={index === 0 ? "default" : "outline"}>
                    {index === 0 ? "Best Match" : "Alternative Choice"}
                  </BrutalistBadge>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-sm font-medium text-black">Why this tool:</h5>
                <ul className="text-sm text-gray-800 space-y-1">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      <BrutalistButton 
        onClick={reset}
        className="w-full"
        variant="outline"
      >
        <RefreshCcw className="w-4 h-4 mr-2" />
        Start Over
      </BrutalistButton>
    </div>
  )
} 