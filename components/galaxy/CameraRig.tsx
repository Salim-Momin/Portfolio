"use client";

import { useFrame } from "@react-three/fiber";

export default function CameraRig() {
  useFrame((state) => {
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    const targetX = pointerX * 0.45;
    const targetY = pointerY * 0.3;

    state.camera.position.x +=
      (targetX - state.camera.position.x) * 0.025;

    state.camera.position.y +=
      (targetY - state.camera.position.y) * 0.025;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}