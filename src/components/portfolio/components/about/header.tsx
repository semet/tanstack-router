import { motion } from 'framer-motion'

export const Header = () => {
  const TITLE = 'About'
  return (
    <motion.div className="relative flex w-[60%] flex-col justify-start">
      <motion.div
        whileInView={'visible'}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-4 py-0"
      >
        <h1 className="text-5xl font-bold text-white">
          {TITLE.split('').map((letter, index) => {
            return (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: [0, -150 * index, 0]
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  textShadow: '4px 4px 2px rgba(0,0,0,0.6)'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            )
          })}
        </h1>
        <motion.p
          className="prose-lg rounded-lg bg-white p-4 text-slate-500 shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {TEXT}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

const TEXT =
  'I started coding more than 10 years ago when the good old PHP and Double-clicking index.html was a thing. I then learned more advance languages like HTML (I am one of those who believe HTML is a Programming Language itself 😂), CSS, JavsScript, TypeScript, MySql and many more. I also spent my time learning some stuffs like Reactjs, Vuejs, Nextjs, Nodejs (especially Express), and a good amount of time diving Rest API. But my primary Language is Javascript (React/Nextjs) and PHP (Laravel) . I know GraphQL a little bit and I keep myself Up-to-Date with the information about the languages and technologies that I use. I claim myself to be one of those Fullstack Developer because I can do Front-end Design, good understanding of Rest API and how to connect both. By the way, I also know Laravel very well (incase you need a PHP Developer). I currently work in a leading tech company called Synergyse Tech. I work full time as Frontend Developer by using Nextjs as the main framework.'
