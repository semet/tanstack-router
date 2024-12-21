import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { motion, Reorder } from 'framer-motion'
import { useState } from 'react'

export const Route = createLazyFileRoute('/')({
  component: Index
})

function Index() {
  const [items, setItems] = useState(dummyData)
  return (
    <motion.div className="container mx-auto mt-10 max-w-screen-sm rounded bg-slate-100 p-4">
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="space-y-4"
      >
        {items.map((data) => (
          <Reorder.Item
            key={data.id}
            value={data}
          >
            <div className="z-10 cursor-grab rounded-xl bg-slate-300 p-4 active:z-30 active:cursor-grabbing active:bg-slate-400 active:shadow-md">
              <Link to={data.href}>{data.name}</Link>
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </motion.div>
  )
}

const dummyData = [
  {
    id: 1,
    href: 'aurora-gradient',
    name: 'Aurora Gradient'
  },
  {
    id: 2,
    href: 'hero-grid-scroll',
    name: 'Hero Grid Scroll'
  },
  {
    id: 3,
    href: 'splash-dots',
    name: 'Splash Dots'
  },
  {
    id: 4,
    href: 'svg-animation',
    name: 'SVG Animation'
  },
  {
    id: 5,
    href: 'hero-one',
    name: 'Animated X Direction'
  },
  {
    id: 6,
    href: 'portfolio',
    name: 'Portfolio'
  }
]
