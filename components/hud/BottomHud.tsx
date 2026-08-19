export default function BottomHud() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-12 border-t border-white/10 bg-[#030303]/95 md:left-[90px]">

      <div className="flex h-full items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff00]" />

          <span className="font-mono text-[8px] tracking-[0.15em] text-white/30">
            DRAG TO ROTATE
          </span>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <span className="font-mono text-[8px] tracking-[0.15em] text-white/30">
            GALAXY CORE
          </span>

          <div className="h-px w-24 bg-white/10">
            <div className="h-full w-[40%] bg-[#d7ff00]" />
          </div>
        </div>

        <div className="font-mono text-[8px] tracking-[0.15em] text-white/30">
          SOUND
          <span className="ml-2 text-[#d7ff00]">
            OFF
          </span>
        </div>

      </div>

    </footer>
  );
}