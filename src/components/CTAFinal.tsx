import FadeIn from './FadeIn'
import { WA_BASE } from '../config'
import styles from './CTAFinal.module.css'

const whatsappLink = `${WA_BASE}?text=${encodeURIComponent(
  'Hola, quiero información sobre mi página de enlaces Biopage.'
)}`

function CTAFinal() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.label}>¿Listo para empezar?</div>
        <FadeIn delay={0}>
          <h2 className={styles.title}>¿Listo para dejar de ser uno más?</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className={styles.subtitle}>
            Cuéntanos tu idea y te respondemos en menos de 24 horas con los siguientes
            pasos para tener tu página lista.
          </p>
        </FadeIn>
        <a
          className={styles.button}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablar por WhatsApp →
        </a>
      </div>
    </section>
  )
}

export default CTAFinal
