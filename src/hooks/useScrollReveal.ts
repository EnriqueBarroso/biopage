import { useEffect, useState, type RefObject } from 'react'

function useScrollReveal(ref: RefObject<Element | null>, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [ref, threshold])

  return isVisible
}

export default useScrollReveal
