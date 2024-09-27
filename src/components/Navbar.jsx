import React from 'react'
import { FiSettings } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-2 py-1">
        <div className="flex gap-2">
          <CgMenuGridR className="text-white text-2xl self-center" />
          <h1 className="text-white text-3xl">LOMES</h1>
        </div>
        <div>
          <input type="search" id="site-seach" placeholder="Search..."  className="rounded bg-zinc-800" />
        </div>

        <div className="flex text-3xl gap-4">
          <FiSettings className="text-white" />
          <RxAvatar className="text-white" />
        </div>
      </div>
    </>
  )
}

export default Navbar;
