"use server"

import { Header } from "@/components/header"
import { QuestionContainer } from "@/components/question-container"

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container max-w-3xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">
            Find Your Perfect AI Coding Assistant
          </h2>
          
          <p className="text-muted-foreground">
            Answer a few questions to get personalized recommendations for AI coding tools that match your needs.
          </p>

          <QuestionContainer />
        </div>
      </main>
    </div>
  )
}
