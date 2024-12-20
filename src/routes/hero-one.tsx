import { createFileRoute } from '@tanstack/react-router'
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  SVGMotionProps,
  useInView
} from 'framer-motion'
import { useRef } from 'react'

export const Route = createFileRoute('/hero-one')({
  component: RouteComponent
})

function RouteComponent() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 0.3], ['0%', '-100%'])
  const headingTop = useTransform(scrollYProgress, [0, 0.5], ['40%', '-100%'])
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div className="w-full bg-orange-500">
      <section
        className="relative h-screen bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1731574573959-993dda686d36?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        <motion.div
          style={{
            top: headingTop,
            opacity: headingOpacity
          }}
          className="sticky flex flex-col items-center justify-center p-4"
        >
          <h1
            style={{
              textShadow: '1px 3px 7px rgba(0,0,0,0.6)'
            }}
            className="text-8xl font-black capitalize text-white"
          >
            Life is a whatever
          </h1>
        </motion.div>
        <motion.div className="absolute bottom-0 left-0 right-0 overflow-x-hidden whitespace-nowrap bg-black bg-opacity-50 p-4 uppercase">
          <motion.div
            style={{
              x
            }}
            className="flex gap-4"
          >
            <motion.h2 className="inline-block bg-gradient-to-r from-white to-orange-500 bg-clip-text text-5xl font-bold text-transparent">
              {text}
            </motion.h2>
            <motion.h2 className="inline-block bg-gradient-to-r from-orange-500 to-white bg-clip-text text-5xl font-bold text-transparent">
              {text}
            </motion.h2>
            <motion.h2 className="inline-block bg-gradient-to-r from-white to-orange-500 bg-clip-text text-5xl font-bold text-transparent">
              {text}
            </motion.h2>
          </motion.div>
        </motion.div>
      </section>
      <AboutSection />
      <div className="h-screen" />
    </div>
  )
}

export default RouteComponent

function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start']
  })
  const { scrollYProgress: paragraphScroll } = useScroll({
    target: paragraphRef,
    offset: ['start center', 'start start']
  })
  const marginLeft = useTransform(scrollYProgress, [0, 1], [-400, 200])
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ['0.3em', '0em'])

  const pOpacity = useTransform(paragraphScroll, [0, 0.5], [1, 0.5])
  return (
    <section className="relative">
      <div className="px-4 py-6">
        <div ref={ref}>
          <div className="sticky top-10 space-y-10">
            <div className="flex gap-4">
              {aboutItems.map((item, i) => (
                <AboutCard
                  key={item.id}
                  index={i}
                  title={item.title}
                  image={item.image}
                  range={[i * 0.125, 1]}
                  marginLeft={marginLeft}
                  progress={scrollYProgress}
                />
              ))}
            </div>
            <motion.h2
              ref={paragraphRef}
              className="inline-block bg-cover bg-fixed bg-clip-text bg-center bg-no-repeat text-9xl font-black text-transparent"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1734183282010-5d741cf6952d?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                letterSpacing: letterSpacing,
                opacity: pOpacity
              }}
            >
              Enjoy Lorem Ipsum
            </motion.h2>
            <div className="flex flex-col gap-4">
              <motion.p className="text-3xl tracking-wider text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                ea deleniti iure error esse optio reprehenderit voluptas
                architecto quia, harum, at voluptatum a saepe odit vero
                molestias dolorum, quaerat laborum?
              </motion.p>
              <SvgDash />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutCard({
  index,
  title,
  image,
  range,
  marginLeft,
  progress
}: {
  index: number
  title: string
  image: string
  range: [number, number]
  marginLeft: MotionValue<number>
  progress: MotionValue<number>
}) {
  const marginTop = useTransform(progress, range, [40 * index, 0])
  return (
    <motion.div
      className="w-full overflow-hidden rounded-lg shadow-lg"
      style={{
        marginLeft: index === 0 ? 0 : marginLeft,
        marginTop: index === 0 ? 0 : marginTop
      }}
    >
      <img
        className="h-full w-full object-cover"
        src={image}
        alt={title}
      />
    </motion.div>
  )
}

function SvgDash(props: SVGMotionProps<SVGSVGElement>) {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, {
    once: true
  })
  return (
    <motion.svg
      ref={ref}
      width="1236"
      height="128"
      viewBox="0 0 1236 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <motion.path
        d="M0.666667 75C0.666667 91.2004 13.7996 104.333 30 104.333C46.2004 104.333 59.3333 91.2004 59.3333 75C59.3333 58.7997 46.2004 45.6667 30 45.6667C13.7996 45.6667 0.666667 58.7997 0.666667 75ZM250.312 117L250.739 111.517L250.312 117ZM415.938 117L416.643 122.455L415.938 117ZM620.625 49L621.977 54.3312L620.625 49ZM1229.78 13.4956C1232.82 13.6166 1235.37 11.2542 1235.5 8.21903C1235.62 5.18388 1233.25 2.62533 1230.22 2.50437L1229.78 13.4956ZM30 75C28.58 80.3135 28.5808 80.3138 28.5821 80.3141C28.5832 80.3144 28.5851 80.3149 28.5873 80.3155C28.5917 80.3167 28.5981 80.3184 28.6065 80.3206C28.6232 80.3251 28.6479 80.3317 28.6805 80.3403C28.7456 80.3577 28.8421 80.3833 28.9693 80.417C29.2237 80.4845 29.601 80.5843 30.096 80.7145C31.0859 80.9749 32.5464 81.3569 34.435 81.8451C38.2123 82.8214 43.7028 84.2225 50.5681 85.925C64.2971 89.3295 83.5314 93.9409 105.56 98.7702C149.551 108.414 204.933 118.983 249.886 122.483L250.739 111.517C206.576 108.078 151.802 97.6464 107.916 88.0254C86.0054 83.222 66.8708 78.6346 53.2157 75.2484C46.3888 73.5554 40.9335 72.1632 37.1878 71.1951C35.315 70.711 33.8697 70.333 32.8943 70.0764C32.4066 69.9481 32.0364 69.8502 31.7889 69.7845C31.6651 69.7517 31.5721 69.727 31.5104 69.7106C31.4795 69.7024 31.4565 69.6962 31.4414 69.6922C31.4339 69.6902 31.4283 69.6887 31.4247 69.6877C31.4229 69.6873 31.4218 69.6869 31.4209 69.6867C31.4202 69.6865 31.42 69.6865 30 75ZM249.886 122.483C314.107 127.484 352.627 130.733 416.643 122.455L415.232 111.545C352.449 119.665 314.932 116.515 250.739 111.517L249.886 122.483ZM416.643 122.455C461.513 116.652 492.292 104.739 522.183 91.7249C552.028 78.7307 580.65 64.8129 621.977 54.3312L619.273 43.6688C576.872 54.4227 547.289 68.7966 517.792 81.6394C488.341 94.462 458.641 105.932 415.232 111.545L416.643 122.455ZM621.977 54.3312C732.568 26.2825 884.386 16.0368 1008.87 12.8405C1071.05 11.2441 1126.29 11.4083 1165.99 11.9716C1185.84 12.2532 1201.79 12.6346 1212.78 12.9454C1218.28 13.1008 1222.53 13.2386 1225.41 13.3374C1226.85 13.3868 1227.95 13.4264 1228.68 13.4537C1229.05 13.4673 1229.32 13.4779 1229.51 13.485C1229.6 13.4885 1229.67 13.4912 1229.71 13.493C1229.74 13.4939 1229.75 13.4946 1229.77 13.495C1229.77 13.4952 1229.77 13.4954 1229.78 13.4955C1229.78 13.4956 1229.78 13.4956 1230 8.00001C1230.22 2.50437 1230.22 2.50429 1230.21 2.50416C1230.21 2.50403 1230.21 2.50384 1230.2 2.5036C1230.19 2.50311 1230.17 2.50239 1230.14 2.50144C1230.1 2.49956 1230.03 2.49677 1229.93 2.49312C1229.74 2.48583 1229.46 2.47511 1229.09 2.46129C1228.34 2.43364 1227.24 2.39361 1225.79 2.34384C1222.89 2.24431 1218.61 2.10586 1213.1 1.94981C1202.06 1.6377 1186.05 1.25514 1166.15 0.972691C1126.34 0.407827 1070.95 0.243138 1008.59 1.84417C884.008 5.04285 731.138 15.2971 619.273 43.6688L621.977 54.3312Z"
        fill="none"
        stroke={'none'}
      />
      <defs>
        <mask id="fillMask">
          {/* This is the progressive mask */}
          <motion.rect
            x="0"
            y="0"
            width="1236"
            height="128"
            rx="20" // Horizontal corner radius
            ry="20" // Vertical corner radius
            fill="white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 5, ease: 'easeInOut' }}
            style={{ originX: 0, originY: 0 }} // Ensure scaling starts from the left
          />
        </mask>
      </defs>
      <motion.path
        stroke={'none'}
        d="M0.666667 75C0.666667 91.2004 13.7996 104.333 30 104.333C46.2004 104.333 59.3333 91.2004 59.3333 75C59.3333 58.7997 46.2004 45.6667 30 45.6667C13.7996 45.6667 0.666667 58.7997 0.666667 75ZM250.312 117L250.739 111.517L250.312 117ZM415.938 117L416.643 122.455L415.938 117ZM620.625 49L621.977 54.3312L620.625 49ZM1229.78 13.4956C1232.82 13.6166 1235.37 11.2542 1235.5 8.21903C1235.62 5.18388 1233.25 2.62533 1230.22 2.50437L1229.78 13.4956ZM30 75C28.58 80.3135 28.5808 80.3138 28.5821 80.3141C28.5832 80.3144 28.5851 80.3149 28.5873 80.3155C28.5917 80.3167 28.5981 80.3184 28.6065 80.3206C28.6232 80.3251 28.6479 80.3317 28.6805 80.3403C28.7456 80.3577 28.8421 80.3833 28.9693 80.417C29.2237 80.4845 29.601 80.5843 30.096 80.7145C31.0859 80.9749 32.5464 81.3569 34.435 81.8451C38.2123 82.8214 43.7028 84.2225 50.5681 85.925C64.2971 89.3295 83.5314 93.9409 105.56 98.7702C149.551 108.414 204.933 118.983 249.886 122.483L250.739 111.517C206.576 108.078 151.802 97.6464 107.916 88.0254C86.0054 83.222 66.8708 78.6346 53.2157 75.2484C46.3888 73.5554 40.9335 72.1632 37.1878 71.1951C35.315 70.711 33.8697 70.333 32.8943 70.0764C32.4066 69.9481 32.0364 69.8502 31.7889 69.7845C31.6651 69.7517 31.5721 69.727 31.5104 69.7106C31.4795 69.7024 31.4565 69.6962 31.4414 69.6922C31.4339 69.6902 31.4283 69.6887 31.4247 69.6877C31.4229 69.6873 31.4218 69.6869 31.4209 69.6867C31.4202 69.6865 31.42 69.6865 30 75ZM249.886 122.483C314.107 127.484 352.627 130.733 416.643 122.455L415.232 111.545C352.449 119.665 314.932 116.515 250.739 111.517L249.886 122.483ZM416.643 122.455C461.513 116.652 492.292 104.739 522.183 91.7249C552.028 78.7307 580.65 64.8129 621.977 54.3312L619.273 43.6688C576.872 54.4227 547.289 68.7966 517.792 81.6394C488.341 94.462 458.641 105.932 415.232 111.545L416.643 122.455ZM621.977 54.3312C732.568 26.2825 884.386 16.0368 1008.87 12.8405C1071.05 11.2441 1126.29 11.4083 1165.99 11.9716C1185.84 12.2532 1201.79 12.6346 1212.78 12.9454C1218.28 13.1008 1222.53 13.2386 1225.41 13.3374C1226.85 13.3868 1227.95 13.4264 1228.68 13.4537C1229.05 13.4673 1229.32 13.4779 1229.51 13.485C1229.6 13.4885 1229.67 13.4912 1229.71 13.493C1229.74 13.4939 1229.75 13.4946 1229.77 13.495C1229.77 13.4952 1229.77 13.4954 1229.78 13.4955C1229.78 13.4956 1229.78 13.4956 1230 8.00001C1230.22 2.50437 1230.22 2.50429 1230.21 2.50416C1230.21 2.50403 1230.21 2.50384 1230.2 2.5036C1230.19 2.50311 1230.17 2.50239 1230.14 2.50144C1230.1 2.49956 1230.03 2.49677 1229.93 2.49312C1229.74 2.48583 1229.46 2.47511 1229.09 2.46129C1228.34 2.43364 1227.24 2.39361 1225.79 2.34384C1222.89 2.24431 1218.61 2.10586 1213.1 1.94981C1202.06 1.6377 1186.05 1.25514 1166.15 0.972691C1126.34 0.407827 1070.95 0.243138 1008.59 1.84417C884.008 5.04285 731.138 15.2971 619.273 43.6688L621.977 54.3312Z"
        fill="#FBE2BB"
        mask="url(#fillMask)"
      />
    </motion.svg>
  )
}

const text = 'Nothing in this world can take the place of persistence. '

const aboutItems = [
  {
    id: 1,
    title: 'About 1',
    image:
      'https://images.unsplash.com/photo-1699204836704-64584c44531b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'About 2',
    image:
      'https://plus.unsplash.com/premium_photo-1668989820124-0d14ee34af01?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'About 3',
    image:
      'https://plus.unsplash.com/premium_photo-1722723418754-bace38c21edd?q=80&w=2884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]
