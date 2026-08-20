"use client";

import {
  Billboard,
  Html,
  Sparkles,
} from "@react-three/drei";

import {
  useFrame,
} from "@react-three/fiber";

import {
  useRef,
  useState,
} from "react";

import * as THREE from "three";

import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiGoogle,
  SiOllama,
} from "react-icons/si";

import {
  Bot,
  BrainCircuit,
  Workflow,
} from "lucide-react";

import type {
  Skill,
} from "@/data/skills";

type Props = {
  skill: Skill;
};

function SkillIcon({
  id,
}: {
  id: string;
}) {
  const iconClass =
    "h-6 w-6 text-[#d7ff00] drop-shadow-[0_0_10px_rgba(215,255,0,0.75)]";

  switch (id) {
    case "python":
      return (
        <FaPython
          className={iconClass}
        />
      );

    case "typescript":
      return (
        <SiTypescript
          className={iconClass}
        />
      );

    case "javascript":
      return (
        <SiJavascript
          className={iconClass}
        />
      );

    case "react":
      return (
        <FaReact
          className={iconClass}
        />
      );

    case "nextjs":
      return (
        <SiNextdotjs
          className={iconClass}
        />
      );

    case "tailwind":
      return (
        <SiTailwindcss
          className={iconClass}
        />
      );

    case "fastapi":
      return (
        <SiFastapi
          className={iconClass}
        />
      );

    case "flask":
      return (
        <SiFlask
          className={iconClass}
        />
      );

    case "postgresql":
      return (
        <SiPostgresql
          className={iconClass}
        />
      );

    case "sql":
      return (
        <FaDatabase
          className={iconClass}
        />
      );

    case "gemini":
      return (
        <SiGoogle
          className={iconClass}
        />
      );

    case "ollama":
      return (
        <SiOllama
          className={iconClass}
        />
      );

    case "git":
      return (
        <FaGitAlt
          className={iconClass}
        />
      );

    case "github":
      return (
        <FaGithub
          className={iconClass}
        />
      );

    case "ai":
      return (
        <BrainCircuit
          className={iconClass}
        />
      );

    case "agents":
      return (
        <Bot
          className={iconClass}
        />
      );

    case "automation":
      return (
        <Workflow
          className={iconClass}
        />
      );

    case "rag":
      return (
        <BrainCircuit
          className={iconClass}
        />
      );

    default:
      return (
        <BrainCircuit
          className={iconClass}
        />
      );
  }
}

export default function SkillStar({
  skill,
}: Props) {
  const rootRef =
    useRef<THREE.Group>(null);

  const shellRef =
    useRef<THREE.Mesh>(null);

  const ringRef =
    useRef<THREE.Mesh>(null);

  const [hovered, setHovered] =
    useState(false);

  useFrame((state, delta) => {
    const time =
      state.clock.elapsedTime;

    if (rootRef.current) {
      const target =
        hovered ? 1.25 : 1;

      rootRef.current.scale.lerp(
        new THREE.Vector3(
          target,
          target,
          target
        ),
        0.08
      );
    }

    if (shellRef.current) {
      shellRef.current.rotation.x +=
        delta * 0.15;

      shellRef.current.rotation.y +=
        delta * 0.2;

      const pulse =
        1 +
        Math.sin(
          time * 2 +
            skill.position[0]
        ) *
          0.05;

      shellRef.current.scale.setScalar(
        pulse
      );
    }

    if (ringRef.current) {
      ringRef.current.rotation.z +=
        delta * 0.35;
    }
  });

  return (
    <group
      ref={rootRef}
      position={skill.position}
    >
      {/* OUTER GLOW */}

      <Billboard follow>
        <mesh>
          <circleGeometry
            args={[
              skill.size * 4,
              64,
            ]}
          />

          <meshBasicMaterial
            color="#d7ff00"
            transparent
            opacity={
              hovered
                ? 0.14
                : 0.05
            }
            blending={
              THREE.AdditiveBlending
            }
            depthWrite={false}
          />
        </mesh>
      </Billboard>

      {/* ENERGY SHELL */}

      <mesh ref={shellRef}>
        <icosahedronGeometry
          args={[
            skill.size * 1.7,
            2,
          ]}
        />

        <meshBasicMaterial
          color="#d7ff00"
          wireframe
          transparent
          opacity={
            hovered
              ? 0.4
              : 0.16
          }
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
        />
      </mesh>

      {/* DARK REACTOR BODY */}

      <mesh
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
            skill.size * 1.15,
            32,
            32,
          ]}
        />

        <meshStandardMaterial
          color="#070807"
          emissive="#d7ff00"
          emissiveIntensity={
            hovered
              ? 1.8
              : 0.6
          }
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* ICON */}

      <Html
        position={[
          0,
          0,
          skill.size * 1.22,
        ]}
        center
        transform
        distanceFactor={9}
      >
        <div className="pointer-events-none flex h-10 w-10 items-center justify-center rounded-full border border-[#d7ff00]/20 bg-black/70 shadow-[0_0_20px_rgba(215,255,0,0.15)] backdrop-blur-md">
          <SkillIcon
            id={skill.id}
          />
        </div>
      </Html>

      {/* ENERGY RING */}

      <mesh
        ref={ringRef}
        rotation={[
          1.1,
          0.45,
          0,
        ]}
      >
        <torusGeometry
          args={[
            skill.size * 1.6,
            0.008,
            6,
            96,
          ]}
        />

        <meshBasicMaterial
          color="#d7ff00"
          transparent
          opacity={
            hovered
              ? 0.75
              : 0.28
          }
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
        />
      </mesh>

      {/* PARTICLES */}

      <Sparkles
        count={10}
        scale={
          skill.size * 4
        }
        size={1.2}
        speed={0.2}
        opacity={0.45}
        color="#d7ff00"
      />

      {/* LABEL */}

      <Html
        position={[
          0,
          -(skill.size + 0.42),
          0,
        ]}
        center
        distanceFactor={10}
      >
        <div className="pointer-events-none whitespace-nowrap text-center">

          <p className="font-mono text-[5px] tracking-[0.22em] text-[#d7ff00]/45">
            {skill.category}
          </p>

          <p className="mt-1 text-[8px] font-medium tracking-[0.13em] text-white/80">
            {skill.name}
          </p>

        </div>
      </Html>

      {/* HOVER PANEL */}

      {hovered && (
        <Html
          position={[
            skill.size + 1.3,
            0.35,
            0,
          ]}
          center
        >
          <div className="pointer-events-none w-[220px] border border-[#d7ff00]/25 bg-black/95 p-4 backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <SkillIcon
                id={skill.id}
              />

              <div>
                <p className="font-mono text-[6px] tracking-[0.18em] text-[#d7ff00]">
                  SKILL SIGNATURE
                </p>

                <h3 className="mt-1 text-sm font-semibold text-white">
                  {skill.name}
                </h3>
              </div>

            </div>

            <div className="my-3 h-px bg-white/10" />

            <p className="text-[9px] leading-5 text-white/45">
              {skill.description}
            </p>

            <p className="mt-3 font-mono text-[6px] tracking-[0.15em] text-[#d7ff00]">
              NODE ONLINE
            </p>

          </div>
        </Html>
      )}
    </group>
  );
}