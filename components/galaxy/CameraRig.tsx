"use client";

import { useFrame } from "@react-three/fiber";

export default function CameraRig() {
  useFrame((state) => {
    const baseX = 6.5;
    const baseY = 3.5;
    const baseZ = 12;

    const mouseX =
      state.pointer.x * 0.6;

    const mouseY =
      state.pointer.y * 0.4;

    const targetX =
      baseX + mouseX;

    const targetY =
      baseY + mouseY;

    state.camera.position.x +=
      (targetX -
        state.camera.position.x) *
      0.018;

    state.camera.position.y +=
      (targetY -
        state.camera.position.y) *
      0.018;

    state.camera.position.z +=
      (baseZ -
        state.camera.position.z) *
      0.018;

    state.camera.lookAt(
      0,
      0,
      0
    );
  });

  return null;
}