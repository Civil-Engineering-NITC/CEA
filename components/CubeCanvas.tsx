import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Cube } from './Cube'

export const CubeCanvas = () => {
  return (
    <Canvas
    style={{ background: "#3C3C3C"}}
    >
        <ambientLight intensity={2} />
        <Cube position={[0,0,0]} color='green' side={2} />
    </Canvas>
  )
}
