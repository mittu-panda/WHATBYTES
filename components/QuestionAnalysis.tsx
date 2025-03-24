interface QuestionAnalysisProps {
  correctAnswers: number;
  totalQuestions: number;
}

export default function QuestionAnalysis({ correctAnswers, totalQuestions }: QuestionAnalysisProps) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <div className="rounded-xl border bg-white p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Question Analysis</h3>
        <span className="text-lg font-medium text-blue-600">{correctAnswers}/{totalQuestions}</span>
      </div>
      <div className="mt-4">
        <p className="text-base text-gray-700">
          <span className="font-bold">You scored {correctAnswers} questions correct out of {totalQuestions}.</span> However, it still needs some improvements.
        </p>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <div className="relative h-40 w-40">
          <CircularProgress percentage={percentage} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-32 w-32 rounded-full bg-white"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-white shadow-md">
              <div className="flex h-full items-center justify-center">
                <TargetIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CircularProgress({ percentage }: { percentage: number }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="h-full w-full" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="10" />
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="#3b82f6"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-red-500"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
