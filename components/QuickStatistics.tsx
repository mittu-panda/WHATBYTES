import { Trophy, BarChart, CheckCircle } from "lucide-react"

interface QuickStatisticsProps {
  rank: string
  percentile: string
  score: string
}

export default function QuickStatistics({ rank, percentile, score }: QuickStatisticsProps) {
  const [scoreValue, totalValue] = score.split("/").map((s) => s.trim())

  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="text-lg font-bold">Quick Statistics</h3>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
            <Trophy className="h-6 w-6 text-amber-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">{rank}</p>
            <p className="text-sm text-gray-500">YOUR RANK</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <BarChart className="h-6 w-6 text-gray-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">{percentile}%</p>
            <p className="text-sm text-gray-500">PERCENTILE</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">{score}</p>
            <p className="text-sm text-gray-500">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

