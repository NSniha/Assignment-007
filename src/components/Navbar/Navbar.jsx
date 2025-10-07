import React from 'react';

const Navbar = () => {
    return (
    <>
        <nav className="navbar bg-white shadow-lg font-inter">
            <div className="max-w-[1280px] mx-auto w-full flex justify-between items-center px-4 py-2">
                <div className="navbar-start flex flex-col md:flex-row md:items-center md:space-x-4">
                <a href="https://www.csticket.com" target="_blank"
                    className="md:text-2xl text-xl font-[700] text-black">
                    CS-Ticket System
                </a>
                </div>

                <div className="hidden md:flex navbar-end items-center space-x-8">
                <ul className="flex items-center space-x-8 text-[15px] font-medium text-[#000000e6] uppercase">
                    <li><a href="#" className="hover:text-indigo-600">Home</a></li>
                    <li><a href="#" className="hover:text-indigo-600">FAQ</a></li>
                    <li><a href="#" className="hover:text-indigo-600">Changelog</a></li>
                    <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
                    <li><a href="#" className="hover:text-indigo-600">Download</a></li>
                    <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
                </ul>
                <a href="#"
                    className="btn border-0 text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 font-semibold w-40 h-12 text-lg">
                    + New Ticket
                </a>
                </div>

                <div className="dropdown md:hidden ">
                <div tabindex="0" role="button" className="btn btn-ghost p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <ul tabindex="0"
                    className="menu menu-sm dropdown-content mt-3 z-[999] p-4 bg-white w-54 text-gray-800 uppercase relative right-[-20px] h-[80svh] py-10">
                    <li><a className="text-sm font-semibold leading-8 mx-auto">Home</a></li>
                    <li><a className="text-sm font-semibold leading-8 mx-auto">FAQ</a></li>
                    <li><a className="text-sm font-semibold leading-8 mx-auto">Changelog</a></li>
                    <li><a className="text-sm font-semibold leading-8 mx-auto">Blog</a></li>
                    <li><a className="text-sm font-semibold leading-8 mx-auto">Download</a></li>
                    <li><a className="text-sm font-semibold leading-8 mx-auto">Contact</a></li>
                    <li>
                    <a href="#" className="btn border-0 text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 font-semibold w-full md:text-lg text-sm mt-3">
                        + New Ticket
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>

    )
}

export default Navbar;