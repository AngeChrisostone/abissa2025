import React from "react";
import Image from "next/image";
import logo from '@/public/img/logo_transparent.webp';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-customcolor1 text-white p-4 text-[15px] w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="mb-4 md:mb-0">
          <Image
            src={logo}
            alt='Logo React'
            width={100}
          />
        </div>
        <div className="text-center flex-1 mb-4 md:mb-0">
          Contactez-nous :{" "}
          <a href="mailto:Abissa25@gmail.com" className="text-yellow-400 hover:underline">
            Abissa25@gmail.com
          </a>{" "}
          | Téléphone : 343 576 1024
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center mb-2">Rejoignez-nous!</div>
          <div className="flex space-x-4">
            <a href="#Facebook" className="hover:underline flex items-center"><FaFacebook size={30} /> Facebook</a>
            <a href="#Whatsapp" className="hover:underline flex items-center"><IoLogoWhatsapp size={30} /> Whatsapp</a>
            <a href="#Instagram" className="hover:underline flex items-center"><FaInstagram size={30} /> Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}