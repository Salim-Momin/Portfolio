"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { useGalaxyStore } from "@/store/galaxyStore";

export default function CameraRig() {
  const activeSection = useGalaxyStore(
    (state) => state.activeSection
  );

  const selectedProjectId = useGalaxyStore(
    (state) => state.selectedProjectId
  );

  const selectedProjectPosition = useGalaxyStore(
    (state) => state.selectedProjectPosition
  );

  const velocity = useRef(
    new THREE.Vector3()
  );

  const targetPosition = useRef(
    new THREE.Vector3()
  );

  const lookTarget = useRef(
    new THREE.Vector3()
  );

  useFrame((state, delta) => {
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    // ------------------------------------------------
    // PROJECT LOCK MODE
    // ------------------------------------------------

    if (
      selectedProjectId &&
      selectedProjectPosition
    ) {
      const planetPosition =
        new THREE.Vector3(
          selectedProjectPosition.x,
          selectedProjectPosition.y,
          selectedProjectPosition.z
        );

      targetPosition.current.set(
        planetPosition.x + 2.6,
        planetPosition.y + 1.4,
        planetPosition.z + 4.5
      );

      state.camera.position.lerp(
        targetPosition.current,
        0.035
      );

      lookTarget.current.lerp(
        planetPosition,
        0.07
      );

      state.camera.lookAt(
        lookTarget.current
      );

      return;
    }

    // ------------------------------------------------
    // CURSOR FREE-FLOAT MODE
    // ------------------------------------------------

    const skillsMode =
      activeSection === "SKILLS";

    const baseZ =
      skillsMode ? 13 : 14;

    const movementStrength =
      skillsMode ? 3.2 : 4.2;

    /*
     * Cursor controls target velocity.
     *
     * pointer.x:
     * -1 left
     * +1 right
     *
     * pointer.y:
     * -1 bottom
     * +1 top
     */

    const targetVelocityX =
      pointerX * movementStrength;

    const targetVelocityY =
      pointerY * movementStrength * 0.65;

    /*
     * Smooth acceleration.
     */

    velocity.current.x =
      THREE.MathUtils.lerp(
        velocity.current.x,
        targetVelocityX,
        0.025
      );

    velocity.current.y =
      THREE.MathUtils.lerp(
        velocity.current.y,
        targetVelocityY,
        0.025
      );

    /*
     * Target camera position.
     */

    targetPosition.current.set(
      velocity.current.x,
      skillsMode
        ? 0.7 + velocity.current.y
        : 1.3 + velocity.current.y,
      baseZ
    );

    /*
     * Smooth floating movement.
     */

    state.camera.position.lerp(
      targetPosition.current,
      1 - Math.pow(0.001, delta)
    );

    /*
     * Keep looking near center,
     * but allow a tiny cursor-driven look offset.
     */

    const desiredLook = new THREE.Vector3(
      pointerX * 0.7,
      pointerY * 0.45,
      0
    );

    lookTarget.current.lerp(
      desiredLook,
      0.035
    );

    state.camera.lookAt(
      lookTarget.current
    );
  });

  return null;
}