"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { DashboardView } from "@/components/dashboard-view"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ id: number; name: string; email: string } | null>(null)

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user")

    if (!token || !userData) {
      router.push("/login")
      return
    }

    setUser(JSON.parse(userData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) {
    return null // or a loading spinner
  }

  return <DashboardView user={user} onLogout={handleLogout} />
}
