"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Server, Cloud, Terminal } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Function to get a color for a tech badge based on the technology name - same as in project-card.tsx
const getTechColor = (tech: string): { bg: string; text: string; border: string } => {
  const techColors: Record<string, { bg: string; text: string; border: string }> = {
    // Frontend
    React: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    "React.js": { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    TypeScript: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    Redux: { bg: "bg-purple-900/40", text: "text-purple-300", border: "border-purple-700" },

    // Backend
    Node: { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    "Node.js": { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    Express: { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    "Express.js": { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    Java: { bg: "bg-orange-900/40", text: "text-orange-300", border: "border-orange-700" },
    "Spring Boot": { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },

    // Database
    MongoDB: { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    MySQL: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    SQL: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    Redis: { bg: "bg-red-900/40", text: "text-red-300", border: "border-red-700" },

    // Cloud & DevOps
    GCP: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    Terraform: { bg: "bg-purple-900/40", text: "text-purple-300", border: "border-purple-700" },
    "GitHub Actions": { bg: "bg-gray-900/40", text: "text-gray-300", border: "border-gray-700" },
    Docker: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },

    // AI & ML
    "Prompt Engineering": { bg: "bg-purple-900/40", text: "text-purple-300", border: "border-purple-700" },
    "GPT models": { bg: "bg-purple-900/40", text: "text-purple-300", border: "border-purple-700" },
    "Hugging Face Transformers": { bg: "bg-yellow-900/40", text: "text-yellow-300", border: "border-yellow-700" },
    "LLMs Fine-Tuning": { bg: "bg-purple-900/40", text: "text-purple-300", border: "border-purple-700" },
    LangChain: { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },

    // Other
    i18n: { bg: "bg-teal-900/40", text: "text-teal-300", border: "border-teal-700" },
    "Rest API": { bg: "bg-indigo-900/40", text: "text-indigo-300", border: "border-indigo-700" },
    Swagger: { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    "Power BI": { bg: "bg-yellow-900/40", text: "text-yellow-300", border: "border-yellow-700" },
  }

  // Default color for technologies not in the list
  return techColors[tech] || { bg: "bg-indigo-900/40", text: "text-indigo-300", border: "border-indigo-700" }
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: "0px 0px -100px 0px" })

  const technologies = [
    { name: "Java", icon: <Terminal className="h-5 w-5" /> },
    { name: "React", icon: <Code className="h-5 w-5" /> },
    { name: "Spring Boot", icon: <Server className="h-5 w-5" /> },
    { name: "Node.js", icon: <Terminal className="h-5 w-5" /> },
    { name: "Express.js", icon: <Code className="h-5 w-5" /> },
    { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
    { name: "MySQL", icon: <Database className="h-5 w-5" /> },
    { name: "GCP", icon: <Cloud className="h-5 w-5" /> },
    { name: "Terraform", icon: <Server className="h-5 w-5" /> },
    { name: "Redis", icon: <Database className="h-5 w-5" /> },
    { name: "Docker", icon: <Server className="h-5 w-5" /> },
    { name: "GitHub Actions", icon: <Code className="h-5 w-5" /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">About Me</h2>
          <p className="text-lg text-gray-300">
            I'm a full-stack developer skilled in building secure, scalable applications using Spring Boot, Java, React, Express.js, MongoDB, SQL, and GCP. My work spans cloud-native systems with Terraform, healthcare platforms, MERN-based booking apps, database design, and custom GPT development including chatbot design, LLM fine-tuning, and advanced prompt engineering techniques. I’ve also implemented CI/CD pipelines, OAuth-secured APIs, and Redis/MySQL performance tuning. I enjoy solving complex problems and delivering clean, reliable solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-indigo-400 mb-6 text-center">Skills & Technologies</h3>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => {
              const { bg, text, border } = getTechColor(tech.name)
              return (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  className="flex items-center gap-2"
                >
                  <Badge
                    variant="outline"
                    className={`${bg} ${text} ${border} flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300`}
                  >
                    <span className={text}>{tech.icon}</span>
                    <span className="font-medium">{tech.name}</span>
                  </Badge>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
