"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { PlexusBackground } from "@/components/shared/plexus-background"
import { GlassCard } from "@/components/shared/glass-card"
import { GradientText } from "@/components/shared/gradient-text"
import { eventsData } from "@/lib/events-data"

const REGISTER_URL = "https://dsaii-submission.vercel.app/"

export default function EventsPage() {
  return (
    <div className="relative min-h-screen text-white">
      <PlexusBackground />
      
      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Institute Name */}
          <p className="mb-6 text-sm font-medium tracking-[0.3em] text-cyan-400 sm:text-base">
            DY PATIL INSTITUTE OF TECHNOLOGY, PIMPRI
          </p>
          
          {/* Main Title - TECHNOVATION 4.0 */}
          <h1 className="mb-4 text-5xl font-bold italic tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-cyan-400">TECH</span>
            <span className="bg-linear-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">NOVATION 4.0</span>
          </h1>
          
          {/* MIRAI Subtitle */}
          <h2 className="mb-2 text-3xl font-light tracking-[0.2em] text-pink-400 sm:text-4xl">
            MIRAI
          </h2>
          
          {/* Tagline */}
          <p className="mb-6 text-base text-white/50 sm:text-lg">
            Leap Beyond Destiny
          </p>
          
          {/* Date */}
          <p className="mb-8 text-lg font-medium text-cyan-400 sm:text-xl">
            April 3-5, 2026
          </p>
          
          {/* Register Button */}
          <Link
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-linear-to-r from-cyan-600 via-purple-600 to-fuchsia-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40"
          >
            Register Now
          </Link>
        </motion.header>

        {/* Events Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventsData.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/events/${event.id}`}>
                  <GlassCard hover className="h-full p-6">
                    <div className="mb-4 text-5xl">{event.emoji}</div>
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
                      <div className="rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-4 py-1 text-sm font-semibold text-white">
                        {event.entryFee}
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="mb-4 text-white/50">Ready to compete?</p>
          <Link
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Register Now
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
