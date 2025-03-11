"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/img/logo_transparent.webp";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./NavBar";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import i18next from "i18next";
import { useMyContext } from "@/provider/MyContextProvider";

export default function Header() {
    const { theme, toggleTheme } = useMyContext();
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState(i18next.language || "en");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleLanguageChange = (lng) => {
            setLanguage(lng);
        };

        i18next.on("languageChanged", handleLanguageChange);

        return () => {
            i18next.off("languageChanged", handleLanguageChange);
        };
    }, []);

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
                    <Navbar />
                </div>
                <div className="flex items-center ml-auto space-x-4">
                    <button className="text-2xl" onClick={toggleTheme}>
                        {theme === "light" ? <IoMdMoon /> : <IoSunny />}
                    </button>
                    <select
                        onChange={(e) => {
                            const newLanguage = e.target.value;
                            i18next.changeLanguage(newLanguage);
                        }}
                        value={language}
                        className="text-black"
                    >
                        <option value="en">EN</option>
                        <option value="fr">FR</option>
                        <option value="es">ES</option>
                    </select>
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
