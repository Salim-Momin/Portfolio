import { create } from "zustand";

type Vector3Data = {
  x: number;
  y: number;
  z: number;
};

export type GalaxySection =
  | "GALAXY"
  | "PROJECTS"
  | "SKILLS"
  | "TIMELINE"
  | "LAB"
  | "ABOUT"
  | "CONTACT";

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

  activeSection: GalaxySection;

  setActiveSection: (
    section: GalaxySection
  ) => void;

  openProjectWorld: () => void;

  closeProjectWorld: () => void;

  clearProject: () => void;
};

export const useGalaxyStore =
  create<GalaxyState>((set) => ({

    activeSection: "GALAXY",

    setActiveSection: (section) =>
      set({
        activeSection: section,
        selectedProjectId: null,
        selectedProjectPosition: null,
        projectWorldOpen: false,
      }),
      
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