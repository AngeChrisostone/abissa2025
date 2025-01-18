import React from "react";
import Image from "next/image";
import logo from '@/public/img/logo_transparent.webp';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Footer () {
  return (
    <footer className=" bg-[#035B87] text-white p-4 text-[25px]  w-full">
      <div className="text-right mr-3">Rejoignez-nous!</div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Image
          src={logo}
          alt='Logo React'
          width={100}
        />
        <div className="mt-4 md:mt-0">
          Contactez-nous :{" "}
          <a href="mailto:Abissa25@gmail.com" className="text-yellow-400 hover:underline">
            Abissa25@gmail.com
          </a>{" "}
          | Téléphone : 343 576 1024
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-y-4 md:gap-x-8 mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <FaFacebook size={30} /> Facebook
          </div>
          <div className="flex flex-col items-center">
            <FaInstagram size={30} /> Instagram
          </div>
          <div className="flex flex-col items-center">
            <IoLogoWhatsapp size={30} /> Whatsapp
          </div>
        </div>
      </div>
    </footer>
  );
}