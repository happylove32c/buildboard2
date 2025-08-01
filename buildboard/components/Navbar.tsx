import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import AuthButton from "@/components/AuthButton"
import { Home, FolderKanban, PlusSquare } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4 mr-1" /> },
    { href: "/projects", label: "Projects", icon: <FolderKanban className="w-4 h-4 mr-1" /> },
    { href: "/new", label: "New Idea", icon: <PlusSquare className="w-4 h-4 mr-1" /> },
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
                "text-sm font-medium flex items-center gap-1 hover:text-black transition-colors",
                pathname === link.href ? "text-black" : "text-muted-foreground"
              )}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}

          <AuthButton />
        </div>
      </div>
    </nav>
  )
}
