import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createFileRoute } from '@tanstack/react-router'
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue
} from 'framer-motion'
import { useEffect } from 'react'
export const Route = createFileRoute('/aurora-gradient')({
  component: RouteComponent
})

function RouteComponent() {
  const color = useMotionValue(AURORA[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`
  const buttonBorder = useMotionTemplate`1px solid ${color}`
  const buttonBoxShadow = useMotionTemplate`0px 4px 24px ${color}`

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
      className="relative grid min-h-screen place-content-center bg-slate-950 px-4 py-24 text-slate-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Beta Now Live!
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Decrease your SaaS churn by over 90%
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
          distinctio eum impedit nihil ipsum modi.
        </p>
        <motion.button
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          tabIndex={0}
          style={{
            border: buttonBorder,
            boxShadow: buttonBoxShadow
          }}
        >
          Start free trial
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
            ></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </motion.button>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>
    </motion.section>
  )
}

const AURORA = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']
