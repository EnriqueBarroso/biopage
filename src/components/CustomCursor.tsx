import { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

const DOT_LAG = 0.35
const RING_LAG = 0.12

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1025px)')
    const update = () => setIsDesktop(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const dotPos = { ...mouse }
    const ringPos = { ...mouse }
    let frame: number

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button')) {
        setIsHovering(true)
      }
    }

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button')) {
        setIsHovering(false)
      }
    }

    const animate = () => {
      dotPos.x += (mouse.x - dotPos.x) * DOT_LAG
      dotPos.y += (mouse.y - dotPos.y) * DOT_LAG
      ringPos.x += (mouse.x - ringPos.x) * RING_LAG
      ringPos.y += (mouse.y - ringPos.y) * RING_LAG

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.x}px, ${dotPos.y}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`
      }

      frame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleOver)
    window.addEventListener('mouseout', handleOut)
    frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleOver)
      window.removeEventListener('mouseout', handleOut)
      cancelAnimationFrame(frame)
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <>
      <div className={styles.dot} ref={dotRef} />
      <div
        className={`${styles.ring} ${isHovering ? styles.ringHover : ''}`}
        ref={ringRef}
      />
    </>
  )
}

export default CustomCursor
