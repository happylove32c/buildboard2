"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/Navbar"

export default function NewIdea() {
  const [idea, setIdea] = useState("")
  const [tag, setTag] = useState("")

  const handleSelect = (value: string) => {
    setTag(value)
  }

  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          What are we doing today?
        </h1>

        <Textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Drop your thoughts, brainstorms, or ideas here..."
          className="w-full max-w-2xl h-40 mb-6 text-base"
        />

        <div className="flex flex-wrap gap-3 justify-center mb-8">
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

        {idea && tag && (
          <p className="text-center text-sm text-muted-foreground">
            You’re saving this idea as <strong>{tag}</strong>.
          </p>
        )}
      </div>
    </>
  )
}
