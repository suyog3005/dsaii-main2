"use client"

import { motion, type Variants } from "framer-motion"
import { ChevronRight } from "lucide-react"
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

export function CTASection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20"
    >
      <GlassCard className="mx-auto max-w-3xl text-center relative overflow-hidden">
        {/* Spotlight effect */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-[#FACC15]/10 blur-3xl" />

        <motion.div variants={fadeInUp} className="relative z-10">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready for the{" "}
            <span className="bg-gradient-to-r from-[#FACC15] to-white bg-clip-text text-transparent">
              Spotlight
            </span>
            ?
          </h2>
          <p className="mb-8 text-lg text-white/60">
            Gather your crew and prove you are the ultimate cinephile.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#register"
              id="register"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FACC15] to-[#FCD34D] px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-[#FFE047] hover:to-[#FDE68A] hover:shadow-[0_0_24px_rgba(250,204,21,0.55),0_0_48px_rgba(251,191,36,0.35)]"
              style={{
                boxShadow: "0 0 30px rgba(250, 204, 21, 0.4), 0 0 60px rgba(250, 204, 21, 0.2)",
              }}
            >
              Register Now
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <p className="mt-6 text-sm text-white/40">
            Limited spots available | April 4th, 2026 | Entry: ₹299
          </p>
        </motion.div>
      </GlassCard>
    </motion.section>
  )
}
