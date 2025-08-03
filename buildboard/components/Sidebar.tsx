// components/Sidebar.tsx
"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface SidebarProps {
  onClose: () => void
}

export default function Sidebar({ onClose }: SidebarProps) {
  const projects = [
    { id: "1", title: "AI Summary Generator" },
    { id: "2", title: "Todo Automation Bot" },
  ]

  const queries = [
    "How to break down an MVP?",
    "Generate technical roadmap",
    "Refactor code for AI",
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg flex flex-col"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="text-lg font-semibold">Buildboard</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="p-4 space-y-6 flex-1 overflow-y-auto">
          <div>
            <h2 className="text-sm font-semibold text-gray-500 mb-2">Projects</h2>
            <ul className="space-y-1">
              {projects.map((project) => (
                <li key={project.id}>
                  <Link
                    href={`/projects/${project.id}`}
                    className="block text-base text-gray-800 hover:text-black"
                    onClick={onClose}
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-500 mb-2">Your Prompts</h2>
            <ul className="space-y-1">
              {queries.map((query, i) => (
                <li key={i}>
                  <Link
                    href={`/queries/${i}`}
                    className="block text-base text-gray-800 hover:text-black"
                    onClick={onClose}
                  >
                    {query}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.aside>
    </>
  )
}
