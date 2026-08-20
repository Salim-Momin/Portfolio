"use client";

import * as THREE from "three";

import { projects } from "@/data/projects";

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
            0.004,
            6,
            220,
          ]}
        />

        <meshBasicMaterial
          color="#d7ff00"
          transparent
          opacity={0.055}
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

      {projects.map((project) => (
        <OrbitPath
        key={`orbit-${project.id}`}
        radius={project.orbitRadius}
        rotation={project.orbitTilt}
        />
      ))}

      {projects.map((project) => (
        <ProjectPlanet
          key={project.id}
          project={project}
        />
      ))}

    </group>
  );
}