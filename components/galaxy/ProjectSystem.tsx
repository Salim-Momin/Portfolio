"use client";

import * as THREE from "three";

import {
  projects,
} from "@/data/projects";

import ProjectPlanet from "./ProjectPlanet";

function OrbitPath({
  radius,
  rotation,
}: {
  radius: number;

  rotation: [
    number,
    number,
    number
  ];
}) {
  return (
    <group rotation={rotation}>

      <mesh>
        <torusGeometry
          args={[
            radius,
            0.006,
            6,
            240,
          ]}
        />

        <meshBasicMaterial
          color="#d7ff00"
          transparent
          opacity={0.045}
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
        />
      </mesh>

    </group>
  );
}

export default function ProjectSystem() {
  return (
    <group>

      {/* ORBIT PATHS */}

      {projects.map(
        (project) => (
          <OrbitPath
            key={`orbit-${project.id}`}
            radius={
              project.orbitRadius
            }
            rotation={
              project.orbitTilt
            }
          />
        )
      )}

      {/* PROJECT PLANETS */}

      {projects.map(
        (project) => (
          <ProjectPlanet
            key={project.id}
            project={project}
          />
        )
      )}

    </group>
  );
}