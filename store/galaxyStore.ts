import { create } from "zustand";

type Vector3Data = {
  x: number;
  y: number;
  z: number;
};

type GalaxyState = {
  selectedProjectId: string | null;

  selectedProjectPosition:
    Vector3Data | null;

  projectWorldOpen: boolean;

  selectProject: (
    id: string
  ) => void;

  setSelectedProjectPosition: (
    position: Vector3Data
  ) => void;

  openProjectWorld: () => void;

  closeProjectWorld: () => void;

  clearProject: () => void;
};

export const useGalaxyStore =
  create<GalaxyState>((set) => ({
    selectedProjectId: null,

    selectedProjectPosition: null,

    projectWorldOpen: false,

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

    openProjectWorld: () =>
      set({
        projectWorldOpen: true,
      }),

    closeProjectWorld: () =>
      set({
        projectWorldOpen: false,
      }),

    clearProject: () =>
      set({
        selectedProjectId: null,

        selectedProjectPosition:
          null,

        projectWorldOpen: false,
      }),
  }));