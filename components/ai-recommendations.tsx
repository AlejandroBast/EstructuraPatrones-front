"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingUp, AlertTriangle, Lightbulb, RefreshCw } from "lucide-react"

interface AiRecommendationsProps {
  userId: number
}

export function AiRecommendations({ userId }: AiRecommendationsProps) {
  const [loading, setLoading] = useState(false)
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      type: "warning",
      category: "Entretenimiento",
      message:
        "Tus gastos en entretenimiento superan el 15% de tus ingresos. Considera reducirlos al 10% para aumentar tu ahorro.",
      impact: "Alto",
      savings: 200,
    },
    {
      id: 2,
      type: "suggestion",
      category: "Microgastos",
      message:
        "Tus microgastos diarios han aumentado 25% en la última semana. Reducir el café diario podría ahorrarte $150 al mes.",
      impact: "Medio",
      savings: 150,
    },
    {
      id: 3,
      type: "success",
      category: "Ahorro",
      message:
        "¡Excelente! Estás ahorrando 26% de tus ingresos. Mantén este ritmo para alcanzar tus metas financieras.",
      impact: "Positivo",
      savings: 0,
    },
    {
      id: 4,
      type: "tip",
      category: "Inversión",
      message:
        "Con tu capacidad de ahorro actual, podrías considerar abrir una cuenta de inversión. Pequeñas inversiones mensuales pueden generar buenos rendimientos a largo plazo.",
      impact: "Bajo",
      savings: 0,
    },
  ])

  const handleRefresh = async () => {
    setLoading(true)
    // TODO: Connect to backend API
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-amber-500" />
      case "success":
        return <TrendingUp className="w-5 h-5 text-emerald-500" />
      case "tip":
        return <Lightbulb className="w-5 h-5 text-blue-500" />
      default:
        return <Sparkles className="w-5 h-5 text-purple-500" />
    }
  }

  const getBadgeVariant = (impact: string) => {
    switch (impact) {
      case "Alto":
        return "destructive"
      case "Medio":
        return "default"
      case "Positivo":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-border bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-emerald-500/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Recomendaciones Personalizadas</CardTitle>
                <CardDescription>Análisis inteligente basado en tus hábitos financieros</CardDescription>
              </div>
            </div>
            <Button variant="outline" size="icon" onClick={handleRefresh} disabled={loading}>
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4">
        {recommendations.map((rec) => (
          <Card key={rec.id} className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">{getIcon(rec.type)}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline">{rec.category}</Badge>
                    <Badge variant={getBadgeVariant(rec.impact) as any}>{rec.impact}</Badge>
                    {rec.savings > 0 && (
                      <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">
                        Ahorro potencial: ${rec.savings}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed">{rec.message}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base">¿Cómo funcionan las recomendaciones?</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            Nuestro sistema analiza tus patrones de ingresos y gastos para identificar oportunidades de ahorro y mejora
            financiera.
          </p>
          <p>Las recomendaciones se actualizan automáticamente cada vez que registras nuevas transacciones.</p>
        </CardContent>
      </Card>
    </div>
  )
}
