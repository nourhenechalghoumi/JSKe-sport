"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const newsItems = [
  {
    id: 1,
    title: "EFOOTBALL Arab Championship Qualifiers",
    excerpt:
      "Our champions are ready for the National Qualifiers on Aug 9. Winners will represent Tunisia in Jordan 🇯🇴 from Sep 24-27. Players: Haroun Meftah, Fadi Mrabet, Borhane Kharat, Abderrahmane Habli, Farouk Khammar.",
    image: "/News/arab efootball.jpg",
    link: "https://www.facebook.com/JSKesports/posts/1360326845512379",
    size: "large",
  },
  {
    id: 2,
    title: "Official JSK JSK Coming Soon",
    excerpt:
      "New esports season, new official JSK! Stay tuned for release details. Kit designs for football, basketball, handball sections also coming soon.",
    image: "/News/jskpull.jpg",
    link: "https://www.facebook.com/photo?fbid=1324593762419021&set=pcb.1324594812418916",
    size: "medium",
  },
  
]

export function NewsSection() {
  return (
    <section id="news" className="relative py-24 bg-black overflow-hidden">
      {/* Animated Neon Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-green-500/10 blur-3xl animate-pulse rounded-full" />
        <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-green-400/10 blur-3xl animate-pulse rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase tracking-wide">
            <span className="text-green-500">JSK</span> News
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg md:text-xl">
            Stay updated with our latest victories, updates, and official announcements.
          </p>
        </motion.div>

        {/* Responsive Spotlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative group overflow-hidden rounded-3xl shadow-lg shadow-green-800/20 hover:shadow-green-500/50 transition-all duration-500
                ${item.size === "large" ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              {/* Image */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 tracking-wide group-hover:text-green-400 transition-colors"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-300 mb-4 leading-relaxed line-clamp-4"
                >
                  {item.excerpt}
                </motion.p>

                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    x: 5,
                    textShadow: "0 0 15px rgba(34,197,94,0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-green-400 font-bold uppercase tracking-wider"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
