import { useEffect, useRef } from "react";
import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";

const LayoutContent = () => {
  const { open, setOpen } = useSidebar(); // Access sidebar state from context
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
        setOpen(false); // Close sidebar on outside click
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  return (
    <div>
      <div className="p-2 mx-auto fixed w-screen border-b z-10 bg-[#181818]">
        <Navbar triggerRef={triggerRef} />
      </div>

      <div className="flex pt-16">
        {open && (
          <div
            ref={sidebarRef}
            className="fixed z-40"
          >
            <AppSidebar />
          </div>
        )}

        <div className="pt-4 px-4 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default Layout;
