
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "./AgentHeader";
import Sidebar from "./AgentSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AgentDashboardLayout() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const handleBtn = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  return (
    <div className="bg-custom-background min-h-screen">
      <Sidebar open={open} setOpen={setOpen} onLinkClick={handleCloseSidebar} />
      <div
        className={cn(
          "flex flex-col h-full transition-all duration-300 ease-in-out ",
          open && !isMobile ? "ml-[25%]" : "ml-0"
        )}
      >
        <Header onShowHide={handleBtn} />
        <main className=" flex-1 overflow-y-auto p-1 md:p-2 lg:p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
