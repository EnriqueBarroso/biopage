import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import styles from './RevealText.module.css'

interface RevealTextProps {
  text: string
}

function RevealText({ text }: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isVisible = useScrollReveal(ref)
  const words = text.split(' ')

  return (
    <span ref={ref}>
      {words.map((word, index) => (
        <span
          className={`${styles.word} ${isVisible ? styles.visible : ''}`}
          style={{ transitionDelay: `${index * 80}ms` }}
          key={index}
        >
          {word}
          {index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  )
}

export default RevealText
