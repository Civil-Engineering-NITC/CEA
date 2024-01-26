import { Canvas } from "@react-three/fiber";
import React from "react";
import { Cube } from "./Cube";
import { StaticImageData } from "next/image";

interface CubeCanvasProps {
  img: StaticImageData;
}

export const CubeCanvas: React.FC<CubeCanvasProps> = ({ img }) => {
  return (
    <Canvas
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <ambientLight intensity={2} />
      <Cube position={[0, 0, 0]} color="green" image={img} side={2} />
    </Canvas>
  );
};
