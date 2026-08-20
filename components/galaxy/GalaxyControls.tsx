"use client";

import { useEffect } from "react";

import { useGalaxyStore } from "@/store/galaxyStore";

export default function GalaxyControls() {
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
        event.key ===
        "Escape"
      ) {
        clearProject();
      }
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
  }, [clearProject]);

  return null;
}