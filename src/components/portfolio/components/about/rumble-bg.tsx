import { motion } from 'framer-motion'

export const RumbleBg = () => {
  const createRandomColor = () =>
    `rgba(${Math.floor(Math.random() * 50)}, ${Math.floor(
      Math.random() * 50
    )}, ${Math.floor(Math.random() * 50)}, 1)`

  return (
    <motion.div
      className="absolute inset-0 z-50 overflow-hidden"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${GRID_COLUMNS}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`
      }}
    >
      {Array.from({ length: GRID_COLUMNS * GRID_ROWS }).map((_, i) => (
        <motion.div
          style={{
            backgroundColor: createRandomColor()
          }}
          key={i}
          whileInView={{
            backgroundColor: [createRandomColor(), 'transparent'],
            transition: {
              duration: 0.5,
              delay: Math.random() * 0.3
            }
          }}
        />
      ))}
    </motion.div>
  )
}

const GRID_COLUMNS = 30
const GRID_ROWS = 30
