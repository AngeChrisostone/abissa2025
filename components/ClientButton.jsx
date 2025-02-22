"use client";

import React, { useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./NavBar";

export default function MenuButton() {
    const menuRef = useRef(null);

    const toggleMenu = () => {
        const menu = menuRef.current;
        if (menu) {
            menu.classList.toggle("hidden");
        }
    };

    const handleClickOutside = (event) => {
        const menu = menuRef.current;
        if (
            menu &&
            !menu.contains(event.target) &&
            !menu.classList.contains("hidden")
        ) {
            menu.classList.add("hidden");
        }
    };

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <button
                aria-label="Menu"
                className="md:hidden"
                onClick={toggleMenu}
            >
                <IoMdMenu size={50} />
            </button>
            <div
                ref={menuRef}
                className="md:hidden hidden bg-customcolor1 text-white p-4 absolute top-16 right-0 w-48 flex flex-col space-y-2"
            >
                <Navbar />
            </div>
        </>
    );
}
