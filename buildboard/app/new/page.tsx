"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { motion, AnimatePresence } from "framer-motion"

export default function NewIdea() {
  const [idea, setIdea] = useState("")
  const [tag, setTag] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleSelect = (value: string) => {
    setTag(value === tag ? "" : value)
  }

  const handleSubmit = () => {
    const finalTag = tag || "Miscellaneous"

    console.log("Submitted Idea:", {
      idea,
      tag: finalTag,
    })

    setIdea("")
    setTag("")
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [idea])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
          <motion.h1
            className="text-2xl md:text-3xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What are we doing today?
          </motion.h1>

          {/* Input Area */}
          <motion.div
            className="relative w-full max-w-2xl mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    if (idea.trim()) handleSubmit()
                }
                }}
                placeholder="Drop your thoughts, brainstorms, or ideas here..."
                rows={1}
                className="w-full resize-none overflow-hidden text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary px-4 py-3 pr-24 flex items-center justify-center transition min-h-[3rem] max-h-40"
              />
              <AnimatePresence>
                {idea && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-2 right-2"
                  >
                    <Button
                      onClick={handleSubmit}
                      className="px-4 py-2 text-sm shadow-sm"
                    >
                      Send
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {["Important Project", "Save for Later", "Act Quickly", "Idea Push"].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Button
                  variant={tag === label ? "default" : "outline"}
                  onClick={() => handleSelect(label)}
                >
                  {label}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Tag preview */}
          {idea && (
            <motion.p
              className="text-center text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              You’re saving this idea as{" "}
              <strong>{tag || "Miscellaneous"}</strong>.
            </motion.p>
          )}
        </main>
      </div>
    </div>
  )
}
