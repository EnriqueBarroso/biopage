import FadeIn from './FadeIn'
import styles from './Portfolio.module.css'

const projects = [
  {
    name: 'LaChopin',
    tag: 'Marketplace · E-commerce',
    description:
      'Plataforma de e-commerce a medida con catálogo, carrito y checkout optimizados para conversión.',
    url: 'https://lachopin.com',
    bgClass: styles.bgChopin,
    // background-image: url('/assets/portfolio/lachopin.jpg')
  },
  {
    name: '¡Hola, Camarada!',
    tag: 'Hub de contenido · IA',
    description:
      'Hub de contenido potenciado con IA para curar, organizar y publicar artículos de forma automática.',
    url: 'https://holacamarada.com',
    bgClass: styles.bgCamarada,
    // background-image: url('/assets/portfolio/holacamarada.jpg')
  },
  {
    name: 'CineCuba',
    tag: 'Plataforma de cine · Catálogo',
    description:
      'Plataforma de cine cubano con catálogo de películas, fichas técnicas y sistema de búsqueda avanzada.',
    url: 'https://cine-cubano.com',
    bgClass: styles.bgCineCuba,
    // background-image: url('/assets/portfolio/cinecuba.jpg')
  },
]

function Portfolio() {
  return (
    <section id="proyectos" className={styles.portfolio}>
      <div className="container">
        <FadeIn>
          <div className={styles.label}>Garantía de calidad</div>
          <h2 className={styles.title}>Código real. Proyectos en producción.</h2>
          <p className={styles.subtitle}>
            No son maquetas ni plantillas. Son productos en producción, usados por
            clientes reales todos los días.
          </p>
        </FadeIn>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <FadeIn delay={index * 150} key={project.name}>
              <div className={styles.card}>
                {/* Clip container */}
                <div className={styles.imageWrap}>
                  {/* Zoomable background layer */}
                  <div className={`${styles.imageBg} ${project.bgClass}`}>
                    {/* Poster texture */}
                    <div className={styles.posterText} aria-hidden="true">
                      <span>{project.name}</span>
                      <span>{project.name}</span>
                    </div>
                  </div>

                  {/* Dark overlay (always present, darkens on hover via CSS) */}
                  <div className={styles.overlay} />

                  {/* Badge: top-right */}
                  <div className={styles.badge}>
                    <span className={styles.badgeDot} />
                    EN PRODUCCIÓN
                  </div>

                  {/* Default info: project name + tag at bottom */}
                  <div className={styles.cardInfo}>
                    <div className={styles.tag}>{project.tag}</div>
                    <h3 className={styles.name}>{project.name}</h3>
                  </div>

                  {/* Hover content: description + CTA */}
                  <div className={styles.hoverContent}>
                    <p className={styles.description}>{project.description}</p>
                    <a
                      className={styles.ctaBtn}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver proyecto →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
