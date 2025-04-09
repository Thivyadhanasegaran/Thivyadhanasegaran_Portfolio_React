"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left side - Profile image */}
          <motion.div
            className="flex-shrink-0 order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          >
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ThivyaDhanasegaran_profile_photo-BZtIOliQobqVhfYOHpVGUz1XyGHsmX.jpeg"
                alt="Thivya Dhanasegaran"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className="flex-1 space-y-5 text-center md:text-left order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif whitespace-nowrap">
              Thivya Dhanasegaran
            </h1>
            <h2 className="text-xl md:text-2xl text-indigo-600 font-medium">
              Aspiring Software Developer | MS in Information Systems
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed">
              Seeking full-time software development roles starting May 2025
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                onClick={scrollToProjects}
                className="text-lg px-6 py-4 h-auto bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
