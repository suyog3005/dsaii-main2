import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
        hover && "transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10",
        className
      )}
    >
      {children}
    </div>
  )
}
