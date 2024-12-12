import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { useEffect, useRef } from "react";
import SettingsNavbar from "@/components/SettingsNavbar";
import SettingsSidebar from "@/components/SettingsSidebar"
import { Outlet } from "react-router-dom";

const SettingsLayoutContent = () => {
  const { setOpen } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  return (
    <div>
      <div className="p-2 fixed w-full z-10 bg-[#181818]">
        <SettingsNavbar />
      </div >
      <div className="flex pt-16">
        <div
          ref={sidebarRef}
          className="absolute z-100"
        >
          <SettingsSidebar />
        </div>
        <div className="pt-4 px-4 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default function SettingLayout() {
  return (
    <SidebarProvider>
      <SettingsLayoutContent />
    </SidebarProvider>
  );
};
