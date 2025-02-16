"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import questionsData from "../data/questions.json"

export interface Answer {
  questionIndex: number
  selectedOption: number
}

interface QuestionState {
  hasStarted: boolean
  currentQuestionIndex: number
  answers: Answer[]
  setHasStarted: (started: boolean) => void
  setCurrentQuestion: (index: number) => void
  selectOption: (questionIndex: number, optionIndex: number) => void
  reset: () => void
}

export const useQuestionStore = create<QuestionState>()(
  persist(
    (set) => ({
      hasStarted: false,
      currentQuestionIndex: 0,
      answers: [],
      setHasStarted: (started) => 
        set({ hasStarted: started }),
      setCurrentQuestion: (index) => 
        set({ currentQuestionIndex: index, hasStarted: true }),
      selectOption: (questionIndex, optionIndex) =>
        set((state) => ({
          answers: [
            ...state.answers.filter((a) => a.questionIndex !== questionIndex),
            { questionIndex, selectedOption: optionIndex },
          ],
          currentQuestionIndex: questionIndex + 1,
        })),
      reset: () => set({ 
        hasStarted: false,
        currentQuestionIndex: 0, 
        answers: [] 
      }),
    }),
    {
      name: "question-store",
    }
  )
) 