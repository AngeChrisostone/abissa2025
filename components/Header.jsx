"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/public/img/logo_transparent.webp";
import { IoMenuOutline, IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import Navbar from "./NavBar";
import i18next from "i18next";
import { useMyContext } from "@/provider/MyContextProvider";

export default function Header() {
 const { theme, toggleTheme } = useMyContext();
 const [menuOpen, setMenuOpen] = useState(false);
 const [language, setLanguage] = useState(i18next.language || "en");
 const menuRef = useRef(null);

 const toggleMenu = () => {
  setMenuOpen(!menuOpen);
 };

 const handleCloseMenu = () => {
  setMenuOpen(false);
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

 // Fermer le menu si on clique en dehors
 useEffect(() => {
  const handleClickOutside = (event) => {
   if (menuRef.current && !menuRef.current.contains(event.target)) {
    setMenuOpen(false);
   }
  };
  if (menuOpen) {
   document.addEventListener("mousedown", handleClickOutside);
  }
  return () => {
   document.removeEventListener("mousedown", handleClickOutside);
  };
 }, [menuOpen]);

 return (
  <header className="bg-customcolor1/[.6] text-white p-4 fixed w-full top-0 z-50">
   <nav
    className="flex justify-between items-center"
    aria-label="Navigation principale"
   >
    <div className="flex items-center">
     <Image
      src={logo}
      alt="Logo React"
      width={90}
      height={90}
      style={{ objectFit: "cover" }}
     />
    </div>

    <div className="hidden md:flex justify-center flex-1">
     <Navbar />
    </div>

    <div className="flex items-center ml-auto space-x-4">
     <button
      className="text-2xl"
      onClick={toggleTheme}
      aria-label={
       theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"
      }
     >
      {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
     </button>

     <select
      onChange={(e) => i18next.changeLanguage(e.target.value)}
      value={language}
      className="text-black"
      aria-label="Sélection de la langue"
     >
      <option value="en">EN</option>
      <option value="fr">FR</option>
      <option value="es">ES</option>
     </select>
    </div>

    <button aria-label="Menu" className="md:hidden" onClick={toggleMenu}>
     <IoMenuOutline size={32} />
    </button>
   </nav>

   {menuOpen && (
    <div
     ref={menuRef}
     className="md:hidden bg-customcolor1 text-white p-4 absolute top-16 right-0 w-48 flex flex-col space-y-2 shadow-xl"
    >
     <Navbar vertical onLinkClick={handleCloseMenu} />
    </div>
   )}
  </header>
 );
}
