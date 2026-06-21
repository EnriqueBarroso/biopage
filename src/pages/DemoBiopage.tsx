import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import styles from './DemoBiopage.module.css'

const links = [
  { icon: '📋', label: 'Ver nuestro menú completo', href: '#' },
  { icon: '📍', label: 'Cómo llegar (Google Maps)', href: '#' },
  { icon: '📱', label: 'Reservar mesa por WhatsApp', href: '#' },
  { icon: '⭐', label: 'Déjanos tu reseña', href: '#' },
  { icon: '📸', label: 'Síguenos en Instagram', href: '#' },
  { icon: '🎉', label: 'Promociones de la semana', href: '#' },
]

function DemoBiopage() {
  return (
    <div className={styles.page}>
      <Link className={styles.backBtn} to="/cuba">
        ← Volver a Biopage
      </Link>

      <div className={styles.container}>
        <div className={styles.banner} />

        <FadeIn>
          <div className={styles.avatar}>EB</div>
          <h1 className={styles.name}>Paladar El Buen Sabor</h1>
          <p className={styles.subtitle}>Comida criolla casera · La Habana, Cuba</p>
          <p className={styles.bio}>
            Sabores de siempre, hechos con cariño. Abierto de martes a domingo, 12pm-10pm.
          </p>
        </FadeIn>

        <div className={styles.links}>
          {links.map((link, index) => (
            <FadeIn delay={150 + index * 80} key={link.label}>
              <a className={styles.linkBtn} href={link.href}>
                <span className={styles.linkIcon}>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={150 + links.length * 80}>
          <div className={styles.footer}>
            <span className={styles.madeWith}>
              <span className={styles.madeWithLogo}>Biopage</span>
              Hecho con Biopage
            </span>
            <Link className={styles.ctaBtn} to="/cuba#planes">
              ¿Quieres una página como esta para tu negocio? → Quiero la mía
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default DemoBiopage
