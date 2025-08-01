// components/AuthButton.tsx
"use client"

import { useAuthToggle } from "@/context/AuthToggleContext"
import { Button } from "@/components/ui/button"

export default function AuthButton() {
  const { isLogin, toggleAuth } = useAuthToggle()

  return (
    <Button variant="outline" size="sm" onClick={toggleAuth}>
      {isLogin ? "Log In" : "Sign Up"}
    </Button>
  )
}
