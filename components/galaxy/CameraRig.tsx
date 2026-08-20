"use client";

import {
  useFrame,
} from "@react-three/fiber";

export default function CameraRig() {
  useFrame((state) => {
    const baseX = 7.5;
    const baseY = 4.5;
    const baseZ = 14.5;

    const targetX =
      baseX +
      state.pointer.x * 0.7;

    const targetY =
      baseY +
      state.pointer.y * 0.45;

    state.camera.position.x +=
      (
        targetX -
        state.camera.position.x
      ) * 0.018;

    state.camera.position.y +=
      (
        targetY -
        state.camera.position.y
      ) * 0.018;

    state.camera.position.z +=
      (
        baseZ -
        state.camera.position.z
      ) * 0.018;

    state.camera.lookAt(
      0,
      0,
      0
    );
  });

  return null;
}