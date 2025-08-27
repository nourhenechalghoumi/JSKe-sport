"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Crown, Shield, Headphones, BarChart3, Gamepad2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const staffHierarchy = [
  {
    level: 1,
    title: { en: "Management", fr: "Direction", ar: "الإدارة" },
    members: [
      {
        id: 1,
        name: "Koussay Mejri",
        role: { en: "LoL Manager", fr: "Manager LoL", ar: "مدير ليج أوف ليجندز" },
        avatar: "/professional-esports-manager-koussay.png",
        icon: Crown,
        description: {
          en: "Leading our League of Legends division with strategic excellence.",
          fr: "Dirigeant notre division League of Legends avec excellence stratégique.",
          ar: "يقود قسم ليج أوف ليجندز بامتياز استراتيجي.",
        },
      },
      {
        id: 2,
        name: "Mustapha Laaroussi",
        role: { en: "LoL Manager", fr: "Manager LoL", ar: "مدير ليج أوف ليجندز" },
        avatar: "/professional-esports-manager-mustapha.png",
        icon: Shield,
        description: {
          en: "Co-managing League of Legends operations and team development.",
          fr: "Co-gestion des opérations League of Legends et développement d'équipe.",
          ar: "إدارة مشتركة لعمليات ليج أوف ليجندز وتطوير الفريق.",
        },
      },
    ],
  },
  {
    level: 2,
    title: { en: "Game Managers & Players", fr: "Managers de Jeu & Joueurs", ar: "مدراء الألعاب واللاعبين" },
    members: [
      {
        id: 3,
        name: "Rayen Rebai",
        role: {
          en: "Rocket League Manager & Player",
          fr: "Manager & Joueur Rocket League",
          ar: "مدير ولاعب روكيت ليج",
        },
        avatar: "/professional-rocket-league-player-rayen.png",
        icon: Gamepad2,
        description: {
          en: "Dual role as manager and competitive player in Rocket League.",
          fr: "Double rôle de manager et joueur compétitif en Rocket League.",
          ar: "دور مزدوج كمدير ولاعب تنافسي في روكيت ليج.",
        },
      },
      {
        id: 4,
        name: "Houssem El Echi",
        role: { en: "MLBB Manager & Player", fr: "Manager & Joueur MLBB", ar: "مدير ولاعب MLBB" },
        avatar: "/professional-mobile-legends-player-houssem.png",
        icon: Gamepad2,
        description: {
          en: "Leading Mobile Legends: Bang Bang as both manager and player.",
          fr: "Dirigeant Mobile Legends: Bang Bang en tant que manager et joueur.",
          ar: "يقود موبايل ليجندز: بانغ بانغ كمدير ولاعب.",
        },
      },
      {
        id: 5,
        name: "Youssef Hammedi",
        role: { en: "FC Manager & Player", fr: "Manager & Joueur FC", ar: "مدير ولاعب FC" },
        avatar: "/professional-fifa-player-youssef.png",
        icon: Gamepad2,
        description: {
          en: "Managing and competing in FIFA competitions.",
          fr: "Gestion et compétition dans les compétitions FIFA.",
          ar: "إدارة والمنافسة في مسابقات فيفا.",
        },
      },
      {
        id: 6,
        name: "Haroun Mefteh",
        role: { en: "eFootball Manager & Player", fr: "Manager & Joueur eFootball", ar: "مدير ولاعب eFootball" },
        avatar: "/professional-efootball-player-haroun.png",
        icon: Gamepad2,
        description: {
          en: "Dual expertise in eFootball management and competitive play.",
          fr: "Double expertise en gestion eFootball et jeu compétitif.",
          ar: "خبرة مزدوجة في إدارة eFootball واللعب التنافسي.",
        },
      },
    ],
  },
  {
    level: 3,
    title: { en: "Specialized Managers", fr: "Managers Spécialisés", ar: "المدراء المتخصصون" },
    members: [
      {
        id: 7,
        name: "Mohamed Oussema Hamema",
        role: { en: "Valorant Manager", fr: "Manager Valorant", ar: "مدير فالورانت" },
        avatar: "/professional-valorant-manager-mohamed.png",
        icon: Headphones,
        description: {
          en: "Strategic oversight of our Valorant competitive team.",
          fr: "Supervision stratégique de notre équipe compétitive Valorant.",
          ar: "إشراف استراتيجي على فريق فالورانت التنافسي.",
        },
      },
      {
        id: 8,
        name: "Ayoub Nwasri",
        role: { en: "TFT Manager", fr: "Manager TFT", ar: "مدير TFT" },
        avatar: "/professional-tft-manager-ayoub.png",
        icon: BarChart3,
        description: {
          en: "Managing Teamfight Tactics strategies and player development.",
          fr: "Gestion des stratégies Teamfight Tactics et développement des joueurs.",
          ar: "إدارة استراتيجيات Teamfight Tactics وتطوير اللاعبين.",
        },
      },
    ],
  },
]

export function StaffSection() {
  const { t } = useLanguage()

  return (
    <section id="staff" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="/futuristic-gaming-setup-with-neon-lights-and-multi.png"
          alt="Gaming Setup Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold font-sans mb-4 animate-neon-flicker">
            {t("staff.title")} <span className="text-primary">{t("staff.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">{t("staff.subtitle")}</p>
        </div>

        <div className="space-y-12">
          {staffHierarchy.map((level, levelIndex) => (
            <div key={level.level} className="scroll-reveal" style={{ animationDelay: `${levelIndex * 0.2}s` }}>
              <div className="text-center mb-8">
                <Badge
                  variant="outline"
                  className="text-lg px-4 py-2 font-serif bg-primary/10 border-primary/30 text-primary"
                >
                  Level {level.level}: {level.title.en}
                </Badge>
              </div>

              <div
                className={`grid gap-6 ${
                  level.members.length === 1
                    ? "max-w-md mx-auto"
                    : level.members.length === 2
                      ? "md:grid-cols-2 max-w-4xl mx-auto"
                      : "md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {level.members.map((member, memberIndex) => {
                  const IconComponent = member.icon
                  return (
                    <Card
                      key={member.id}
                      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 animate-card-hover overflow-hidden"
                      style={{ animationDelay: `${levelIndex * 0.2 + memberIndex * 0.1}s` }}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="relative mb-4">
                          <Avatar className="w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300 ring-2 ring-primary/20 group-hover:ring-primary/50">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback className="bg-primary/20 text-primary">
                              {member.name.split(" ")[0][0]}
                              {member.name.split(" ")[1]?.[0] || ""}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/50 group-hover:shadow-primary/80 transition-all duration-300">
                            <IconComponent className="w-4 h-4 text-primary-foreground" />
                          </div>
                        </div>

                        <h3 className="font-bold font-sans text-lg mb-1 group-hover:text-primary transition-colors animate-neon-flicker">
                          {member.name}
                        </h3>
                        <p className="text-primary font-serif font-medium mb-3">{member.role.en}</p>
                        <p className="text-sm text-muted-foreground font-serif leading-relaxed">
                          {member.description.en}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
