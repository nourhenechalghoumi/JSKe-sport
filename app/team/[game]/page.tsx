"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Gamepad2, ArrowLeft, Crown, Target, Zap, Trophy } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const teamData = {
  valorant: {
    name: "Valorant",
    logo: "/valorant-jett-premium-3d.png",
    description: "Our Valorant squad dominates the tactical FPS scene with precision and strategy.",
    achievements: ["Regional Champions 2024", "VCT Qualifiers", "National Cup Winners"],
    players: [
      {
        id: 1,
        name: "Alex Chen",
        nickname: "Phoenix",
        role: "IGL/Duelist",
        gender: "Male",
        avatar: "/professional-male-gamer-with-headset-phoenix-style.png",
        type: "player",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        nickname: "Viper",
        role: "Controller",
        gender: "Female",
        avatar: "/professional-female-gamer-with-gaming-headset-vipe.png",
        type: "player",
      },
      {
        id: 3,
        name: "Mohamed Oussema Hamema",
        nickname: "Strategist",
        role: "Head Coach",
        gender: "Male",
        avatar: "/professional-valorant-manager-mohamed.png",
        experience: "5 years",
        achievements: "Regional Coach of the Year",
        type: "coach",
      },
    ],
  },
  "league-of-legends": {
    name: "League of Legends",
    logo: "/league-samira-premium-3d.png",
    description: "Our LoL team brings strategic depth and mechanical excellence to the Rift.",
    achievements: ["Spring Split Champions", "Worlds Qualifiers", "Regional Finals MVP"],
    players: [
      {
        id: 1,
        name: "Marcus Williams",
        nickname: "Shadow",
        role: "ADC",
        gender: "Male",
        avatar: "/professional-male-gamer-league-of-legends-adc-play.png",
       
        type: "player",
      },
      {
        id: 2,
        name: "Emma Davis",
        nickname: "Frost",
        role: "Support",
        gender: "Female",
        avatar: "/professional-female-gamer-league-of-legends-suppor.png",
        
        type: "player",
      },
      {
        id: 3,
        name: "Koussay Mejri",
        nickname: "Guide",
        role: "Head Coach",
        gender: "Male",
        avatar: "/professional-esports-manager-koussay.png",
        experience: "7 years",
        achievements: "LCS Coach of the Split",
        type: "coach",
      },
      {
        id: 4,
        name: "Mustapha Laaroussi",
        nickname: "Manager",
        role: "Manager",
        gender: "Male",
        avatar: "/professional-esports-manager-mustapha.png",
        experience: "4 years",
        achievements: "Team Management Excellence",
        type: "manager",
      },
    ],
  },
  "rocket-league": {
    name: "Rocket League",
    logo: "/rocket-league-octane-premium-3d.png",
    description: "High-octane gameplay and aerial mastery define our Rocket League squad.",
    achievements: ["RLCS Regional Champions", "Aerial Masters Cup", "Speed Demons Tournament"],
    players: [
      {
        id: 1,
        name: "Jake Martinez",
        nickname: "Aero",
        role: "Male",
        gender: "Male",
        avatar: "/Rocket/1.jpg",
        type: "player",
      },
      {
        id: 2,
        name: "Liam Wilson",
        nickname: "Boost",
        role: "Male",
        gender: "Male",
        avatar: "/Rocket/2.jpg",
        type: "player",
      },
      {
        id: 3,
        name: "Noah Anderson",
        nickname: "Wall",
        role: "Male",
        gender: "Male",
        avatar: "/Rocket/5.jpg",
        type: "player",
      },
      {
        id: 4,
        name: "Ethan Taylor",
        nickname: "Flip",
        role: "Male",
        gender: "Male",
        avatar: "/Rocket/4.jpg",
        type: "player",
      },
    ],
  },
}

export default function TeamPage() {
  const params = useParams()
  const { t } = useLanguage()
  const [genderFilter, setGenderFilter] = useState("All")
  const [typeFilter, setTypeFilter] = useState("All")

  const gameKey = params.game as string
  const team = teamData[gameKey]

  if (!team) {
    return <div>Team not found</div>
  }

  const genders = ["All", "Male", "Female"]
  const types = ["All", "player", "coach", "manager"]

  const filteredMembers = team.players.filter((member) => {
    const genderMatch = genderFilter === "All" || member.gender === genderFilter
    const typeMatch = typeFilter === "All" || member.type === typeFilter
    return genderMatch && typeMatch
  })

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={team.logo || "/placeholder.svg"}
              alt={team.name}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <Link href="/#disciplines">
                <Button variant="ghost" className="mb-4 text-primary hover:text-primary/80">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Teams
                </Button>
              </Link>
              <h1 className="text-5xl font-bold font-sans mb-4 bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
                {team.name} <span className="text-white">Squad</span>
              </h1>
              <p className="text-xl text-muted-foreground font-serif mb-6">{team.description}</p>
              <div className="flex flex-wrap gap-2">
                {team.achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/20 text-primary flex items-center">
                    <Trophy className="w-3 h-3 mr-1" />
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex flex-wrap gap-2 bg-background/80 p-4 rounded-lg border border-primary/20 shadow-lg">
                <span className="text-sm font-medium text-primary font-serif mr-2 flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Gender:
                </span>
                {genders.map((gender) => (
                  <Button
                    key={gender}
                    variant={genderFilter === gender ? "default" : "outline"}
                    size="sm"
                    onClick={() => setGenderFilter(gender)}
                    className="font-serif transition-all"
                  >
                    {gender}
                  </Button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 bg-background/80 p-4 rounded-lg border border-primary/20 shadow-lg">
                <span className="text-sm font-medium text-primary font-serif mr-2 flex items-center">
                  <Gamepad2 className="w-4 h-4 mr-1" />
                  Role:
                </span>
                {types.map((type) => (
                  <Button
                    key={type}
                    variant={typeFilter === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTypeFilter(type)}
                    className="font-serif capitalize transition-all"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Members - NEW ANIMATED DESIGN */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="group relative bg-gray-900 overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
                >
                  {/* Card Background & Image */}
                  <div className="relative h-[500px] overflow-hidden">
                    {/* Player Image */}
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                    
                    {/* Role Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-green-500 text-black px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-lg">
                        {member.role}
                      </div>
                    </div>

                    {/* Game Logo/Identifier */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-black/60 backdrop-blur-sm px-4 py-2">
                        <span className="text-green-400 text-sm font-bold uppercase tracking-wider">
                          {team.name}
                        </span>
                      </div>
                    </div>

                    {/* Player Info */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                      {/* Real Name (default state) */}
                      <div className="transition-all duration-500 group-hover:opacity-0 group-hover:transform group-hover:-translate-y-4">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-gray-300 text-sm uppercase tracking-wider">
                          {member.type}
                        </p>
                      </div>

                     {/* Nickname (hover state) */}
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 translate-y-4 
                group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
  <div className="text-center">
    <h3
      className="text-2xl md:text-3xl font-extrabold tracking-widest uppercase 
                 bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 
                 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]"
    >
      {member.nickname}
    </h3>
                          <div className="flex justify-center items-center space-x-4 text-sm">
                            {member.rank && (
                              <span className="bg-green-500/20 text-green-400 px-4 py-2 border border-green-500/30">
                                {member.rank}
                              </span>
                            )}
                            {member.winRate && (
                              <span className="text-gray-300">
                                WR: {member.winRate}
                              </span>
                            )}
                            {member.kd && (
                              <span className="text-gray-300">
                                K/D: {member.kd}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Border Glow Effect */}
                    <div className="absolute inset-0 border-2 border-green-500/0 group-hover:border-green-500/50 transition-all duration-500"></div>
                  </div>

                  
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}