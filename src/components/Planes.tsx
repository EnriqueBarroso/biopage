import { useState } from 'react'
import { WA_BASE } from '../config'
import styles from './Planes.module.css'

const buildWhatsappLink = (message: string) =>
  `${WA_BASE}?text=${encodeURIComponent(message)}`

const planes = [
  {
    number: '01',
    name: 'Creator',
    description: 'Para creadores de contenido que quieren empezar fuerte.',
    price: '297€',
    priceNote: 'Pago único',
    message: 'Hola, me interesa el Plan Creator (297€). ¿Podemos hablar?',
    featured: false,
    features: [
      'Página de enlaces a medida',
      'Diseño responsive',
      'Hasta 8 enlaces',
      'Entrega en 5 días',
    ],
  },
  {
    number: '02',
    name: 'Business',
    description: 'Para marcas y negocios que necesitan convertir.',
    price: '597€',
    priceNote: 'Pago único',
    message: 'Hola, me interesa el Plan Business (597€). ¿Podemos hablar?',
    featured: true,
    features: [
      'Todo lo del plan Creator',
      'Enlaces y bloques ilimitados',
      'Integración con analytics',
      'Optimización para conversión',
      'Soporte prioritario 30 días',
    ],
  },
  {
    number: '03',
    name: 'Portfolio',
    description: 'Para profesionales que quieren mostrar su trabajo.',
    price: '897€',
    priceNote: 'Pago único',
    message: 'Hola, me interesa el Plan Portfolio (897€). ¿Podemos hablar?',
    featured: false,
    features: [
      'Todo lo del plan Business',
      'Galería de proyectos',
      'Formulario de contacto',
      'Dominio personalizado',
    ],
  },
]

function Planes() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section id="planes" className={styles.planes}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Elige lo que necesitas. Sin techos.</h2>
          <p className={styles.note}>Pago único. Sin suscripciones ni sorpresas.</p>
        </div>
        <div className={styles.accordion}>
          {planes.map((plan, index) => {
            const isActive = index === activeIndex

            return (
              <div
                className={`${styles.plan} ${isActive ? styles.planActive : ''}`}
                key={plan.number}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {isActive && plan.featured && (
                  <span className={styles.badge}>Más popular</span>
                )}
                {isActive ? (
                  <div className={styles.expandedContent}>
                    <div className={styles.number}>{plan.number}</div>
                    <h3 className={styles.name}>{plan.name}</h3>
                    <p className={styles.description}>{plan.description}</p>
                    <div className={styles.price}>{plan.price}</div>
                    <div className={styles.priceNote}>{plan.priceNote}</div>
                    <hr className={styles.hr} />
                    <ul className={styles.features}>
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <span>—</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      className={styles.cta}
                      href={buildWhatsappLink(plan.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quiero el plan {plan.name}
                    </a>
                  </div>
                ) : (
                  <div className={styles.collapsedContent}>
                    <div className={styles.collapsedLabel}>
                      <span className={styles.collapsedNumber}>{plan.number}</span>
                      <span className={styles.collapsedName}>{plan.name}</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Planes
