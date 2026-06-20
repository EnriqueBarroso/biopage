import { useRegion } from '../context/RegionContext'
import FadeIn from './FadeIn'
import RevealText from './RevealText'
import styles from './QueEsBiopage.module.css'

function QueEsBiopage() {
  const { region } = useRegion()

  if (region !== 'CU') return null

  return (
    <section className={styles.queEs}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.label}>¿Qué es esto exactamente?</div>
          <h2 className={styles.title}>
            <RevealText text="Una página con todo tu negocio, en un solo enlace." />
          </h2>
          <p className={styles.text}>
            Imagina una tarjeta de presentación digital: tu nombre, tus fotos, lo que
            ofreces, tus precios y un botón para que te escriban directo. Todo en una
            sola página que funciona en cualquier celular, rápida incluso con datos
            lentos.
          </p>
        </div>
        <FadeIn className={styles.mockupWrap}>
          <div className={styles.mockup}>
            <div className={styles.mockupName}>Paladar El Buen Sabor</div>
            <div className={styles.mockupTagline}>Comida criolla en La Habana</div>
            <div className={styles.mockupButtons}>
              <span className={styles.mockupButtonSolid}>Ver menú</span>
              <span className={styles.mockupButtonGhost}>Reservar mesa</span>
              <span className={styles.mockupButtonGhost}>WhatsApp</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default QueEsBiopage
