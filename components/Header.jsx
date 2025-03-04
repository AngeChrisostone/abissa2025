'use client'
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/img/logo_transparent.webp";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./NavBar";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-customcolor1/[.6] text-white p-4 fixed w-full top-0">
            <nav
                className="flex justify-between items-center"
                aria-label="Navigation principale"
            >
                <div className="flex items-center">
                    <Image
                        src={logo}
                        alt="Logo React"
                        width={90}
                        className="cursor-pointer"
                    />
                </div>
                <div className="hidden md:flex justify-center flex-1">
                    <Navbar  />
                </div>
                <button
                    aria-label="Menu"
                    className="md:hidden"
                    onClick={toggleMenu}
                >
                    <IoMdMenu size={50} />
                </button>
            </nav>
            {menuOpen && (
                <div className="md:hidden bg-customcolor1 text-white p-4 absolute top-16 right-0 w-48 flex flex-col space-y-2">
                    <Navbar vertical />
                </div>
            )}
        </header>
    );
}
