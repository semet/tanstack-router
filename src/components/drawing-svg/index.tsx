import { motion } from 'framer-motion'
export const DrawingSvg = () => {
  return (
    <div className="container mx-auto flex justify-center bg-slate-100 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-60"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          stroke="cyan"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }} //pathOffset: 0 make the drawing animation start from the end of the path
          transition={{ duration: 4, ease: 'easeInOut' }}
          d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
        />
      </svg>
    </div>
  )
}
