import { Link } from 'react-router-dom'
import SplineHero from '../components/SplineHero'

export default function Inicio() {
  return (
    <div>
      <SplineHero embedUrl="https://app.spline.design/community/file/de399826-b9f3-4b1d-890f-7c261b47ebea">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Controla tus finanzas con inteligencia artificial</h1>
        <p className="text-neutral-300 mb-6 max-w-xl">
          Registra tus ingresos y gastos, obtén recomendaciones personalizadas y alcanza tus metas financieras de forma simple y efectiva.
        </p>
        <div className="flex gap-3">
          <Link className="btn btn-primary" to="/register">Comenzar Gratis</Link>
          <Link className="btn btn-outline" to="/login">Ya tengo cuenta</Link>
        </div>
      </SplineHero>

      <section className="section">
        <h2 style={{textAlign:'center',marginBottom:24}}>¿Qué puedes hacer?</h2>
        <div className="grid grid-3">
          {[
            {title:'Registra tus Ingresos',desc:'Lleva un control detallado de todos tus ingresos con fecha, monto y descripción.'},
            {title:'Categoriza Gastos',desc:'Organiza tus gastos en categorías fijas y variables con opciones de recurrencia.'},
            {title:'Control de Microgastos',desc:'Registra pequeños gastos diarios y establece límites para evitar fugas de dinero.'},
            {title:'Recomendaciones IA',desc:'Recibe sugerencias personalizadas para mejorar tus hábitos financieros y ahorrar más.'},
            {title:'Datos Seguros',desc:'Tu información está protegida con encriptación y control total sobre tus datos.'},
            {title:'Diseño Responsive',desc:'Accede desde cualquier dispositivo con la misma experiencia.'},
          ].map((f,i)=> (
            <div key={i} className="card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="panel" style={{textAlign:'center'}}>
          <h3 className="panel-title">Comienza a tomar control de tu dinero hoy</h3>
          <p className="muted" style={{maxWidth:700,margin:'0 auto 16px'}}>Únete a usuarios que mejoran sus finanzas personales con nuestro asistente inteligente.</p>
          <Link className="btn btn-primary" to="/register">Crear Cuenta Gratis</Link>
        </div>
      </section>
    </div>
  )
}
