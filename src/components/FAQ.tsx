import { useState } from 'react'
import FadeIn from './FadeIn'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: '¿Cuánto tiempo tarda la entrega?',
    answer:
      'La entrega media es de 5 días hábiles desde que confirmamos el contenido y los enlaces que quieres incluir.',
  },
  {
    question: '¿Necesito conocimientos técnicos?',
    answer:
      'No. Tú nos pasas el contenido y nosotros nos encargamos de todo el desarrollo, diseño y publicación.',
  },
  {
    question: '¿Puedo actualizar el contenido después?',
    answer:
      'Sí, puedes pedirnos cambios cuando quieras o, si lo prefieres, te dejamos acceso para que los hagas tú mismo.',
  },
  {
    question: '¿Es realmente más rápido que Linktree?',
    answer:
      'Sí. Al ser código real optimizado, sin scripts de terceros ni plantillas pesadas, la carga es notablemente más rápida.',
  },
  {
    question: '¿Qué pasa si no me gusta el resultado?',
    answer:
      'Incluimos rondas de ajustes para asegurarnos de que la página refleje tu marca antes de la entrega final.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className={styles.faq}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.label}>FAQ</div>
          <h2 className={styles.title}>Todo lo que necesitas saber</h2>
          <p className={styles.subtitle}>
            Resolvemos las dudas más comunes antes de que te decidas.
          </p>
        </div>
        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <FadeIn className={styles.item} delay={index * 60} key={faq.question}>
                <button
                  className={styles.question}
                  type="button"
                  onClick={() => toggle(index)}
                >
                  {faq.question}
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    +
                  </span>
                </button>
                <p className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}>
                  {faq.answer}
                </p>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
