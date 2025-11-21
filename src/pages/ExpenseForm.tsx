import { useState } from 'react'
import { addExpense, getTransactions } from '../api/finance'

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
      const saved = await addExpense({ amount: Number(amount), type, date, description, recurring, userEmail })
      setMsg('Gasto registrado')
      const list = await getTransactions(userEmail)
      setItems(list)
    } catch (err: any) {
      setMsg(err.message)
    }
  }

  return (
    <div className="split">
      <div className="panel">
        <h3 className="panel-title">Registrar Gasto</h3>
        <form onSubmit={onSubmit} className="form">
          <input className="input" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Monto" required />
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <select className="input" value={type} onChange={e => setType(e.target.value)}>
              <option>Vivienda</option>
              <option>Alimentación</option>
              <option>Transporte</option>
              <option>Entretenimiento</option>
            </select>
            <input className="input" type="date" value={date} onChange={e => setDate(e.target.value)} required />
          </div>
          <input className="input" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción" required />
          <label className="muted"><input style={{marginRight:8}} type="checkbox" checked={recurring} onChange={e => setRecurring(e.target.checked)} /> Gasto Recurrente</label>
          <button className="btn btn-primary" type="submit">Agregar Gasto</button>
        </form>
        {msg && <p className={msg.includes('Error')? 'error':'success'}>{msg}</p>}
      </div>
      <div className="panel">
        <h3 className="panel-title">Gastos Recientes</h3>
        <ul className="muted" style={{display:'grid',gap:6,paddingLeft:18}}>
          {items.length===0 && <li>No hay datos</li>}
          {items.map((it,i)=> (
            <li key={i}>{String(it.date)} — ${String(it.amount)} — {it.description} ({it.type}{it.recurring?', recurrente':''})</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
