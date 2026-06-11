import RevealText from './RevealText'
import FadeIn from './FadeIn'
import styles from './Problema.module.css'

const painPoints = [
  { number: '01', title: 'Carga lenta y penalización' },
  { number: '02', title: 'Tu marca, diluida' },
  { number: '03', title: 'Sin métricas reales' },
]

function Problema() {
  return (
    <section className={styles.problema}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.label}>El problema</div>
          <h2 className={styles.title}>
            <RevealText text="Linktree te hace igual que todos." />
          </h2>
          <p className={styles.text}>
            Plantillas genéricas, branding ajeno y límites artificiales. Tu página de
            enlaces debería ser una extensión de tu marca, no un anuncio de otra
            empresa.
          </p>
        </div>
        <div className={styles.points}>
          {painPoints.map((point, index) => (
            <FadeIn className={styles.point} delay={index * 120} key={point.number}>
              <span className={styles.number}>{point.number}</span>
              <span className={styles.pointTitle}>{point.title}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problema
