"use client"

import { motion, type Variants } from "framer-motion"

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      className={`relative rounded-2xl border border-[#FACC15]/10 bg-black/40 p-6 backdrop-blur-md ${className}`}
      style={{
        boxShadow: "0 0 30px rgba(109, 40, 217, 0.1), inset 0 0 20px rgba(250, 204, 21, 0.02)",
      }}
    >
      {children}
    </motion.div>
  )
}
