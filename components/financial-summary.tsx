"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Wallet, AlertTriangle, ArrowUpRight } from "lucide-react"
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

interface FinancialSummaryProps {
  userId: number
}

// Mock data - Replace with actual API calls
const monthlyData = [
  { mes: "Ene", ingresos: 3500, gastos: 2800 },
  { mes: "Feb", ingresos: 3700, gastos: 2900 },
  { mes: "Mar", ingresos: 3600, gastos: 3100 },
  { mes: "Abr", ingresos: 4000, gastos: 2950 },
  { mes: "May", ingresos: 3800, gastos: 3200 },
  { mes: "Jun", ingresos: 4200, gastos: 3100 },
]

const categoryData = [
  { name: "Vivienda", value: 1200, color: "hsl(var(--chart-1))" },
  { name: "Alimentación", value: 800, color: "hsl(var(--chart-2))" },
  { name: "Transporte", value: 400, color: "hsl(var(--chart-3))" },
  { name: "Entretenimiento", value: 300, color: "hsl(var(--chart-4))" },
  { name: "Otros", value: 400, color: "hsl(var(--chart-5))" },
]

export function FinancialSummary({ userId }: FinancialSummaryProps) {
  const [summary, setSummary] = useState({
    totalIncome: 4200,
    totalExpenses: 3100,
    balance: 1100,
    savingsRate: 26.2,
    monthlyGrowth: 5.3,
  })

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ingresos del Mes</CardTitle>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${summary.totalIncome.toLocaleString()}</div>
            <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1">
              <ArrowUpRight className="w-3 h-3" />+{summary.monthlyGrowth}% vs mes anterior
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Gastos del Mes</CardTitle>
            <TrendingDown className="w-4 h-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${summary.totalExpenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {((summary.totalExpenses / summary.totalIncome) * 100).toFixed(1)}% de ingresos
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Balance</CardTitle>
            <Wallet className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">${summary.balance.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Disponible este mes</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tasa de Ahorro</CardTitle>
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.savingsRate}%</div>
            <Progress value={summary.savingsRate} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Ingresos vs Gastos</CardTitle>
            <CardDescription>Últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="ingresos" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Ingresos" />
                <Line type="monotone" dataKey="gastos" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Gastos" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Gastos por Categoría</CardTitle>
            <CardDescription>Distribución del mes actual</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card className="border-amber-500/50 bg-amber-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-500">
            <AlertTriangle className="w-5 h-5" />
            Alertas y Sugerencias
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <Badge variant="outline" className="mt-0.5">
              Info
            </Badge>
            <p className="text-sm">
              Tus gastos en entretenimiento están 15% por encima del promedio de los últimos 3 meses.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Badge variant="outline" className="mt-0.5">
              Tip
            </Badge>
            <p className="text-sm">¡Excelente! Estás ahorrando más del 20% de tus ingresos este mes.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
