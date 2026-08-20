"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

import type { Project } from "@/data/projects";

type ProjectPlanetProps = {
  project: Project;
};

export default function ProjectPlanet({
  project,
}: ProjectPlanetProps) {
  const orbitRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (orbitRef.current && !hovered) {
      orbitRef.current.rotation.z += delta * project.orbitSpeed;
    }

    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.18;
      planetRef.current.rotation.x += delta * 0.04;

      const targetScale = hovered ? 1.22 : 1;

      planetRef.current.scale.lerp(
        new THREE.Vector3(
          targetScale,
          targetScale,
          targetScale
        ),
        0.08
      );
    }
  });

  return (
    <group
      ref={orbitRef}
      rotation={[0, 0, project.startAngle]}
    >
      <group position={[project.orbitRadius, 0, 0]}>
        {/* Planet glow */}
        <mesh>
          <sphereGeometry
            args={[
              project.size * 1.32,
              32,
              32,
            ]}
          />

          <meshBasicMaterial
            color={project.color}
            transparent
            opacity={hovered ? 0.12 : 0.045}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Planet */}
        <mesh
          ref={planetRef}
          onPointerEnter={() => {
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            setHovered(false);
            document.body.style.cursor = "default";
          }}
        >
          <icosahedronGeometry
            args={[
              project.size,
              4,
            ]}
          />

          <meshStandardMaterial
            color="#080908"
            roughness={0.62}
            metalness={0.6}
            emissive={project.color}
            emissiveIntensity={hovered ? 1 : 0.4}
          />
        </mesh>

        {/* Tiny energy layer */}
        <mesh>
          <icosahedronGeometry
            args={[
              project.size * 1.025,
              2,
            ]}
          />

          <meshBasicMaterial
            color={project.color}
            wireframe
            transparent
            opacity={hovered ? 0.32 : 0.11}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Label */}
        <Html
          position={[
            0,
            -(project.size + 0.32),
            0,
          ]}
          center
          transform
          distanceFactor={8}
        >
          <div className="pointer-events-none whitespace-nowrap text-center">
            <p
              className="font-mono text-[6px] tracking-[0.24em]"
              style={{
                color: project.color,
              }}
            >
              PROJECT
            </p>

            <p className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-white">
              {project.shortName}
            </p>
          </div>
        </Html>

        {/* Hover information */}
        {hovered && (
          <Html
            position={[
              0,
              project.size + 0.75,
              0,
            ]}
            center
          >
            <div className="pointer-events-none w-[180px] border border-[#d7ff00]/30 bg-black/90 p-3 backdrop-blur-md">
              <p className="font-mono text-[7px] tracking-[0.2em] text-[#d7ff00]">
                PROJECT DETECTED
              </p>

              <h3 className="mt-2 text-sm font-semibold text-white">
                {project.name}
              </h3>

              <p className="mt-1 text-[9px] text-white/45">
                {project.category}
              </p>

              <div className="mt-3 flex flex-wrap gap-1">
                {project.technologies
                  .slice(0, 4)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 px-1.5 py-1 font-mono text-[6px] text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
              </div>

              <p className="mt-3 font-mono text-[7px] tracking-[0.15em] text-[#d7ff00]">
                CLICK TO EXPLORE →
              </p>
            </div>
          </Html>
        )}
      </group>
    </group>
  );
}