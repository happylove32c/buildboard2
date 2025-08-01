// components/AuthModal.tsx
"use client"

import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuthToggle } from "@/context/AuthToggleContext"
import { createClient } from "@supabase/supabase-js"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const supabaseUrl = "https://nwdkutfmmxdgzlplzeafx.supabase.co"
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53ZGt1Zm1teGRnemxscHplYWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNDYxNDcsImV4cCI6MjA2OTYyMjE0N30.aYsAVsLVpfnPFcWYqMHm01WLXiQYkmPd2p2FCvdXY20"
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  const router = useRouter()

  const handleOAuthLogin = async (provider: "google" | "github") => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback` // Add this route in your Next.js middleware if needed
      }
    })
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-4 py-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title className="text-xl font-semibold">
                    Continue With
                  </Dialog.Title>
                  <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 py-2"
                    onClick={() => handleOAuthLogin("google")}
                  >
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    Continue with Google
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 py-2"
                    onClick={() => handleOAuthLogin("github")}
                  >
                    <img src="https://www.svgrepo.com/show/503359/github.svg" alt="GitHub" className="w-5 h-5" />
                    Continue with GitHub
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
