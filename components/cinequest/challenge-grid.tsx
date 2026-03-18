"use client"

import { motion, type Variants } from "framer-motion"
import { Trophy, Users, Film, ShieldCheck } from "lucide-react"
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

const challenges = [
  {
    icon: Trophy,
    value: "₹15,000",
    label: "Prize Pool",
    colorClass: "text-[#FACC15]",
    bgClass: "from-[#FACC15]/30 to-[#6D28D9]/20",
    hoverBorder: "hover:border-[#FACC15]/30",
  },
  {
    icon: Users,
    value: "2-4",
    label: "Team Members",
    colorClass: "text-[#a78bfa]",
    bgClass: "from-[#6D28D9]/30 to-[#FACC15]/20",
    hoverBorder: "hover:border-[#6D28D9]/50",
  },
  {
    icon: Film,
    value: "Multiple",
    label: "Elimination Rounds",
    colorClass: "text-[#FACC15]",
    bgClass: "from-[#FACC15]/30 to-[#6D28D9]/20",
    hoverBorder: "hover:border-[#FACC15]/30",
  },
  {
    icon: ShieldCheck,
    value: "Fair Play",
    label: "No Phones/Internet",
    colorClass: "text-[#a78bfa]",
    bgClass: "from-[#6D28D9]/30 to-[#FACC15]/20",
    hoverBorder: "hover:border-[#6D28D9]/50",
  },
]

export function ChallengeGrid() {
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
            The Challenge
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {challenges.map((challenge, index) => (
          <GlassCard
            key={index}
            className={`text-center group transition-all duration-300 ${challenge.hoverBorder}`}
          >
            <div className={`mb-4 mx-auto w-fit rounded-xl bg-gradient-to-br ${challenge.bgClass} p-4`}>
              <challenge.icon className={`h-8 w-8 ${challenge.colorClass}`} />
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${challenge.colorClass}`}>
              {challenge.value}
            </h3>
            <p className="text-white/60">{challenge.label}</p>
          </GlassCard>
        ))}
      </motion.div>
    </motion.section>
  )
}
