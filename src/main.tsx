import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Register from './pages/Register'
import Inicio from './pages/Inicio'
import Welcome from './pages/Welcome'
import FinanceDashboard from './pages/FinanceDashboard'
import IncomeForm from './pages/IncomeForm'
import ExpenseForm from './pages/ExpenseForm'
import MicroExpensePage from './pages/MicroExpensePage'
import TransactionsPage from './pages/TransactionsPage'
import NimAi from './pages/NimAi'

function PrivateRoute({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem('token')
  return token ? children : <Navigate to="/login" replace />
}

function PublicOnlyRoute({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem('token')
  return token ? <Navigate to="/dashboard" replace /> : children
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={localStorage.getItem('token') ? <Navigate to="/dashboard" replace /> : <Navigate to="/inicio" replace />} />
          <Route path="/inicio" element={<PublicOnlyRoute><Inicio /></PublicOnlyRoute>} />
          <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
          <Route path="/register" element={<PublicOnlyRoute><Register /></PublicOnlyRoute>} />
          <Route path="/welcome" element={<PrivateRoute><Welcome /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><FinanceDashboard /></PrivateRoute>} />
          <Route path="/ingreso" element={<PrivateRoute><IncomeForm /></PrivateRoute>} />
          <Route path="/gasto" element={<PrivateRoute><ExpenseForm /></PrivateRoute>} />
          <Route path="/microgasto" element={<PrivateRoute><MicroExpensePage /></PrivateRoute>} />
          <Route path="/historial" element={<PrivateRoute><TransactionsPage /></PrivateRoute>} />
          <Route path="/nimai" element={<PrivateRoute><NimAi /></PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

