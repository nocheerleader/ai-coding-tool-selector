"use client"

import { BrutalistButton } from "@/components/ui/brutalist-button"
import { useQuestionStore } from "@/store/question-store"
import { calculateScores } from "@/lib/calculate-scores"
import { RefreshCcw } from "lucide-react"
import { BrutalistBadge } from "@/components/ui/brutalist-badge"
import Image from "next/image"
import { tools } from "@/config/tools"

export function ResultsView() {
  const { answers, reset } = useQuestionStore()
  const recommendations = calculateScores(answers)

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
        {recommendations.map((tool, index) => (
          <div 
            key={tool.name}
            className="p-6 rounded-lg border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold capitalize mb-2 text-black">
                  {tool.name}
                </h4>
                <BrutalistBadge variant={index === 0 ? "default" : "outline"}>
                  {index === 0 ? "Best Match" : "Alternative Choice"}
                </BrutalistBadge>
              </div>
              <div className="w-16 h-16 border-2 border-black rounded-md p-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src={tools[tool.name.toLowerCase()].logo}
                  alt={`${tool.name} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
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
        ))}
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