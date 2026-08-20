"use client";

import {
  Canvas,
} from "@react-three/fiber";

import GalaxyScene from "./GalaxyScene";

export default function GalaxyCanvas() {
  return (
    <div className="absolute inset-0">

      <Canvas
        camera={{
          position: [
            7.5,
            4.5,
            14.5,
          ],
          fov: 46,
          near: 0.1,
          far: 220,
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