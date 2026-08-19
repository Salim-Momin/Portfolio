"use client";

import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function StarField() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.003;
    group.current.rotation.x += delta * 0.001;
  });

  return (
    <group ref={group}>
      <Stars
        radius={55}
        depth={45}
        count={2500}
        factor={3}
        saturation={0}
        fade
        speed={0.25}
      />
    </group>
  );
}