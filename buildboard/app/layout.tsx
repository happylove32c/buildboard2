import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { AuthToggleProvider, useAuthToggle } from "@/context/AuthToggleContext"
import AuthModal from "@/components/AuthModal"
import "./globals.css"
import AuthModalWrapper from "@/components/AuthModalWrapper"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Home | Buildboard",
  description: "By Loveday",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthToggleProvider>
          {children}
          {/* 👇 Modal is globally available, even if rendered from AuthButton */}
          <AuthModalWrapper />
        </AuthToggleProvider>
      </body>
    </html>
  )
}
