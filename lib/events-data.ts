export interface EventData {
  id: string
  name: string
  emoji: string
  tagline: string
  description: string
  teamSize: string
  entryFee: string
  prizePool: string
  date: string
  duration: string
  rules: string[]
  schedule: { time: string; activity: string }[]
}

export const eventsData: EventData[] = [
  {
    id: "innovex",
    name: "INNOVEX",
    emoji: "💡",
    tagline: "Build. Solve. Innovate.",
    description: "A high-intensity hackathon focused on building real-world solutions for campus and workplace challenges. Teams will tackle problems in attendance systems, communication platforms, and resource management.",
    teamSize: "2-4 Members",
    entryFee: "₹399",
    prizePool: "₹35,000",
    date: "April 3, 2026",
    duration: "6 Hours",
    rules: [
      "All code must be written during the event",
      "Use of AI tools is permitted for assistance",
      "Final submission via GitHub or ZIP file",
      "Judging based on Innovation, Feasibility, and Presentation"
    ],
    schedule: [
      { time: "09:00 AM", activity: "Registration & Check-in" },
      { time: "10:00 AM", activity: "Problem Statement Reveal" },
      { time: "10:30 AM", activity: "Hacking Begins" },
      { time: "01:00 PM", activity: "Lunch Break" },
      { time: "04:00 PM", activity: "Code Freeze" },
      { time: "04:30 PM", activity: "Presentations Begin" },
      { time: "06:00 PM", activity: "Results & Awards" }
    ]
  },
  {
    id: "cinequest",
    name: "CINEQUEST",
    emoji: "🎬",
    tagline: "The Ultimate Cinephile Challenge",
    description: "Test your knowledge of movies, TV shows, anime, and pop culture in this electrifying quiz competition. From Hollywood blockbusters to cult classics, prove you're the ultimate film buff.",
    teamSize: "2-3 Members",
    entryFee: "₹299",
    prizePool: "₹15,000",
    date: "April 4, 2026",
    duration: "3 Hours",
    rules: [
      "No electronic devices during quiz rounds",
      "Team consensus required for final answers",
      "Tiebreaker rounds in case of equal scores",
      "Judges' decisions are final"
    ],
    schedule: [
      { time: "02:00 PM", activity: "Team Registration" },
      { time: "02:30 PM", activity: "Round 1: Visual Quiz" },
      { time: "03:15 PM", activity: "Round 2: Audio Round" },
      { time: "04:00 PM", activity: "Round 3: Rapid Fire" },
      { time: "04:45 PM", activity: "Finals & Tiebreaker" },
      { time: "05:30 PM", activity: "Prize Distribution" }
    ]
  },
  {
    id: "contentflux",
    name: "CONTENTFLUX",
    emoji: "🎥",
    tagline: "Create. Edit. Dominate.",
    description: "Unleash your creativity in this AI-powered video content creation challenge. Use cutting-edge tools to produce stunning short-form content that captures attention and drives engagement.",
    teamSize: "1-2 Members",
    entryFee: "₹149",
    prizePool: "₹10,000",
    date: "April 4, 2026",
    duration: "4 Hours",
    rules: [
      "AI tools are encouraged and allowed",
      "Content must be original and created on-site",
      "Maximum video length: 90 seconds",
      "Judging based on Creativity, Editing, and Message"
    ],
    schedule: [
      { time: "10:00 AM", activity: "Briefing & Theme Reveal" },
      { time: "10:30 AM", activity: "Content Creation Begins" },
      { time: "01:00 PM", activity: "Lunch Break" },
      { time: "02:30 PM", activity: "Final Submissions" },
      { time: "03:00 PM", activity: "Screening & Judging" },
      { time: "04:00 PM", activity: "Winners Announced" }
    ]
  },
  {
    id: "geovoyager",
    name: "GEOVOYAGER",
    emoji: "🌍",
    tagline: "Explore. Deduce. Conquer.",
    description: "A geography and deduction skills challenge that takes you on a virtual journey around the world. Identify locations, solve geographical puzzles, and prove your knowledge of our planet.",
    teamSize: "2-3 Members",
    entryFee: "₹149",
    prizePool: "₹8,000",
    date: "April 5, 2026",
    duration: "2.5 Hours",
    rules: [
      "No internet access during rounds",
      "Maps and atlases provided on-site",
      "Points awarded for accuracy and speed",
      "Collaborative discussion within teams allowed"
    ],
    schedule: [
      { time: "11:00 AM", activity: "Registration Opens" },
      { time: "11:30 AM", activity: "Round 1: Photo Identification" },
      { time: "12:15 PM", activity: "Round 2: Map Challenges" },
      { time: "01:00 PM", activity: "Lunch Break" },
      { time: "01:45 PM", activity: "Round 3: GeoGuessr Live" },
      { time: "02:30 PM", activity: "Finals & Awards" }
    ]
  },
  {
    id: "battlegrid",
    name: "BATTLEGRID",
    emoji: "🎮",
    tagline: "Enter the Arena. Claim Victory.",
    description: "The ultimate esports showdown featuring Valorant and BGMI tournaments. Compete against the best gamers, showcase your skills, and fight for glory in the digital battlefield.",
    teamSize: "4-5 Members",
    entryFee: "₹499 (Valorant) / ₹299 (BGMI)",
    prizePool: "₹25,000",
    date: "April 5-6, 2026",
    duration: "2 Days",
    rules: [
      "Players must use their own peripherals",
      "PCs will be provided at the venue",
      "Standard tournament rules apply",
      "Anti-cheat monitoring active throughout"
    ],
    schedule: [
      { time: "Day 1 - 10:00 AM", activity: "Valorant Qualifiers Begin" },
      { time: "Day 1 - 04:00 PM", activity: "BGMI Qualifiers Begin" },
      { time: "Day 2 - 10:00 AM", activity: "Semi-Finals (Both Games)" },
      { time: "Day 2 - 02:00 PM", activity: "Grand Finals" },
      { time: "Day 2 - 06:00 PM", activity: "Prize Ceremony" }
    ]
  }
]

export function getEventById(id: string): EventData | undefined {
  return eventsData.find(event => event.id === id)
}
