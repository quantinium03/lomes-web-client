import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar.jsx'

const Layout = () => {
    return (
        <>
            <div className="mx-auto border-white border-b">
                <Navbar />
            </div>
            <Sidebar />

            <Outlet />
        </>
    )
}

export default Layout;
