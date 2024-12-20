import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createFileRoute } from '@tanstack/react-router'

import { Model } from '@/components'

export const Route = createFileRoute('/react-tree')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 400], zoom: 30 }}
      style={{
        width: '100%',
        height: '100vh'
      }}
    >
      <Model />

      <Environment preset="forest" />
    </Canvas>
  )
}
