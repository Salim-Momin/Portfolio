"use client";

import { useFrame } from "@react-three/fiber";
import {
  useRef,
} from "react";
import * as THREE from "three";

import {
  useGalaxyStore,
} from "@/store/galaxyStore";

import {
  projects,
} from "@/data/projects";

const DEFAULT_POSITION =
  new THREE.Vector3(
    7.5,
    4.5,
    14.5
  );

const DEFAULT_TARGET =
  new THREE.Vector3(
    0,
    0,
    0
  );

export default function CameraRig() {
  const selectedProjectId =
    useGalaxyStore(
      (state) =>
        state.selectedProjectId
    );

  const selectedProjectPosition =
    useGalaxyStore(
      (state) =>
        state.selectedProjectPosition
    );

  const lookTarget =
    useRef(
      new THREE.Vector3()
    );

  const desiredCameraPosition =
    useRef(
      new THREE.Vector3()
    );

  useFrame((state) => {
    /*
     * GALAXY MODE
     */

    if (
      !selectedProjectId ||
      !selectedProjectPosition
    ) {
      desiredCameraPosition.current.set(
        DEFAULT_POSITION.x +
          state.pointer.x *
            0.7,

        DEFAULT_POSITION.y +
          state.pointer.y *
            0.45,

        DEFAULT_POSITION.z
      );

      state.camera.position.lerp(
        desiredCameraPosition.current,
        0.025
      );

      lookTarget.current.lerp(
        DEFAULT_TARGET,
        0.05
      );

      state.camera.lookAt(
        lookTarget.current
      );

      return;
    }

    /*
     * LIVE PLANET POSITION
     */

    const planetPosition =
      new THREE.Vector3(
        selectedProjectPosition.x,
        selectedProjectPosition.y,
        selectedProjectPosition.z
      );

    const project =
      projects.find(
        (item) =>
          item.id ===
          selectedProjectId
      );

    const planetSize =
      project?.size ?? 1;  

    /*
     * CAMERA OFFSET
     *
     * Camera sits slightly
     * above/right/front.
     */

    desiredCameraPosition.current.set(
      planetPosition.x +
        planetSize * 2.2,

      planetPosition.y +
        planetSize * 1.2,

      planetPosition.z +
        3.8 +
        planetSize
    );

    /*
     * SMOOTH CAMERA FLY
     */

    state.camera.position.lerp(
      desiredCameraPosition.current,
      0.035
    );

    /*
     * SMOOTH LOOK TARGET
     */

    lookTarget.current.lerp(
      planetPosition,
      0.065
    );

    state.camera.lookAt(
      lookTarget.current
    );
  });

  return null;
}