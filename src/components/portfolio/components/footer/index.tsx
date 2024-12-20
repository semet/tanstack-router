import { Link } from '@tanstack/react-router'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center']
  })

  const y = useTransform(scrollYProgress, [0, 0.5], [-196, 0])
  return (
    <motion.section
      style={{ y }}
      ref={ref}
      className="-z-50 h-[50vh] bg-sky-50"
    >
      <footer className="flex h-full items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold">
            Made with ❤️ by{' '}
            <Link
              href=""
              className="text-blue-500"
            >
              TanStack
            </Link>
          </p>
          <p className="text-sm text-gray-500">© 2021 TanStack</p>
        </div>
      </footer>
    </motion.section>
  )
}
