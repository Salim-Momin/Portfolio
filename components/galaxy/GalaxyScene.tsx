"use client";

import { Suspense } from "react";

import CameraRig from "./CameraRig";
import StarField from "./StarField";
import ParticleField from "./ParticleField";

export default function GalaxyScene() {
  return (
    <Suspense fallback={null}>
      <color attach="background" args={["#030303"]} />

      <ambientLight intensity={0.25} />

      <pointLight
        position={[0, 0, 4]}
        intensity={3}
        color="#d7ff00"
      />

      <pointLight
        position={[5, 3, 2]}
        intensity={1}
        color="#ffffff"
      />

      <StarField />

      <ParticleField />

      <CameraRig />
    </Suspense>
  );
}