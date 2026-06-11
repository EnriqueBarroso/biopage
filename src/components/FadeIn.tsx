import { useRef, type ReactNode } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useScrollReveal(ref)

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default FadeIn
