"use client"

import { useQuestionStore } from "@/store/question-store"
import { BrutalistButton } from "@/components/ui/brutalist-button"
import Image from "next/image"

export function StartView() {
  const { setCurrentQuestion } = useQuestionStore()

  return (
    <div className="flex-1 flex flex-col items-center pt-12 p-8">
      <div className="w-full max-w-2xl mx-auto bg-pink-200 rounded-lg p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
        Not sure which AI tool to use?
        </h1>

        <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full border-4 border-black flex items-center justify-center relative overflow-hidden">
          <Image 
            src="/robot.png"
            alt="Robot mascot"
            fill
            className="object-cover scale-145 p-0" 
          />
        </div>

        <p className="text-xl text-center mb-12 text-gray-800">
        Find the Perfect Match for Building Your Prototype!<br />
          {/* Answer these {questionsData.questions.length} questions to find out! */}
        </p>

        <div className="flex justify-center">
          <BrutalistButton 
            onClick={() => setCurrentQuestion(0)}
            size="lg"
            className="w-full max-w-xs"
          >
            START HERE
          </BrutalistButton>
        </div>
      </div>
    </div>
  )
} 