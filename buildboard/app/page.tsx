// app/page.tsx (or Home.tsx depending on structure)

"use client"

import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FloatingActionButton from "@/components/FloatingActionButton"

const ideas = [
  {
    id: 1,
    title: "Build AI Chat Interface",
    createdAt: "2025-07-30",
    totalSteps: 5,
    completedSteps: 3,
    nextStep: "Connect OpenAI API",
    currentTask: "Style the chat window",
  },
  {
    id: 2,
    title: "Refactor Dashboard UX",
    createdAt: "2025-07-25",
    totalSteps: 4,
    completedSteps: 1,
    nextStep: "Add user analytics",
    currentTask: "Design chart components",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Your Ideas Overview</h1>

        <div className="grid gap-4 md:grid-cols-2">
          {ideas.map((idea) => {
            const percent = (idea.completedSteps / idea.totalSteps) * 100
            return (
              <Card key={idea.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{idea.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Created on {idea.createdAt}
                  </p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    Completion Rate: {Math.round(percent)}%
                  </div>
                  <Progress value={percent} className="h-2" />
                  <div className="text-sm">
                    <strong>Step:</strong> {idea.completedSteps}/{idea.totalSteps}
                  </div>
                  <div className="text-sm">
                    <strong>Upcoming:</strong> {idea.nextStep}
                  </div>
                  <div className="text-sm">
                    <strong>Current Task:</strong> {idea.currentTask}
                  </div>
                  <Link href="/projects/1"> {/* Replace with dynamic project ID */}
                    <Button className="mt-2">Get back to project</Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
      <FloatingActionButton/>
    </div>
  )
}
