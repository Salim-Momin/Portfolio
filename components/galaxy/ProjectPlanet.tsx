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
import { useGalaxyStore } from "@/store/galaxyStore";
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

  const selectedProjectId =
  useGalaxyStore(
    (state) =>
      state.selectedProjectId
  );

const selectProject =
  useGalaxyStore(
    (state) =>
      state.selectProject
  );

  const setSelectedProjectPosition =
  useGalaxyStore(
    (state) =>
      state.setSelectedProjectPosition
  );

  const lastUpdateRef =
  useRef(0);

const isSelected =
  selectedProjectId === project.id;

  const worldPositionRef =
  useRef<THREE.Vector3>(
    new THREE.Vector3()
  );

const anotherProjectSelected =
  selectedProjectId !== null &&
  !isSelected;

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
      !hovered &&
      selectedProjectId === null
    ) {
      orbitRef.current.rotation.z +=
        delta *
        project.orbitSpeed;
    }

    // PLANET ROOT SCALE + FLOAT
    if (planetRootRef.current) {
      let targetScale = 1;

      if (hovered) {
        targetScale = 1.12;
      }

      if (isSelected) {
        targetScale = 1.35;
      }

      if (anotherProjectSelected) {
        targetScale = 0.85;
      }

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

    if (
  planetRootRef.current &&
  isSelected &&
  state.clock.elapsedTime -
    lastUpdateRef.current >
    0.03
) {
  planetRootRef.current.getWorldPosition(
    worldPositionRef.current
  );

  setSelectedProjectPosition({
    x: worldPositionRef.current.x,
    y: worldPositionRef.current.y,
    z: worldPositionRef.current.z,
  });
  lastUpdateRef.current =
  state.clock.elapsedTime;
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

          {isSelected && (
  <Html
    position={[
      0,
      project.size + 1.25,
      0,
    ]}
    center
  >
    <div className="pointer-events-none whitespace-nowrap">

      <div className="flex items-center gap-2 font-mono text-[6px] tracking-[0.22em] text-[#d7ff00]">

        <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff00] shadow-[0_0_10px_#d7ff00]" />

        TARGET LOCKED

      </div>

    </div>
  </Html>
)}

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

                  onClick={(event) => {
                    event.stopPropagation();

                    if (planetRootRef.current) {
                      planetRootRef.current.getWorldPosition(
                        worldPositionRef.current
                      );

                      setSelectedProjectPosition({
                        x: worldPositionRef.current.x,
                        y: worldPositionRef.current.y,
                        z: worldPositionRef.current.z,
                      });
                    }

                    selectProject(project.id);
                  }}

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
                  opacity={
                    anotherProjectSelected
                      ? 0.16
                      : 1
                  }
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