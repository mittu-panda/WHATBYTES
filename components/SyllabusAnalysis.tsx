interface SkillProgressProps {
    label: string
    value: number
    color: string
  }
  
  export default function SyllabusAnalysis() {
    return (
      <div className="rounded-xl border bg-white p-6">
        <h3 className="mb-4 text-lg font-bold">Syllabus Wise Analysis</h3>
        <div className="space-y-6">
          <SkillProgress label="HTML Tools, Forms, History" value={80} color="bg-blue-500" />
          <SkillProgress label="Tags & References in HTML" value={60} color="bg-orange-500" />
          <SkillProgress label="Tables & References in HTML" value={24} color="bg-red-500" />
          <SkillProgress label="Tables & CSS Basics" value={96} color="bg-green-500" />
        </div>
      </div>
    )
  }
  
  function SkillProgress({ label, value, color }: SkillProgressProps) {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-base">{label}</span>
          <span className="text-sm font-medium text-blue-600">{value}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div className={`h-2 rounded-full ${color}`} style={{ width: `${value}%` }}></div>
        </div>
      </div>
    )
  }
  
  