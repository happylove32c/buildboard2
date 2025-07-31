"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function NewIdea() {
  const [idea, setIdea] = useState("")
  const [tag, setTag] = useState("")

  const handleSelect = (value: string) => {
    setTag(value === tag ? "" : value) // toggle tag
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            What are we doing today?
          </h1>

          <div className="relative w-full max-w-2xl mb-6">
            <Textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Drop your thoughts, brainstorms, or ideas here..."
              className="w-full h-40 text-base pr-24" // give space for button
            />
            {idea && (
              <Button
                onClick={handleSubmit}
                className="absolute bottom-2 right-2 px-4 py-2 text-sm"
              >
                Send
              </Button>
            )}
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {["Important Project", "Save for Later", "Act Quickly", "Idea Push"].map((label) => (
              <Button
                key={label}
                variant={tag === label ? "default" : "outline"}
                onClick={() => handleSelect(label)}
              >
                {label}
              </Button>
            ))}
          </div>

          {idea && (
            <p className="text-center text-sm text-muted-foreground">
              You’re saving this idea as <strong>{tag || "Miscellaneous"}</strong>.
            </p>
          )}
        </main>
      </div>
    </div>
  )
}
