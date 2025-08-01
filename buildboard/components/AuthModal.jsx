"use client"

import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuthModal({ isOpen, onClose }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Backdrop */}
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

        {/* Modal */}
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
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title className="text-xl font-semibold">
                    Continue With
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Auth Options */}
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 py-2"
                    onClick={() => {
                      // handleGoogleLogin()
                    }}
                  >
                    {/* 👇 Replace with your custom Google icon */}
                    <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
                    Continue with Google
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 py-2"
                    onClick={() => {
                      // handleGitHubLogin()
                    }}
                  >
                    {/* 👇 Replace with your custom GitHub icon */}
                    <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
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
