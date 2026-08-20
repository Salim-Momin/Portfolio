"use client";

import * as THREE from "three";

import { projects } from "@/data/projects";

import ProjectPlanet from "./ProjectPlanet";

function OrbitPath({
  radius,
}: {
  radius: number;
}) {
  return (
    <mesh rotation={[0, 0, 0]}>
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
        opacity={0.065}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function ProjectSystem() {
  return (
    <group>

      {projects.map((project) => (
        <OrbitPath
          key={`orbit-${project.id}`}
          radius={project.orbitRadius}
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