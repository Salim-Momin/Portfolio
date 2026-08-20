"use client";

import { Suspense } from "react";

import CameraRig from "./CameraRig";
import ParticleField from "./ParticleField";
import SalimCore from "./SalimCore";
import ProjectSystem from "./ProjectSystem";
import StarField from "./StarField";

export default function GalaxyScene() {
  return (
    <Suspense fallback={null}>
      <color attach="background" args={["#030303"]} />

      <ambientLight intensity={0.22} />

      <directionalLight
        position={[4, 4, 5]}
        intensity={1.4}
        color="#ffffff"
      />

      <pointLight
        position={[0, 0, 2]}
        intensity={7}
        color="#d7ff00"
        distance={12}
      />

      <pointLight
        position={[-4, -2, 3]}
        intensity={2}
        color="#6d8300"
        distance={10}
      />

      <StarField />

      <ParticleField />

      <SalimCore />

      <ProjectSystem />

      <CameraRig />
      
    </Suspense>
  );
}