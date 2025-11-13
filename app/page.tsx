import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, TrendingUp, PieChart, Brain, Shield, Smartphone } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="w-8 h-8 text-primary" />
            <h1 className="text-xl font-bold">Asistente Financiero</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-5xl font-bold text-balance">
            Controla tus finanzas con <span className="text-primary">inteligencia artificial</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Registra tus ingresos y gastos, obtén recomendaciones personalizadas y alcanza tus metas financieras de
            forma simple y efectiva.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="/register">Comenzar Gratis</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/login">Ya tengo cuenta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">¿Qué puedes hacer?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-border">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-primary/10 rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Registra tus Ingresos</h4>
              <p className="text-muted-foreground">
                Lleva un control detallado de todos tus ingresos con fecha, monto y descripción.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-primary/10 rounded-lg w-fit">
                <PieChart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Categoriza Gastos</h4>
              <p className="text-muted-foreground">
                Organiza tus gastos en categorías fijas y variables con opciones de recurrencia.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-primary/10 rounded-lg w-fit">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Control de Microgastos</h4>
              <p className="text-muted-foreground">
                Registra pequeños gastos diarios y establece límites para evitar fugas de dinero.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-primary/10 rounded-lg w-fit">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Recomendaciones IA</h4>
              <p className="text-muted-foreground">
                Recibe sugerencias personalizadas para mejorar tus hábitos financieros y ahorrar más.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-primary/10 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Datos Seguros</h4>
              <p className="text-muted-foreground">
                Tu información financiera está protegida con encriptación y control total sobre tus datos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-primary/10 rounded-lg w-fit">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Diseño Responsive</h4>
              <p className="text-muted-foreground">
                Accede desde cualquier dispositivo: computadora, tablet o móvil con la misma experiencia.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-border bg-primary/5">
          <CardContent className="py-16 text-center space-y-6">
            <h3 className="text-3xl font-bold">Comienza a tomar control de tu dinero hoy</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Únete a miles de usuarios que ya están mejorando sus finanzas personales con nuestro asistente
              inteligente.
            </p>
            <Button size="lg" asChild>
              <Link href="/register">Crear Cuenta Gratis</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>Asistente Financiero - Tu aliado para alcanzar la libertad financiera</p>
        </div>
      </footer>
    </div>
  )
}
