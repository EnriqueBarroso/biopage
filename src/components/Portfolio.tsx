import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'
import styles from './Portfolio.module.css'
import lachopinImg from '../assets/portfolio/lachopin.jpg'
import cinecubaImg from '../assets/portfolio/cinecuba.jpg'
import demoBiopageImg from '../assets/portfolio/demo-biopage.jpg'

const projects = [
  {
    name: 'LaChopin',
    tag: 'Marketplace · E-commerce',
    description:
      'Plataforma de e-commerce a medida con catálogo, carrito y checkout optimizados para conversión.',
    url: 'https://lachopin.com',
    image: lachopinImg,
    bgPosition: 'center top',
  },
  {
    name: 'CineCuba',
    tag: 'Plataforma de cine · Catálogo',
    description:
      'Plataforma de cine cubano con catálogo de películas, fichas técnicas y sistema de búsqueda avanzada.',
    url: 'https://cine-cubano.com',
    image: cinecubaImg,
    bgPosition: 'center top',
  },
]

const demoProject = {
  name: 'Paladar El Buen Sabor',
  tag: 'Demo en vivo · Biopage',
  description: 'Así se ve una Biopage real terminada. Navega la página completa como la vería tu cliente.',
  to: '/demo',
  image: demoBiopageImg,
  bgPosition: 'center',
}

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
                {/* Image zone: image only, no text on top */}
                <div className={styles.imageZone}>
                  <div
                    className={styles.imageBg}
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundPosition: project.bgPosition,
                    }}
                  />
                  <div className={styles.badge}>
                    <span className={styles.badgeDot} />
                    EN PRODUCCIÓN
                  </div>
                </div>

                {/* Info zone: solid background, always visible */}
                <div className={styles.infoZone}>
                  <div className={styles.tag}>{project.tag}</div>
                  <h3 className={styles.name}>{project.name}</h3>
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
            </FadeIn>
          ))}
          <FadeIn delay={projects.length * 150}>
            <div className={styles.card}>
              {/* Image zone: image only, no text on top */}
              <div className={styles.imageZone}>
                <div
                  className={styles.imageBg}
                  style={{
                    backgroundImage: `url(${demoProject.image})`,
                    backgroundPosition: demoProject.bgPosition,
                  }}
                />
                <div className={styles.badge}>
                  <span className={styles.badgeDot} />
                  VER DEMO →
                </div>
              </div>

              {/* Info zone: solid background, always visible */}
              <div className={styles.infoZone}>
                <div className={styles.tag}>{demoProject.tag}</div>
                <h3 className={styles.name}>{demoProject.name}</h3>
                <p className={styles.description}>{demoProject.description}</p>
                <Link className={styles.ctaBtn} to={demoProject.to}>
                  Ver demo →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
