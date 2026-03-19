"use client"

import { use, useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion, type Variants } from "framer-motion"
import { Trophy, Users, Clock, Shield, ArrowLeft } from "lucide-react"
import { PlexusBackground } from "@/components/shared/plexus-background"
import { GlassCard } from "@/components/shared/glass-card"
import { GradientText } from "@/components/shared/gradient-text"
import { getEventById } from "@/lib/events-data"

const REGISTER_URL = "https://dsaii-submission.vercel.app/"

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const event = getEventById(id)
  const [flippedCard, setFlippedCard] = useState<string | null>(null)

  if (!event) {
    notFound()
  }

  const isBattlegrid = event.id === "battlegrid" && Boolean(event.gameCards?.length)
  const hideSchedule = event.id === "cinequest" || event.id === "geovoyager" || event.id === "contentflux"

  return (
    <div className="relative min-h-screen text-white">
      <PlexusBackground />

      <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-white/60 transition-all duration-300 hover:-translate-x-1 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: -26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-16 overflow-hidden text-center"
        >
          <div className="animate-aurora absolute left-[14%] top-[6%] -z-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="animate-aurora absolute right-[16%] top-[12%] -z-10 h-44 w-44 rounded-full bg-fuchsia-500/12 blur-3xl" style={{ animationDelay: "-4s" }} />

          <motion.div
            className="mb-4 text-7xl"
            animate={{ y: [0, -7, 0], rotate: [0, -1.8, 0, 1.8, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          >
            {event.emoji}
          </motion.div>
          <h1 className="mb-4 text-5xl font-bold tracking-tighter sm:text-6xl lg:text-8xl">
            <GradientText>{event.name}</GradientText>
          </h1>
          <motion.p className="mb-2 text-xl text-white/60" animate={{ opacity: [0.65, 1, 0.65] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}>
            {event.tagline}
          </motion.p>
          <p className="mb-8 text-lg text-cyan-400">{event.date}</p>
          <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-shimmer inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-cyan-400 hover:via-fuchsia-500 hover:to-pink-500 hover:shadow-[0_0_22px_rgba(34,211,238,0.45),0_0_42px_rgba(217,70,239,0.35),0_0_60px_rgba(236,72,153,0.26)]"
            >
              Register Now - {event.entryFee}
            </Link>
          </motion.div>
        </motion.header>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="mx-auto mb-16 max-w-3xl">
          <GlassCard className="p-8">
            <p className="text-center text-lg leading-relaxed text-white/80">
              {event.description}
            </p>
          </GlassCard>
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mx-auto mb-16 max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Prize Pool", value: event.prizePool, icon: Trophy, color: "text-cyan-400" },
              { label: "Team Size", value: event.teamSize, icon: Users, color: "text-fuchsia-400" },
              { label: "Duration", value: event.duration, icon: Clock, color: "text-cyan-400" },
              { label: "Fair Play", value: "Enforced", icon: Shield, color: "text-fuchsia-400" },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <GlassCard className="p-6 text-center">
                    <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}>
                      <Icon className={`mx-auto mb-3 h-8 w-8 ${item.color}`} />
                    </motion.div>
                    <p className="mb-1 text-sm text-white/50">{item.label}</p>
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight">
            <GradientText>Rules & Guidelines</GradientText>
          </h2>
          <GlassCard className="p-8">
            <motion.ul variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="space-y-4">
              {event.rules.map((rule, index) => (
                <motion.li key={index} variants={itemVariants} whileHover={{ x: 6 }} className="flex items-start gap-3">
                  <span className="animate-soft-pulse flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-white/80">{rule}</span>
                </motion.li>
              ))}
            </motion.ul>
          </GlassCard>
        </motion.div>

        {isBattlegrid ? (
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mx-auto mb-16 max-w-7xl">
            <h2 className="mb-3 text-center text-3xl font-bold tracking-tight">
              <GradientText>Game Modes</GradientText>
            </h2>
            <p className="mb-8 text-center text-white/55">
              Hover on desktop or tap on mobile to flip each card.
            </p>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {event.gameCards?.map((card, index) => (
                <motion.div
                  key={`${card.title}-${card.subtitle}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="group h-[470px] cursor-pointer [perspective:1400px] sm:h-[500px]"
                  onClick={() =>
                    setFlippedCard((current) =>
                      current === `${card.title}-${card.subtitle}` ? null : `${card.title}-${card.subtitle}`
                    )
                  }
                >
                  <div
                    className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                    style={{
                      transform:
                        flippedCard === `${card.title}-${card.subtitle}` ? "rotateY(180deg)" : undefined,
                    }}
                  >
                    <GlassCard className="absolute inset-0 flex h-full flex-col justify-between px-5 pt-6 pb-7 [backface-visibility:hidden]">
                      <div>
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-medium tracking-[0.3em] text-cyan-400">{card.title}</p>
                            <h3 className="mt-2 text-3xl font-bold text-white">{card.subtitle}</h3>
                          </div>
                          <span className="rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-4 py-1 text-sm font-semibold text-white">
                            {card.entryFee}
                          </span>
                        </div>
                        <p className="mb-6 text-sm text-white/55">{card.format}</p>
                        <div className="space-y-3">
                          {card.details.slice(0, 3).map((detail) => (
                            <div key={detail} className="flex items-start gap-3 text-sm text-white/78">
                              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-fuchsia-400" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/55">
                        Flip for full rules and scoring
                      </div>
                    </GlassCard>

                    <GlassCard className="absolute inset-0 flex h-full min-h-0 flex-col px-5 pt-6 pb-7 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium tracking-[0.3em] text-cyan-400">{card.title}</p>
                          <h3 className="mt-2 text-2xl font-bold text-white">{card.subtitle}</h3>
                        </div>
                        <Shield className="h-6 w-6 text-fuchsia-400" />
                      </div>

                      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-2 pb-4 text-sm text-white/78">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Rules</p>
                          <div className="space-y-2">
                            {card.details.map((detail) => (
                              <div key={detail} className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {card.scoring?.length ? (
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Points System</p>
                            <div className="space-y-2">
                              {card.scoring.map((rule) => (
                                <div key={rule} className="flex items-start gap-3">
                                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-fuchsia-400" />
                                  <span>{rule}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : hideSchedule ? null : (
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mx-auto mb-16 max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight">
              <GradientText>Event Schedule</GradientText>
            </h2>
            <GlassCard className="p-8">
              <div className="relative">
                <div className="animate-soft-pulse absolute left-1.75 top-2 h-[calc(100%-16px)] w-0.5 bg-linear-to-b from-cyan-500 via-fuchsia-500 to-cyan-400" />

                <motion.div variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="space-y-6">
                  {event.schedule.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} whileHover={{ x: 8 }} className="flex gap-4">
                      <motion.div
                        className="relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 shadow-lg shadow-cyan-500/50"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
                      />
                      <div className="flex-1">
                        <p className="font-mono text-sm text-cyan-400">{item.time}</p>
                        <p className="text-white">{item.activity}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="text-center">
          <GlassCard className="mx-auto max-w-2xl p-8">
            <h3 className="mb-4 text-2xl font-bold">Ready to Compete?</h3>
            <p className="mb-6 text-white/60">
              Secure your spot now and be part of something extraordinary.
            </p>
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button-shimmer inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-cyan-400 hover:via-fuchsia-500 hover:to-pink-500 hover:shadow-[0_0_22px_rgba(34,211,238,0.45),0_0_42px_rgba(217,70,239,0.35),0_0_60px_rgba(236,72,153,0.26)]"
              >
                Register Now - {event.entryFee}
              </Link>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}
