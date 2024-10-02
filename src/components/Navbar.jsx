import React from 'react'
import { FiSettings } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { CgMenuGridR } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <div className="flex justify-between items-center px-2 py-3 rounded-xl shadow-gray-200 z-10">
        <div className="flex gap-2">
          <CgMenuGridR onClick={toggleSidebar} className="text-white text-2xl self-center" />
          <h1 className="text-gruvred font-bold self-center text-lg lg:text-3xl"><Link to="/">LOMES</Link></h1>
        </div>
        -b
        <div className="flex text-3xl gap-4">
          <div className="flex flex-row align-center">
            <div className="border-[#f3f3f3] border rounded-l-full text-lg self-center p-[0.4rem] text-zinc-400 pl-[0.5rem]">
              <FaSearch />
            </div>
            <input type="search" id="site-seach" placeholder="Search..." className="text-zinc-300 bg-gruvbackground pl-4 align-center hidden lg:block border text-lg border-zinc-300 h-[2rem] px-[1px] py-[10px] outline-none rounded-r-full" />
          </div>
          <FiSettings className="text-zinc-300" />
          <RxAvatar className="text-zinc-300 text-3xl" />
        </div>
      </div>
    </>
  )
}

export default Navbar;
