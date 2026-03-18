"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, CreditCard, User, QrCode } from "lucide-react"
import { PlexusBackground } from "@/components/shared/plexus-background"
import { GlassCard } from "@/components/shared/glass-card"
import { GradientText } from "@/components/shared/gradient-text"
import { eventsData, getEventById } from "@/lib/events-data"

function RegistrationForm() {
  const searchParams = useSearchParams()
  const preselectedEvent = searchParams.get("event") || ""
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    teamName: "",
    leaderEmail: "",
    eventType: preselectedEvent,
  })

  const selectedEvent = getEventById(formData.eventType)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const canProceedStep1 = formData.teamName && formData.leaderEmail && formData.eventType

  const steps = [
    { number: 1, label: "Your Details", icon: User },
    { number: 2, label: "Payment", icon: CreditCard },
    { number: 3, label: "Complete", icon: Check },
  ]

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

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tighter sm:text-5xl">
            <GradientText>Registration</GradientText>
          </h1>
          <p className="text-white/60">Complete your registration in 3 easy steps</p>
        </motion.header>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-12 max-w-2xl"
        >
          <div className="flex items-center justify-between">
            {steps.map((s, index) => (
              <div key={s.number} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
                      step >= s.number
                        ? "border-cyan-500 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white"
                        : "border-white/20 bg-white/5 text-white/40"
                    }`}
                  >
                    {step > s.number ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <s.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span className={`mt-2 text-xs ${step >= s.number ? "text-white" : "text-white/40"}`}>
                    {s.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`mx-2 h-0.5 flex-1 transition-all ${
                      step > s.number
                        ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500"
                        : "bg-white/20"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Container */}
        <div className="mx-auto max-w-xl">
          <AnimatePresence mode="wait">
            {/* Step 1: Details */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-8">
                  <h2 className="mb-6 text-2xl font-bold">Your Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm text-white/60">Team Name</label>
                      <input
                        type="text"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleInputChange}
                        placeholder="Enter your team name"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/60">Leader Email</label>
                      <input
                        type="email"
                        name="leaderEmail"
                        value={formData.leaderEmail}
                        onChange={handleInputChange}
                        placeholder="team.leader@email.com"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/60">Select Event</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                      >
                        <option value="" className="bg-slate-900">Choose an event...</option>
                        {eventsData.map((event) => (
                          <option key={event.id} value={event.id} className="bg-slate-900">
                            {event.name} - {event.entryFee}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    disabled={!canProceedStep1}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue to Payment
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </GlassCard>
              </motion.div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-8">
                  <h2 className="mb-6 text-2xl font-bold">Payment</h2>
                  
                  {/* Order Summary */}
                  <div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{selectedEvent?.name}</p>
                        <p className="text-sm text-white/50">Team: {formData.teamName}</p>
                      </div>
                      <p className="text-xl font-bold text-cyan-400">{selectedEvent?.entryFee}</p>
                    </div>
                  </div>

                  {/* Mock UPI Payment */}
                  <div className="mb-6 text-center">
                    <p className="mb-4 text-sm text-white/60">Scan QR Code to Pay via UPI</p>
                    <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                      <QrCode className="h-32 w-32 text-slate-900" />
                    </div>
                    <p className="mt-4 text-xs text-white/40">UPI ID: mirai.events@paytm</p>
                  </div>

                  <div className="mb-6 text-center">
                    <span className="text-white/40">or</span>
                  </div>

                  {/* Mock Card Payment */}
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-cyan-500/50"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-cyan-500/50"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-cyan-500/50"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 py-3 font-semibold text-white transition-all hover:bg-white/5"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      Pay {selectedEvent?.entryFee}
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {/* Step 3: Success */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500"
                  >
                    <Check className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  <h2 className="mb-2 text-3xl font-bold">
                    <GradientText>Payment Successful!</GradientText>
                  </h2>
                  <p className="mb-6 text-white/60">
                    You have been registered for {selectedEvent?.name}
                  </p>

                  <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-4 text-left">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/50">Team Name:</span>
                        <span>{formData.teamName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Event:</span>
                        <span>{selectedEvent?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Date:</span>
                        <span>{selectedEvent?.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Amount Paid:</span>
                        <span className="text-cyan-400">{selectedEvent?.entryFee}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-6 text-sm text-white/40">
                    A confirmation email has been sent to {formData.leaderEmail}
                  </p>

                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    Back to Events
                  </Link>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
      </div>
    }>
      <RegistrationForm />
    </Suspense>
  )
}
