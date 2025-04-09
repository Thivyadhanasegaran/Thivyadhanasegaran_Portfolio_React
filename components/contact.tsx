"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Phone } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: "0px 0px -100px 0px" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    const formData = new URLSearchParams()
    formData.append("name", form.name.value)
    formData.append("email", form.email.value)
    formData.append("message", form.message.value)

    fetch("https://formsubmit.co/ajax/24e630be2388eb0968fe89716a473891", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: formData.toString(),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true)
        } else {
          console.error("Form submission failed", response)
        }
      })
      .catch((err) => console.error("Form submission error:", err))
  }

  // Function to handle resume view
  const handleViewResume = () => {
    window.open(
      "https://docs.google.com/document/d/1iyXg3nokFiPmAOuwYL_Lis1ZIRx2wzgIDkROOZ1XOP8/preview",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Let&apos;s Connect</h2>
          <p className="text-lg text-gray-300">
            Let&apos;s connect and build something amazing! I&apos;m currently looking for new opportunities.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="flex items-center gap-3 text-gray-300 mb-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <a
                  href="mailto:dhanasegaran.t@northeastern.edu"
                  className="hover:text-indigo-300 transition-colors hover:underline"
                >
                  dhanasegaran.t@northeastern.edu
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-indigo-400" />
                <a href="tel:9783498421" className="hover:text-indigo-300 transition-colors hover:underline">
                  (978) 349-8421
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Social Profiles</h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open("https://github.com/Thivyadhanasegaran", "_blank")}
                  className="rounded-full h-12 w-12 border-gray-600 hover:border-indigo-400 hover:bg-indigo-900/30 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <Github className="h-5 w-5 text-gray-300" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open("https://www.linkedin.com/in/thivyadhanasegaran/", "_blank")}
                  className="rounded-full h-12 w-12 border-gray-600 hover:border-indigo-400 hover:bg-indigo-900/30 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-gray-300" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Resume</h3>
              <Button
                variant="outline"
                onClick={handleViewResume}
                className="flex items-center gap-2 border-indigo-800 text-gray-300 hover:border-indigo-400 hover:bg-indigo-900/30 hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <ExternalLink className="h-5 w-5 text-indigo-400" />
                <span>View Resume</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div variants={itemVariants}>
              <Card className="border-gray-700 bg-slate-800/50 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  {isSubmitted ? (
                    <motion.p
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-green-400 text-lg font-semibold text-center py-8"
                    >
                      ✅ Thank you! Your message has been sent.
                    </motion.p>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          className="border-gray-700 bg-slate-700/50 text-white focus:border-indigo-500 focus:ring-indigo-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          className="border-gray-700 bg-slate-700/50 text-white focus:border-indigo-500 focus:ring-indigo-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          className="min-h-[120px] border-gray-700 bg-slate-700/50 text-white focus:border-indigo-500 focus:ring-indigo-500"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
