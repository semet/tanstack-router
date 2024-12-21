import { motion } from 'framer-motion'
export const Preloader = () => {
  return (
    <motion.div
      className="absolute z-50 flex h-full w-full flex-col"
      style={{
        transformOrigin: 'right'
      }}
      initial={{
        x: '0%'
      }}
      animate={{
        x: '100%'
      }}
      transition={{
        duration: 1.5,
        delay: 1.5
      }}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          initial={{
            x: '0%'
          }}
          animate={{
            x: '100%'
          }}
          transition={{
            duration: 1,
            delay: index * 0.2
          }}
          key={index}
          className="h-full w-full bg-black/70"
        />
      ))}
    </motion.div>
  )
}
