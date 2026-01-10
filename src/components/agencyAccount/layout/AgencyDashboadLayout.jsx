import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import useAxios from "@/hooks/useAxios";

export default function AgencyDashboardLayout() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await useAxios.get("/users/me");
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false); // ✅ loading false after fetch
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const handleBtn = () => setOpen((prev) => !prev);

  const handleCloseSidebar = () => {
    if (window.innerWidth < 768) setOpen(false);
  };

  // 🔹 Show loader until profile is fetched
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="bg-custom-background min-h-screen">
      <Sidebar
        open={open}
        setOpen={setOpen}
        onLinkClick={handleCloseSidebar}
        profile={profile}
      />
      <div
        className={cn(
          "flex flex-col h-full transition-all duration-300 ease-in-out",
          open && !isMobile ? "ml-[25%]" : "ml-0"
        )}
      >
        <Header onShowHide={handleBtn} />
        <main className="flex-1 overflow-y-auto p-1 md:p-2 lg:p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
