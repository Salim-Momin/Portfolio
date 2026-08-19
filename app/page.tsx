export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(215,255,0,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(215,255,0,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff00]/5 blur-[160px]" />

      {/* HUD */}
      <div className="absolute left-8 top-8 font-mono text-xs tracking-[0.25em] text-[#777]">
        PROJECT GALAXY
      </div>

      <div className="absolute right-8 top-8 flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-[#777]">
        <span className="h-2 w-2 rounded-full bg-[#d7ff00] shadow-[0_0_12px_#d7ff00]" />

        SYSTEM ONLINE
      </div>

      {/* Main */}
      <section className="relative z-10 text-center">
        <p className="mb-5 font-mono text-xs tracking-[0.45em] text-[#d7ff00]">
          DIGITAL UNIVERSE
        </p>

        <h1 className="text-6xl font-semibold tracking-[-0.05em] sm:text-8xl lg:text-9xl">
          SALIM
        </h1>

        <p className="mt-5 text-sm tracking-[0.25em] text-[#777] sm:text-base">
          DEVELOPER • AI BUILDER • CREATOR
        </p>

        <button
          className="
            group mt-12
            border border-[#d7ff00]/30
            px-8 py-4
            font-mono text-xs
            tracking-[0.25em]
            text-[#d7ff00]
            transition-all duration-300
            hover:border-[#d7ff00]
            hover:bg-[#d7ff00]
            hover:text-black
            hover:shadow-[0_0_40px_rgba(215,255,0,0.25)]
          "
        >
          ENTER UNIVERSE
          <span className="ml-4 inline-block transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </button>
      </section>

      {/* Bottom HUD */}
      <div className="absolute bottom-8 left-8 font-mono text-[10px] tracking-[0.2em] text-[#555]">
        UNIVERSE // 001
      </div>

      <div className="absolute bottom-8 right-8 font-mono text-[10px] tracking-[0.2em] text-[#555]">
        BUILD 01.00
      </div>
    </main>
  );
}