import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>© {new Date().getFullYear()} Biopage. Todos los derechos reservados.</span>
        <span>Páginas de enlaces premium para marcas que no se conforman.</span>
      </div>
    </footer>
  )
}

export default Footer
