import React from "react";
import Image from "next/image";
import logo from '@/public/img/logo_transparent.webp';
import { IoMdMenu } from "react-icons/io";
import Navbar from './NavBar';
import Banniere from '@/public/img/roi2.webp'


export default function Header() {
  return (
    <header className="bg-customcolor1/[.6] text-white p-4 fixed w-full top-0 ">
      <nav className="flex justify-between items-center">
        <Image
          src={logo}
          alt='Logo React'
          width={90}
        />
        <IoMdMenu className="md:hidden" size={50}/>
        <Navbar />
      </nav>
    </header>
    
  );
}