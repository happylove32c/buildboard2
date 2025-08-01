"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Folder, MessageSquare } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

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
    <motion.aside
      animate={{ width: collapsed ? 64 : 256 }}
      className="h-screen border-r bg-white overflow-hidden flex flex-col transition-all ease-in-out"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.span
              key="title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-lg font-semibold whitespace-nowrap"
            >
              Buildboard
            </motion.span>
          )}
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      <div className="p-4 space-y-6 flex-1">
        {/* Projects Section */}
        <div>
          {!collapsed && (
            <h2 className="text-lg font-semibold text-gray-500 mb-2">
              Projects
            </h2>
          )}
          <ul className="space-y-1">
            {projects.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/projects/${project.id}`}
                  className="flex items-center text-lg text-gray-800 hover:text-black transition-colors"
                >
                  <Folder size={20} />
                  {!collapsed && (
                    <span className="ml-2 truncate">{project.title}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Prompts Section */}
        <div>
          {!collapsed && (
            <h2 className="text-lg font-semibold text-gray-500 mb-2">
              Your Prompts
            </h2>
          )}
          <ul className="space-y-1">
            {queries.map((query, i) => (
              <li key={i}>
                <Link
                  href={`/queries/${i}`}
                  className="flex items-center text-lg text-gray-800 hover:text-black transition-colors"
                >
                  <MessageSquare size={20} />
                  {!collapsed && (
                    <span className="ml-2 truncate">{query}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.aside>
  )
}
