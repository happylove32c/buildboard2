"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import AuthButton from "@/components/AuthButton"
import { Home, FolderKanban, PlusSquare, User } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderKanban },
    { href: "/new", label: "New", icon: PlusSquare },
  ]

  return (
    <>
      {/* Desktop Top Nav */}
      <nav className="hidden sm:flex w-full border-b bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
          <Link href="/" className="text-xl font-bold text-black">
            Buildboard
          </Link>

          <div className="flex items-center gap-6">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium flex items-center gap-1 hover:text-black transition-colors",
                  pathname === href ? "text-black" : "text-muted-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}

            <AuthButton />
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-6 shadow-inner z-50">
        <div className="flex justify-around py-2">
          {navLinks.map(({ href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center text-xs text-muted-foreground transition-colors",
                pathname === href ? "text-black" : "text-muted-foreground"
              )}
            >
              <Icon className="h-6" />
            </Link>
          ))}

            <button
              // onClick={openModal}
              className="flex flex-col items-center text-xs text-muted-foreground transition-colors"
            >
              <User className="h-6" />
            </button>
        </div>
      </nav>
    </>
  )
}
