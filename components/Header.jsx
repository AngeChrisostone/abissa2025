import React from "react";
import Image from "next/image";
import logo from '@/public/img/logo_transparent.png';
import { IoMdMenu } from "react-icons/io";

export default function Header () {
  return (
    <header className="bg-[#035B87]/[.6] text-white p-4 fixed w-full top-0 z-50">
      <nav className="flex justify-between items-center">
        <Image
          src={logo}
          alt='Logo React'
          width={90}
        />
        <IoMdMenu className="md:hidden"/>
        <ul className="hidden md:flex flex-1 justify-center gap-x-16 text-[25px] ">
          <li><a href="#accueil" className="hover:underline">Accueil</a></li>
          <li><a href="#histoire" className="hover:underline">Histoire</a></li>
          <li><a href="#photos" className="hover:underline">Photos</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}