"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin } from "lucide-react"

// Create a component for each experience card with its own viewport detection
const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  const cardRef = useRef(null)
  const isCardInView = useInView(cardRef, { once: true, amount: 0.3 })

  // Determine animation direction based on index
  const fromLeft = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        x: fromLeft ? -100 : 100,
        y: 20,
        scale: 0.9,
      }}
      animate={
        isCardInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 70,
        damping: 12,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.2 },
      }}
      className="mb-8"
    >
      <Card className="border border-gray-700 bg-slate-800 shadow-md transition-all duration-300">
        <CardHeader className="pb-2 bg-gradient-to-r from-slate-800 to-indigo-900/50">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <CardTitle className="text-xl text-indigo-400">{experience.title}</CardTitle>
            <Badge
              variant="outline"
              className="bg-indigo-900/30 text-indigo-300 border-indigo-700 self-start md:self-center"
            >
              {experience.duration}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Building className="h-4 w-4 text-indigo-400" />
              <span>{experience.company}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-indigo-400" />
              <span>{experience.location}</span>
            </div>
          </div>

          {experience.project && <div className="text-sm font-medium text-gray-300">Project: {experience.project}</div>}

          <div className="space-y-2">
            <h4 className="font-semibold text-indigo-400 mb-2">Key Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {experience.responsibilities.map((resp: string, idx: number) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const experiences = [
    {
      id: 1,
      title: "Senior Systems Engineer",
      company: "Infosys Limited",
      project: "iBridge HRMS",
      duration: "2.8 years",
      location: "India",
      responsibilities: [
        "Developed an Employee Resource Management System using Java Spring Framework, Hibernate, and MySQL streamlining employee management and optimizing resource allocation",
        "Implemented Redis caching to improve system scalability for 100,000+ users, enhancing response time by 40% and reducing database load by 30%",
        "Enforced role-based access control with Spring Security, enhancing data security and access control",
        "Accelerated issue resolution time by 30% through effective teamwork, communication, and problem-solving skills",
      ],
    },
    {
      id: 2,
      title: "Systems Engineer",
      company: "Infosys Limited",
      project: "MNCR Prospective Conversion, Client: LexisNexis",
      duration: "2.3 years",
      location: "India",
      responsibilities: [
        "Automated conversion of unstructured legal documents into MNCR XML format using Informatica DT/DX, decreasing manual effort by 50%, and received client appreciation for enhancing operational efficiency",
        "Managed the specialized content type module, conducted analysis and resolution of production issues",
      ],
    },
    {
      id: 3,
      title: "Lead Teaching Assistant",
      company: "Northeastern University",
      project: "",
      duration: "Sep 2024 - Present",
      location: "Boston, MA",
      responsibilities: [
        "Assisted students in ADTs, data structures and web technologies (Express, React, MongoDB, REST APIs)",
        "Addressed student queries, designed course materials, and collaborated on assignments and exams",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-900">
      <div ref={sectionRef} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Work Experience</h2>
          <p className="text-lg text-gray-300">
            My professional journey and the valuable experience I&apos;ve gained along the way.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
