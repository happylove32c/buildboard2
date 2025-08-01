// components/AuthButton.tsx
"use client"

import { useAuthToggle } from "@/context/AuthToggleContext"
import { Button } from "@/components/ui/button"

export default function AuthButton() {
  const { isLogin, toggleAuth } = useAuthToggle()

  return (
    <Button variant="outline" className="border border-black" size="lg" onClick={toggleAuth}>
      {isLogin ? "Log In" : "Profile"}
    </Button>
  )
}
