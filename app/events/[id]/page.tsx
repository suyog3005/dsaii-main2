"use client"

import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Trophy, Users, Clock, Shield, ArrowLeft } from "lucide-react"
import { PlexusBackground } from "@/components/shared/plexus-background"
import { GlassCard } from "@/components/shared/glass-card"
import { GradientText } from "@/components/shared/gradient-text"
import { getEventById } from "@/lib/events-data"

const REGISTER_URL = "https://dsaii-submission.vercel.app/"

export default function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const event = getEventById(id)

  if (!event) {
    notFound()
  }

  return (
    <div className="relative min-h-screen text-white">
      <PlexusBackground />

      <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-7xl">{event.emoji}</div>
          <h1 className="mb-4 text-5xl font-bold tracking-tighter sm:text-6xl lg:text-8xl">
            <GradientText>{event.name}</GradientText>
          </h1>
          <p className="mb-2 text-xl text-white/60">{event.tagline}</p>
          <p className="mb-8 text-lg text-cyan-400">{event.date}</p>
          <Link
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Register Now - {event.entryFee}
          </Link>
        </motion.header>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-16 max-w-3xl"
        >
          <GlassCard className="p-8">
            <p className="text-center text-lg leading-relaxed text-white/80">
              {event.description}
            </p>
          </GlassCard>
        </motion.div>

        {/* Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-16 max-w-5xl"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <GlassCard className="p-6 text-center">
              <Trophy className="mx-auto mb-3 h-8 w-8 text-cyan-400" />
              <p className="mb-1 text-sm text-white/50">Prize Pool</p>
              <p className="text-2xl font-bold text-white">{event.prizePool}</p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <Users className="mx-auto mb-3 h-8 w-8 text-fuchsia-400" />
              <p className="mb-1 text-sm text-white/50">Team Size</p>
              <p className="text-2xl font-bold text-white">{event.teamSize}</p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <Clock className="mx-auto mb-3 h-8 w-8 text-cyan-400" />
              <p className="mb-1 text-sm text-white/50">Duration</p>
              <p className="text-2xl font-bold text-white">{event.duration}</p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <Shield className="mx-auto mb-3 h-8 w-8 text-fuchsia-400" />
              <p className="mb-1 text-sm text-white/50">Fair Play</p>
              <p className="text-2xl font-bold text-white">Enforced</p>
            </GlassCard>
          </div>
        </motion.div>

        {/* Rules Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mb-16 max-w-3xl"
        >
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight">
            <GradientText>Rules & Guidelines</GradientText>
          </h2>
          <GlassCard className="p-8">
            <ul className="space-y-4">
              {event.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-white/80">{rule}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        {/* Schedule Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mb-16 max-w-3xl"
        >
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight">
            <GradientText>Event Schedule</GradientText>
          </h2>
          <GlassCard className="p-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1.75 top-2 h-[calc(100%-16px)] w-0.5 bg-linear-to-b from-cyan-500 to-fuchsia-500" />
              
              <div className="space-y-6">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 shadow-lg shadow-cyan-500/50" />
                    <div className="flex-1">
                      <p className="font-mono text-sm text-cyan-400">{item.time}</p>
                      <p className="text-white">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <GlassCard className="mx-auto max-w-2xl p-8">
            <h3 className="mb-4 text-2xl font-bold">Ready to Compete?</h3>
            <p className="mb-6 text-white/60">
              Secure your spot now and be part of something extraordinary.
            </p>
            <Link
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Register Now - {event.entryFee}
            </Link>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}
