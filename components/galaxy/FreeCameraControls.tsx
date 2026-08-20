"use client";

import { PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const SPEED = 5;
const BOOST_SPEED = 10;

export default function FreeCameraControls() {
  const keys = useRef<Record<string, boolean>>({});

  const forward = useRef(new THREE.Vector3());
  const right = useRef(new THREE.Vector3());
  const movement = useRef(new THREE.Vector3());

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keys.current[event.code] = true;
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      keys.current[event.code] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    const camera = state.camera;

    const currentSpeed =
      keys.current.ShiftLeft || keys.current.ShiftRight
        ? BOOST_SPEED
        : SPEED;

    movement.current.set(0, 0, 0);

    camera.getWorldDirection(forward.current);
    forward.current.y = 0;

    if (forward.current.lengthSq() > 0) {
      forward.current.normalize();
    }

    right.current
      .crossVectors(forward.current, camera.up)
      .normalize();

    if (keys.current.KeyW) {
      movement.current.add(forward.current);
    }

    if (keys.current.KeyS) {
      movement.current.sub(forward.current);
    }

    if (keys.current.KeyD) {
      movement.current.add(right.current);
    }

    if (keys.current.KeyA) {
      movement.current.sub(right.current);
    }

    if (keys.current.Space) {
      movement.current.y += 1;
    }

    if (
      keys.current.ControlLeft ||
      keys.current.ControlRight
    ) {
      movement.current.y -= 1;
    }

    if (movement.current.lengthSq() > 0) {
      movement.current
        .normalize()
        .multiplyScalar(currentSpeed * delta);

      camera.position.add(movement.current);
    }
  });

  return <PointerLockControls />;
}