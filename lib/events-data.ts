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
  gameCards?: {
    title: string
    subtitle: string
    entryFee: string
    format: string
    details: string[]
    scoring?: string[]
  }[]
}

export const eventsData: EventData[] = [
  {
    id: "innovex",
    name: "INNOVEX",
    tagline: "Build. Solve. Innovate.",
    description: "INNOVEX is a high-intensity hackathon focused on solving real-world challenges within college campuses and workplace environments. Participants will identify and tackle issues faced by students, faculty, administration, or employees—ranging from academic workflows to inefficiencies in campus and corporate work culture—and build practical, tech-driven solutions.The hackathon revolves around problem statements inspired by real campus and workplace scenarios, such as:Inefficient attendance and academic tracking systemsCommunication gaps between students, faculty, and administrationEvent and resource management within campusesProductivity and workflow challenges in workplace environmentsCampus navigation, hostel/mess management, and daily student life issues.Digital solutions for improving collaboration, scheduling, and task management.Participants can either choose from provided problem statements or identify their own relevant problem within campus or workplace ecosystems, ensuring the solution is meaningful and implementable.Teams will move from ideation to execution within a 6-hour time frame, developing working prototypes that are scalable, impactful, and user-focused. The goal is not just innovation, but relevance—solutions that could realistically be implemented in real environments.",
    teamSize: "2-4 Members",
    entryFee: "₹399",
    prizePool: "₹35,000",
    date: "April 3, 2026",
    duration: "6 Hours",
    rules: [
      "All solutions must be original and developed during the hackathon",
      "AI tools are allowed based on participant preference",
      "Pre-built templates/tools are allowed, but core logic must be developed during the event",
      "Solutions must focus on campus or workplace-related problems",
      "Evaluation will be feature-focused, prioritizing functionality and usability"
    ],
    schedule: [
      { time: "09:00 AM", activity: "Registration & Check-in" },
      { time: "10:00 AM", activity: "Problem Statement Reveal" },
      { time: "10:30 AM", activity: "Hacking Begins" },
      { time: "01:00 PM", activity: "Lunch Break" },
      { time: "04:00 PM", activity: "Code Freeze" },
      { time: "04:30 PM", activity: "Presentations Begin" },
      { time: "06:00 PM", activity: "Results & Awards" }
    ],
    emoji: ""
  },
  {
    id: "cinequest",
    name: "CINEQUEST",
    tagline: "The Ultimate Cinephile Challenge",
    description: "CINEQUEST is a dynamic and immersive pop culture quiz event designed for fans of movies, anime, and web series. It challenges participants to dive deep into fictional universes and test their knowledge across iconic characters, storylines, hidden details, and cinematic moments.The event will consist of multiple interactive rounds that go beyond traditional quizzes. Participants will face challenges such as:Identifying characters, scenes, or dialogues. Guessing movies/series from clips or images. Spotting inconsistencies or plot loopholes.This is not just about memory—it’s about attention to detail, observation skills, and fandom depth. Whether you're a casual watcher or someone who pauses scenes to read background posters, this event will push your limits.",
    teamSize: "3-4 Members",
    entryFee: "₹299",
    prizePool: "₹15,000",
    date: "April 4, 2026",
    duration: "3 Hours",
    rules: [
      "The quiz will be conducted in multiple elimination rounds",
      "Teams must follow fair playâ€”no use of mobile phones, internet, or external help",
      "Answers must be submitted within the given time limits",
      "Elimination will be based on points earned in each round",
      "Judges' decisions are final"
    ],
    schedule: [
      { time: "02:00 PM", activity: "Team Registration" },
      { time: "02:30 PM", activity: "Round 1: Visual Quiz" },
      { time: "03:15 PM", activity: "Round 2: Audio Round" },
      { time: "04:00 PM", activity: "Round 3: Rapid Fire" },
      { time: "04:45 PM", activity: "Finals & Tiebreaker" },
      { time: "05:30 PM", activity: "Prize Distribution" }
    ],
    emoji: ""
  },
  {
    id: "contentflux",
    name: "CONTENTFLUX",
    tagline: "Create. Edit. Dominate.",
    description: "CONTENTFLUX is a creative AI-powered competition where participants generate engaging video content using modern AI tools. The event blends technology with storytelling, challenging participants to transform ideas into visually compelling videos based on given themes and prompts.Participants will be provided with specific themes or problem statements and must create short-form video content using AI tools such as text-to-video generators, image generation, voice synthesis, or editing platforms. The objective is to produce content that is not only visually appealing but also creative, meaningful, and impactful.This event explores how effectively participants can leverage AI for content creation—whether through storytelling, marketing-style videos, cinematic edits, or concept-driven visuals.",
    teamSize: "1-2 Members",
    entryFee: "₹149",
    prizePool: "₹10,000",
    date: "April 4, 2026",
    duration: "4 Hours",
    rules: [
      "The event will be conducted in offline mode only",
      "Participants must create content within the event timeframe",
      "Participants may use any AI tools of their choice",
      "No AI tools or resources will be provided by the organizers",
      "All content must be original and not pre-created",
      "Participants must strictly follow the given theme/prompt",
      "Any form of plagiarism or reuse of existing content will lead to disqualification",
      "No copyrighted or inappropriate content is allowed",
      "Participants must maintain fair usage of tools and originality",
      "Judges’ decisions will be final"

    ],
    schedule: [
      { time: "10:00 AM", activity: "Briefing & Theme Reveal" },
      { time: "10:30 AM", activity: "Content Creation Begins" },
      { time: "01:00 PM", activity: "Lunch Break" },
      { time: "02:30 PM", activity: "Final Submissions" },
      { time: "03:00 PM", activity: "Screening & Judging" },
      { time: "04:00 PM", activity: "Winners Announced" }
    ],
    emoji: ""
  },
  {
    id: "geovoyager",
    name: "GEOVOYAGER",
    tagline: "Explore. Deduce. Conquer.",
    description: "A geography and deduction skills challenge that takes you on a virtual journey around the world. Identify locations, solve geographical puzzles, and prove your knowledge of our planet.",
    teamSize: "1-2 Members",
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
    ],
    emoji: ""
  },
  {
    id: "battlegrid",
    name: "BATTLEGRID",
    tagline: "Enter the Arena. Claim Victory.",
    description: "BATTLEGRID is a competitive esports tournament bringing together players from across popular titles like BGMI, Free Fire, and Valorant. Designed for both casual and serious gamers, the event provides a platform to showcase team coordination, strategy, and in-game skills.Participants will compete in structured matches across different formats, battling through rounds to secure a place at the top. Whether itâ€™s tactical gameplay in Valorant or survival instincts in battle royale games, BATTLEGRID tests precision, communication, and decision-making under pressure",
    teamSize: "Duo or Squad or Team of 5 Members",
    entryFee: "₹250 (Valorant) / ₹200 (BGMI) / ₹200 (Free Fire)",
    prizePool: "₹12,000",
    date: "April 5-6, 2026",
    duration: "2 Days",
    rules: [
      "All matches are fully online — play from your own device",
      "IGN & Game UID must match registration exactly — mismatch = DQ",
      "Be online 15 mins before your match",
      "Late joiners after 5 mins of room creation = disqualified",
      "Hacks/cheats/third-party tools = permanent ban",
      "Teaming with opponents in BR games = both teams DQ'd",
      "Send final scoreboard screenshot in this group within 5 mins of match end",
      "Organizer's decision is final",
      "Toxic behavior = disqualification"

    ],
    schedule: [],
    gameCards: [
      {
        title: "FREE FIRE",
        subtitle: "Squad",
        entryFee: "₹200",
        format: "4 players | TPP Classic Squad",
        details: [
          "Map: Random each round",
          "Mobile only - NO emulators",
          "All 4 members must be in room before start",
          "No restarts for disconnections"
        ],
        scoring: [
          "1st (Booyah!) - 10 pts",
          "2nd - 6 pts",
          "3rd - 4 pts",
          "4th - 3 pts | 5th - 2 pts",
          "6th-10th - 1 pt | Per kill - +1 pt"
        ]
      },
      {
        title: "FREE FIRE",
        subtitle: "Duo",
        entryFee: "₹120",
        format: "2 players | TPP Classic Duo",
        details: [
          "Same rules as FF Squad",
          "Map: Random each round",
          "Mobile only - NO emulators",
          "No restarts for disconnections"
        ],
        scoring: [
          "1st (Booyah!) - 10 pts",
          "2nd - 6 pts",
          "3rd - 4 pts",
          "4th - 3 pts | 5th - 2 pts",
          "6th-10th - 1 pt | Per kill - +1 pt"
        ]
      },
      {
        title: "BGMI",
        subtitle: "Squad",
        entryFee: "₹200",
        format: "4 players | TPP Classic Squad",
        details: [
          "Map: Random (Erangel/Miramar/Sanhok/Vikendi)",
          "BGMI India version only - PUBG Mobile not accepted",
          "iOS & Android only - NO emulators",
          "All 4 members must be in room before start",
          "No restarts for disconnections"
        ],
        scoring: [
          "1st (Chicken Dinner) - 10 pts",
          "2nd - 6 pts",
          "3rd - 4 pts",
          "4th - 3 pts | 5th - 2 pts",
          "6th-10th - 1 pt | Per kill - +1 pt"
        ]
      },
      {
        title: "BGMI",
        subtitle: "Duo",
        entryFee: "₹120",
        format: "2 players | TPP Classic Duo",
        details: [
          "Same rules as BGMI Squad",
          "Map: Random (Erangel/Miramar/Sanhok/Vikendi)",
          "BGMI India version only - PUBG Mobile not accepted",
          "iOS & Android only - NO emulators",
          "No restarts for disconnections"
        ],
        scoring: [
          "1st (Chicken Dinner) - 10 pts",
          "2nd - 6 pts",
          "3rd - 4 pts",
          "4th - 3 pts | 5th - 2 pts",
          "6th-10th - 1 pt | Per kill - +1 pt"
        ]
      },
      {
        title: "VALORANT",
        subtitle: "5v5",
        entryFee: "₹250",
        format: "Mumbai Server",
        details: [
          "All agents allowed",
          "Map: Random from Ascent, Bind, Haven, Lotus, Pearl",
          "Early rounds: Spike Rush (first to 4)",
          "Knockouts & Final: Standard (first to 13)",
          "No substitutes allowed",
          "No mid-match pausing without organizer approval",
          "No restarts for disconnections",
          "Overtime: Standard Valorant overtime rules"
        ]
      }
    ],
    emoji: ""
  }
]

export function getEventById(id: string): EventData | undefined {
  return eventsData.find(event => event.id === id)
}

