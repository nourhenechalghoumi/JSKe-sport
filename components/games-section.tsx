"use client"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import Link from "next/link"

const games = [
  {
    name: "Valorant",
    slug: "valorant",
    logo: "/valologo.png",
    character: "/giphy.gif",
    players: 5,
    rank: "#1 Regional",
    description: "Tactical FPS",
  },
  {
    name: "League of Legends",
    slug: "league-of-legends",
    logo: "/logoLEAGUE.png",
    character: "/tenor.gif",
    players: 5,
    rank: "#3 National",
    description: "MOBA",
  },
  {
    name: "CS2",
    slug: "cs2",
    logo: "cs2logo.png",
    character: "cs2.gif",
    players: 5,
    rank: "#2 Regional",
    description: "Tactical FPS",
  },
  {
    name: "tft",
    slug: "tft",
     logo: "tft.webp",
    character: "tft-bm.gif",
    players: 1,
    rank: "#2 National",
    description: "Sports Simulation",
  },
  {
    name: "Mobile Legends",
    slug: "mobile-legends",
   logo: "mobileLlogo.png",
    character: "mobile l.gif",
    players: 5,
    rank: "#1 Regional",
    description: "Mobile MOBA",
  },
   {
    name: "taken",
    slug: "taken",
    logo: "tekkenlogo.png",
    character: "taken.gif",
    players: 1,
    rank: "#2 National",
    description: "Sports Simulation",
  },
  {
    name: "Rocket League",
    slug: "rocket-league",
   logo: "rocketLeageLOgo.png",
    character: "Rocket League Teamplay GIF by Plays.gif",
    players: 3,
    rank: "#4 National",
    description: "Sports",
  },
 
  
  {
    name: "FIFA/FC",
    slug: "fifa-fc",
    logo: "fifalogo.png",
    character: "fifa.gif",
    players: 1,
    rank: "#2 National",
    description: "Sports Simulation",
  },
  
    {
    name: "efootball",
    slug: "efootball",
   logo: "efootballlogo.png",
    character: "efootball.gif",
    players: 1,
    rank: "#2 National",
    description: "Sports Simulation",
  },
    
]

export function GamesSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="disciplines" className="py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 gap-px h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-gray-700/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold font-sans mb-6 tracking-tight text-white">MEET OUR SQUADS</h2>
          <p className="text-lg text-gray-400 font-serif max-w-2xl mx-auto leading-relaxed">{t.games}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <Link key={game.name} href={`/team/${game.slug}`}>
              <div
                className="group relative aspect-[4/5] overflow-hidden bg-black cursor-pointer transition-all duration-700 hover:scale-110"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="absolute inset-0">
                  <img
                    src={game.character || "/placeholder.svg?height=400&width=320&query=esports game character"}
                    alt={`${game.name} character`}
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#427E17]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="mb-4 flex justify-center">
                      <img
                        src={game.logo || "/placeholder.svg?height=60&width=60&query=game logo"}
                        alt={game.name}
                        className="w-16 h-16 object-contain filter brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-[#427E17] transition-colors duration-500 text-center mb-2 tracking-wide">
                      {game.name.toUpperCase()}
                    </h3>

                    <p className="text-xs font-medium text-gray-400 group-hover:text-[#427E17] transition-colors duration-500 text-center uppercase tracking-widest mb-4">
                      {game.description}
                    </p>

                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <div className="bg-[#427E17] text-white px-4 py-2 text-sm font-medium text-center uppercase tracking-wide">
                        View Team
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border border-gray-800 group-hover:border-[#427E17]/50 group-hover:shadow-[0_0_20px_rgba(66,126,23,0.3)] transition-all duration-700"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
