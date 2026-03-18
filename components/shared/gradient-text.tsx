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
        "bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent",
        glow && "drop-shadow-[0_0_25px_rgba(0,242,255,0.5)]",
        className
      )}
    >
      {children}
    </span>
  )
}
