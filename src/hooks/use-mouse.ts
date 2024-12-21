import { useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

const options = { damping: 20 }

export const useMouse = () => {
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options)
  }

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const { clientX, clientY } = e
      const multiplier = 0.5
      const x = (-0.5 + clientX / innerWidth) * multiplier
      const y = (-0.5 + clientY / innerHeight) * multiplier
      mouse.x.set(x)
      mouse.y.set(y)
    }
    window.addEventListener('mousemove', manageMouseMove)
    return () => window.removeEventListener('mousemove', manageMouseMove)
  }, [mouse.x, mouse.y])

  return mouse
}
