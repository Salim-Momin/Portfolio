"use client";

import { Html, useTexture } from "@react-three/drei";
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
  const atmosphereRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);

  const texture = useTexture(project.texture);

  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame((state, delta) => {
    if (orbitRef.current && !hovered) {
      orbitRef.current.rotation.z +=
        delta * project.orbitSpeed;
    }

    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.1;
      planetRef.current.rotation.x += delta * 0.01;

      const scale = hovered ? 1.18 : 1;

      planetRef.current.scale.lerp(
        new THREE.Vector3(scale, scale, scale),
        0.08
      );
    }

    if (atmosphereRef.current) {
      const pulse =
        1 +
        Math.sin(
          state.clock.elapsedTime * 2 +
            project.startAngle
        ) *
          0.03;

      atmosphereRef.current.scale.setScalar(pulse);
    }
  });

  return (
    
      <group rotation={project.orbitTilt}>

  <group
    ref={orbitRef}
    rotation={[
      0,
      0,
      project.startAngle,
    ]}
  ></group>
      <group
        position={[
          project.orbitRadius,
          0,
          0,
        ]}
      >
        {/* ATMOSPHERE */}

        <mesh ref={atmosphereRef}>
          <sphereGeometry
            args={[
              project.size * 1.2,
              48,
              48,
            ]}
          />

          <meshBasicMaterial
            color={project.color}
            transparent
            opacity={hovered ? 0.12 : 0.04}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* REAL TEXTURED PLANET */}

        <mesh
          ref={planetRef}
          onPointerEnter={(event) => {
            event.stopPropagation();

            setHovered(true);

            document.body.style.cursor =
              "pointer";
          }}
          onPointerLeave={(event) => {
            event.stopPropagation();

            setHovered(false);

            document.body.style.cursor =
              "default";
          }}
        >
          <sphereGeometry
            args={[
              project.size,
              64,
              64,
            ]}
          />

          <meshStandardMaterial
            map={texture}
            roughness={0.78}
            metalness={0.12}
          />
        </mesh>

        {/* ENERGY OUTLINE */}

        <mesh>
          <sphereGeometry
            args={[
              project.size * 1.015,
              32,
              32,
            ]}
          />

          <meshBasicMaterial
            color={project.color}
            transparent
            wireframe
            opacity={hovered ? 0.16 : 0.035}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* PROJECT LABEL */}

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

        {/* HOVER CARD */}

        {hovered && (
          <Html
            position={[
              0,
              project.size + 0.8,
              0,
            ]}
            center
          >
            <div className="pointer-events-none w-[190px] border border-[#d7ff00]/25 bg-black/90 p-3 shadow-[0_0_30px_rgba(215,255,0,0.08)] backdrop-blur-xl">

              <p className="font-mono text-[6px] tracking-[0.2em] text-[#d7ff00]">
                PROJECT DETECTED
              </p>

              <h3 className="mt-2 text-sm font-semibold text-white">
                {project.name}
              </h3>

              <p className="mt-1 text-[8px] text-white/40">
                {project.category}
              </p>

              <div className="mt-3 flex flex-wrap gap-1">

                {project.technologies.map(
                  (tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 px-1.5 py-1 font-mono text-[6px] text-white/45"
                    >
                      {tech}
                    </span>
                  )
                )}

              </div>

              <p className="mt-3 font-mono text-[6px] tracking-[0.15em] text-[#d7ff00]">
                CLICK TO EXPLORE →
              </p>

            </div>
          </Html>
        )}

      </group>
    </group>
  );
}