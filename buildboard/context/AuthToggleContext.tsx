// context/AuthToggleContext.tsx
"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type AuthToggleContextType = {
  isLogin: boolean
  toggleAuth: () => void
}

const AuthToggleContext = createContext<AuthToggleContextType | undefined>(undefined)

export const AuthToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(true)

  const toggleAuth = () => setIsLogin(prev => !prev)

  return (
    <AuthToggleContext.Provider value={{ isLogin, toggleAuth }}>
      {children}
    </AuthToggleContext.Provider>
  )
}

export const useAuthToggle = () => {
  const context = useContext(AuthToggleContext)
  if (!context) throw new Error("useAuthToggle must be used within AuthToggleProvider")
  return context
}
