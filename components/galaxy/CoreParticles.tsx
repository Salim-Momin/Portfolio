"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function CoreParticles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 1100;
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 1.55 + Math.random() * 2.4;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      array[i * 3] =
        radius * Math.sin(phi) * Math.cos(theta);

      array[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta);

      array[i * 3 + 2] =
        radius * Math.cos(phi);
    }

    return array;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.015;
    ref.current.rotation.x -= delta * 0.005;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
    >
      <PointMaterial
        transparent
        color="#d7ff00"
        size={0.022}
        sizeAttenuation
        opacity={0.75}
        depthWrite={false}
      />
    </Points>
  );
}