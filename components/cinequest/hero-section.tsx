"use client"

import { motion, type Variants } from "framer-motion"
import { Film, ChevronRight } from "lucide-react"

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

export function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex min-h-[85vh] flex-col items-center justify-center py-20 text-center"
    >
      <motion.div variants={fadeInUp} className="mb-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-4 py-1.5 text-sm text-[#FACC15]">
          <Film className="h-4 w-4" />
          The Ultimate Cinephile Challenge
        </span>
      </motion.div>

      {/* Glowing Title */}
      <motion.h1
        variants={fadeInUp}
        className="mb-6 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
      >
        <span
          className="relative inline-block bg-gradient-to-r from-[#FACC15] via-white to-[#FACC15] bg-clip-text text-transparent"
          style={{
            filter: "drop-shadow(0 0 40px rgba(250, 204, 21, 0.6))",
          }}
        >
          CINEQUEST
        </span>
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="mb-4 text-xl text-white/70 sm:text-2xl"
      >
        <span className="text-[#FACC15]">Movies</span>
        <span className="mx-3 text-white/40">|</span>
        <span className="text-[#a78bfa]">Anime</span>
        <span className="mx-3 text-white/40">|</span>
        <span className="text-[#FACC15]">Web Series</span>
      </motion.p>

      <motion.p
        variants={fadeInUp}
        className="mb-10 text-lg font-semibold text-white/80"
      >
        April 4th, 2026
      </motion.p>

      <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#register"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#FACC15] to-[#FCD34D] px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105"
          style={{
            boxShadow: "0 0 30px rgba(250, 204, 21, 0.4), 0 0 60px rgba(250, 204, 21, 0.2)",
          }}
        >
          Register Your Team
          <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
        <span className="rounded-full border border-[#FACC15]/20 bg-white/5 px-6 py-4 text-lg font-semibold backdrop-blur-md">
          Entry: ₹299
        </span>
      </motion.div>
    </motion.section>
  )
}
