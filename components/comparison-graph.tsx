"use client"

import { useEffect, useRef } from "react"

export default function ComparisonGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1

    // X-axis
    ctx.moveTo(40, rect.height - 30)
    ctx.lineTo(rect.width - 20, rect.height - 30)

    // Y-axis
    ctx.moveTo(40, 20)
    ctx.lineTo(40, rect.height - 30)
    ctx.stroke()

    // Draw X-axis labels
    ctx.fillStyle = "#6b7280"
    ctx.font = "10px Inter, sans-serif"
    ctx.textAlign = "center"

    const xLabels = ["0", "25", "50", "75", "100"]
    const xStep = (rect.width - 60) / (xLabels.length - 1)

    xLabels.forEach((label, i) => {
      const x = 40 + i * xStep
      ctx.fillText(label, x, rect.height - 15)
    })

    // Draw distribution curve
    const points = [
      { x: 40, y: rect.height - 80 },
      { x: 40 + xStep * 0.5, y: rect.height - 90 },
      { x: 40 + xStep * 1, y: rect.height - 110 },
      { x: 40 + xStep * 1.5, y: rect.height - 150 },
      { x: 40 + xStep * 2, y: rect.height - 180 },
      { x: 40 + xStep * 2.5, y: rect.height - 100 },
      { x: 40 + xStep * 3, y: rect.height - 80 },
      { x: 40 + xStep * 3.5, y: rect.height - 70 },
      { x: 40 + xStep * 4, y: rect.height - 90 },
    ]

    // Draw curve
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)

    for (let i = 1; i < points.length; i++) {
      const xc = (points[i].x + points[i - 1].x) / 2
      const yc = (points[i].y + points[i - 1].y) / 2
      ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc)
    }

    ctx.quadraticCurveTo(
      points[points.length - 2].x,
      points[points.length - 2].y,
      points[points.length - 1].x,
      points[points.length - 1].y,
    )

    ctx.strokeStyle = "#818cf8"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw data points
    points.forEach((point) => {
      ctx.beginPath()
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#fff"
      ctx.fill()
      ctx.strokeStyle = "#818cf8"
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // Draw your percentile line
    const yourPercentile = 30
    const percentileX = 40 + (yourPercentile / 100) * (rect.width - 60)

    ctx.beginPath()
    ctx.setLineDash([5, 5])
    ctx.moveTo(percentileX, 20)
    ctx.lineTo(percentileX, rect.height - 30)
    ctx.strokeStyle = "#9ca3af"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.setLineDash([])

    // Label for your percentile
    ctx.fillStyle = "#6b7280"
    ctx.font = "12px Inter, sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("your percentile", percentileX, rect.height / 2)

    // Draw highlighted point at 90th percentile
    const highlightedPercentile = 90
    const highlightedX = 40 + (highlightedPercentile / 100) * (rect.width - 60)
    const highlightedY = rect.height - 100

    ctx.beginPath()
    ctx.arc(highlightedX, highlightedY, 6, 0, Math.PI * 2)
    ctx.fillStyle = "#4f46e5"
    ctx.fill()
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full" style={{ width: "100%", height: "100%" }} />
}

