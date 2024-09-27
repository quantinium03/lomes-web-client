import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { FaTv } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { SiMyanimelist } from "react-icons/si";
import { FaMusic } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-zinc-800 h-[100vh] w-[13vw]">
      <ul>
        <li className="text-white flex items-center text-xl gap-2 p-2">
          <FaHome />
          <Link>Home</Link>
        </li>
        <li className="text-white flex items-center text-xl gap-2 p-2">
          <MdLocalMovies />
          <Link>Movies</Link>
        </li>
        <li className="text-white flex items-center text-xl gap-2 p-2">
          <FaTv />
          <Link>TV Shows</Link>
        </li>
        <li className="text-white flex items-center text-xl gap-2 p-2">
          <SiMyanimelist />
          <Link>Anime</Link>
        </li>
        <li className="text-white flex items-center text-xl gap-2 p-2">
          <FaMusic />
          <Link>Music</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar
