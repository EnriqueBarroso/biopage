import FadeIn from './FadeIn'
import styles from './Portfolio.module.css'

const projects = [
  {
    name: 'LaChopin',
    tag: 'Marketplace · E-commerce',
    description:
      'Plataforma de e-commerce a medida con catálogo, carrito y checkout optimizados para conversión.',
    url: 'https://lachopin.com',
  },
  {
    name: '¡Hola, Camarada!',
    tag: 'Hub de contenido · IA',
    description:
      'Hub de contenido potenciado con IA para curar, organizar y publicar artículos de forma automática.',
    url: 'https://holacamarada.com',
  },
  {
    name: 'CineCuba',
    tag: 'Plataforma de cine · Catálogo',
    description:
      'Plataforma de cine cubano con catálogo de películas, fichas técnicas y sistema de búsqueda avanzada.',
    url: 'https://cine-cubano.com',
  },
]

function Portfolio() {
  return (
    <section id="proyectos" className={styles.portfolio}>
      <div className="container">
        <div className={styles.label}>Garantía de calidad</div>
        <h2 className={styles.title}>Código real. Proyectos en producción.</h2>
        <p className={styles.subtitle}>
          No son maquetas ni plantillas. Son productos en producción, usados por
          clientes reales todos los días.
        </p>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <FadeIn className={styles.card} delay={index * 150} key={project.name}>
              <span className={styles.tag}>{project.tag}</span>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.description}>{project.description}</p>
              <a
                className={styles.link}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto →
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
