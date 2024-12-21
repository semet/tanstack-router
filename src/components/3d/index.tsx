import { useGLTF, useAnimations } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import { Group } from 'three'

type ModelProps = JSX.IntrinsicElements['group']

export const Model: React.FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { nodes, materials, animations } = useGLTF('/looping_snow_2.glb') as any
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action?.reset().play() // Reset and play all animations
      })
    }
    return () => {
      Object.values(actions).forEach((action) => {
        action?.stop() // Stop animations on unmount
      })
    }
  }, [actions])

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group name="root">
            <group
              name="GLTF_SceneRootNode"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="BakeSimArmature_202">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Snowflake}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="_0_201" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

// Preload the model
useGLTF.preload('/looping_snow_2.glb')
