"use client";

import { Suspense } from "react";

import CameraRig from "./CameraRig";
import ParticleField from "./ParticleField";
import SalimCore from "./SalimCore";
import ProjectSystem from "./ProjectSystem";
import StarField from "./StarField";
import GalaxyControls from "./GalaxyControls";

export default function GalaxyScene() {
  return (
    <Suspense fallback={null}>
      <color attach="background" args={["#030303"]} />

      <ambientLight
        intensity={0.15}
      />

      <directionalLight
        position={[6, 7, 8]}
        intensity={2}
        color="#ffffff"
      />

      <pointLight
        position={[0, 0, 0]}
        intensity={12}
        color="#d7ff00"
        distance={16}
      />

      <pointLight
        position={[-6, -3, 4]}
        intensity={2}
        color="#536600"
        distance={14}
      />

      <StarField />

      <ParticleField />

      <SalimCore />

      <ProjectSystem />

      <GalaxyControls />

      <CameraRig />

    </Suspense>
  );
}