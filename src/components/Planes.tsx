import { useState } from 'react'
import { useRegion, type Region } from '../context/RegionContext'
import styles from './Planes.module.css'

const CONTACT_URL: Record<Region, string> = {
  ES: 'https://t.me/biopagecuba_bot',
  CU: 'https://t.me/biopagecuba_bot',
}

const planBase = [
  {
    number: '01',
    name: 'Creator',
    description: 'Biopage personalizada + hosting 1 año',
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
    description: 'Biopage + integraciones básicas + SEO',
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
    description: 'Biopage avanzada + analíticas + soporte',
    featured: false,
    features: [
      'Todo lo del plan Business',
      'Galería de proyectos',
      'Formulario de contacto',
      'Dominio personalizado',
    ],
  },
  {
    number: '04',
    name: 'Mantenimiento',
    description: 'Actualizaciones, soporte y backups',
    featured: false,
    features: ['Actualizaciones continuas', 'Soporte técnico', 'Backups periódicos'],
  },
]

const pricingByRegion: Record<Region, Record<string, { price: string; priceNote: string }>> = {
  ES: {
    Creator: { price: '297€', priceNote: 'Pago único' },
    Business: { price: '597€', priceNote: 'Pago único' },
    Portfolio: { price: '897€', priceNote: 'Pago único' },
    Mantenimiento: { price: '29€', priceNote: 'Por mes' },
  },
  CU: {
    Creator: { price: '240 USD', priceNote: '~72.000 CUP' },
    Business: { price: '480 USD', priceNote: '~144.000 CUP' },
    Portfolio: { price: '720 USD', priceNote: '~216.000 CUP' },
    Mantenimiento: { price: '23 USD', priceNote: '~6.900 CUP/mes' },
  },
}

const paymentMethods = [
  {
    icon: '💵',
    title: 'Transferencia en USD/EUR a España',
    description: 'Zelle, PayPal o Western Union.',
  },
  {
    icon: '🏦',
    title: 'Transferencia en CUP',
    description: 'Enzona o Transfermóvil.',
  },
  {
    icon: '🤝',
    title: 'Efectivo en Cuba',
    description: 'Pago en mano, en CUP o USD.',
  },
]

const comboByRegion: Record<Region, { title: string; price: string; note: string }> = {
  ES: {
    title: 'Biopage Business + Automatización Básica',
    price: '997€',
    note: 'Ahorras 100€ frente a contratarlo por separado',
  },
  CU: {
    title: 'Biopage Business + Automatización Básica',
    price: '800 USD',
    note: '~240.000 CUP — ahorro de 120 USD frente a contratarlo por separado',
  },
}

function Planes() {
  const [activeIndex, setActiveIndex] = useState(1)
  const { region, setRegion } = useRegion()

  const contactUrl = CONTACT_URL[region]
  const combo = comboByRegion[region]

  return (
    <section id="planes" className={styles.planes}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Elige lo que necesitas. Sin techos.</h2>
          <p className={styles.note}>Pago único. Sin suscripciones ni sorpresas.</p>
        </div>

        <div className={styles.regionToggle}>
          <button
            type="button"
            className={`${styles.regionButton} ${region === 'ES' ? styles.regionButtonActive : ''}`}
            onClick={() => setRegion('ES')}
          >
            España
          </button>
          <button
            type="button"
            className={`${styles.regionButton} ${region === 'CU' ? styles.regionButtonActive : ''}`}
            onClick={() => setRegion('CU')}
          >
            Cuba
          </button>
        </div>
        {region === 'CU' && (
          <p className={styles.regionNote}>
            Equivalencia orientativa. Precio base en USD. Pago en CUP, USD o efectivo.
          </p>
        )}

        <div className={styles.accordion}>
          {planBase.map((plan, index) => {
            const isActive = index === activeIndex
            const { price, priceNote } = pricingByRegion[region][plan.name]

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
                    <div className={styles.price}>{price}</div>
                    <div className={styles.priceNote}>{priceNote}</div>
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
                      href={contactUrl}
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
        <div className={styles.combo}>
          <span className={styles.comboBadge}>Paquete combinado destacado</span>
          <h3 className={styles.comboTitle}>{combo.title}</h3>
          <div className={styles.comboPrice}>{combo.price}</div>
          <p className={styles.comboNote}>{combo.note}</p>
          <a
            className={styles.comboCta}
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero el paquete combinado
          </a>
        </div>

        {region === 'CU' && (
          <div className={styles.payments}>
            <h3 className={styles.paymentsTitle}>¿Cómo se paga?</h3>
            <div className={styles.paymentsGrid}>
              {paymentMethods.map((method, index) => (
                <div className={styles.paymentCard} key={method.title}>
                  <span className={styles.paymentIcon}>{method.icon}</span>
                  <h4 className={styles.paymentTitle}>
                    Opción {index + 1} — {method.title}
                  </h4>
                  <p className={styles.paymentDescription}>{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Planes
