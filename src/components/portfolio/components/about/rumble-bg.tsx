import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { FC, useEffect } from 'react'

export const RumbleBg: FC<{ isInVew: boolean }> = ({ isInVew }) => {
  const createRandomColor = () =>
    `rgba(${Math.floor(Math.random() * 50)}, ${Math.floor(
      Math.random() * 50
    )}, ${Math.floor(Math.random() * 50)}, 1)`

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${GRID_COLUMNS}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`
      }}
    >
      {Array.from({ length: GRID_COLUMNS * GRID_ROWS }).map((_, i) => (
        <AnimatedCell
          key={i}
          randomColor={createRandomColor()}
          delay={Math.random() * 0.5}
          isInVew={isInVew}
        />
      ))}
    </motion.div>
  )
}

// Animated cell component
const AnimatedCell: FC<{
  randomColor: string
  delay: number
  isInVew: boolean
}> = ({ randomColor, delay, isInVew }) => {
  const animationProgress = useMotionValue(0)

  const bgColor = useTransform(
    animationProgress,
    [0, 1],
    [randomColor, TRANSPARENT]
  )
  useEffect(() => {
    animationProgress.set(0) // Reset animation progress to 0
    const controls = animate(animationProgress, 1, {
      ease: 'easeInOut',
      duration: 1, // Adjust duration of the animation
      delay: delay // Delay for the animation
    })
    if (isInVew) {
      controls.play()
    }

    return () => controls.stop()
  }, [animationProgress, delay, isInVew])

  return (
    <motion.div
      style={{
        backgroundColor: bgColor
      }}
    />
  )
}

// Constants
const TRANSPARENT = 'rgba(0, 0, 0, 0)'
const GRID_COLUMNS = 12
const GRID_ROWS = 12
