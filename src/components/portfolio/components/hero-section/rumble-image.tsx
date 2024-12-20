import { motion } from 'framer-motion'
export const RumbleImage = () => {
  return (
    <div
      className="absolute inset-0 z-0 grid grid-cols-3 opacity-30"
      style={{
        transform: 'rotate(-10deg)'
      }}
    >
      {ITEMS.map((item, index) => (
        <motion.div
          key={item.id}
          className="relative"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, index % 2 === 0 ? 10 : -10, index % 2 === 0 ? 10 : -10],
            transition: {
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror'
            }
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity hover:opacity-50" />
        </motion.div>
      ))}
    </div>
  )
}

const ITEMS = [
  {
    id: 1,
    title: 'React',
    image:
      'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'React',
    image:
      'https://images.unsplash.com/photo-1648260296289-ab882814a005?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'React',
    image:
      'https://images.unsplash.com/photo-1679167564752-4efa9c43eefc?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]
