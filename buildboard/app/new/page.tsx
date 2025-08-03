"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"

export default function NewIdea() {
  const [idea, setIdea] = useState("")
  const [tag, setTag] = useState("")
  const [showSidebar, setShowSidebar] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleSelect = (value: string) => {
    setTag(value === tag ? "" : value)
  }

  const handleSubmit = () => {
    const finalTag = tag || "Miscellaneous"
    console.log("Submitted Idea:", { idea, tag: finalTag })
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
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      <Navbar />

      {/* Open Sidebar Button (Floating or Navbar) */}
      <div className="absolute top-4 left-4 z-30">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowSidebar(true)}
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </Button>
      </div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {showSidebar && (
          <Sidebar onClose={() => setShowSidebar(false)} />
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 sm:py-10">
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          What are we doing today?
        </motion.h1>

        {/* Input */}
        <motion.div
          className="relative w-full max-w-2xl mb-4 sm:mb-6"
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
              className="w-full resize-none overflow-hidden text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary px-4 py-3 pr-20 sm:pr-24 min-h-[3rem] max-h-40"
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
                    className="px-3 sm:px-4 py-2 text-sm shadow-sm"
                  >
                    Send
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-4 sm:mb-6 px-2">
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
                className="text-xs sm:text-sm px-3 py-1.5"
              >
                {label}
              </Button>
            </motion.div>
          ))}
        </div>

        {idea && (
          <motion.p
            className="text-center text-sm text-muted-foreground px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            You’re saving this idea as{" "}
            <strong>{tag || "Miscellaneous"}</strong>.
          </motion.p>
        )}
      </main>
    </div>
  )
}
