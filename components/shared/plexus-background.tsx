"use client"

import { useEffect, useRef } from "react"

export function PlexusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId = 0
    let nodes: { x: number; y: number; vx: number; vy: number; phase: number }[] = []
    const mouse = {
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    const initNodes = () => {
      const nodeCount = Math.max(18, Math.floor((canvas.width * canvas.height) / 32000))
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const handlePointerMove = (event: PointerEvent) => {
      mouse.targetX = event.clientX
      mouse.targetY = event.clientY
    }

    const draw = (time: number) => {
      const t = time * 0.001
      mouse.x += (mouse.targetX - mouse.x) * 0.04
      mouse.y += (mouse.targetY - mouse.y) * 0.04

      const baseGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      baseGradient.addColorStop(0, "#020617")
      baseGradient.addColorStop(0.5, "#0b1020")
      baseGradient.addColorStop(1, "#020617")
      ctx.fillStyle = baseGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const pointerGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, Math.max(canvas.width * 0.2, 220))
      pointerGlow.addColorStop(0, "rgba(99, 102, 241, 0.18)")
      pointerGlow.addColorStop(0.45, "rgba(168, 85, 247, 0.12)")
      pointerGlow.addColorStop(1, "rgba(2, 6, 23, 0)")
      ctx.fillStyle = pointerGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < -20) node.x = canvas.width + 20
        if (node.x > canvas.width + 20) node.x = -20
        if (node.y < -20) node.y = canvas.height + 20
        if (node.y > canvas.height + 20) node.y = -20

        const pulse = 2.5 + Math.sin(t * 1.5 + node.phase) * 1.1
        const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulse * 3.5)
        nodeGradient.addColorStop(0, i % 3 === 0 ? "rgba(34, 211, 238, 0.95)" : i % 3 === 1 ? "rgba(217, 70, 239, 0.95)" : "rgba(236, 72, 153, 0.9)")
        nodeGradient.addColorStop(1, "rgba(2, 6, 23, 0)")

        ctx.beginPath()
        ctx.arc(node.x, node.y, pulse, 0, Math.PI * 2)
        ctx.fillStyle = nodeGradient
        ctx.fill()

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j]
          const dx = node.x - other.x
          const dy = node.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 145) {
            const opacity = (1 - distance / 145) * 0.22
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = i % 2 === 0 ? `rgba(34, 211, 238, ${opacity})` : `rgba(217, 70, 239, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", handlePointerMove)
    animationId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", handlePointerMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="animate-aurora absolute left-[-10%] top-[12%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="animate-aurora absolute right-[-8%] top-[28%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" style={{ animationDelay: "-5s" }} />
      <div className="animate-aurora absolute bottom-[-12%] left-[25%] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" style={{ animationDelay: "-9s" }} />
    </div>
  )
}