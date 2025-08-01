// components/AuthButton.tsx
"use client"

import { useAuthToggle } from "@/context/AuthToggleContext"
import { Button } from "@/components/ui/button"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"
import Image from "next/image"
import { createClient } from "@supabase/supabase-js"

export default function AuthButton() {
  const { openModal } = useAuthToggle()
  const supabaseUrl = "https://nwdkutfmmxdgzlplzeafx.supabase.co"
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53ZGt1Zm1teGRnemxscHplYWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNDYxNDcsImV4cCI6MjA2OTYyMjE0N30.aYsAVsLVpfnPFcWYqMHm01WLXiQYkmPd2p2FCvdXY20"
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser(data.user)
      }
    })

    // Optional: listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null)
    })

    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [])

  if (user) {
    const avatarUrl =
      user.user_metadata?.avatar_url ||
      `https://ui-avatars.com/api/?name=${user.user_metadata?.name || "User"}`
    
    return (
      <Button variant="ghost" className="p-0 rounded-full overflow-hidden w-10 h-10">
        <Image
          src={avatarUrl}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </Button>
    )
  }

  return (
    <Button variant="outline" className="border border-black" size="lg" onClick={openModal}>
      Log In
    </Button>
  )
}
