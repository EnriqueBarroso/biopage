import { useState } from 'react'
import { useRegion } from '../context/RegionContext'
import styles from './Planes.module.css'

function Planes() {
  const [activeIndex, setActiveIndex] = useState(1)
  const { config } = useRegion()
  const { contactUrl, plans, combo, paymentMethods, priceEquivalenceNote } = config

  return (
    <section id="planes" className={styles.planes}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Elige lo que necesitas. Sin techos.</h2>
          <p className={styles.note}>Pago único. Sin suscripciones ni sorpresas.</p>
        </div>

        {priceEquivalenceNote && <p className={styles.regionNote}>{priceEquivalenceNote}</p>}

        <div className={styles.accordion}>
          {plans.map((plan, index) => {
            const isActive = index === activeIndex

            return (
              <div
                className={`${styles.plan} ${isActive ? styles.planActive : ''}`}
                key={plan.number}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {plan.featured && (
                  <span className={`${styles.badge} ${isActive ? styles.badgeVisible : ''}`}>
                    Más popular
                  </span>
                )}

                {/* Collapsed layer — always in DOM, fades out when active */}
                <div className={styles.collapsedContent}>
                  <div className={styles.collapsedLabel}>
                    <span className={styles.collapsedNumber}>{plan.number}</span>
                    <span className={styles.collapsedName}>{plan.name}</span>
                    <span className={styles.collapsedPrice}>{plan.price}</span>
                    <span className={styles.collapsedArrow} aria-hidden="true">→</span>
                    {/* Touch devices */}
                    <span className={`${styles.collapsedHint} ${styles.hintTouch}`}>
                      Toca para ver
                    </span>
                    {/* Pointer devices */}
                    <span className={`${styles.collapsedHint} ${styles.hintPointer}`}>
                      Pasa el cursor
                    </span>
                  </div>
                </div>

                {/* Expanded layer — always in DOM, fades in when active */}
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
                    href={contactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Quiero el plan {plan.name}
                  </a>
                </div>
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

        {paymentMethods && (
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
