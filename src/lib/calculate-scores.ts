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
  
  // Process each answer
  answers.forEach(({ questionIndex, selectedOption }) => {
    const question = questionsData.questions[questionIndex]
    const option = question.options[selectedOption]
    
    // Add weights to tool scores
    Object.entries(option.weights).forEach(([tool, weight]) => {
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

  // Convert to array and sort by score
  return Object.values(scores)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2) // Return top 2 tools instead of 3
} 