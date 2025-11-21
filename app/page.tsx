"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    // Redirect to the main app in src/main.tsx
    if (typeof window !== "undefined" && !window.location.pathname.includes("/api")) {
      window.location.href = "/"
    }
  }, [])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0369a1 0%, #0891b2 100%)",
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "white",
          animation: "fadeIn 0.6s ease-in",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: "0 0 1rem 0" }}>ForNext</h1>
        <p style={{ fontSize: "1.1rem", margin: 0, opacity: 0.9 }}>Cargando...</p>
      </div>
    </div>
  )
}
