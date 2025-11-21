"use client"

import { useEffect, useState } from "react"
import { getDashboard } from "../api/finance"
import "./Dashboard.css"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function FinanceDashboard() {
  const userEmail = localStorage.getItem("email") || localStorage.getItem("username") || ""
  const now = new Date()
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDashboard({ userEmail, year: now.getFullYear(), month: now.getMonth() + 1 })
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Financiero</h1>
        <p className="subtitle">Resumen de {now.toLocaleDateString("es-ES", { month: "long", year: "numeric" })}</p>
      </div>

      {loading && <div className="loading">Cargando datos...</div>}
      {error && <div className="alert alert-error">{error}</div>}

      {data && (
        <>
          <div className="metrics-grid">
            <div className="metric-card income">
              <div className="metric-icon">💚</div>
              <div className="metric-content">
                <p className="metric-label">Ingresos</p>
                <p className="metric-value">${Number(data.income).toFixed(2)}</p>
              </div>
            </div>

            <div className="metric-card expense">
              <div className="metric-icon">💔</div>
              <div className="metric-content">
                <p className="metric-label">Gastos</p>
                <p className="metric-value">${Number(data.expense).toFixed(2)}</p>
              </div>
            </div>

            <div className="metric-card balance">
              <div className="metric-icon">💎</div>
              <div className="metric-content">
                <p className="metric-label">Balance</p>
                <p className="metric-value">${Number(data.balance).toFixed(2)}</p>
              </div>
            </div>

            <div className="metric-card ratio">
              <div className="metric-icon">📊</div>
              <div className="metric-content">
                <p className="metric-label">Ratio Gasto/Ingreso</p>
                <p className="metric-value">{(Number(data.ratio) * 100).toFixed(1)}%</p>
              </div>
            </div>
          </div>

          <div className="dashboard-sections">
            <section className="card">
              <h2>Últimos 6 Meses</h2>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data.series} margin={{ left: 12, right: 24, top: 12, bottom: 12 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#10b981" name="Ingresos" strokeWidth={2} />
                    <Line type="monotone" dataKey="expense" stroke="#ef4444" name="Gastos" strokeWidth={2} />
                    {data.series[0] && data.series[0].micro !== undefined && (
                      <Line type="monotone" dataKey="micro" stroke="#06b6d4" name="Microgastos" strokeWidth={2} />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="card">
              <h2>Distribución por Categoría (Mes Actual)</h2>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <Tooltip />
                    <Legend />
                    <Pie
                      data={Object.entries(data.categories || {}).map(([name, value]) => ({ name, value }))}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={110}
                      fill="#8884d8"
                      label
                    >
                      {Object.entries(data.categories || {}).map(([_, v], i) => (
                        <Cell key={i} fill={["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#0369a1", "#a78bfa"][i % 6]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="card">
              <h2>Recomendaciones</h2>
              <ul className="recommendations-list">
                {data.recommendations?.map((r: any) => (
                  <li key={r.id} className="recommendation-item">
                    <span className="badge">{r.type}</span>
                    <span>{r.description}</span>
                    {r.potentialSavings && <span className="saving">Ahorro potencial: {r.potentialSavings}</span>}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </>
      )}
    </div>
  )
}
