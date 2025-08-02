"use client"

import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FloatingActionButton from "@/components/FloatingActionButton"
import { motion } from "framer-motion"

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
  {
    id: 3,
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
    <div className="min-h-screen p-4 bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h1 className="text-3xl font-bold">Your Ideas Overview</h1>
          <Link href="/new">
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea, i) => {
            const percent = (idea.completedSteps / idea.totalSteps) * 100
            return (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{idea.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Created on {idea.createdAt}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="text-muted-foreground">
                      Completion Rate: <span className="font-medium">{Math.round(percent)}%</span>
                    </div>
                    <Progress value={percent} className="h-2" />
                    <div>
                      <span className="font-medium">Step:</span> {idea.completedSteps}/{idea.totalSteps}
                    </div>
                    <div>
                      <span className="font-medium">Upcoming:</span> {idea.nextStep}
                    </div>
                    <div>
                      <span className="font-medium">Current Task:</span> {idea.currentTask}
                    </div>
                    <Link href={`/projects/${idea.id}`}>
                      <Button className="mt-3 w-full">Resume Project</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </main>
      <FloatingActionButton />
    </div>
  )
}
