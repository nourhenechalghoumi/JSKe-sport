"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "JSK Dominates Regional Championship",
    excerpt: "Our Valorant team secured first place in the regional championship with an outstanding performance.",
    date: "2024-01-15",
    category: "Tournament",
    image: "/valorant-championship-victory.png",
  },
  {
    id: 2,
    title: "New League of Legends Roster Announced",
    excerpt: "We're excited to introduce our new LoL roster with world-class players ready for the upcoming season.",
    date: "2024-01-10",
    category: "Team Update",
    image: "/league-of-legends-team-announcement.png",
  },
  {
    id: 3,
    title: "Partnership with Gaming Gear Brand",
    excerpt: "JSK Esports partners with leading gaming peripherals company to enhance our competitive edge.",
    date: "2024-01-05",
    category: "Partnership",
    image: "/gaming-equipment-partnership.png",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold font-sans mb-4 text-white">
            Latest <span className="text-green-500">News</span>
          </h2>
          <p className="text-xl text-gray-400 font-serif max-w-2xl mx-auto">
            Stay updated with our latest achievements, team updates, and upcoming tournaments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-gray-900 overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
            >
              {/* Card Background & Image */}
              <div className="relative h-64 overflow-hidden">
                {/* News Image */}
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-green-500 text-black px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-lg">
                    {item.category}
                  </div>
                </div>

                {/* Date Display */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="flex items-center bg-black/60 backdrop-blur-sm px-3 py-1 text-white text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 relative z-10">
                {/* Title (default state) */}
                <div className="transition-all duration-500 group-hover:opacity-0 group-hover:transform group-hover:-translate-y-4 h-16">
                  <h3 className="text-xl font-bold text-white line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                {/* Excerpt (hover state) */}
                <div className="absolute p-6 left-0 right-0 bottom-6 opacity-0 translate-y-4 
                            group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <div className="text-center">
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-center text-green-400 text-sm group-hover:text-green-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Border Glow Effect */}
              <div className="absolute inset-0 border-2 border-green-500/0 group-hover:border-green-500/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}