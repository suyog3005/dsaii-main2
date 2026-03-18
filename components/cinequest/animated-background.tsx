"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Plexus Network SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Geometric network lines */}
        <g className="animate-pulse" style={{ animationDuration: "4s" }}>
          <line x1="5%" y1="15%" x2="25%" y2="35%" stroke="#6D28D9" strokeWidth="1" opacity="0.25" />
          <line x1="25%" y1="35%" x2="45%" y2="20%" stroke="#FACC15" strokeWidth="1" opacity="0.2" />
          <line x1="45%" y1="20%" x2="70%" y2="40%" stroke="#6D28D9" strokeWidth="1" opacity="0.25" />
          <line x1="70%" y1="40%" x2="95%" y2="25%" stroke="#FACC15" strokeWidth="1" opacity="0.2" />
          <line x1="10%" y1="60%" x2="35%" y2="75%" stroke="#FACC15" strokeWidth="1" opacity="0.2" />
          <line x1="35%" y1="75%" x2="60%" y2="55%" stroke="#6D28D9" strokeWidth="1" opacity="0.25" />
          <line x1="60%" y1="55%" x2="85%" y2="70%" stroke="#FACC15" strokeWidth="1" opacity="0.2" />
          <line x1="85%" y1="70%" x2="95%" y2="85%" stroke="#6D28D9" strokeWidth="1" opacity="0.25" />
          {/* Cross connections */}
          <line x1="25%" y1="35%" x2="35%" y2="75%" stroke="#6D28D9" strokeWidth="1" opacity="0.15" />
          <line x1="45%" y1="20%" x2="60%" y2="55%" stroke="#FACC15" strokeWidth="1" opacity="0.15" />
          <line x1="70%" y1="40%" x2="85%" y2="70%" stroke="#6D28D9" strokeWidth="1" opacity="0.15" />
        </g>

        {/* Floating nodes */}
        <g>
          <circle cx="5%" cy="15%" r="8" fill="#6D28D9" opacity="0.6">
            <animate attributeName="cy" values="15%;18%;15%" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="25%" cy="35%" r="10" fill="#FACC15" opacity="0.5">
            <animate attributeName="cy" values="35%;32%;35%" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="45%" cy="20%" r="8" fill="#6D28D9" opacity="0.6">
            <animate attributeName="cy" values="20%;23%;20%" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="70%" cy="40%" r="10" fill="#FACC15" opacity="0.5">
            <animate attributeName="cy" values="40%;37%;40%" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="95%" cy="25%" r="8" fill="#6D28D9" opacity="0.6">
            <animate attributeName="cy" values="25%;28%;25%" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="10%" cy="60%" r="8" fill="#FACC15" opacity="0.5">
            <animate attributeName="cy" values="60%;63%;60%" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="35%" cy="75%" r="10" fill="#6D28D9" opacity="0.6">
            <animate attributeName="cy" values="75%;72%;75%" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="60%" cy="55%" r="8" fill="#FACC15" opacity="0.5">
            <animate attributeName="cy" values="55%;58%;55%" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="85%" cy="70%" r="10" fill="#6D28D9" opacity="0.6">
            <animate attributeName="cy" values="70%;67%;70%" dur="4.5s" repeatCount="indefinite" />
          </circle>
          {/* Larger glow orbs */}
          <circle cx="15%" cy="25%" r="50" fill="url(#nodeGlow)">
            <animate attributeName="cy" values="25%;28%;25%" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="85%" cy="35%" r="40" fill="url(#goldGlow)">
            <animate attributeName="cy" values="35%;32%;35%" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50%" cy="80%" r="45" fill="url(#nodeGlow)">
            <animate attributeName="cy" values="80%;77%;80%" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      {/* Purple & Gold gradient orbs */}
      <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-[#6D28D9]/20 blur-[180px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-[#FACC15]/10 blur-[150px]" />

      {/* Film Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Scanner line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FACC15]/20 to-transparent animate-scan"
          style={{
            animation: "scan 8s linear infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: -2px; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  )
}
