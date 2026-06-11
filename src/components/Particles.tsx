import { useMemo } from 'react'
import '../styles/particles.css'

const PARTICLE_COUNT = 80

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, index) => {
        const size = 1 + Math.random() * 2
        const opacity = 0.1 + Math.random() * 0.4
        const duration = 2 + Math.random() * 4

        return {
          id: index,
          style: {
            '--top': `${Math.random() * 100}%`,
            '--left': `${Math.random() * 100}%`,
            '--size': `${size}px`,
            '--opacity': opacity,
            '--duration': `${duration}s`,
            '--delay': `${Math.random() * duration}s`,
          } as React.CSSProperties,
        }
      }),
    []
  )

  return (
    <div className="particles">
      {particles.map((particle) => (
        <span className="particle" style={particle.style} key={particle.id} />
      ))}
    </div>
  )
}

export default Particles
