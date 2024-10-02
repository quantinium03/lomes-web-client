import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar.jsx';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    }

    const handleClickOutside = (e) => {
        if (isSidebarOpen &&
            sidebarRef.current &&
            !sidebarRef.current.contains(e.target) &&
            toggleButtonRef.current &&
            !toggleButtonRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isSidebarOpen]);

    return (
        <div className="relative">
            <div className="p-2 mx-auto fixed w-screen bg-gruvbackground border-b-zinc-600 border-b z-10">
                <Navbar toggleSidebar={toggleSidebar} toggleButtonRef={toggleButtonRef} />
            </div>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
            <div
                ref={sidebarRef}
                className={`bg-gruvbackground mb-4 p-2 h-[100vh] border-r border-2-zinc-600 fixed overflow-auto transition-transform duration-300 z-30 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <Sidebar toggleSidebar={toggleSidebar} />
            </div>
            <div className="pt-[5rem] pl-4 pr-4">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
