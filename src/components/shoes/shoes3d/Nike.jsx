import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 nike_air_zoom_pegasus_36.glb --transform
Author: quaz30 (https://sketchfab.com/quaz30)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nike-air-zoom-pegasus-36-00fd99e778c244c3bd3b65f99dad7cb2
Title: Nike Air Zoom Pegasus 36
*/

export function Nike(props) {
    const ref = useRef()
    const { nodes, materials } = useGLTF('/nike_air_zoom_pegasus_36.glb')
    useFrame((state) => {
      const t = state.clock.getElapsedTime()
      ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8)
      ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7
    })
    return (
      <group ref={ref}>
        <mesh receiveShadow castShadow geometry={nodes.defaultMaterial.geometry} material={materials.NikeShoe} {...props} />
      </group>
    )
  }
  
  useGLTF.preload('/nike_air_zoom_pegasus_36-transformed.glb')