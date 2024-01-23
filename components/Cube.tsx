import { Vector3, useFrame, useLoader } from "@react-three/fiber";
import React, { MutableRefObject, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Edges, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { StaticImageData } from "next/image";

interface CubeProps {
  position: Vector3;
  color: string;
  image: StaticImageData;
}

export const Cube: React.FC<CubeProps> = ({ position, color, image }) => {

  const [side, setSide] = useState(0);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    
    const pageWidth = window.innerWidth;
    
    if(pageWidth > 1336){
      setSide(2);
    }else if(pageWidth > 1220 && pageWidth < 1336){
      setSide(1.9);
    }
    else if(pageWidth > 1024 && pageWidth < 1220){
      setSide(1.8);
    }
    else if(pageWidth > 900 && pageWidth < 1024){
      setSide(1.7);
    }
    else if(pageWidth > 768 && pageWidth < 900){
      setSide(1.5);
    }
    else if(pageWidth > 550 && pageWidth < 768){
      setSide(1.3);
    }
    
    setMount(true)
    console.log(pageWidth)
  }, [])
  

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

  if(mount){

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
} else{
  return ;
}
};
