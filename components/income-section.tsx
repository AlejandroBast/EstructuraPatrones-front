"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, TrendingUp, Calendar, DollarSign } from "lucide-react"

interface IncomeSectionProps {
  userId: number
}

export function IncomeSection({ userId }: IncomeSectionProps) {
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to backend API
    console.log("[v0] Income submitted:", { amount, date, description, userId })
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Registrar Ingreso
          </CardTitle>
          <CardDescription>Añade un nuevo ingreso a tu registro financiero</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Monto</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-9"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Fecha</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-9"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                placeholder="Ej: Salario mensual, freelance, venta..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>
            <Button type="submit" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Agregar Ingreso
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Ingresos Recientes
          </CardTitle>
          <CardDescription>Últimos registros de ingresos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Mock data - Replace with actual API data */}
            {[
              { id: 1, amount: 3500, date: "2024-06-01", description: "Salario Junio" },
              { id: 2, amount: 500, date: "2024-06-15", description: "Freelance proyecto web" },
              { id: 3, amount: 200, date: "2024-06-20", description: "Venta de artículos" },
            ].map((income) => (
              <div
                key={income.id}
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-card/50"
              >
                <div className="flex-1">
                  <p className="font-medium">{income.description}</p>
                  <p className="text-sm text-muted-foreground">{income.date}</p>
                </div>
                <Badge variant="secondary" className="text-emerald-500 bg-emerald-500/10">
                  +${income.amount.toLocaleString()}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
