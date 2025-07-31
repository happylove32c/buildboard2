// components/Navbar.tsx

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    // { href: "/dashboard", label: "Dashboard" },
    { href: "/projects", label: "Projects" },
    { href: "/new", label: "New Idea" },
  ]

  return (
    <nav className="w-full border-b bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold text-black">
          Buildboard
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-black transition-colors",
                pathname === link.href ? "text-black" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}

          <Button variant="outline" size="sm">
            Log In
          </Button>
        </div>
      </div>
    </nav>
  )
}
