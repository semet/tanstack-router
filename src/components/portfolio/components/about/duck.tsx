import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion-3d'

import { useMouse } from './use-mouse'

export const Duck = () => {
  const mouse = useMouse()

  const DuckObject = () => {
    const duck = useGLTF('/simple_duck.glb')

    return (
      <primitive
        object={duck.scene}
        scale={3}
      />
    )
  }

  return (
    <motion.mesh
      rotation-x={mouse.y}
      rotation-y={mouse.x}
      position={[0, 1, 0]}
    >
      <directionalLight
        position={[0, 80, 10]}
        intensity={6}
      />
      <ambientLight />
      <OrbitControls enableZoom={false} />

      <DuckObject />
    </motion.mesh>
  )
}

useGLTF.preload('/simple_duck.glb')
