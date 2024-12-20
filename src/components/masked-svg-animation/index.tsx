import { motion } from 'framer-motion'

export const MaskedSvgAnimation = () => {
  return (
    <div className="container mx-auto flex justify-center bg-slate-100 p-4">
      <motion.svg
        viewBox="0 0 512 512"
        height="200px"
        width="200px"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Path for Stroke */}
        <motion.path
          d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Mask to Create the Fill Effect */}
        <defs>
          <mask id="fillMask">
            {/* This is the progressive mask */}
            <motion.rect
              x="0"
              y="0"
              width="512"
              height="512"
              rx="20" // Horizontal corner radius
              ry="20" // Vertical corner radius
              fill="white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: 'easeInOut' }}
              style={{ originX: 0, originY: 0 }} // Ensure scaling starts from the left
            />
          </mask>
        </defs>

        {/* Filled Path Using the Mask */}
        <motion.path
          d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"
          fill="green"
          mask="url(#fillMask)"
        />
      </motion.svg>
    </div>
  )
}
