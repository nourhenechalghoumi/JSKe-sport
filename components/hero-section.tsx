"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function HeroSection() {
  const { t } = useLanguage()
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef(null)
  const sectionRef = useRef(null)

  // Replace with your own event/player photos
  const images = [
    "/backgrounds/528793882_1362073868671010_6131996186837705482_n.jpg",
    "/backgrounds/533349802_1371777834367280_5368420078716293606_n.jpg",
    "/backgrounds/539101116_1379254380286292_7710243515578968124_n.jpg",
  ]

  // Team statistics data
 const stats = [
    { id: 1, value: "25+", label: "Pro Players", icon: "🎮", suffix: "Elite" },
    { id: 2, value: "8", label: "Competitive Teams", icon: "⚔️", suffix: "Squads" },
    { id: 3, value: "2018", label: "Established", icon: "🚀", suffix: "Legacy" },
    { id: 4, value: "50+", label: "Tournaments", icon: "🏆", suffix: "Won" }
]

  // Auto-rotate images every 6s with smooth transitions
  useEffect(() => {
    setIsVisible(true)
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [images.length])

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    let animationFrameId
    const particles = []
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2.5 + 0.5
        this.speedX = Math.random() * 1.2 - 0.6
        this.speedY = Math.random() * 1.2 - 0.6
        this.color = `rgba(66, 126, 23, ${Math.random() * 0.5 + 0.2})`
        this.alpha = Math.random() * 0.5 + 0.3
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }
      
      draw() {
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    
    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle())
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(66, 126, 23, ${0.2 * (1 - distance/120)})`
            ctx.lineWidth = 0.7
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  // Scroll to Teams section
  const scrollToTeams = () => {
    const teamsSection = document.getElementById("teams")
    if (teamsSection) teamsSection.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Enhanced Background slideshow with Ken Burns effect */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, i) => (
          <div 
            key={i}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
              i === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <div className={`absolute inset-0 w-full h-full bg-cover bg-center transform ${
              i === currentImage ? "animate-kenburns" : ""
            }`} 
                 style={{ backgroundImage: `url(${img})` }} />
          </div>
        ))}
        {/* Enhanced overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-radial-gradient"></div>
      </div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 opacity-70" />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
      </div>

      {/* Content */}
      <div className={`container mx-auto px-6 relative z-20 text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Logo + Name with enhanced animations */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative mb-8">
            <div className="absolute inset-0 -inset-4 bg-[#427E17] rounded-full filter blur-xl opacity-30 animate-pulse-slow"></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jsk%20logo-nayy96unV7v3ZNkMVIGaOUTwefUg71.png"
              alt="JSK Esports Logo"
              className="relative w-40 h-40 object-contain drop-shadow-2xl z-20 animate-float"
            />
            {/* Animated rings */}
            <div className="absolute inset-0 -inset-6 border-2 border-[#427E17] rounded-full opacity-30 animate-ping-slow z-10"></div>
            <div className="absolute inset-0 -inset-10 border border-[#427E17] rounded-full opacity-20 animate-ping-slower z-10"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl animate-text-glow">
            JSK ESPORTS
          </h1>
          
          <div className="w-64 h-1.5 mt-6 bg-gradient-to-r from-transparent via-[#427E17] to-transparent animate-expand"></div>
          
          <h2 className="mt-8 text-xl md:text-2xl font-medium text-gray-200 uppercase tracking-widest animate-slide-in-bottom">
            KAIROUAN • TUNISIA
          </h2>
        </div>

        {/* Tagline */}
        <p className="mt-8 max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed animate-fade-in-delayed">
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-6 md:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-4xl mx-auto animate-fade-in-up-delayed">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="relative group bg-black/40 backdrop-blur-md rounded-xl p-4 md:p-6 border border-[#427E17]/30 hover:border-[#427E17]/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#427E17]/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#427E17]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card content */}
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold text-[#427E17] mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-2xl mt-3 opacity-80">
                </div>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 group-hover:animate-shine"></div>
              </div>
            </div>
          ))}
        </div>

     

       
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.15) translate(20px, -15px);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes text-glow {
          0% {
            text-shadow: 0 0 10px rgba(66, 126, 23, 0.7),
                         0 0 20px rgba(66, 126, 23, 0.5),
                         0 0 30px rgba(66, 126, 23, 0.3);
          }
          100% {
            text-shadow: 0 0 20px rgba(66, 126, 23, 0.9),
                         0 0 40px rgba(66, 126, 23, 0.7),
                         0 0 60px rgba(66, 126, 23, 0.5),
                         0 0 80px rgba(66, 126, 23, 0.3);
          }
        }
        
        @keyframes expand {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }
        
        @keyframes slide-in-bottom {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          75%, 100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        
        @keyframes ping-slower {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          75%, 100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-20px) translateX(-50%);
          }
          60% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
        
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }
        
        .animate-kenburns {
          animation: kenburns 8s ease-in-out infinite alternate;
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite alternate;
        }
        
        .animate-expand {
          animation: expand 2s ease-out forwards;
        }
        
        .animate-slide-in-bottom {
          animation: slide-in-bottom 1.2s ease-out forwards;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 1.8s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .animate-fade-in-up-delayed {
          animation: fade-in-up 1.5s ease-out forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }
        
        .animate-scroll {
          animation: scroll 2s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.8) 80%);
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(66, 126, 23, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(66, 126, 23, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  )
}