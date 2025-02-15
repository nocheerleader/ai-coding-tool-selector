"use server"

import { Header } from "@/components/header"
import { QuestionContainer } from "@/components/question-container"

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <QuestionContainer />
    </div>
  )
}
