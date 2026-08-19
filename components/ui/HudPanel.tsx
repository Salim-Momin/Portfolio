import type { ReactNode } from "react";

interface HudPanelProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function HudPanel({
  title,
  children,
  className = "",
}: HudPanelProps) {
  return (
    <div
      className={`relative border border-white/10 bg-black/30 p-5 ${className}`}
    >
      {/* HUD corners */}

      <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-[#d7ff00]" />

      <span className="absolute -right-px -top-px h-3 w-3 border-r border-t border-[#d7ff00]" />

      <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-[#d7ff00]" />

      <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-[#d7ff00]" />

      <div className="mb-5 flex items-center gap-2">
        <span className="h-1 w-1 bg-[#d7ff00]" />

        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/50">
          {title}
        </span>
      </div>

      {children}
    </div>
  );
}