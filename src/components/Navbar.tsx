import { useEffect, useState } from 'react'
import { WA_BASE } from '../config'
import styles from './Navbar.module.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleEmpezarClick = () => {
    const url = `${WA_BASE}?text=${encodeURIComponent(
      'Hola, me interesa crear mi página de enlaces con Biopage.'
    )}`
    window.open(url, '_blank')
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>Biopage</span>
        <ul className={styles.links}>
          <li>
            <a className={styles.link} href="#planes">
              Planes
            </a>
          </li>
          <li>
            <a className={styles.link} href="#proyectos">
              Proyectos
            </a>
          </li>
          <li>
            <a className={styles.link} href="#faq">
              FAQ
            </a>
          </li>
        </ul>
        <button className={styles.cta} type="button" onClick={handleEmpezarClick}>
          Empezar →
        </button>
      </div>
    </nav>
  )
}

export default Navbar
