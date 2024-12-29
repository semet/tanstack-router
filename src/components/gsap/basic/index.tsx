import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const BasicGsapAnimation = () => {
  const containerRef = useRef(null)
  const itemRefs = useRef(null)
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: itemRefs.current, // Targeting first card (or dynamically for each)
          start: 'top top', // Trigger when the top of the card reaches the center of the viewport,
          scrub: true, // Smooth animation with scroll,
          pin: true // Pin the card to the top of the viewport
        }
      })

      tl.from('.box-left', {
        xPercent: -100
      })
        .to('.box-left', {
          xPercent: 0
        })
        .to(
          '.text-one',
          {
            yPercent: 70
          },
          '-=1'
        )
        .to(
          '.image-one',
          {
            scale: 1.2
          },
          '-=1'
        )
      tl.from(
        '.button-one',
        {
          marginTop: 500
        },
        '<='
      )

        .to(
          '.button-one',
          {
            marginTop: 100,
            delay: 2
          },
          '<='
        )
    },
    {
      scope: containerRef
    }
  )

  return (
    <section
      ref={containerRef}
      className="overflow-hidden"
    >
      <div
        ref={itemRefs}
        className={`item-one h-screen`}
        style={{
          backgroundColor: 'red'
        }}
      >
        <div className="relative h-full w-full">
          <div
            className={`text-one absolute inset-0 z-10 flex items-center justify-center`}
          >
            <h1 className="bg-white p-4 text-2xl text-slate-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
            </h1>
          </div>
          <div
            className="box-left absolute z-10 flex flex-col justify-center gap-6 bg-black bg-opacity-70 text-white"
            style={{
              left: 0,
              top: 0,
              height: '100%',
              width: '100%'
            }}
          >
            <p className="text-center text-4xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
              numquam? Deleniti, neque voluptas sunt vel, officia quos deserunt
              quaerat, blanditiis nam officiis quo molestias dolore minima
              tempora laudantium. Ex, at.
            </p>
            <div className="button-one flex justify-center">
              <button className="bg-white p-2 text-black">Click me</button>
            </div>
          </div>
          <img
            src="https://plus.unsplash.com/premium_photo-1668989820124-0d14ee34af01?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Demo 1"
            className={`image-one h-full w-full object-cover`}
          />
        </div>
      </div>
    </section>
  )
}
