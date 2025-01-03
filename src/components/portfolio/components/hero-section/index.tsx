import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion'
import { useEffect } from 'react'

import { MyFace } from './my-face'
import { Preloader } from './preloader'
import { Signature } from './signature'
import { Stacks } from './stack'

export const HeroSection = () => {
  const { scrollYProgress } = useScroll()
  const xRaw = useTransform(scrollYProgress, [0, 0.5], [0, -1000])
  const x = useSpring(xRaw, {
    damping: 100,
    stiffness: 400,
    mass: 3,
    bounce: 0
  })
  const textContainerY = useTransform(scrollYProgress, [0, 0.5], ['0%', '150%'])
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
        className="absolute inset-0 bg-white"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          maskImage:
            'linear-gradient(176deg, rgba(63,94,251,1) 0%, rgba(252,70,107,0) 100%)'
        }}
      />
      <motion.div
        style={{
          y: textContainerY
        }}
        className="absolute left-0 top-0 z-10 flex h-full w-full"
      >
        <div className="self-end">
          <MyFace />
        </div>
        <div className="flex flex-col self-end">
          <motion.div className="rounded-br-2xl rounded-tl-2xl bg-sky-400 text-white shadow">
            <div className="flex flex-col items-center gap-2 px-8 py-4">
              <h1 className="text-6xl font-bold">Hello, I'm Hamdani</h1>
              <p className="text-lg">
                A frontend engineer crafts seamless interfaces, blending design
                with function.
              </p>
            </div>
          </motion.div>
          <div className="h-96 w-96">
            <Signature />
          </div>
        </div>
      </motion.div>

      {/* <RumbleImage /> */}
      <motion.div className="absolute bottom-0 left-0 right-0 z-20 overflow-x-hidden whitespace-nowrap bg-black bg-opacity-70 p-4 uppercase">
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
