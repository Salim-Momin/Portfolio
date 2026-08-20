import PortfolioShell from "@/components/layout/PortfolioShell";
import HudPanel from "@/components/ui/HudPanel";
import GalaxyCanvas from "@/components/galaxy/GalaxyCanvas";

function Status({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex justify-between font-mono text-[8px]">
        <span className="text-white/30">{label}</span>

        <span className="text-[#d7ff00]">{value}</span>
      </div>

      <div className="mt-2 h-px bg-white/10">
        <div className="h-full w-2/3 bg-[#d7ff00]/50" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PortfolioShell>

      <section className="relative min-h-[calc(100vh-128px)] overflow-hidden">

        {/* GRID */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(215,255,0,.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(215,255,0,.3) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* CENTER GLOW */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff00]/5 blur-[160px]" />

        {/* CONTENT */}

        <div className="relative z-10 grid min-h-[calc(100vh-128px)] grid-cols-1 gap-5 p-5 lg:grid-cols-[210px_minmax(0,1fr)_230px]">

          {/* LEFT */}

          <div className="hidden flex-col gap-5 lg:flex">

            <HudPanel title="Navigation">

              <div className="flex justify-center py-4">

                <div className="relative h-24 w-24 rounded-full border border-white/10">

                  <div className="absolute inset-4 rounded-full border border-[#d7ff00]/20" />

                  <div className="absolute inset-8 rounded-full border border-[#d7ff00]/30" />

                  <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff00] shadow-[0_0_15px_#d7ff00]" />

                </div>

              </div>

              <p className="text-center font-mono text-[7px] tracking-[0.2em] text-[#d7ff00]/60">
                CORE CONNECTED
              </p>

            </HudPanel>


            <HudPanel title="Universe Status">

              <div className="space-y-5">

                <Status label="PROJECTS" value="06" />

                <Status label="SKILLS" value="24+" />

                <Status label="SYSTEM" value="ONLINE" />

                <Status label="MISSIONS" value="∞" />

              </div>

            </HudPanel>

          </div>


          {/* GALAXY CENTER */}
          <div className="relative min-h-[600px] overflow-hidden">

  <GalaxyCanvas />

  <div className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.25)_65%,rgba(0,0,0,0.7)_100%)]" />

  {/* TOP LABEL */}

  <div className="pointer-events-none absolute left-1/2 top-10 z-10 -translate-x-1/2 text-center">

    <p className="font-mono text-[8px] tracking-[0.5em] text-[#d7ff00]">
      DIGITAL UNIVERSE
    </p>

    <p className="mt-3 text-[8px] tracking-[0.22em] text-white/25">
      DEVELOPER • AI BUILDER • CREATOR
    </p>

  </div>

  {/* CORE STATUS */}

  <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 -translate-x-1/2">

    <div className="flex items-center gap-3 font-mono text-[7px] tracking-[0.2em] text-white/25">

      <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff00] shadow-[0_0_10px_#d7ff00]" />

      CORE ONLINE

    </div>

  </div>

</div>
          {/* RIGHT */}

          <div className="hidden flex-col gap-5 lg:flex">

            <HudPanel title="System Info">

              <div className="space-y-5">

                <Status label="LOCATION" value="EARTH" />

                <Status label="MODE" value="EXPLORE" />

                <Status label="CORE" value="STABLE" />

                <Status label="NETWORK" value="ONLINE" />

              </div>

            </HudPanel>


            <HudPanel title="Mission">

              <span className="text-3xl text-[#d7ff00]">
                “
              </span>

              <p className="mt-2 text-sm leading-6 text-white/70">
                I build intelligent systems that create real impact.
              </p>

              <div className="mt-5 border-t border-white/10 pt-4">

                <p className="font-mono text-[7px] tracking-[0.15em] text-[#d7ff00]">
                  // MAKE IDEAS REALITY
                </p>

              </div>

            </HudPanel>

          </div>

        </div>

      </section>

    </PortfolioShell>
  );
}