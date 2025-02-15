"use client"

import { useQuestionStore } from "@/store/question-store"
import { OptionButton } from "@/components/ui/option-button"
import questionsData from "../data/questions.json"

export function QuestionContainer() {
  const { currentQuestionIndex, answers, selectOption } = useQuestionStore()
  const currentQuestion = questionsData.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex) / questionsData.questions.length) * 100

  if (!currentQuestion) {
    return null // We'll handle the results view separately
  }

  const selectedOption = answers.find(
    (a) => a.questionIndex === currentQuestionIndex
  )?.selectedOption

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
    </div>
  )
} 