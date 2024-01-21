import { Vector3, useFrame, useLoader } from "@react-three/fiber";
import React, { MutableRefObject, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Edges, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { StaticImageData } from "next/image";

interface CubeProps {
  position: Vector3;
  side: number;
  color: string;
  image: StaticImageData;
}

export const Cube: React.FC<CubeProps> = ({ position, side, color, image }) => {
  const mesh: MutableRefObject<THREE.Mesh | null> = useRef(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.25;
      mesh.current.rotation.y += delta * 0.25;
      mesh.current.rotation.z += delta * 0.25;
    }
  });

  const texture_1 = useLoader(TextureLoader, image.src);
  const texture_2 = useLoader(TextureLoader, "/transparent.png");

  console.log(position);

  return (
    <group>
      <mesh position={position}>
        <boxGeometry args={[side - 1, side - 1, side - 1]} />
        <meshBasicMaterial transparent map={texture_1} />
      </mesh>
      <mesh position={position} ref={mesh}>
        <boxGeometry args={[side, side, side]} />
        {/* <meshStandardMaterial transparent map={texture_2}/> */}
        <meshPhongMaterial color="white" opacity={0.1} transparent />
        <Edges color={"#6A6A6A"} />
      </mesh>
    </group>
  );
};
