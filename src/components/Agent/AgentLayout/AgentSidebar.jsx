import Logo from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  CircleUser,
  ClipboardCheck,
  FileCheck,
  FilePlus,
  FileText,
  House,
  LayoutDashboard,
  LogOut,
  Megaphone,
  MessagesSquare,
  Settings,
  UserCheck,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
export const menuTree = [
  { id: 1, title: "Home", icon: <House />, link: "/" },
  {
    id: 13,
    title: "Ads",
    icon: <Megaphone />,
    children: [
      { id: 25, title: "Work Visa", link: "work-visa" },
      { id: 26, title: "Student Visa", link: "student-visa" },
      { id: 27, title: "Hajj and Umrah Visa", link: "hajj-and-mrah-visa" },
    ],
  },
  {
    id: 2,
    title: "Dashboard",
    icon: <LayoutDashboard />,
    link: "/agent/dashboard",
  },
  {
    id: 3,
    title: "My Profile",
    icon: <CircleUser />,
    link: "profile",
  },
  { id: 4, title: "Message", icon: <MessagesSquare />, link: "chat-box" },
  {
    id: 5,
    title: "All Booking File",
    icon: <FileText />,
    children: [
      { id: 21, title: "My Booking", link: "my-bookings" },
      { id: 22, title: "Under Processing", link: "under-processing" },
      { id: 23, title: "Success File", link: "success-file" },
      { id: 24, title: "Return Passport", link: "passport-retune" },
    ],
  },

  {
    id: 6,
    title: "My Flight Ticket",
    icon: <FileText />,
    link: "fight-booking",
  },
  { id: 7, title: "Commission", icon: <ClipboardCheck />, link: "commission" },
  { id: 8, title: "Check Status", icon: <UserCheck />, link: "check-status" },
  { id: 9, title: "Payment", icon: <FilePlus />, link: "payment-details" },
  {
    id: 10,
    title: "Change Password",
    icon: <Settings />,
    link: "change-password",
  },
  { id: 11, title: "Terms and Condition", icon: <FileCheck />, link: "terms" },
  { id: 12, title: "Log Out", icon: <LogOut />, action: "logout" },
];

export default function AgentSidebar({ open, setOpen, onLinkClick }) {
  const [openMenus, setOpenMenus] = useState({});

  const location = useLocation();

  const isActive = (path) => {
    if (location.pathname) {
      return location.pathname.replace("/agency/", "") === path;
    }
    return location.pathname === path;
  };
  const toggleMenu = (id) => {
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCloseBtn = () => {
    setOpen(false);
  };

  const handleLinkClick = (item) => {
    if (item.link && onLinkClick) {
      onLinkClick(item);
    }
  };
  const renderMenuItems = (items, level = 0) => {
    return items.map((item) => (
      <li key={item.id}>
        {item.link ? (
          <NavLink
            to={item.link}
            className={cn(
              "inline-flex gap-2 items-center w-full rounded px-3 py-2 transition-colors duration-200",
              isActive(item.link)
                ? "bg-blue-500 text-white"
                : "text-slate-700 hover:bg-blue-100"
            )}
            onClick={() => handleLinkClick(item)}
          >
            {item.icon}
            {item.title}
          </NavLink>
        ) : (
          <>
            <div
              onClick={() => toggleMenu(item.id)}
              className="cursor-pointer text-slate-700 font-semibold flex justify-between items-center gap-2 px-3 py-2 hover:bg-blue-500 hover:text-white rounded transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.title}
              </div>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openMenus[item.id] ? "rotate-180" : "rotate-0"
                }`}
                size={18}
              />
            </div>

            {item.children && openMenus[item.id] && (
              <ul
                className={`ml-${
                  level * 2 + 2
                } mt-1 space-y-1 transition-all duration-300`}
              >
                {renderMenuItems(item.children, level + 1)}
              </ul>
            )}
          </>
        )}
      </li>
    ));
  };

  return (
    <aside
      className={cn(
        "fixed z-50 h-screen bg-white transition-all duration-300 ease-in-out flex flex-col ",
        open
          ? "md:w-3/12 w-full translate-x-0 pl-4 pr-2 pt-4 "
          : "w-0 -translate-x-full"
      )}
    >
      <div
        className={cn(
          "transform transition-all duration-300 flex justify-between items-center",
          open ? "translate-x-0 opacity-100 " : "-translate-x-full opacity-0"
        )}
      >
        <div className={cn("w-[140px] ")}>
          <Logo />
        </div>
        <Button className="md:hidden bg-rose-600" onClick={handleCloseBtn}>
          <X />
        </Button>
      </div>

      <nav className="mt-8 flex-1 overflow-y-auto no-scrollbar">
        <ul className="space-y-2">{renderMenuItems(menuTree)}</ul>
      </nav>
    </aside>
  );
}
