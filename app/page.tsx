"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { PlexusBackground } from "@/components/shared/plexus-background"
import { GlassCard } from "@/components/shared/glass-card"
import { GradientText } from "@/components/shared/gradient-text"
import { eventsData } from "@/lib/events-data"

const REGISTER_URL = "https://dsaii-submission.vercel.app/"

const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

const heroItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function EventsPage() {
  return (
    <div className="relative min-h-screen text-white">
      <PlexusBackground />

      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <motion.header
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="relative isolate mb-24 flex min-h-[72vh] flex-col items-center justify-center overflow-hidden text-center sm:min-h-[78vh]"
        >
          <div className="animate-aurora absolute left-[8%] top-[14%] -z-10 h-40 w-40 rounded-full bg-cyan-500/12 blur-3xl sm:h-56 sm:w-56" />
          <div className="animate-aurora absolute right-[10%] top-[24%] -z-10 h-48 w-48 rounded-full bg-fuchsia-500/12 blur-3xl sm:h-64 sm:w-64" style={{ animationDelay: "-6s" }} />

          <motion.p variants={heroItem} className="mb-6 text-sm font-medium tracking-[0.3em] text-cyan-400 sm:text-base">
            DY PATIL INSTITUTE OF TECHNOLOGY, PIMPRI
          </motion.p>

          <motion.div variants={heroItem} className="relative mb-4 inline-flex justify-center px-6 py-8">
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.62),transparent_38%),radial-gradient(circle_at_70%_35%,rgba(217,70,239,0.56),transparent_36%),radial-gradient(circle_at_50%_75%,rgba(236,72,153,0.5),transparent_40%),radial-gradient(circle,rgba(168,85,247,0.4),transparent_62%)] blur-3xl sm:h-64 sm:w-64 lg:h-80 lg:w-80"
              animate={{ opacity: [0.58, 0.95, 0.58], scale: [0.92, 1.1, 0.92] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22),transparent_60%)] blur-2xl sm:h-52 sm:w-52 lg:h-64 lg:w-64"
              animate={{ opacity: [0.32, 0.62, 0.32], scale: [0.98, 1.14, 0.98] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
            />
            <motion.h1
              className="relative text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-cyan-400">TECH</span>
              <span className="animate-gradient-shift bg-linear-to-r from-fuchsia-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">NOVATION 4.0</span>
            </motion.h1>
          </motion.div>

          <motion.h2 variants={heroItem} className="mb-2 text-3xl font-light tracking-[0.2em] text-pink-400 sm:text-4xl">
            MIRAI
          </motion.h2>

          <motion.p variants={heroItem} className="mb-6 text-base text-white/50 sm:text-lg">
            Leap Beyond Destiny
          </motion.p>

          <motion.p
            variants={heroItem}
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8 text-lg font-medium text-cyan-400 sm:text-xl"
          >
            April 3-5, 2026
          </motion.p>

          <motion.div variants={heroItem} whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-shimmer inline-block rounded-lg bg-linear-to-r from-cyan-600 via-purple-600 to-fuchsia-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-cyan-500 hover:via-fuchsia-500 hover:to-pink-500 hover:shadow-[0_0_22px_rgba(34,211,238,0.45),0_0_42px_rgba(217,70,239,0.35),0_0_62px_rgba(236,72,153,0.28)]"
            >
              Register Now
            </Link>
          </motion.div>
        </motion.header>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventsData.map((event, index) => (
              <motion.div
                key={event.id}
                variants={cardItem}
                whileHover={{ y: -10, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link href={`/events/${event.id}`}>
                  <GlassCard hover className="h-full p-6">
                    <motion.div
                      className="mb-4 text-5xl"
                      animate={{ y: [0, -6, 0], rotate: [0, -2, 0, 2, 0] }}
                      transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {event.emoji}
                    </motion.div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight">
                      <GradientText glow={false}>{event.name}</GradientText>
                    </h2>
                    <p className="mb-4 text-sm text-white/50">{event.tagline}</p>
                    <p className="mb-6 line-clamp-2 text-sm text-white/70">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <div className="text-sm">
                        <span className="text-white/50">Team: </span>
                        <span className="text-white">{event.teamSize}</span>
                      </div>
                      <motion.div
                        className="animate-soft-pulse rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-4 py-1 text-sm font-semibold text-white"
                        whileHover={{ scale: 1.06 }}
                      >
                        {event.entryFee}
                      </motion.div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 text-center"
        >
          <p className="mb-4 text-white/50">Ready to compete?</p>
          <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-shimmer inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-cyan-400 hover:via-fuchsia-500 hover:to-pink-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.45),0_0_40px_rgba(217,70,239,0.35),0_0_56px_rgba(236,72,153,0.24)]"
            >
              Register Now
              <motion.svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}