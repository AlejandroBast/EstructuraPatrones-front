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
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 p-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              Panel de Ingresos
            </h3>
            <p className="text-sm text-muted-foreground">Registra y visualiza tus ingresos con estilo</p>
          </div>
          <div className="flex items-end gap-1 h-10">
            <span className="w-2 h-4 bg-purple-400/60 rounded-sm animate-[pulse_1.4s_ease-in-out_infinite]" />
            <span className="w-2 h-6 bg-pink-400/60 rounded-sm animate-[pulse_1.6s_ease-in-out_infinite]" />
            <span className="w-2 h-5 bg-purple-400/60 rounded-sm animate-[pulse_1.8s_ease-in-out_infinite]" />
            <span className="w-2 h-8 bg-pink-400/60 rounded-sm animate-[pulse_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
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
            <Button type="submit" className="w-full transition-all duration-300 hover:scale-[1.01]">
              <Plus className="w-4 h-4 mr-2" />
              Agregar Ingreso
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="border-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
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
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-card/50 transition-all duration-300 hover:bg-card/70 hover:translate-x-[2px]"
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
          <div className="mt-6">
            <svg viewBox="0 0 200 50" className="w-full h-12">
              <polyline
                points="0,40 20,35 40,30 60,25 80,28 100,20 120,24 140,18 160,22 180,16 200,20"
                fill="none"
                className="stroke-purple-400"
                strokeWidth="2"
              />
            </svg>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}
