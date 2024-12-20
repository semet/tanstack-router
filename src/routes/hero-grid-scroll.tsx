import { createFileRoute } from '@tanstack/react-router'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const Route = createFileRoute('/hero-grid-scroll')({
  component: RouteComponent
})

function RouteComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef
  })
  const innerOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1])
  const innerScale = useTransform(scrollYProgress, [0.5, 1], [0.2, 1])
  return (
    <section
      ref={containerRef}
      className="h-[350vh] bg-red-100 bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: 'url(/wall-cube.jpg)'
      }}
    >
      <div className="sticky top-0 z-0 grid h-screen grid-cols-3 grid-rows-3 gap-4 overflow-hidden p-4">
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
          className="absolute z-50 flex flex-col items-center justify-center bg-white p-8 shadow"
        >
          <h1 className="max-w-xl text-center text-5xl font-bold capitalize text-stone-950 md:text-7xl">
            Interior Design for your home
          </h1>
          <p className="my-6 max-w-xl text-center text-sm text-stone-600 md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, minus
            nisi? Quod praesentium quaerat possimus.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-violet-600 px-4 py-2 font-medium text-white transition-colors hover:bg-violet-600">
              Contact us
            </button>
            <button className="bg-transparent px-4 py-2 font-medium text-stone-950 transition-colors hover:bg-stone-200">
              Learn about us
            </button>
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
  const scale = useTransform(scrollProgress, [0, 1], [1, 0.5])
  const y = useTransform(scrollProgress, [0, 1], ['0%', '-105%'])
  const borderRadius = useTransform(scrollProgress, [0, 1], [0, 50])
  return (
    <motion.div
      className="relative overflow-hidden bg-cover bg-center shadow"
      style={{
        backgroundImage: `url(${item.image})`,
        gridColumn: `span ${item.colSpan}`,
        gridRow: `span ${item.rowSpan}`,
        borderRadius,
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
        y: index === 3 ? y : 0,
        zIndex: index === 3 ? 52 : 1
      }}
    >
      <motion.div className="absolute inset-0 -left-full flex origin-left flex-col items-center justify-center bg-black/50 opacity-0 transition-all duration-300 hover:-left-0 hover:opacity-100">
        <button className="group relative">
          <div className="absolute top-0 h-full w-full bg-black/30 blur transition-all duration-300 group-hover:-right-2 group-hover:-top-2" />
          <div className="relative bg-black p-4 text-white">Look Inside</div>
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
      'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 2,
    name: 'Item 2',
    colSpan: 1,
    rowSpan: 2,
    image:
      'https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 3,
    name: 'Item 3',
    colSpan: 1,
    rowSpan: 2,
    image:
      'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yfGVufDB8fDB8fHww'
  },
  {
    id: 4,
    name: 'Item 4',
    colSpan: 1,
    rowSpan: 1,
    image:
      'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yfGVufDB8fDB8fHww'
  },
  {
    id: 5,
    name: 'Item 5',
    colSpan: 1,
    rowSpan: 1,
    image:
      'https://plus.unsplash.com/premium_photo-1671269942067-bb709a81273c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGludGVyaW9yfGVufDB8fDB8fHww'
  },
  {
    id: 6,
    name: 'Item 6',
    colSpan: 1,
    rowSpan: 1,
    image:
      'https://images.unsplash.com/photo-1514846160150-2cfb150b48ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGludGVyaW9yfGVufDB8fDB8fHww'
  }
]
