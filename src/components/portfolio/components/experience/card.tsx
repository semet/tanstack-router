import {
  animate,
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue
} from 'framer-motion'
import { FC, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

const ANGEL_ONE = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const ANGEL_TWO = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
export const Card: FC<
  TExperience & {
    skewX: MotionValue<number>
  }
> = (experience) => {
  const angleOne = useMotionValue(ANGEL_ONE[0])
  const angleTwo = useMotionValue(ANGEL_TWO[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at ${angleOne}% ${angleTwo}%, rgba(0,108,255,1) 0%, rgba(0,241,255,1) 82%)`

  useEffect(() => {
    animate(angleTwo, ANGEL_ONE, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
    animate(angleOne, ANGEL_TWO, {
      ease: 'easeInOut',
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <motion.div
      style={{
        skewX: experience.skewX,
        rotateZ: experience.skewX,
        backgroundColor: 'rgba(0, 108, 255, 0.5)'
      }}
      className={twMerge(['relative left-0 h-[75vh] min-w-[550px] p-4 shadow'])}
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage
        }}
      />
      <h2 className="text-2xl font-bold text-slate-700">{experience.title}</h2>
      <h3 className="text-lg font-semibold text-slate-600">
        {experience.company}
      </h3>
      <p className="text-sm">{experience.date}</p>
      <p className="text-sm">{experience.description}</p>
      <div className="flex gap-2">
        {experience.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg bg-sky-500 px-2 py-1 text-white"
          >
            {technology}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export type TExperience = {
  id: number
  title: string
  company: string
  date: string
  description: string
  technologies: string[]
}
