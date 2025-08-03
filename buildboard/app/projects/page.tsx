"use client"

import Navbar from "@/components/Navbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import ProjectModal from "@/components/ProjectModal"

const projects = [
  {
    id: 1,
    title: "Buildboard MVP",
    description: "An AI-based documentation app to organize ideas, summarize MVPs, and track progress.",
    tags: ["AI", "Documentation", "MVP"],
    createdAt: "2025-07-27",
    updatedAt: "2025-07-31",
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
    lastUpdated: true,
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  const lastUpdated = projects.find((p) => p.lastUpdated)
  const others = projects.filter((p) => !p.lastUpdated)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        {lastUpdated && (
          <motion.div
            onClick={() => setSelectedProject(lastUpdated)}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
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

        <div className="grid gap-6 md:grid-cols-2">
          {others.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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

        <div className="flex justify-center pt-4">
          <Link href="/new">
            <Button variant="default" className="flex items-center gap-2">
              <span>Create New Project</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal component */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
}
