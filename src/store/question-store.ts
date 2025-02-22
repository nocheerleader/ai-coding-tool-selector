"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Answer {
  questionIndex: number
  selectedOption: number
}

interface QuestionState {
  hasStarted: boolean
  currentQuestionIndex: number
  answers: Answer[]
  selectOption: (questionIndex: number, optionIndex: number) => void
  setCurrentQuestion: (index: number) => void
  reset: () => void
}

export const useQuestionStore = create<QuestionState>()(
  persist(
    (set) => ({
      hasStarted: false,
      currentQuestionIndex: 0,
      answers: [],
      selectOption: (questionIndex, optionIndex) =>
        set((state) => ({
          answers: [
            ...state.answers.filter((a) => a.questionIndex !== questionIndex),
            { questionIndex, selectedOption: optionIndex },
          ],
        })),
      setCurrentQuestion: (index) =>
        set(() => ({
          hasStarted: true,
          currentQuestionIndex: index,
        })),
      reset: () =>
        set(() => ({
          hasStarted: false,
          currentQuestionIndex: 0,
          answers: [],
        })),
    }),
    {
      name: "question-store",
    }
  )
) 