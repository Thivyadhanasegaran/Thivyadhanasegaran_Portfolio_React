"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import ProjectCard from "./project-card"
import ProjectModal from "./project-modal"

// Extended project type with full description and tech stack
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

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: "0px 0px -100px 0px" })
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null)

  const projects: ProjectDetails[] = [
    {
      id: 1,
      title: "CloudOps",
      description: "Cloud-native infrastructure on GCP with CI/CD, Terraform & real-time automation",
      fullDescription:
        "Developed and deployed cloud-native backend applications on GCP using Node.js, Express, and MySQL. Provisioned VPCs, Cloud SQL, VMs with Terraform as IaC and automated machine image creation with Packer. Optimized reliability with load balancers, autoscaling, Cloud Functions and real-time Pub/Sub email notifications.Streamlined deployments with CI/CD pipelines using GitHub Actions",
      image: "/images/cloudops.jpeg",
      techStack: [
        "GCP",
        "Terraform",
        "GitHub Actions",
        "Packer",
        "Express",
        "MySQL",
      ],
      github: "https://github.com/Thivyadhanasegaran/CloudOps",
      liveDemo: null,
    },
    {
      id: 2,
      title: "MediLink",
      description: "Enterprise-grade healthcare platform with secure access, Redis caching & Docker deployment",
      fullDescription:
        "Built a full-stack healthcare management system using Spring Boot, Hibernate, MySQL, and REST APIs. Streamlined healthcare operations by integrating records, appointment scheduling, and prescription handling. Maximized database performance by 40% with Redis caching, and automated email notifications.",
      image: "/images/medilink.jpeg",
      techStack: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "MySQL",
        "Redis",
        "JUnit",
        "Mockito",
        "Spring Security",
        "SLF4J",
        "OAuth",
        "AJAX",
      ],
      github: "https://github.com/Thivyadhanasegaran/MediLink",
      liveDemo: null,
    },
    {
      id: 3,
      title: "GoCamp",
      description: "MERN-based booking system with multilingual support, user reviews & responsive design",
      fullDescription:
        "Designed a responsive campsite booking web application using the MERN stack and REST APIs. Enabled users to search, book campsites, manage their own campsites, and add reviews. Used Node.js/Express.js for backend services, MongoDB for data storage, and i18n for multi-language support.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canvas-tent-forest-simple-shelter-adventurers.jpg-Zh5rO94lvnEsXqU6WCFfkOqil7acWh.jpeg",
      techStack: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Rest API", "Swagger", "i18n"],
      github: "https://github.com/Thivyadhanasegaran/GoCamp",
      liveDemo: null,
    },
    {
      id: 4,
      title: "LingoPlatform",
      description: "Secure language learning DB with AES-256 encryption and Power BI reporting",
      fullDescription:
        "Created Language Learning System database by designing ER diagrams and applying normalization principles. Improved database performance using stored procedures, triggers, views, and indexes. Secured sensitive user data with AES-256 encryption and generated insightful reports using Power BI.",
      image: "/images/lingoplatform.jpeg",
      techStack: [
        "SQL",
        "Data Modeling",
        "Normalization",
        "Triggers",
        "SQL Server 2022",
        "Power BI",
        "Azure Data Studio",
        "Stored Procedures",
        "Data Security",
      ],
      github: "https://github.com/Thivyadhanasegaran/LingoPlatform",
      liveDemo: null,
    },
    {
      id: 5,
      title: "PromptX",
      description: "Optimized AI prompt generation using LLM fine-tuning & Hugging Face",
      fullDescription:
        "Optimized prompts to enhance AI model performance in content generation and decision-making tasks. Fine-tuned LLMs using reinforcement learning, improving model adaptability and response accuracy.",
      image: "/images/promptx.webp",
      techStack: ["Prompt Engineering", "GPT models", "Hugging Face Transformers", "LLMs Fine-Tuning", "LangChain"],
      github: "https://github.com/Thivyadhanasegaran/Prompt-Engineering-AI",
      liveDemo: null,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-800">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">My Projects</h2>
          <p className="text-lg text-gray-300">
            Here are some of the projects I&apos;ve worked on. Each demonstrates different skills and technologies in my
            development toolkit.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
