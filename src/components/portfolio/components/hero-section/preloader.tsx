import { motion } from 'framer-motion'
export const Preloader = () => {
  return (
    <div className="absolute z-50 flex h-full w-full flex-col">
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
    </div>
  )
}
