"use client";

import { Suspense } from "react";

import CameraRig from "./CameraRig";
import ParticleField from "./ParticleField";
import SalimCore from "./SalimCore";
import ProjectSystem from "./ProjectSystem";
import StarField from "./StarField";
import GalaxyControls from "./GalaxyControls";
import SkillsConstellation from "./SkillsConstellation";
import {
  useGalaxyStore,
} from "@/store/galaxyStore";
import FreeCameraControls from "./FreeCameraControls";

export default function GalaxyScene() {
  const activeSection =
  useGalaxyStore(
    (state) =>
      state.activeSection
  );
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

      {activeSection !==
        "SKILLS" && (
        <SalimCore />
      )}

      {(
        activeSection ===
          "GALAXY" ||
        activeSection ===
          "PROJECTS"
      ) && (
        <ProjectSystem />
      )}

      {activeSection ===
        "SKILLS" && (
        <SkillsConstellation />
      )}

      <GalaxyControls />

      <CameraRig />

    </Suspense>
  );
}