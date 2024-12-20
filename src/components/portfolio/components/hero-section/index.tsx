import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform
} from 'framer-motion'
import { useEffect } from 'react'

import { Preloader } from './preloader'
import { RumbleImage } from './rumble-image'
import { Stacks } from './stack'

export const HeroSection = () => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%'])
  const textContainerY = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['50%', '-10%']
  )
  const color = useMotionValue(AURORA[0])
  const backgroundImage = useMotionTemplate`linear-gradient(180deg, rgba(63,94,251,1) 24%, ${color} 100%)`

  useEffect(() => {
    animate(color, AURORA, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <motion.section
      style={{
        backgroundImage
      }}
      className="relative h-screen overflow-hidden"
    >
      <Preloader />
      <motion.div
        className="absolute inset-0 z-10 bg-white"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          maskImage:
            'linear-gradient(176deg, rgba(63,94,251,1) 0%, rgba(252,70,107,0) 100%)'
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: textContainerY,
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        className="z-30 rounded-br-2xl rounded-tl-2xl bg-sky-400 text-white shadow"
      >
        <div className="flex flex-col items-center p-4">
          <h1 className="text-4xl font-bold">Hello, I'm Tanstack</h1>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </motion.div>
      <RumbleImage />
      <motion.div className="absolute bottom-0 left-0 right-0 overflow-x-hidden whitespace-nowrap bg-black bg-opacity-70 p-4 uppercase">
        <motion.div
          style={{
            x
          }}
          className="relative z-50 flex gap-10"
        >
          <Stacks />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

const AURORA = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']
