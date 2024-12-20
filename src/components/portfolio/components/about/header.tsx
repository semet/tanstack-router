import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { MyFace } from './my-face'

export const Header = () => {
  const ref = useRef(null)
  const isInVew = useInView(ref, { once: true })
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.01
      }
    },
    hidden: {}
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 70
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }
  const TITLE = 'About'

  return (
    <div
      ref={ref}
      className="relative z-[999] flex w-[50%] flex-col justify-start"
    >
      <div className="flex flex-col items-start py-0">
        <h1 className="text-5xl font-bold text-white">
          {TITLE.split('').map((letter, index) => {
            return (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: -100 }}
                animate={isInVew ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            )
          })}
        </h1>
        <motion.div
          className="prose-lg text-white"
          initial="hidden"
          animate={isInVew ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {TEXT.split('').map((char, i) => (
            <motion.span
              className="inline-block"
              key={i}
              variants={childVariants}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                type: 'spring'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="relative h-full content-end overflow-hidden">
        <MyFace />
      </div>
    </div>
  )
}

const TEXT =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium facere nam. Quia culpa quis porro molestias! Corporis aliquam neque velit illum, nisi ipsum! Quo aperiam similique officia vel cum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed vero ea ex obcaecati culpa. Voluptates, ad reprehenderit. Tempore ullam nobis rerum, non asperiores praesentium est nisi tempora obcaecati qui numquam?'
