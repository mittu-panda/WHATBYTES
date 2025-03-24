"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import QuickStatistics from "@/components/QuickStatistics"
import SyllabusAnalysis from "@/components/SyllabusAnalysis"
import QuestionAnalysis from "@/components/QuestionAnalysis"
import ComparisonGraph from "@/components/ComparisionGraph"
import UpdateScoreModal from "@/components/UpdateScoreModal"

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rank, setRank] = useState("4")
  const [percentile, setPercentile] = useState("90")
  const [score, setScore] = useState("10")

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1">
        <header className="flex items-center justify-end border-b bg-white p-4">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28658%29-5R7bhWSLU8bbrdhy3Td7dWQK1t9Sbc.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-medium">Mittu Panda</span>
          </div>
        </header>

        <div className="p-5">
          <h1 className="text-lg font-medium mb-4">Skill Test</h1>
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Test Header */}
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex flex-col gap-6 justify-between">
                <div className="rounded-xl border bg-white p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="h-16 w-16 flex-shrink-0">
                        <img
                          src="data:image/png;base64,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"
                          alt="HTML5 Logo"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Hyper Text Markup Language</h3>
                        <p className="text-sm text-gray-700">
                          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2024
                        </p>
                      </div>
                    </div>
                    <button
                      className="rounded bg-blue-900 px-4 py-2 text-white hover:bg-blue-800"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Update
                    </button>
                  </div>
                </div>

                {/* Quick Statistics */}
                <QuickStatistics rank={rank} percentile={percentile} score={score} />

                {/* Comparison Graph */}
                <div className="rounded-xl border bg-white p-6">
                  <h3 className="text-lg font-bold">Comparison Graph</h3>
                  <p className="mt-2 text-base text-gray-700">
                    <span className="font-bold">You scored {percentile}% percentile</span>, which is lower than
                    the average percentile 72% of all the engineers who took this assessment.
                  </p>
                  <div className="mt-4 h-64">
                    <ComparisonGraph />
                  </div>
                </div>
              </div>

              {/* Analysis Section */}
              <div className="grid md:grid-cols-1 gap-6 grid-cols-1">
                <SyllabusAnalysis />
                <QuestionAnalysis correctAnswers={Number(score)} totalQuestions={15} />
                </div>
            </div>
          </div>
        </div>
      </main>

      {/* Update Score Modal */}
      <UpdateScoreModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        rank={rank}
        setRank={setRank}
        percentile={percentile}
        setPercentile={setPercentile}
        score={score}
        setScore={setScore}
      />
    </div>
  )
}
