"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Trophy, Users, ExternalLink } from "lucide-react"

const tournaments = [
  {
    id: 1,
    name: "EMEA Masters - Summer Split",
    game: "Valorant",
    date: "2024-03-15",
    location: "Berlin, Germany",
    status: "Upcoming",
    prize: "$50,000",
    teams: 16,
    description: "The biggest Valorant tournament in the EMEA region featuring top teams competing for glory.",
  },
  {
    id: 2,
    name: "League Championship Series",
    game: "League of Legends",
    date: "2024-02-20",
    location: "Los Angeles, USA",
    status: "Qualified",
    prize: "$100,000",
    teams: 12,
    description: "Premier League of Legends championship with the best teams from around the world.",
  },
  {
    id: 3,
    name: "Regional CS2 Championship",
    game: "CS2",
    date: "2024-01-30",
    location: "Stockholm, Sweden",
    status: "Champions",
    prize: "$25,000",
    teams: 8,
    description: "Counter-Strike 2 regional championship where JSK dominated the competition.",
  },
]

export function TournamentsSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Champions":
        return "bg-primary text-primary-foreground"
      case "Qualified":
        return "bg-secondary text-secondary-foreground"
      case "Upcoming":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="tournaments" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold font-sans mb-4">
            <span className="text-primary">Tournaments</span> & Events
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Follow our journey through major competitions and championships
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <Card
              key={tournament.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="font-serif">
                    {tournament.game}
                  </Badge>
                  <Badge className={`${getStatusColor(tournament.status)} font-serif`}>{tournament.status}</Badge>
                </div>
                <CardTitle className="font-sans group-hover:text-primary transition-colors">
                  {tournament.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-serif text-sm leading-relaxed">{tournament.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground font-serif">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {new Date(tournament.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground font-serif">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {tournament.location}
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground font-serif">
                    <Trophy className="w-4 h-4 mr-2 text-primary" />
                    Prize Pool: {tournament.prize}
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground font-serif">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {tournament.teams} Teams
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors font-serif bg-transparent"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <Button size="lg" className="font-serif">
            View All Tournaments
          </Button>
        </div>
      </div>
    </section>
  )
}
