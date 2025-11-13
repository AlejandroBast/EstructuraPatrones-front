"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Wallet, AlertCircle } from "lucide-react"

interface LoginFormProps {
  onSuccess: (token: string, user: { id: number; name: string; email: string }) => void
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // TODO: Replace with actual backend endpoint
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error("Credenciales inválidas")
      }

      const data = await response.json()
      onSuccess(data.token, data.user)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al iniciar sesión")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="relative overflow-hidden border-none shadow-2xl bg-gradient-to-br from-primary/5 via-background to-background backdrop-blur-xl rounded-2xl transition-all duration-300 hover:shadow-primary/30 hover:scale-[1.02]">
      {/* Efecto decorativo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-70 animate-pulse" />

      <CardHeader className="space-y-1 text-center relative z-10">
        <div className="flex justify-center mb-3">
          <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 shadow-inner animate-fade-in">
            <Wallet className="w-8 h-8 text-primary animate-bounce-slow" />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Iniciar sesión
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Ingresa tus credenciales para acceder a tu dashboard
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-5 relative z-10">
          {error && (
            <Alert variant="destructive" className="animate-shake border-l-4 border-red-500">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-semibold">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="rounded-xl border border-border/60 bg-background/80 focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all duration-300 hover:border-primary/60"
            />
          </div>

          {/* Contraseña */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-semibold">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              className="rounded-xl border border-border/60 bg-background/80 focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all duration-300 hover:border-primary/60"
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 relative z-10">
          <Button
            type="submit"
            className="w-full mt-6 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-primary to-accent shadow-md hover:shadow-xl hover:opacity-90 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </Button>

          <div className="text-sm text-center text-muted-foreground">
            ¿No tienes cuenta?{" "}
            <Link href="/register" className="text-primary hover:underline font-medium">
              Regístrate aquí
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}
