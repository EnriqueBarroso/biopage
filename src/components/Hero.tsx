import { TELEGRAM_LINK } from '../config'
import styles from './Hero.module.css'

function Hero() {
  const handleQuieroClick = () => {
    window.open(TELEGRAM_LINK, '_blank')
  }

  const handleVerPlanesClick = () => {
    document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span>La alternativa premium a Linktree</span>
        </div>
        <h1 className={styles.title}>
          <span className={styles.line1}>Tu enlace</span>
          <span className={styles.line2}>en bio,</span>
          <span className={styles.line3}>convertido.</span>
        </h1>
        <div className={styles.bottom}>
          <p className={styles.subtitle}>
            Páginas de enlaces a medida, rápidas y sin plantillas genéricas. Diseñadas
            para convertir seguidores en clientes.
          </p>
          <div className={styles.actions}>
            <button className={styles.solid} type="button" onClick={handleQuieroClick}>
              Quiero mi página →
            </button>
            <button className={styles.ghost} type="button" onClick={handleVerPlanesClick}>
              Ver planes
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
