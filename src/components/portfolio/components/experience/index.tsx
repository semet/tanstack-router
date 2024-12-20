import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform
} from 'framer-motion'
import { useEffect, useRef } from 'react'

import { Card, TExperience } from './card'
export const Experience = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const color = useMotionValue(AURORA[0])
  const backgroundImage = useMotionTemplate`linear-gradient(164deg, ${color} 0%, #00bdff 82%)`

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
      ref={targetRef}
      style={{
        backgroundImage
      }}
      className="relative h-[500vh]"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars
            radius={100}
            depth={10}
            count={5000}
            factor={10}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>
      <div className="sticky top-16 flex h-screen flex-col gap-8 overflow-hidden px-14 py-4">
        <h1
          className="text-center text-4xl font-semibold text-white"
          style={{
            textShadow: '4px 4px 2px rgba(0,0,0,0.6)'
          }}
        >
          Experience
        </h1>
        <motion.div
          style={{ x }}
          className="relative flex gap-4"
        >
          {EXPERIENCE_LIST.map((card) => {
            return (
              <Card
                {...card}
                key={card.id}
              />
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

const AURORA = ['#00d4ff', '#1E67C6', '#CE84CF', '#30cdde']

const EXPERIENCE_LIST: TExperience[] = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    date: '2020 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Facebook',
    date: '2018 - 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'Amazon',
    date: '2016 - 2018',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 4,
    title: 'Frontend Developer',
    company: 'Microsoft',
    date: '2014 - 2016',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 5,
    title: 'Software Engineer',
    company: 'Apple',
    date: '2012 - 2014',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 6,
    title: 'Frontend Developer',
    company: 'Netflix',
    date: '2010 - 2012',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: ['React', 'TypeScript', 'Node.js']
  }
]
