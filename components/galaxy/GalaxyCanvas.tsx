"use client";

import { Canvas } from "@react-three/fiber";
import GalaxyScene from "./GalaxyScene";

export default function GalaxyCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0, 11],
          fov: 50,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <GalaxyScene />
      </Canvas>
    </div>
  );
}