"use client";

import {
  useFrame,
} from "@react-three/fiber";

import {
  useRef,
} from "react";

import * as THREE from "three";

import {
  skills,
} from "@/data/skills";

import SkillConnection from "./SkillConnection";
import SkillStar from "./SkillStar";
import SalimCore from "./SalimCore";

export default function SkillsConstellation() {
  const groupRef =
    useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y +=
      delta * 0.015;

    groupRef.current.rotation.x =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        state.pointer.y * 0.05,
        0.02
      );

    groupRef.current.rotation.z =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -state.pointer.x * 0.03,
        0.02
      );
  });

  return (
    <group
      ref={groupRef}
      scale={0.82}
    >
        <SalimCore />
      {/* CONNECTIONS */}

      {skills.flatMap(
        (skill) =>
          skill.connections.map(
            (connectionId) => {
              const target =
                skills.find(
                  (item) =>
                    item.id ===
                    connectionId
                );

              if (!target) {
                return null;
              }

              /*
               * Prevent duplicate
               * A-B and B-A lines.
               */

              if (
                skill.id >
                target.id
              ) {
                return null;
              }

              return (
                <SkillConnection
                  key={`${skill.id}-${target.id}`}
                  start={
                    skill.position
                  }
                  end={
                    target.position
                  }
                />
              );
            }
          )
      )}

      <group>
        <mesh>
            <sphereGeometry
            args={[
                0.38,
                32,
                32,
            ]}
            />

            <meshBasicMaterial
            color="#ffffff"
            toneMapped={false}
            />
        </mesh>

        <mesh>
            <sphereGeometry
            args={[
                0.65,
                32,
                32,
            ]}
            />

            <meshBasicMaterial
            color="#d7ff00"
            transparent
            opacity={0.08}
            side={
                THREE.BackSide
            }
            depthWrite={false}
            />
        </mesh>
        </group>

      {/* STARS */}

      {skills.map(
        (skill) => (
          <SkillStar
            key={skill.id}
            skill={skill}
          />
        )
      )}

    </group>
  );
}