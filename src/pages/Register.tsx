"use client"

import type React from "react"

import { useState } from "react"
import { postJson } from "../api/client"
import "./AuthForms.css"

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [ok, setOk] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setOk(false)
    setLoading(true)
    try {
      await postJson("/api/auth/register", {
        username: username.trim(),
        email: email.trim(),
        password: password.trim(),
      })
      setOk(true)
      setUsername("")
      setEmail("")
      setPassword("")
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
          <h1>Crear Cuenta</h1>
          <p>Únete a ForNext hoy</p>
        </div>
        <form onSubmit={onSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="tu_usuario"
              required
            />
          </div>
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
            {loading ? "Creando cuenta..." : "Crear Cuenta"}
          </button>
        </form>
        {ok && <div className="alert alert-success">Cuenta creada correctamente. ¡Inicia sesión!</div>}
        {error && <div className="alert alert-error">{error}</div>}
        <div className="auth-footer">
          <p>
            ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
          </p>
        </div>
      </div>
    </div>
  )
}
