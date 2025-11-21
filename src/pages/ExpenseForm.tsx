"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { addExpense, getTransactions } from "../api/finance"
import "./Forms.css"

export default function ExpenseForm() {
  const userEmail = localStorage.getItem("email") || localStorage.getItem("username") || ""
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("Alimentación")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [recurring, setRecurring] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [msgType, setMsgType] = useState<"success" | "error" | null>(null)

  useEffect(() => {
    getTransactions(userEmail).then(setItems).catch(() => {})
  }, [])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMsg(null)
    setLoading(true)
    try {
      await addExpense({ amount: Number(amount), type, date, description, recurring, userEmail })
      setMsgType("success")
      setMsg("Gasto registrado exitosamente")
      setAmount("")
      setDate("")
      setDescription("")
      setRecurring(false)
      const list = await getTransactions(userEmail)
      setItems(list)
    } catch (err: any) {
      setMsgType("error")
      setMsg(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Registrar Gasto</h1>
        <p>Registra tus gastos y mantén el control</p>
      </div>

      <div className="form-layout">
        <div className="form-section card">
          <form onSubmit={onSubmit} className="form">
            <div className="form-group">
              <label htmlFor="amount">Monto</label>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                step="0.01"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Categoría</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option>Vivienda</option>
                <option>Alimentación</option>
                <option>Transporte</option>
                <option>Entretenimiento</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Fecha</label>
              <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ej: Café, Gasolina..."
                required
              />
            </div>
            <div className="form-group checkbox">
              <input
                id="recurring"
                type="checkbox"
                checked={recurring}
                onChange={(e) => setRecurring(e.target.checked)}
              />
              <label htmlFor="recurring">Gasto recurrente</label>
            </div>
            <button type="submit" disabled={loading} className="btn-submit">
              {loading ? "Registrando..." : "Registrar Gasto"}
            </button>
          </form>
          {msg && <div className={`alert alert-${msgType}`}>{msg}</div>}
        </div>

        <div className="transactions-section card">
          <h2>Transacciones Recientes</h2>
          {items.length === 0 ? (
            <p className="empty-state">No hay transacciones registradas</p>
          ) : (
            <div className="transactions-list">
              {items.map((it, i) => (
                <div key={i} className="transaction-item">
                  <div className="transaction-info">
                    <p className="transaction-desc">{it.description}</p>
                    <p className="transaction-date">
                      {new Date(it.date).toLocaleDateString("es-ES")}{it.type ? ` • ${it.type}` : ''}
                    </p>
                  </div>
                  <p className={`transaction-amount ${it.kind === 'ingreso' ? 'income-amount' : it.kind === 'gasto' ? 'expense-amount' : 'micro-amount'}`}>${Number(it.amount).toFixed(2)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
