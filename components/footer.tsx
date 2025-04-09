"use client"

import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-950 to-indigo-950 text-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link
                href="https://github.com/Thivyadhanasegaran"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link
                href="https://www.linkedin.com/in/thivyadhanasegaran/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Thivya Dhanasegaran. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
