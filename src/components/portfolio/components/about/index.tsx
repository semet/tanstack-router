import { Shadow } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

import { Duck } from './duck'
import { Header } from './header'
import { RumbleBg } from './rumble-bg'

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative z-10 flex h-screen bg-sky-400 bg-gradient-to-b bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage: `url('/cloud.png')`
      }}
    >
      <RumbleBg />
      <div className="pl-14">
        <Header />
      </div>
      <div className="w-1/2">
        <Canvas
          className="cursor-grab"
          camera={{ fov: 80, near: 0.1, far: 1000, position: [-5, 4, 5] }}
          gl={{ alpha: true }}
        >
          <Duck />
          <Shadow
            scale={[6, 4, 2]} // Increase the size of the shadow plane
            color="black"
            colorStop={0}
            opacity={0.5}
            position={[0, 1, 0]} // Position of the shadow plane`
            fog={false} // Reacts to fog (default=false)
          />
        </Canvas>
      </div>
    </section>
  )
}
