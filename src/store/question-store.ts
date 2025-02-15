"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import questionsData from "../data/questions.json"

export interface Answer {
  questionIndex: number
  selectedOption: number
}

interface QuestionState {
  currentQuestionIndex: number
  answers: Answer[]
  setCurrentQuestion: (index: number) => void
  selectOption: (questionIndex: number, optionIndex: number) => void
  reset: () => void
}

export const useQuestionStore = create<QuestionState>()(
  persist(
    (set) => ({
      currentQuestionIndex: 0,
      answers: [],
      setCurrentQuestion: (index) => 
        set({ currentQuestionIndex: index }),
      selectOption: (questionIndex, optionIndex) =>
        set((state) => ({
          answers: [
            ...state.answers.filter((a) => a.questionIndex !== questionIndex),
            { questionIndex, selectedOption: optionIndex },
          ],
          currentQuestionIndex: questionIndex + 1,
        })),
      reset: () => set({ currentQuestionIndex: 0, answers: [] }),
    }),
    {
      name: "question-store",
    }
  )
) 