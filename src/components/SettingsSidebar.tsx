/* import {
  Bell,
  Bug,
  Cloud,
  KeyRound,
  LibraryBig,
  MonitorSmartphone,
  ScrollText,
  Settings,
  Sidebar,
  SquareActivity,
  User,
} from "lucide-react";
import { FC } from "react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "./ui/sidebar";

interface Item {
  title: string;
  icon: FC;
  url: string;
} */

/* const serverItems: Item[] = [
  { title: "General", icon: Settings, url: "/setting/general" },
  { title: "Users", icon: User, url: "/setting/user" },
  { title: "Libraries", icon: LibraryBig, url: "/setting/library" },
];

const deviceItems: Item[] = [
  { title: "Devices", icon: MonitorSmartphone, url: "/setting/devices" },
  { title: "Activity", icon: SquareActivity, url: "/setting/activity" },
];

const advancedItems: Item[] = [
  { title: "Networking", icon: Cloud, url: "/setting/networking" },
  { title: "API Keys", icon: KeyRound, url: "/setting/api" },
  { title: "Logs", icon: ScrollText, url: "/setting/logs" },
  { title: "Notification", icon: Bell, url: "/setting/notification" },
  { title: "Report", icon: Bug, url: "/setting/report" },
]; */

import { FC } from "react";
import {
  Music,
  Shell,
  Clapperboard,
  Settings,
  Tv,
  User2,
  ChevronUp,
  FolderSync,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Item {
  title: string;
  url: string;
  icon: FC;
}

const medias: Item[] = [
  { title: "Movies", url: "/movie", icon: Clapperboard },
  { title: "TV Shows", url: "/tvshow", icon: Tv },
  { title: "Anime", url: "/anime", icon: Shell },
  { title: "Music", url: "/music", icon: Music },
];

const administration: Item[] = [
  { title: "Settings", url: "/setting", icon: Settings },
  { title: "Sync", url: "", icon: FolderSync },
];

const SidebarMenuItemLink: FC<{ item: Item }> = ({ item }) => (
  <SidebarMenuSubItem className="hover:bg-zinc-500 hover:bg-opacity-40 rounded-xl px-4 py-1">
    <SidebarMenuSubButton asChild>
      <a href={item.url} className="flex items-center gap-3 text-white">
        <item.icon />
        <span>{item.title}</span>
      </a>
    </SidebarMenuSubButton>
  </SidebarMenuSubItem>
);

const SidebarMenuGroup: FC<{ title: string; items: Item[] }> = ({ title, items }) => (
  <SidebarMenuSub className="border-none">
    <h1 className="text-xl font-bold">{title}</h1>
    {items.map((item) => (
      <SidebarMenuItem key={item.title} className="mt-2">
        <SidebarMenuItemLink item={item} />
      </SidebarMenuItem>
    ))}
  </SidebarMenuSub>
);

export default function SettingsSidebar() {
  return (
    <div className="dark">
      <Sidebar>
        <SidebarContent className="dark text-white">
          <SidebarGroup>
            <div className="flex content-center border-b border-zinc-500 opacity-90">
              <SidebarTrigger className="my-4 cursor-pointer text-white hover:bg-white hover:text-black" />
              <SidebarGroupLabel className="text-red-500 font-bold text-4xl my-4">
                <a className="cursor-pointer" href="/">Lomes</a>
              </SidebarGroupLabel>
            </div>
            <SidebarGroupContent>
              <SidebarMenu className="pt-3">
                <SidebarMenuGroup title="Media" items={medias} />
                <SidebarMenuGroup title="Administration" items={administration} />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
