import type { ReactNode } from "react";

import TopNav from "@/components/hud/TopNav";
import SideNav from "@/components/hud/SideNav";
import BottomHud from "@/components/hud/BottomHud";

interface PortfolioShellProps {
  children: ReactNode;
}

export default function PortfolioShell({
  children,
}: PortfolioShellProps) {
  return (
    <div className="min-h-screen bg-[#030303] text-white">

      <TopNav />

      <SideNav />

      <main className="min-h-screen pt-20 pb-12 md:pl-[90px]">
        {children}
      </main>

      <BottomHud />

    </div>
  );
}