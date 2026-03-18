"use client"

import { motion, type Variants } from "framer-motion"
import { Clapperboard } from "lucide-react"
import { GlassCard } from "./glass-card"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const challengeTags = [
  "Identifying Characters",
  "Guessing Scenes",
  "Spotting Plot Loopholes",
]

export function EventDescription() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20"
    >
      <motion.div variants={fadeInUp} className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          <span className="bg-gradient-to-r from-[#FACC15] to-white bg-clip-text text-transparent">
            The Cinematic Challenge
          </span>
        </h2>
      </motion.div>

      <GlassCard className="mx-auto max-w-4xl relative overflow-hidden">
        {/* Projector light effect */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#FACC15]/10 blur-3xl" />

        <div className="relative z-10 text-center">
          <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#6D28D9]/30 to-[#FACC15]/20 p-6">
            <Clapperboard className="h-12 w-12 text-[#FACC15]" />
          </div>
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            Step into the spotlight and prove your mastery of fictional universes,
            iconic characters, and the hidden details that only true cinephiles notice.
            Whether you are a casual watcher or a hardcore fan, this immersive challenge
            will put your knowledge to the ultimate test.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {challengeTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#6D28D9]/50 bg-[#6D28D9]/20 px-4 py-2 text-sm text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.section>
  )
}
