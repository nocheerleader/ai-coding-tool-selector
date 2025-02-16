"use client"

import { Header } from "@/components/header"
import { useQuestionStore } from "@/store/question-store"
import { StartView } from "@/components/start-view"
import { OptionButton } from "@/components/ui/option-button"
import { BrutalistButton } from "@/components/ui/brutalist-button"
import { ResultsView } from "@/components/results-view"
import { ArrowLeft, ArrowRight } from "lucide-react"
import questionsData from "../data/questions.json"

export function QuestionContainer() {
  const { 
    hasStarted,
    currentQuestionIndex, 
    answers, 
    selectOption,
    setCurrentQuestion 
  } = useQuestionStore()
  
  // Show start view if hasn't started
  if (!hasStarted) {
    return <StartView />
  }

  const currentQuestion = questionsData.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex) / questionsData.questions.length) * 100

  // Show results if we've answered all questions
  if (answers.length === questionsData.questions.length) {
    return (
      <>
        <Header progress={100} />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-2xl mx-auto bg-pink-200 rounded-lg p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <ResultsView />
          </div>
        </main>
      </>
    )
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
    <>
      <Header progress={progress} />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl mx-auto bg-pink-200 rounded-lg p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
                {currentQuestion.question}
              </h3>
              <p className="text-lg text-gray-800">
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
                <BrutalistButton
                  variant="outline"
                  onClick={() => setCurrentQuestion(currentQuestionIndex - 1)}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </BrutalistButton>
              )}
              {canGoForward && currentQuestionIndex < questionsData.questions.length - 1 && (
                <BrutalistButton
                  onClick={() => setCurrentQuestion(currentQuestionIndex + 1)}
                  className="flex-1"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </BrutalistButton>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 