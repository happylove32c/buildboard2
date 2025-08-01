"use client"

import { useAuthToggle } from "@/context/AuthToggleContext"
import AuthModal from "@/components/AuthModal"

export default function AuthModalWrapper() {
  const { isModalOpen, closeModal } = useAuthToggle()

  return <AuthModal isOpen={isModalOpen} onClose={closeModal} />
}
// This component is used to wrap the AuthModal and provide it with the necessary props
// It can be placed in the layout or any other component where you want to use the Auth