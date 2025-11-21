import { useState } from 'react'
import { addIncome, getTransactions } from '../api/finance'
import './IncomeForm.css'

export default function IncomeForm() {
  const userEmail = localStorage.getItem('username') || ''
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [msg, setMsg] = useState<string | null>(null)
  const [items, setItems] = useState<any[]>([])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMsg(null)
    try {
      const saved = await addIncome({
        amount: Number(amount),
        date,
        description,
        userEmail
      })
      setMsg('Ingreso registrado')
      const list = await getTransactions(userEmail)
      setItems(list)
    } catch (err: any) {
      setMsg(err.message)
    }
  }

  return (
    <div className="income-container">
      <div className="income-header">
        <h2 className="income-title">💰 Gestión de Ingresos</h2>
        <p className="income-subtitle">Registra y visualiza tus ingresos</p>
      </div>

      <div className="income-layout">
        {/* Formulario de Registro */}
        <div className="income-form-section">
          <div className="panel card-dark income-card">
            <div className="card-header">
              <h3 className="panel-title">➕ Nuevo Ingreso</h3>
            </div>

            <form onSubmit={onSubmit} className="form income-form">
              <div className="form-group">
                <label className="form-label">💵 Monto</label>
                <input
                  className="input input-dark"
                  type="number"
                  step="0.01"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  placeholder="0.00"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">📅 Fecha</label>
                <input
                  className="input input-dark"
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">📝 Descripción</label>
                <input
                  className="input input-dark"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Ej: Salario, Freelance, Venta..."
                  required
                />
              </div>

              <button className="btn-gray btn-submit" type="submit">
                ✨ Agregar Ingreso
              </button>
            </form>

            {msg && (
              <div className={`message-box ${msg.includes('Error') ? 'error-box' : 'success-box'}`}>
                {msg}
              </div>
            )}
          </div>
        </div>

        {/* Lista de Ingresos */}
        <div className="income-list-section">
          <div className="panel card-dark income-card">
            <div className="card-header">
              <h3 className="panel-title">📊 Ingresos Registrados</h3>
            </div>

            <div className="income-list">
              {items.length === 0 ? (
                <div className="empty-state">
                  <span className="empty-icon">📭</span>
                  <p>No hay ingresos registrados</p>
                </div>
              ) : (
                <div className="income-items">
                  {items.map((it, i) => (
                    <div key={i} className="income-item">
                      <div className="income-info">
                        <p className="income-desc">{it.description}</p>
                        <p className="income-date">📅 {String(it.date)}</p>
                      </div>
                      <div className="income-amount">
                        +${Number(it.amount).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
