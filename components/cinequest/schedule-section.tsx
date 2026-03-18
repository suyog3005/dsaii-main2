"use client"

import { motion, type Variants } from "framer-motion"
import { FilmStripTimeline } from "./film-strip-timeline"
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

export function ScheduleSection() {
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
            Event Schedule
          </span>
        </h2>
        <p className="text-white/60">April 4th, 2026</p>
      </motion.div>

      <motion.div variants={fadeInUp} className="mx-auto max-w-2xl">
        <GlassCard className="py-8">
          <FilmStripTimeline />
        </GlassCard>
      </motion.div>
    </motion.section>
  )
}
