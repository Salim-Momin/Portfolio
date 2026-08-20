"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import OrbitRings from "./OrbitRings";
import CoreParticles from "./CoreParticles";

export default function SalimCore() {
  const planetRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const energyRef = useRef<THREE.Mesh>(null);
  const shockwaveRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.035;
      planetRef.current.rotation.x += delta * 0.006;

      planetRef.current.rotation.y +=
        state.pointer.x * delta * 0.015;

      planetRef.current.rotation.x +=
        -state.pointer.y * delta * 0.008;
    }

    if (energyRef.current) {
      energyRef.current.rotation.y -= delta * 0.09;
      energyRef.current.rotation.z += delta * 0.025;

      const pulse = 1 + Math.sin(time * 2) * 0.025;

      energyRef.current.scale.setScalar(pulse);
    }

    if (glowRef.current) {
      const pulse =
        1.02 + Math.sin(time * 1.6) * 0.025;

      glowRef.current.scale.setScalar(pulse);
    }

    if (shockwaveRef.current) {
      const scale =
        1 + Math.sin(time * 1.2) * 0.05;

      shockwaveRef.current.scale.setScalar(scale);

      shockwaveRef.current.rotation.z += delta * 0.025;
    }
  });

  return (
    <group scale={1.35}>

      {/* POWER LIGHT */}

      <pointLight
        color="#d7ff00"
        intensity={10}
        distance={12}
        decay={2}
      />

      {/* MASSIVE ATMOSPHERIC GLOW */}

      <mesh ref={glowRef}>
        <sphereGeometry args={[1.85, 64, 64]} />

        <meshBasicMaterial
          color="#d7ff00"
          transparent
          opacity={0.035}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* SECOND ATMOSPHERIC LAYER */}

      <mesh>
        <sphereGeometry args={[1.55, 64, 64]} />

        <meshBasicMaterial
          color="#9dbb00"
          transparent
          opacity={0.055}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* MAIN PLANET */}

      <mesh ref={planetRef}>
        <icosahedronGeometry args={[1.28, 8]} />

        <meshStandardMaterial
          color="#050605"
          roughness={0.72}
          metalness={0.7}
          emissive="#273000"
          emissiveIntensity={0.55}
        />
      </mesh>

      {/* ENERGY SHELL */}

      <mesh ref={energyRef}>
        <icosahedronGeometry args={[1.305, 5]} />

        <meshBasicMaterial
          color="#d7ff00"
          transparent
          opacity={0.075}
          wireframe
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* INNER POWER CORE */}

      <mesh>
        <sphereGeometry args={[0.68, 48, 48]} />

        <meshBasicMaterial
          color="#d7ff00"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* INNER WHITE-HOT CORE */}

      <mesh>
        <sphereGeometry args={[0.28, 32, 32]} />

        <meshBasicMaterial
          color="#f5ffd1"
          transparent
          opacity={0.75}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* SHOCKWAVE */}

      <mesh
        ref={shockwaveRef}
        rotation={[Math.PI / 2.3, 0, 0]}
      >
        <torusGeometry args={[2.15, 0.012, 8, 220]} />

        <meshBasicMaterial
          color="#d7ff00"
          transparent
          opacity={0.38}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* ORBITAL POWER RINGS */}

      <OrbitRings />

      {/* POWER PARTICLES */}

      <CoreParticles />

      {/* IDENTITY */}

      <Html
        position={[0, -2.15, 0]}
        center
        transform
        distanceFactor={7}
      >
        <div className="pointer-events-none whitespace-nowrap text-center">

          <p className="font-mono text-[7px] tracking-[0.4em] text-[#d7ff00]/60">
            CENTRAL POWER CORE
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-[0.28em] text-white">
            SALIM
          </h2>

          <div className="mx-auto mt-2 h-px w-20 bg-[#d7ff00]/40" />

          <p className="mt-2 font-mono text-[6px] tracking-[0.25em] text-white/30">
            ENERGY OUTPUT // 98.7%
          </p>

        </div>
      </Html>

    </group>
  );
}