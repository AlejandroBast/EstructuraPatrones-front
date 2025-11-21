import { useState } from 'react'
import { addMicro, getTransactions } from '../api/finance'
import './MicroExpensePage.css'

export default function MicroExpensePage() {
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
      await addMicro({ amount: Number(amount), date, description, userEmail })
      setMsg('✅ Microgasto registrado exitosamente')
      setAmount('')
      setDate('')
      setDescription('')
      const list = await getTransactions(userEmail)
      setItems(list.filter((item: any) => item.type === 'micro' || Math.abs(item.amount) < 50))
    } catch (err: any) {
      setMsg('❌ Error: ' + err.message)
    }
  }

  const totalMicro = items.reduce((sum, item) => sum + Math.abs(Number(item.amount || 0)), 0)
  const avgMicro = items.length > 0 ? totalMicro / items.length : 0

  return (
    <div className="micro-container">
      <div className="micro-header">
        <h2 className="micro-title">🪙 Gestión de Microgastos</h2>
        <p className="micro-subtitle">Controla esos pequeños gastos que se acumulan</p>
      </div>

      <div className="micro-layout">
        {/* Formulario de Registro */}
        <div className="micro-form-section">
          <div className="panel card-dark micro-card">
            <div className="card-header">
              <h3 className="panel-title">➕ Nuevo Microgasto</h3>
            </div>

            <form onSubmit={onSubmit} className="form micro-form">
              <div className="form-group">
                <label className="form-label">💵 Monto</label>
                <div className="input-with-hint">
                  <input
                    className="input input-dark"
                    type="number"
                    step="0.01"
                    max="50"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="0.00"
                    required
                  />
                  <span className="input-hint">💡 Máximo $50</span>
                </div>
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
                  placeholder="Ej: Café, Snack, Propina, Parking..."
                  required
                />
              </div>

              <div className="quick-amounts">
                <p className="quick-label">⚡ Montos rápidos:</p>
                <div className="quick-buttons">
                  <button type="button" className="quick-btn" onClick={() => setAmount('2')}>$2</button>
                  <button type="button" className="quick-btn" onClick={() => setAmount('5')}>$5</button>
                  <button type="button" className="quick-btn" onClick={() => setAmount('10')}>$10</button>
                  <button type="button" className="quick-btn" onClick={() => setAmount('20')}>$20</button>
                </div>
              </div>

              <button className="btn-gray btn-submit" type="submit">
                ✨ Agregar Microgasto
              </button>
            </form>

            {msg && (
              <div className={`message-box ${msg.includes('Error') || msg.includes('❌') ? 'error-box' : 'success-box'}`}>
                {msg}
              </div>
            )}
          </div>
        </div>

        {/* Lista y Estadísticas */}
        <div className="micro-list-section">
          <div className="panel card-dark micro-card">
            <div className="card-header">
              <h3 className="panel-title">📊 Microgastos Registrados</h3>
            </div>

            {/* Estadísticas */}
            <div className="micro-stats">
              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <div className="stat-info">
                  <p className="stat-label">Total</p>
                  <p className="stat-value">
                    ${totalMicro.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-info">
                  <p className="stat-label">Promedio</p>
                  <p className="stat-value">
                    ${avgMicro.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🔢</div>
                <div className="stat-info">
                  <p className="stat-label">Registros</p>
                  <p className="stat-value">{items.length}</p>
                </div>
              </div>
            </div>

            {/* Lista de Microgastos */}
            <div className="micro-list">
              {items.length === 0 ? (
                <div className="empty-state">
                  <span className="empty-icon">📭</span>
                  <p>No hay microgastos registrados</p>
                  <span className="empty-tip">Los pequeños gastos también cuentan 💡</span>
                </div>
              ) : (
                <div className="micro-items">
                  {items.map((item, i) => (
                    <div key={i} className="micro-item">
                      <div className="micro-dot">•</div>
                      <div className="micro-info">
                        <p className="micro-desc">{item.description}</p>
                        <p className="micro-date">
                          📅 {new Date(item.date).toLocaleDateString('es-ES', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                      <div className="micro-amount">
                        ${Math.abs(Number(item.amount)).toLocaleString('es-ES', { minimumFractionDigits: 2 })}
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
