import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CustomerLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 flex space-x-4 mt-10 relative">
        {/* Sidebar */}
        <div
          className={cn(
            "md:flex transition-all duration-300 h-full",
            isOpen
              ? "fixed top-40 z-50 flex transition-all duration-300"
              : "hidden md:flex"
          )}
        >
          <Sidebar />

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 left-4  md:hidden"
          >
            <X className="size-6" />
          </button>
        </div>

        <Button
          className="md:hidden block z-10 fixed top-35 left-4 bg-gray-200 border border-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu color="black" className="size-6" />
        </Button>

        <div className="lg:w-4/5 w-full">
          <Outlet />
        </div>
      </section>
    </>
  );
}
