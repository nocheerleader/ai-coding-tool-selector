"use client"

import questionsData from "../data/questions.json"
import type { Answer } from "@/store/question-store"

interface ToolScore {
  name: string
  score: number
  features: string[]
}

export function calculateScores(answers: Answer[]): ToolScore[] {
  // Initialize scores for all tools
  const scores: Record<string, ToolScore> = {}
  
  // Check if mobile app was selected (Question 1, Option 2)
  const mobileAppAnswer = answers.find(a => a.questionIndex === 0)
  const isMobileApp = mobileAppAnswer?.selectedOption === 1 // Index 1 is "A mobile app"
  
  // Process each answer
  answers.forEach(({ questionIndex, selectedOption }) => {
    const question = questionsData.questions[questionIndex]
    const option = question.options[selectedOption]
    
    // Add weights to tool scores
    Object.entries(option.weights).forEach(([tool, weight]) => {
      // Skip tools that aren't mobile-compatible if mobile app was selected
      if (isMobileApp && !['bolt', 'cursor'].includes(tool)) {
        return
      }

      if (!scores[tool]) {
        scores[tool] = {
          name: tool,
          score: 0,
          features: []
        }
      }
      scores[tool].score += weight
      scores[tool].features.push(`${question.question}: ${option.text}`)
    })
  })

  // If mobile app was selected, ensure only Bolt and Cursor are in results
  let filteredScores = Object.values(scores)
  if (isMobileApp) {
    filteredScores = filteredScores.filter(tool => 
      ['bolt', 'cursor'].includes(tool.name.toLowerCase())
    )
  }

  // Convert to array and sort by score
  return filteredScores
    .sort((a, b) => b.score - a.score)
    .slice(0, 2) // Return top 2 tools
} 