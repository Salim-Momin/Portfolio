"use client";

import { useEffect } from "react";

import {
  useGalaxyStore,
} from "@/store/galaxyStore";

export default function GalaxyControls() {
  const projectWorldOpen =
    useGalaxyStore(
      (state) =>
        state.projectWorldOpen
    );

  const closeProjectWorld =
    useGalaxyStore(
      (state) =>
        state.closeProjectWorld
    );

  const clearProject =
    useGalaxyStore(
      (state) =>
        state.clearProject
    );

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (
        event.key !==
        "Escape"
      ) {
        return;
      }

      if (projectWorldOpen) {
        closeProjectWorld();

        return;
      }

      clearProject();
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    projectWorldOpen,
    closeProjectWorld,
    clearProject,
  ]);

  return null;
}