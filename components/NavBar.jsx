import React from "react";

export default function Navbar() {
  return (
    <ul className="hidden md:flex flex-1 justify-center gap-x-16 text-[25px] ">
      <li><a href="#accueil" className="hover:underline">Accueil</a></li>
      <li><a href="#histoire" className="hover:underline">Histoire</a></li>
      <li><a href="#photos" className="hover:underline">Galerie</a></li>
      <li><a href="#histoire" className="hover:underline">Programme</a></li>
      <li><a href="#contact" className="hover:underline">Contact</a></li>
    </ul>
  );
}