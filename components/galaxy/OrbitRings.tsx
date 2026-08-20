"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Ring({
  radius,
  rotation,
  speed,
  thickness = 0.008,
  opacity = 0.25,
}: {
  radius: number;
  rotation: [number, number, number];
  speed: number;
  thickness?: number;
  opacity?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry
        args={[radius, thickness, 8, 220]}
      />

      <meshBasicMaterial
        color="#d7ff00"
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function OrbitRings() {
  return (
    <group>

      <Ring
        radius={1.75}
        rotation={[1.15, 0.2, 0]}
        speed={0.09}
        opacity={0.42}
      />

      <Ring
        radius={2.05}
        rotation={[0.65, 0.75, 0.35]}
        speed={-0.055}
        opacity={0.28}
      />

      <Ring
        radius={2.35}
        rotation={[1.45, 0.15, 0.8]}
        speed={0.035}
        opacity={0.18}
      />

      <Ring
        radius={2.7}
        rotation={[0.95, 1.1, 0.25]}
        speed={-0.02}
        opacity={0.1}
      />

    </group>
  );
}