"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Folder, MessageSquare } from "lucide-react"
import Link from "next/link"

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
    <aside
      className={`h-screen border-r bg-white transition-all duration-300 ease-in-out overflow-hidden ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <span
          className={`text-lg font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ${
            collapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100 w-full"
          }`}
        >
          Buildboard
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Projects Section */}
        <div>
          <h2
            className={`text-sm font-semibold text-gray-500 mb-2 transition-all duration-300 ${
              collapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"
            }`}
          >
            Projects
          </h2>
          <ul className="space-y-1">
            {projects.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/projects/${project.id}`}
                  className="flex items-center text-sm text-gray-800 hover:text-black"
                >
                  <Folder size={16} />
                  <span
                    className={`ml-2 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                      collapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"
                    }`}
                  >
                    {project.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Queries Section */}
        <div>
          <h2
            className={`text-sm font-semibold text-gray-500 mb-2 transition-all duration-300 ${
              collapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"
            }`}
          >
            Your Prompts
          </h2>
          <ul className="space-y-1">
            {queries.map((query, i) => (
              <li key={i}>
                <Link
                  href={`/queries/${i}`}
                  className="flex items-center text-sm text-gray-800 hover:text-black"
                >
                  <MessageSquare size={16} />
                  <span
                    className={`ml-2 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                      collapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"
                    }`}
                  >
                    {query}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
