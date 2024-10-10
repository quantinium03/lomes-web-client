import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { FaTv } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { SiMyanimelist } from "react-icons/si";
import { FaMusic } from "react-icons/fa";
import { TiMediaPlay } from "react-icons/ti";
import { IoIosSettings } from "react-icons/io";
import { FaSync } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { GiTheater } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
import { CgMenuGridR } from 'react-icons/cg';

const Sidebar = ({ toggleSidebar }) => {
  const refreshDatabase = () => {
    console.log("Refreshed database successfully");
  }

  const signOut = () => {
    console.log("successfully signed out user");
  }

  return (
    <div className="py-3">
      <div className="flex gap-2 pb-5 border-b border-zinc-600">
        <CgMenuGridR onClick={toggleSidebar} className="text-white text-2xl self-center" />
        <h1 className="text-gruvred font-bold self-center text-lg lg:text-3xl"><Link to="/">LOMES</Link></h1>
      </div>

      <ul className="ml-2 pt-2">
        <li className="text-white flex items-center text-xl gap-2 pt-2">
          <FaHome />
          <Link to="/">Home</Link>
        </li>
      </ul>

      <div className="pb-4">
        <div className="text-white text-xl flex flex-row items-center mt-4 ml-2">
          <div className="text-2xl">
            <TiMediaPlay />
          </div>
          <span className="text-white">Media</span>
        </div>
        <ul className="pl-7 pt-2">
          <li className="text-white flex items-center text-lg gap-2 p-2">
            <MdLocalMovies />
            <Link to="/movie">Movies</Link>
          </li>
          <li className="text-white flex items-center text-lg gap-2 p-2">
            <FaTv />
            <Link to="/tvshow">TV Shows</Link>
          </li>
          <li className="text-white flex items-center text-lg gap-2 p-2">
            <SiMyanimelist />
            <Link to="/anime">Anime</Link>
          </li>
          <li className="text-white flex items-center text-lg gap-2 p-2">
            <FaMusic />
            <Link to="/music">Music</Link>
          </li>
        </ul>
      </div>
      <div className="border border-gruvbackground_2"></div>
      <div className="py-3">
        <ul className="ml-2">
          <li className="text-white flex items-center text-xl gap-2 p-2">
            <IoIosSettings />
            <Link to="/setting">Settings</Link>
          </li>
          <li className="text-white flex items-center text-xl gap-2 p-2">
            <FaSync />
            <Link onClick={refreshDatabase}>Sync</Link>
          </li>
          <li className="text-white flex items-center text-xl gap-2 p-2">
            <FaServer />
            <Link to="/server">Manage server</Link>
          </li>
          <li className="text-white flex items-center text-xl gap-2 p-2">
            <GiTheater />
            <Link to="/room">Create room</Link>
          </li>
          <li className="text-white flex items-center text-xl gap-2 p-2">
            <FaSignOutAlt />
            <Link onClick={signOut}>Sign out</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
