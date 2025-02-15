"use client"

import { Button } from "@/components/ui/button"
import { useQuestionStore } from "@/store/question-store"
import { calculateScores } from "@/lib/calculate-scores"
import { RefreshCcw } from "lucide-react"

export function ResultsView() {
  const { answers, reset } = useQuestionStore()
  const recommendations = calculateScores(answers)

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">Your Recommended Tools</h3>
        <p className="text-muted-foreground">
          Based on your answers, here are your best matches:
        </p>
      </div>

      <div className="space-y-6">
        {recommendations.map((tool, index) => (
          <div 
            key={tool.name}
            className="p-6 rounded-lg border bg-card text-card-foreground"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-medium capitalize mb-1">
                  {tool.name}
                </h4>
                <div className="text-sm text-muted-foreground">
                  Match Score: {Math.round((tool.score / (answers.length * 4)) * 100)}%
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-sm font-medium">Why this tool:</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Button 
        onClick={reset}
        className="w-full"
        variant="outline"
      >
        <RefreshCcw className="w-4 h-4 mr-2" />
        Start Over
      </Button>
    </div>
  )
} 