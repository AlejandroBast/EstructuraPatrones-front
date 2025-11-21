"use client"

import { NavLink, Outlet, useLocation } from "react-router-dom"
import "./App.css"

export default function App() {
  const isAuthed = typeof window !== "undefined" && !!localStorage.getItem("token")
  const location = useLocation()

  const isAuthPage = ["/login", "/register", "/inicio"].includes(location.pathname)

  return (
    <div className="app-container">
      {isAuthed && !isAuthPage && <Sidebar />}
      <main className={isAuthed && !isAuthPage ? "main-content" : "main-content-full"}>
        {isAuthed && !isAuthPage && <Header />}
        <div className={isAuthed && !isAuthPage ? "page-content" : ""}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

function Sidebar() {
  const isAuthed = !!localStorage.getItem("token")

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: "📊" },
    { label: "Bienvenida", path: "/welcome", icon: "👋" },
    { label: "Ingresos", path: "/ingreso", icon: "💰" },
    { label: "Gastos", path: "/gasto", icon: "🏷️" },
    { label: "Microgastos", path: "/microgasto", icon: "📌" },
    { label: "Historial", path: "/historial", icon: "📝" },
    { label: "NimAi", path: "/nimai", icon: "🤖" },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/logo.svg" alt="ThinkCash" style={{ height: 32 }} />
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }: any) => `nav-item ${isActive ? "active" : ""}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

function Header() {
  const username = localStorage.getItem("username") || "Usuario"

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    window.location.href = "/login"
  }

  return (
    <header className="header">
      <div className="header-content">
        <h2>Bienvenido de vuelta</h2>
        <button onClick={logout} className="btn-logout">
          Cerrar sesión
        </button>
      </div>
    </header>
  )
}
