import { create } from "zustand";

type Vector3Data = {
  x: number;
  y: number;
  z: number;
};

type GalaxyState = {
  selectedProjectId: string | null;

  selectedProjectPosition: Vector3Data | null;

  selectProject: (id: string) => void;

  setSelectedProjectPosition: (
    position: Vector3Data
  ) => void;

  clearProject: () => void;
};

export const useGalaxyStore =
  create<GalaxyState>((set) => ({
    selectedProjectId: null,

    selectedProjectPosition: null,

    selectProject: (id) =>
      set({
        selectedProjectId: id,
      }),

    setSelectedProjectPosition: (
      position
    ) =>
      set({
        selectedProjectPosition:
          position,
      }),

    clearProject: () =>
      set({
        selectedProjectId: null,
        selectedProjectPosition: null,
      }),
  }));