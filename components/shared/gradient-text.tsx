import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
  glow?: boolean
}

export function GradientText({ children, className, glow = true }: GradientTextProps) {
  return (
    <span
      className={cn(
        "animate-gradient-shift bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent",
        glow && "drop-shadow-[0_0_18px_rgba(34,211,238,0.35)] [text-shadow:0_0_28px_rgba(217,70,239,0.18)]",
        className
      )}
    >
      {children}
    </span>
  )
}