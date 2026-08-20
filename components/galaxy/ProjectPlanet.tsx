"use client";

import {
  Billboard,
  Html,
  useTexture,
} from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

import {
  useRef,
  useState,
} from "react";

import * as THREE from "three";

import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectPlanet({
  project,
}: Props) {
  const orbitRef = useRef<THREE.Group>(null);
  const planetRootRef = useRef<THREE.Group>(null);
  const imageRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] =
    useState(false);

  const texture =
    useTexture(project.image);

  texture.colorSpace =
    THREE.SRGBColorSpace;

  useFrame((state, delta) => {
    const time =
      state.clock.elapsedTime;

    // ORBIT
    if (
      orbitRef.current &&
      !hovered
    ) {
      orbitRef.current.rotation.z +=
        delta *
        project.orbitSpeed;
    }

    // PLANET ROOT SCALE + FLOAT
    if (planetRootRef.current) {
      const targetScale =
        hovered ? 1.12 : 1;

      const currentScale =
        planetRootRef.current.scale.x;

      const newScale =
        THREE.MathUtils.lerp(
          currentScale,
          targetScale,
          0.08
        );

      planetRootRef.current.scale.setScalar(
        newScale
      );

      planetRootRef.current.position.y =
        Math.sin(
          time * 0.8 +
            project.startAngle
        ) * 0.045;
    }

    // VERY SLOW IMAGE ROTATION
    if (imageRef.current) {
      imageRef.current.rotation.z +=
        delta * 0.008;
    }

    // GLOW PULSE
    if (glowRef.current) {
      const pulse =
        1 +
        Math.sin(
          time * 1.6 +
            project.startAngle
        ) *
          0.035;

      glowRef.current.scale.setScalar(
        pulse
      );
    }
  });

  return (
    <group
      rotation={project.orbitTilt}
    >
      <group
        ref={orbitRef}
        rotation={[
          0,
          0,
          project.startAngle,
        ]}
      >
        <group
          position={[
            project.orbitRadius,
            0,
            project.depth,
          ]}
        >
          <group ref={planetRootRef}>

            {/* OUTER GLOW */}

            <Billboard follow>
              <mesh
                ref={glowRef}
                position={[
                  0,
                  0,
                  -0.08,
                ]}
              >
                <circleGeometry
                  args={[
                    project.size *
                      1.13,
                    96,
                  ]}
                />

                <meshBasicMaterial
                  color={
                    project.accent
                  }
                  transparent
                  opacity={
                    hovered
                      ? 0.14
                      : 0.055
                  }
                  blending={
                    THREE.AdditiveBlending
                  }
                  depthWrite={false}
                />
              </mesh>
            </Billboard>

            {/* DARK BACKPLATE */}

            <Billboard follow>
              <mesh
                position={[
                  0,
                  0,
                  -0.04,
                ]}
              >
                <circleGeometry
                  args={[
                    project.size *
                      1.015,
                    96,
                  ]}
                />

                <meshBasicMaterial
                  color="#020202"
                  transparent
                  opacity={0.92}
                />
              </mesh>
            </Billboard>

            {/* PLANET IMAGE */}

            <Billboard follow>
              <mesh
                ref={imageRef}
                onPointerEnter={(
                  event
                ) => {
                  event.stopPropagation();

                  setHovered(true);

                  document.body.style.cursor =
                    "pointer";
                }}
                onPointerLeave={(
                  event
                ) => {
                  event.stopPropagation();

                  setHovered(false);

                  document.body.style.cursor =
                    "default";
                }}
              >
                <circleGeometry
                  args={[
                    project.size,
                    96,
                  ]}
                />

                <meshBasicMaterial
                  map={texture}
                  transparent
                  toneMapped={false}
                  side={
                    THREE.DoubleSide
                  }
                />
              </mesh>
            </Billboard>

            {/* ENERGY RING */}

            <Billboard follow>
              <mesh
                position={[
                  0,
                  0,
                  0.03,
                ]}
              >
                <ringGeometry
                  args={[
                    project.size *
                      1.035,
                    project.size *
                      1.055,
                    96,
                  ]}
                />

                <meshBasicMaterial
                  color={
                    project.accent
                  }
                  transparent
                  opacity={
                    hovered
                      ? 0.75
                      : 0.22
                  }
                  blending={
                    THREE.AdditiveBlending
                  }
                  depthWrite={false}
                />
              </mesh>
            </Billboard>

            {/* PROJECT LABEL */}

            <Html
              position={[
                0,
                -project.size -
                  0.28,
                0,
              ]}
              center
              distanceFactor={10}
            >
              <div className="pointer-events-none whitespace-nowrap text-center">

                <p
                  className="font-mono text-[5px] tracking-[0.28em]"
                  style={{
                    color:
                      project.accent,
                  }}
                >
                  PROJECT NODE
                </p>

                <p className="mt-1 text-[8px] font-medium tracking-[0.14em] text-white/90">
                  {project.shortName}
                </p>

              </div>
            </Html>

            {/* HOVER CARD */}

            {hovered && (
              <Html
                position={[
                  project.size +
                    0.75,
                  0.35,
                  0,
                ]}
                center
              >
                <div
                  className="pointer-events-none w-[200px] border bg-black/95 p-3 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                  style={{
                    borderColor:
                      `${project.accent}55`,
                  }}
                >
                  <p
                    className="font-mono text-[6px] tracking-[0.2em]"
                    style={{
                      color:
                        project.accent,
                    }}
                  >
                    PROJECT DETECTED
                  </p>

                  <h3 className="mt-2 text-sm font-semibold text-white">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-[8px] text-white/40">
                    {
                      project.category
                    }
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1">

                    {project.technologies.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="border border-white/10 px-1.5 py-1 font-mono text-[6px] text-white/50"
                        >
                          {tech}
                        </span>
                      )
                    )}

                  </div>

                  <div className="mt-3 border-t border-white/10 pt-2">

                    <p
                      className="font-mono text-[6px] tracking-[0.15em]"
                      style={{
                        color:
                          project.accent,
                      }}
                    >
                      CLICK TO EXPLORE →
                    </p>

                  </div>
                </div>
              </Html>
            )}

          </group>
        </group>
      </group>
    </group>
  );
}