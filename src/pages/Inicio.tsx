import { Link } from 'react-router-dom'
import './Inicio.css'

export default function Inicio() {
  return (
    <div className="inicio-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span>Tu asistente financiero inteligente</span>
          </div>
          <h1 className="hero-title">
            Controla tus finanzas con <span className="gradient-text">inteligencia artificial</span>
          </h1>
          <p className="hero-description">
            Registra tus ingresos y gastos, obtén recomendaciones personalizadas y alcanza tus metas financieras de forma simple y efectiva.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary btn-large" to="/register">
              <span>Comenzar Gratis</span>
              <span className="btn-icon">→</span>
            </Link>
            <Link className="btn btn-outline btn-large" to="/login">
              Ya tengo cuenta
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section - Movida antes de Features */}
      <section className="benefits-section">
        <div className="section-header">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <p className="section-subtitle">
            Beneficios que transformarán tu manera de gestionar el dinero
          </p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-header">
              <div className="benefit-icon">📊</div>
              <h3 className="benefit-title">Visualiza tu progreso</h3>
            </div>
            <p className="benefit-description">
              Gráficas interactivas y reportes detallados que te ayudan a entender mejor tus finanzas y tomar decisiones informadas.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-header">
              <div className="benefit-icon">🎯</div>
              <h3 className="benefit-title">Establece metas</h3>
            </div>
            <p className="benefit-description">
              Define objetivos financieros y recibe orientación personalizada para alcanzarlos más rápido.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-header">
              <div className="benefit-icon">⚡</div>
              <h3 className="benefit-title">Ahorra tiempo</h3>
            </div>
            <p className="benefit-description">
              Automatiza registros recurrentes y obtén insights instantáneos sin complicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Reorganizada en 2 columnas */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Funcionalidades principales</h2>
          <p className="section-subtitle">
            Todas las herramientas que necesitas en un solo lugar
          </p>
        </div>
        
        <div className="features-grid-alt">
          {[
            {
              title: 'Control de Microgastos',
              desc: 'Registra pequeños gastos diarios y establece límites para evitar fugas de dinero.',
              icon: '🔍',
              color: 'blue'
            },
            {
              title: 'Recomendaciones IA',
              desc: 'Recibe sugerencias personalizadas para mejorar tus hábitos financieros y ahorrar más.',
              icon: '🤖',
              color: 'purple'
            },
            {
              title: 'Registra tus Ingresos',
              desc: 'Lleva un control detallado de todos tus ingresos con fecha, monto y descripción.',
              icon: '💰',
              color: 'green'
            },
            {
              title: 'Categoriza Gastos',
              desc: 'Organiza tus gastos en categorías fijas y variables con opciones de recurrencia.',
              icon: '💸',
              color: 'red'
            },
            {
              title: 'Datos Seguros',
              desc: 'Tu información está protegida con encriptación y control total sobre tus datos.',
              icon: '🔒',
              color: 'amber'
            },
            {
              title: 'Diseño Responsive',
              desc: 'Accede desde cualquier dispositivo con la misma experiencia optimizada.',
              icon: '📱',
              color: 'indigo'
            },
          ].map((feature, index) => (
            <div key={index} className={`feature-card-alt feature-${feature.color}`}>
              <div className="feature-icon-large">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <h3 className="cta-title">Comienza a tomar control de tu dinero hoy</h3>
            <p className="cta-description">
              Únete a miles de usuarios que mejoran sus finanzas personales con nuestro asistente inteligente.
            </p>
            <Link className="btn btn-primary btn-large" to="/register">
              <span>Crear Cuenta Gratis</span>
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
