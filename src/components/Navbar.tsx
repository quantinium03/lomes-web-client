import { FiSettings } from "react-icons/fi";
import { SidebarTrigger } from "./ui/sidebar.tsx";
import AppSearchBar from "./AppSearchBar.tsx";
import { useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Navbar = ({ triggerRef }: { triggerRef: React.Ref<HTMLButtonElement> }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center rounded-xl my-2 z-10 px-4 bg-[#181818]">
      <div className="flex items-center gap-4">
        <SidebarTrigger ref={triggerRef} className="cursor-pointer text-white" />
        <h1 className="text-red-500 font-bold text-4xl">
          <Link to="/">Lomes</Link>
        </h1>
      </div>

      <div className="flex items-center text-3xl gap-4">
        <div className="hidden sm:flex flex-row items-center">
          <AppSearchBar />
        </div>
        <FiSettings
          className="text-zinc-300 cursor-pointer"
          onClick={() => navigate("/setting")}
        />
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
