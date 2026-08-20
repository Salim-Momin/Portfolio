"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { useGalaxyStore } from "@/store/galaxyStore";

export default function ProjectDetailPanel() {
  const selectedProjectId =
    useGalaxyStore(
      (state) =>
        state.selectedProjectId
    );

  const openProjectWorld = useGalaxyStore(
    (state) => state.openProjectWorld
  );

  const clearProject =
    useGalaxyStore(
      (state) =>
        state.clearProject
    );

  const project =
    projects.find(
      (item) =>
        item.id ===
        selectedProjectId
    );

  if (!project) {
    return null;
  }

  return (
    <div className="fixed right-5 top-24 z-[120] w-[320px] border border-white/10 bg-[#030303]/95 p-5 backdrop-blur-xl">

      {/* HUD CORNERS */}

      <span className="absolute -left-px -top-px h-4 w-4 border-l border-t border-[#d7ff00]" />

      <span className="absolute -right-px -top-px h-4 w-4 border-r border-t border-[#d7ff00]" />

      <span className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-[#d7ff00]" />

      <span className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-[#d7ff00]" />

      {/* BACK */}

      <button
        onClick={clearProject}
        className="flex items-center gap-2 font-mono text-[8px] tracking-[0.16em] text-white/40 transition hover:text-[#d7ff00]"
      >
        <ArrowLeft size={13} />

        RETURN TO GALAXY
      </button>

      <div className="mt-5 border-t border-white/10 pt-5">

        <p
          className="font-mono text-[7px] tracking-[0.25em]"
          style={{
            color:
              project.accent,
          }}
        >
          PLANETARY OBJECT
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-white">
          {project.name}
        </h2>

        <div className="mt-2">
          <p className="text-sm text-white/40">
            {project.category}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: project.accent,
                boxShadow: `0 0 10px ${project.accent}`,
              }}
            />

            <span className="font-mono text-[7px] tracking-[0.16em] text-white/30">
              CAMERA LOCKED
            </span>
          </div>
        </div>

      </div>

      {/* TECH */}

      <div className="mt-6">

        <p className="font-mono text-[7px] tracking-[0.2em] text-white/30">
          ATMOSPHERIC SIGNALS
        </p>

        <div className="mt-3 flex flex-wrap gap-2">

          {project.technologies.map(
            (tech) => (
              <span
                key={tech}
                className="border border-white/10 px-2 py-1.5 font-mono text-[7px] text-white/60"
              >
                {tech}
              </span>
            )
          )}

        </div>

      </div>

      {/* STATUS */}

      <div className="mt-6 grid grid-cols-2 gap-3">

        <div className="border border-white/10 p-3">
          <p className="font-mono text-[6px] tracking-[0.15em] text-white/30">
            STATUS
          </p>

          <p className="mt-2 font-mono text-[8px] text-[#d7ff00]">
            COMPLETE
          </p>
        </div>

        <div className="border border-white/10 p-3">
          <p className="font-mono text-[6px] tracking-[0.15em] text-white/30">
            NODE
          </p>

          <p className="mt-2 font-mono text-[8px] text-[#d7ff00]">
            ACTIVE
          </p>
        </div>

      </div>

      {/* ACTIONS */}

      <div className="mt-6 space-y-2">

        <button
          onClick={openProjectWorld}
          className="flex w-full items-center justify-between border border-[#d7ff00]/40 px-4 py-3 font-mono text-[8px] tracking-[0.16em] text-[#d7ff00] transition hover:bg-[#d7ff00] hover:text-black"
        >
          INITIATE PLANETARY SCAN
        </button>

        <button className="flex w-full items-center justify-between border border-white/10 px-4 py-3 font-mono text-[8px] tracking-[0.16em] text-white/40 transition hover:border-white/30 hover:text-white">

          VIEW GITHUB

          <FaGithub size={13} />

        </button>

      </div>

    </div>
  );
}