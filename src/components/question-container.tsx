"use client"

import { useQuestionStore } from "@/store/question-store"
import { OptionButton } from "@/components/ui/option-button"
import { Button } from "@/components/ui/button"
import { ResultsView } from "@/components/results-view"
import { ArrowLeft, ArrowRight } from "lucide-react"
import questionsData from "../data/questions.json"

export function QuestionContainer() {
  const { 
    currentQuestionIndex, 
    answers, 
    selectOption,
    setCurrentQuestion 
  } = useQuestionStore()
  
  const currentQuestion = questionsData.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex) / questionsData.questions.length) * 100

  // Show results if we've answered all questions
  if (answers.length === questionsData.questions.length) {
    return <ResultsView />
  }

  // Show nothing if no current question (shouldn't happen)
  if (!currentQuestion) {
    return null
  }

  const selectedOption = answers.find(
    (a) => a.questionIndex === currentQuestionIndex
  )?.selectedOption

  const canGoBack = currentQuestionIndex > 0
  const canGoForward = selectedOption !== undefined

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">
          {currentQuestion.question}
        </h3>
        <p className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {questionsData.questions.length}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {currentQuestion.options.map((option, index) => (
          <OptionButton
            key={index}
            text={option.text}
            selected={selectedOption === index}
            onClick={() => selectOption(currentQuestionIndex, index)}
          />
        ))}
      </div>

      <div className="flex gap-3 mt-4">
        {canGoBack && (
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion(currentQuestionIndex - 1)}
            className="flex-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}
        {canGoForward && currentQuestionIndex < questionsData.questions.length - 1 && (
          <Button
            onClick={() => setCurrentQuestion(currentQuestionIndex + 1)}
            className="flex-1"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
} 