import { useState } from 'react'
import { addExpense, getTransactions } from '../api/finance'
import './ExpenseForm.css'

export default function ExpenseForm() {
  const userEmail = localStorage.getItem('username') || ''
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('Alimentación')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [recurring, setRecurring] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)
  const [items, setItems] = useState<any[]>([])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMsg(null)
    try {
      await addExpense({ amount: Number(amount), type, date, description, recurring, userEmail })
      setMsg('✅ Gasto registrado exitosamente')
      setAmount('')
      setDate('')
      setDescription('')
      setRecurring(false)
      const list = await getTransactions(userEmail)
      setItems(list.filter((item: any) => item.amount < 0))
    } catch (err: any) {
      setMsg('❌ Error: ' + err.message)
    }
  }

  const categoryIcons: { [key: string]: string } = {
    'Vivienda': '🏠',
    'Alimentación': '🍽️',
    'Transporte': '🚗',
    'Entretenimiento': '🎮'
  }

  const categoryColors: { [key: string]: string } = {
    'Vivienda': 'rgba(59, 130, 246, 0.2)',
    'Alimentación': 'rgba(234, 179, 8, 0.2)',
    'Transporte': 'rgba(139, 92, 246, 0.2)',
    'Entretenimiento': 'rgba(236, 72, 153, 0.2)'
  }

  const totalExpenses = items.reduce((sum, item) => sum + Math.abs(Number(item.amount || 0)), 0)

  return (
    <div className="expense-container">
      <div className="expense-header">
        <h2 className="expense-title">💸 Gestión de Gastos</h2>
        <p className="expense-subtitle">Registra y controla tus gastos de manera eficiente</p>
      </div>

      <div className="expense-layout">
        {/* Formulario de Registro */}
        <div className="expense-form-section">
          <div className="panel card-dark expense-card">
            <div className="card-header">
              <h3 className="panel-title">➕ Nuevo Gasto</h3>
            </div>

            <form onSubmit={onSubmit} className="form expense-form">
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

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">📂 Categoría</label>
                  <select 
                    className="input input-dark select-category" 
                    value={type} 
                    onChange={e => setType(e.target.value)}
                  >
                    <option>🏠 Vivienda</option>
                    <option>🍽️ Alimentación</option>
                    <option>🚗 Transporte</option>
                    <option>🎮 Entretenimiento</option>
                  </select>
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
              </div>

              <div className="form-group">
                <label className="form-label">📝 Descripción</label>
                <input
                  className="input input-dark"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Ej: Supermercado, Gasolina, Netflix..."
                  required
                />
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={recurring}
                    onChange={e => setRecurring(e.target.checked)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">🔄 Gasto Recurrente</span>
                </label>
              </div>

              <button className="btn-gray btn-submit" type="submit">
                ✨ Agregar Gasto
              </button>
            </form>

            {msg && (
              <div className={`message-box ${msg.includes('Error') || msg.includes('❌') ? 'error-box' : 'success-box'}`}>
                {msg}
              </div>
            )}
          </div>
        </div>

        {/* Lista de Gastos */}
        <div className="expense-list-section">
          <div className="panel card-dark expense-card">
            <div className="card-header">
              <h3 className="panel-title">📊 Gastos Registrados</h3>
            </div>

            {/* Total Summary */}
            <div className="expense-total">
              <p className="total-label">Total Gastos</p>
              <p className="total-amount">
                ${totalExpenses.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>

            {/* Expense List */}
            <div className="expense-list">
              {items.length === 0 ? (
                <div className="empty-state">
                  <span className="empty-icon">📭</span>
                  <p>No hay gastos registrados</p>
                </div>
              ) : (
                <div className="expense-items">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="expense-item"
                      style={{
                        borderLeft: `4px solid ${categoryColors[item.type] || 'rgba(100, 100, 100, 0.3)'}`
                      }}
                    >
                      <div className="expense-icon">
                        {categoryIcons[item.type] || '💰'}
                      </div>
                      <div className="expense-info">
                        <p className="expense-desc">
                          {item.description}
                          {item.recurring && <span className="recurring-badge">🔄 Recurrente</span>}
                        </p>
                        <p className="expense-meta">
                          📅 {new Date(item.date).toLocaleDateString('es-ES', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })} • {item.type}
                        </p>
                      </div>
                      <div className="expense-amount">
                        -${Math.abs(Number(item.amount)).toLocaleString('es-ES', { minimumFractionDigits: 2 })}
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
