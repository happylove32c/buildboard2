"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Buildboard MVP",
    description: "An AI-based documentation app to organize ideas, summarize MVPs, and track progress.",
    tags: ["AI", "Documentation", "MVP"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-31",
    lastUpdated: true,
  },
  {
    id: 2,
    title: "Devroad",
    description: "A learning roadmap app for developers with milestones and curated resources.",
    tags: ["Education", "Frontend", "Tracking"],
    createdAt: "2025-07-20",
    updatedAt: "2025-07-30",
  },
  {
    id: 3,
    title: "Cardelio",
    description: "A digital birthday and gift card platform with animations and PDF delivery.",
    tags: ["Ecommerce", "PDF", "Birthday"],
    createdAt: "2025-07-15",
    updatedAt: "2025-07-29",
  },
]

export default function ProjectsPage() {
  const [openProject, setOpenProject] = useState(null)

  const lastUpdated = projects.find((p) => p.lastUpdated)
  const others = projects.filter((p) => !p.lastUpdated)

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        {/* Last Updated Project */}
        {lastUpdated && (
          <motion.div
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setOpenProject(lastUpdated)}
          >
            <h2 className="text-xl font-semibold text-primary mb-1">
              Last Updated: {lastUpdated.updatedAt}
            </h2>
            <h3 className="text-2xl font-bold mb-2">{lastUpdated.title}</h3>
            <p className="text-gray-700 mb-4">{lastUpdated.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {lastUpdated.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              Created: {lastUpdated.createdAt} | Updated: {lastUpdated.updatedAt}
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {others.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setOpenProject(project)}
            >
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Created: {project.createdAt} | Updated: {project.updatedAt}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-4">
          <Link href="/new">
            <Button variant="default" className="flex items-center gap-2">
              <span>Create New Project</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {openProject && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="max-w-3xl mx-auto px-6 py-10 space-y-6 relative">
            <button
              onClick={() => setOpenProject(null)}
              className="absolute top-5 right-6 text-gray-500 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-bold">{openProject.title}</h2>
            <p className="text-gray-700">{openProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {openProject.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Created: {openProject.createdAt} | Updated: {openProject.updatedAt}
            </p>
            {/* Example long content */}
            <div className="mt-6 space-y-4 text-gray-600">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ipsum...</p>
              <p>More project details could go here. Documentation, screenshots, updates, etc.</p>
              <p>End of content.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
