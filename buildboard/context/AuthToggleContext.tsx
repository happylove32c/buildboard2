// context/AuthToggleContext.tsx
"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type AuthToggleContextType = {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const AuthToggleContext = createContext<AuthToggleContextType | undefined>(undefined)

export const AuthToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <AuthToggleContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </AuthToggleContext.Provider>
  )
}

export const useAuthToggle = () => {
  const context = useContext(AuthToggleContext)
  if (!context) throw new Error("useAuthToggle must be used within AuthToggleProvider")
  return context
}
