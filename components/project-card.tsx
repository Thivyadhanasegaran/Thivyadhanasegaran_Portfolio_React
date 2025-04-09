"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { getTechColor } from "@/utils/tech-colors"

interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  github: string | null
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden border border-gray-700 bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden group">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-indigo-400">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.techStack.slice(0, 3).map((tech) => {
              const { bg, text, border } = getTechColor(tech)
              return (
                <Badge
                  key={tech}
                  variant="outline"
                  className={`${bg} ${text} ${border} text-xs rounded-full px-2.5 py-0.5 font-medium transition-all duration-300 hover:scale-105`}
                >
                  {tech}
                </Badge>
              )
            })}
            {project.techStack.length > 3 && (
              <Badge
                variant="outline"
                className="bg-gray-800 text-gray-300 border-gray-600 text-xs rounded-full px-2.5 py-0.5 hover:bg-gray-700"
              >
                +{project.techStack.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-2 pt-0">
          <Button
            variant="outline"
            size="sm"
            onClick={onClick}
            className="text-indigo-400 border-indigo-800 hover:bg-indigo-900/30 hover:scale-105 hover:shadow-md transition-all duration-300"
          >
            Learn More
          </Button>

          {project.github ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.github, "_blank")
              }}
              className="text-gray-300 hover:text-indigo-400 hover:scale-105 transition-all duration-300"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          ) : (
            <Button variant="ghost" size="sm" disabled className="text-slate-400">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Private Project</span>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
