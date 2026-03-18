"use client"

import { motion, type Variants } from "framer-motion"
import {
  Trophy,
  Ticket,
  Clapperboard,
  Film,
  Sparkles,
  Medal,
  Crown,
} from "lucide-react"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const schedule = [
  { time: "9:00 AM", event: "Registration & Check-in", icon: Ticket },
  { time: "10:00 AM", event: "Round 1 - The Opening Act", icon: Clapperboard },
  { time: "11:30 AM", event: "Round 2 - Plot Thickens", icon: Film },
  { time: "1:00 PM", event: "Lunch Break", icon: Sparkles },
  { time: "2:00 PM", event: "Semi-Finals - The Climax", icon: Medal },
  { time: "3:30 PM", event: "Grand Finale", icon: Crown },
  { time: "4:30 PM", event: "Winner Announcement & Prizes", icon: Trophy },
]

export function FilmStripTimeline() {
  return (
    <div className="relative">
      {/* Film strip perforations - left side */}
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-around">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="h-3 w-5 rounded-sm bg-[#0d0d0d] border border-[#FACC15]/20"
          />
        ))}
      </div>

      {/* Film strip perforations - right side */}
      <div className="absolute right-0 top-0 bottom-0 w-8 flex flex-col justify-around">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="h-3 w-5 rounded-sm bg-[#0d0d0d] border border-[#FACC15]/20 ml-auto"
          />
        ))}
      </div>

      {/* Timeline content */}
      <div className="mx-12 relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FACC15] via-[#6D28D9] to-[#FACC15]" />

        <div className="space-y-6">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative flex items-center gap-6 pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 h-5 w-5 rounded-full bg-[#FACC15] shadow-[0_0_20px_rgba(250,204,21,0.5)] flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>

              {/* Content */}
              <div className="flex-1 rounded-xl border border-[#FACC15]/10 bg-black/40 backdrop-blur-md p-4 flex items-center gap-4">
                <div className="rounded-lg bg-gradient-to-br from-[#6D28D9]/30 to-[#FACC15]/20 p-3">
                  <item.icon className="h-5 w-5 text-[#FACC15]" />
                </div>
                <div>
                  <p className="text-sm text-[#FACC15] font-semibold">{item.time}</p>
                  <p className="text-white/80 font-medium">{item.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
