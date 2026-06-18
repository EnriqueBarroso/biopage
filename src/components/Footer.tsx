import { Link } from 'react-router-dom'
import { useRegion } from '../context/RegionContext'
import styles from './Footer.module.css'

function Footer() {
  const { config } = useRegion()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>© {new Date().getFullYear()} Biopage. Todos los derechos reservados.</span>
        <span>Páginas de enlaces premium para marcas que no se conforman.</span>
      </div>
      {config.crossLink && (
        <div className="container">
          <Link className={styles.crossLink} to={config.crossLink.url}>
            {config.crossLink.text}
          </Link>
        </div>
      )}
    </footer>
  )
}

export default Footer
