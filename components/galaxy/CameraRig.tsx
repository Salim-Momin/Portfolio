"use client";

import { useFrame } from "@react-three/fiber";

export default function CameraRig() {
  useFrame((state) => {
    const targetX =
      state.pointer.x * 0.65;

    const targetY =
      state.pointer.y * 0.45;

    state.camera.position.x +=
      (targetX - state.camera.position.x) *
      0.025;

    state.camera.position.y +=
      (targetY - state.camera.position.y) *
      0.025;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}