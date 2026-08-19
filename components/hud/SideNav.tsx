"use client";

import { useState } from "react";

import {
  Orbit,
  Box,
  Cpu,
  Clock3,
  FlaskConical,
  User,
  Radio,
} from "lucide-react";

const menu = [
  { name: "Galaxy", icon: Orbit },
  { name: "Projects", icon: Box },
  { name: "Skills", icon: Cpu },
  { name: "Timeline", icon: Clock3 },
  { name: "Lab", icon: FlaskConical },
  { name: "About", icon: User },
  { name: "Contact", icon: Radio },
];

export default function SideNav() {
  const [active, setActive] = useState("Galaxy");

  return (
    <aside className="fixed bottom-12 left-0 top-20 z-40 hidden w-[90px] border-r border-white/10 bg-[#030303]/95 md:block">

      <div className="flex h-full flex-col items-center py-4">

        {menu.map((item) => {
          const Icon = item.icon;
          const selected = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`group relative flex h-[68px] w-full flex-col items-center justify-center gap-2 transition-colors ${
                selected
                  ? "text-[#d7ff00]"
                  : "text-white/30 hover:text-white"
              }`}
            >
              {selected && (
                <span className="absolute left-0 h-8 w-[2px] bg-[#d7ff00] shadow-[0_0_10px_#d7ff00]" />
              )}

              <Icon
                size={18}
                strokeWidth={1.4}
                className="transition-transform group-hover:scale-110"
              />

              <span className="font-mono text-[7px] uppercase tracking-[0.1em]">
                {item.name}
              </span>
            </button>
          );
        })}

      </div>
    </aside>
  );
}