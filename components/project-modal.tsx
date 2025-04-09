"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { getTechColor } from "@/utils/tech-colors"

interface ProjectDetails {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  techStack: string[]
  github: string | null
  liveDemo?: string | null
}

interface ProjectModalProps {
  project: ProjectDetails
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-slate-800 border-gray-700">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-48 sm:h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <DialogHeader className="p-6 pb-2">
                <DialogTitle className="text-2xl font-bold text-indigo-400">{project.title}</DialogTitle>
                <DialogDescription className="text-gray-300 mt-2">{project.description}</DialogDescription>
              </DialogHeader>

              <div className="p-6 pt-2 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-indigo-400 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => {
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
                  </div>
                </div>

                <p className="text-gray-300">{project.fullDescription}</p>

                <div className="flex justify-end gap-3 pt-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github!, "_blank")}
                      className="text-gray-300 border-gray-600 hover:bg-gray-700"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.liveDemo!, "_blank")}
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  )
}
