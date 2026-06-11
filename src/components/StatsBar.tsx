import { useEffect, useRef, useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import FadeIn from './FadeIn'
import styles from './StatsBar.module.css'

const DURATION = 1800

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

interface CounterProps {
  to: number
  decimals?: number
  prefix?: string
  suffix?: string
}

function Counter({ to, decimals = 0, prefix = '', suffix = '' }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useScrollReveal(ref)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let frame: number
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1)
      setValue(to * easeOut(progress))

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [isVisible, to])

  return (
    <div className={styles.number} ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </div>
  )
}

function StatsBar() {
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.statsBar}`}>
        <FadeIn className={styles.stat} delay={0}>
          <Counter to={120} prefix="+" />
          <div className={styles.label}>Páginas entregadas</div>
        </FadeIn>
        <FadeIn className={styles.stat} delay={150}>
          <Counter to={3.4} decimals={1} suffix="×" />
          <div className={styles.label}>Más conversión vs Linktree</div>
        </FadeIn>
        <FadeIn className={styles.stat} delay={300}>
          <div className={styles.number}>5 días</div>
          <div className={styles.label}>Entrega media</div>
        </FadeIn>
      </div>
    </div>
  )
}

export default StatsBar
