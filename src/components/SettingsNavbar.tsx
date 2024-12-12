import React, { RefObject } from "react";
import { ArrowLeft, Bell, User, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import AppSearchBar from "./AppSearchBar";

interface SettingsNavbarProps {
  triggerRef?: RefObject<HTMLButtonElement>;
}

const SettingsNavbar: React.FC<SettingsNavbarProps> = ({ triggerRef }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between p-4 bg-[#181818] border-b border-gray-700">
      {/* Sidebar Toggle Button for Mobile */}
      <div className="flex gap-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-gray-400"
        >
          <ArrowLeft className="mr-2" />
          <span>Back</span>
        </button>
        <SidebarTrigger className="cursor-pointer text-white self-center" />
      </div>

      <h1 className="text-lg font-semibold text-white">Settings</h1>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        <AppSearchBar />
        <button className="text-white hover:text-gray-400">
          <Bell />
        </button>
        <Avatar className="cursor-pointer h-8 w-8 rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav >
  );
};

export default SettingsNavbar;
