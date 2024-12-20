import { createFileRoute } from '@tanstack/react-router'
import anime from 'animejs'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/splash-dots')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <section
      style={{
        backgroundImage:
          'radial-gradient(80% 125% at 80% 0%, #020617 50%, #1E67C6)'
      }}
      className="relative flex min-h-screen items-center justify-start bg-slate-950 px-4 py-24 text-slate-200"
    >
      <div className="flex flex-col px-4">
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-start text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Lorem ipsum dolor sit amet consectetur .
        </h1>
        <p className="my-6 max-w-xl text-start text-base leading-relaxed md:text-lg md:leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
          distinctio eum impedit nihil ipsum modi.
        </p>
        <motion.button
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          tabIndex={0}
        >
          Call to action
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
      <WaterDropGrid />
    </section>
  )
}

const GRID_WIDTH = 25
const GRID_HEIGHT = 20
function WaterDropGrid() {
  const dots = []
  let index = 0

  const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    anime({
      targets: '.dot-point',
      scale: [
        {
          value: 1.35,
          easing: 'easeOutSine',
          duration: 250
        },
        {
          value: 1,
          easing: 'easeInOutQuad', // Corrected typo
          duration: 500
        }
      ],
      translateY: [
        {
          value: -15,
          easing: 'easeOutSine',
          duration: 250
        },
        {
          value: 0,
          easing: 'easeInOutQuad',
          duration: 500
        }
      ],
      opacity: [
        {
          value: 1,
          easing: 'easeOutSine',
          duration: 250
        },
        {
          value: 0.5,
          easing: 'easeInOutQuad',
          duration: 500
        }
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: Number(e.currentTarget.dataset.index)
      })
    })
  }

  for (let i = 0; i < GRID_HEIGHT; i++) {
    for (let j = 0; j < GRID_WIDTH; j++) {
      dots.push(
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <div
          onClick={handleDotClick}
          key={`${i}-${j}`}
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
        >
          <div
            data-index={index}
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-600 to-slate-400 opacity-50 group-hover:from-[#1E67C6] group-hover:to-indigo-400"
          />
        </div>
      )
      index++
    }
  }

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`
      }}
      className="grid"
    >
      {dots}
    </div>
  )
}
