"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { RegisterForm } from "@/components/register-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if already authenticated
    const token = localStorage.getItem("token")
    if (token) {
      router.push("/dashboard")
    }
  }, [router])

  const handleRegisterSuccess = (token: string, userData: { id: number; name: string; email: string }) => {
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(userData))
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
        <RegisterForm onSuccess={handleRegisterSuccess} />
      </div>
    </div>
  )
}
