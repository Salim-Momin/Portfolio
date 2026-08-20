"use client";

import {
  useGalaxyStore,
  type GalaxySection,
} from "@/store/galaxyStore";

const navItems = [
  "GALAXY",
  "PROJECTS",
  "SKILLS",
  "TIMELINE",
  "LAB",
  "CONTACT",
];

export default function TopNav() {
  const active =
    useGalaxyStore(
      (state) =>
        state.activeSection
    );

  const setActiveSection =
    useGalaxyStore(
      (state) =>
        state.setActiveSection
    );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-20 border-b border-white/10 bg-[#030303]/95 backdrop-blur-xl">
      <div className="flex h-full items-center px-6 lg:px-8">

        {/* BRAND */}
        <div className="shrink-0">
          <h1 className="text-sm font-semibold tracking-[0.18em] text-white">
            SALIM MOMIN
          </h1>

          <p className="mt-1 font-mono text-[8px] tracking-[0.28em] text-white/40">
            DIGITAL UNIVERSE
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {navItems.map((item, index) => {
            const selected = active === item;

            return (
              <button
                key={item}
                onClick={() =>
                  setActiveSection(
                    item as GalaxySection
                  )
                }  
                className={`relative h-20 font-mono text-[9px] tracking-[0.15em] transition-colors ${
                  selected
                    ? "text-[#d7ff00]"
                    : "text-white/40 hover:text-white"
                }`}
              >
                <span className="mr-2 text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item}

                {selected && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#d7ff00] shadow-[0_0_10px_#d7ff00]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* STATUS */}
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden font-mono text-[8px] tracking-[0.15em] text-white/30 sm:block">
            SYSTEM
          </span>

          <span className="h-2 w-2 rounded-full bg-[#d7ff00] shadow-[0_0_12px_#d7ff00]" />

          <span className="font-mono text-[8px] tracking-[0.15em] text-[#d7ff00]">
            ONLINE
          </span>
        </div>

      </div>
    </header>
  );
}