import { useRegion } from '../context/RegionContext'
import styles from './Hero.module.css'

function Hero() {
  const { config } = useRegion()

  const handleQuieroClick = () => {
    window.open(config.contactUrl, '_blank')
  }

  const handleVerPlanesClick = () => {
    document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span>{config.hero.eyebrow}</span>
        </div>
        <h1 className={styles.title}>
          <span className={styles.line1}>{config.hero.line1}</span>
          <span className={styles.line2}>{config.hero.line2}</span>
          <span className={styles.line3}>{config.hero.line3}</span>
        </h1>
        {config.heroNote && <p className={styles.heroNote}>{config.heroNote}</p>}
        <div className={styles.bottom}>
          <p className={styles.subtitle}>{config.hero.subtitle}</p>
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
