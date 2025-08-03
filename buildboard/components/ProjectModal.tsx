"use client"

import { Dialog, DialogContent, DialogOverlay, DialogTitle, } from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function ProjectModal({ project, onClose }: { project: any; onClose: () => void }) {
  if (!project) return null

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/50 z-40" />
      <DialogContent className="fixed inset-0 z-50 flex flex-col overflow-auto bg-white p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <DialogTitle asChild>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            </DialogTitle>
            <p className="text-sm text-muted-foreground mb-2">
              Created: {project.createdAt} | Updated: {project.updatedAt}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            <X className="w-6 h-6" />
          </button>
        </div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-gray-700">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
