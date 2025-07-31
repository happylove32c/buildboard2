"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function FloatingActionButton({ href = "/new" }: { href?: string }) {
  return (
    <Link href={href}>
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 p-0 text-white bg-black hover:bg-gray-800"
        size="icon"
      >
        <Plus className="w-6 h-6" />
      </Button>
    </Link>
  )
}
