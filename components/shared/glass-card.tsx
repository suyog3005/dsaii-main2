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
        "group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
        hover && "transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_14px_45px_rgba(15,23,42,0.45)]",
        className
      )}
    >
      {hover && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-2px] rounded-[1.15rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,0,102,0.95),rgba(255,153,0,0.95),rgba(255,238,0,0.88),rgba(0,255,170,0.9),rgba(0,170,255,0.95),rgba(153,0,255,0.95),rgba(255,0,102,0.95))] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.02]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-linear-to-r from-transparent via-white/35 to-transparent opacity-0 group-hover:animate-[shimmer-sweep_1.2s_ease] group-hover:opacity-100"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[1px] rounded-[calc(1rem-1px)] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_55%)] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100"
          />
        </>
      )}

      <div className="relative z-10 h-full rounded-2xl bg-slate-950/70 transition-transform duration-500 group-hover:bg-slate-950/78">
        {children}
      </div>
    </div>
  )
}