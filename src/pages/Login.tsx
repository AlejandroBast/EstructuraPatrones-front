"use client"

import type React from "react"

import { useState } from "react"
import { postJson } from "../api/client"
import "./AuthForms.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await postJson<{ token: string; username: string }>("/api/auth/login", {
        email: email.trim(),
        password: password.trim(),
      })
      localStorage.setItem("token", res.token)
      localStorage.setItem("username", res.username)
      localStorage.setItem("email", email.trim())
      window.location.href = "/welcome"
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Bienvenido</h1>
          <p>Accede a tu cuenta ThinkCash</p>
        </div>
        <form onSubmit={onSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
        {error && <div className="alert alert-error">{error}</div>}
        <div className="auth-footer">
          <p>
            ¿No tienes cuenta? <a href="/register">Crear una</a>
          </p>
        </div>
      </div>
    </div>
  )
}
