"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 1400;

    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      array[i * 3] = (Math.random() - 0.5) * 22;
      array[i * 3 + 1] = (Math.random() - 0.5) * 16;
      array[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }

    return array;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.01;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled
    >
      <PointMaterial
        transparent
        color="#d7ff00"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  );
}