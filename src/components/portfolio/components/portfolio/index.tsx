import {
  MotionValue,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform
} from 'framer-motion'
import { useEffect, useRef } from 'react'

export const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef
  })
  const angelValue = [1, 360]
  const angel = useMotionValue(50)
  const innerOpacity = useTransform(scrollYProgress, [0.4, 1], [1, 0])
  const innerScale = useTransform(scrollYProgress, [0, 1], [1, 0.2])
  const innerBackground = useMotionTemplate`conic-gradient(from ${angel}deg at 50% 50%, #0ea5e9, #0cafe5, #0bbae1, #09c3dd, #08cdd8, #07d4d3, #05d0c2, #04ccb1)`
  useEffect(() => {
    animate(angel, angelValue, {
      ease: 'easeInOut',
      duration: 5,
      repeat: Infinity
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      ref={containerRef}
      className="h-[400vh] bg-cover bg-fixed bg-center p-4"
      style={{
        backgroundImage: 'url(/abstract.png)'
      }}
    >
      <div className="sticky top-16 z-0 grid h-[90vh] grid-cols-3 grid-rows-3 gap-4 overflow-hidden">
        <motion.div
          style={{
            opacity: innerOpacity,
            scale: innerScale,
            transformOrigin: 'center',
            top: '50%',
            left: '50%',
            translateX: '-50%',
            translateY: '-50%'
          }}
          className="absolute"
        >
          <div className="relative flex w-screen flex-col items-center justify-center bg-white p-8 shadow md:w-full">
            <motion.div
              className="absolute -inset-0.5 -z-30"
              style={{
                backgroundImage: innerBackground,
                filter: 'blur(3px)'
              }}
            />
            <h1 className="max-w-xl text-center text-5xl font-bold capitalize text-stone-950 md:text-6xl">
              My work in action
            </h1>
            <p className="my-6 max-w-xl text-center text-sm text-stone-600 md:text-base">
              My work in action blends creativity and functionality, showcasing
              seamless, user-focused design and development solutions.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-violet-600 px-4 py-2 font-medium text-white transition-colors hover:bg-violet-800">
                View more
              </button>
              <button className="bg-transparent px-4 py-2 font-medium text-stone-950 transition-colors hover:bg-stone-200">
                Contact me
              </button>
            </div>
          </div>
        </motion.div>
        {GRID_ITEMS.map((item, index) => (
          <ItemCard
            key={item.id}
            item={item}
            index={index}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}

function ItemCard({
  item,
  index,
  scrollProgress
}: {
  item: (typeof GRID_ITEMS)[0]
  index: number
  scrollProgress: MotionValue<number>
}) {
  const scale = useTransform(scrollProgress, [0, 1], [0.5, 1])
  const y = useTransform(scrollProgress, [0, 1], ['-105%', '0%'])

  return (
    <motion.div
      className="group relative overflow-hidden shadow"
      style={{
        gridColumn: `span ${item.colSpan}`,
        gridRow: `span ${item.rowSpan}`,
        transformOrigin:
          index === 0
            ? 'top left'
            : index === 1
              ? 'top right'
              : index === 2
                ? 'bottom left'
                : index === 3
                  ? 'top'
                  : index === 4
                    ? 'bottom'
                    : 'bottom right',
        scale,
        y: index === 3 ? y : 0
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-105"
        style={{
          backgroundImage: `url(${item.image})`
        }}
      />
      <motion.div className="absolute inset-0 -left-full flex origin-left flex-col items-center justify-center bg-black/50 opacity-0 transition-all duration-300 hover:-left-0 hover:opacity-100">
        <button className="group relative">
          <div className="absolute top-0 h-full w-full bg-black/50 blur transition-all duration-300 group-hover:-right-2 group-hover:-top-2" />
          <div className="relative rounded-br-2xl rounded-tl-2xl bg-sky-500 p-4 text-white hover:bg-sky-700">
            Look Inside
          </div>
        </button>
      </motion.div>
    </motion.div>
  )
}

const GRID_ITEMS: {
  id: number
  name: string
  colSpan: number
  image: string
  rowSpan: number
  colStart?: number
  rowStart?: number
}[] = [
  {
    id: 1,
    name: 'Item 1',
    colSpan: 2,
    rowSpan: 1,
    image:
      'https://plus.unsplash.com/premium_photo-1682146042060-3617a8f344c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'Item 2',
    colSpan: 1,
    rowSpan: 2,
    image:
      'https://plus.unsplash.com/premium_photo-1683141119010-6ac8b0682e1a?q=80&w=2738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Item 3',
    colSpan: 1,
    rowSpan: 2,
    image:
      'https://images.unsplash.com/photo-1648260295976-de09f77ab469?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    name: 'Item 4',
    colSpan: 1,
    rowSpan: 1,
    image:
      'https://plus.unsplash.com/premium_photo-1722126194509-cac735c3ee68?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    name: 'Item 5',
    colSpan: 1,
    rowSpan: 1,
    image:
      'https://plus.unsplash.com/premium_photo-1720715202866-c3f23c60a165?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    name: 'Item 6',
    colSpan: 1,
    rowSpan: 1,
    image:
      'https://plus.unsplash.com/premium_photo-1721910821733-426f4435f1ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]
