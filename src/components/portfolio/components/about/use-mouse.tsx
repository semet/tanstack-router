import { useEffect, useState } from 'react'

interface MousePosition {
  x: number
  y: number
}

export function useMouseMove<T extends HTMLElement>(ref: React.RefObject<T>) {
  const [position, setPosition] = useState<MousePosition | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      setPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      })
    }

    element.addEventListener('mousemove', handleMouseMove)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
    }
  }, [ref])

  return position
}
