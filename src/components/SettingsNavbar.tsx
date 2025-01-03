import React, { RefObject } from "react";
import { ArrowLeft, Bell, User, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import AppSearchBar from "./AppSearchBar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

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
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: dark,
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                }
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav >
  );
};

export default SettingsNavbar;
