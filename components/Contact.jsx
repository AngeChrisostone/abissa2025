import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import Image from "next/image";
import logo from '@/public/img/logo_transparent.webp';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-white p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-[#035B87] text-white rounded-lg shadow-lg border-2 border-white">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-2">CONTACTEZ NOUS</h2>
          <div className="flex flex-col md:flex-row justify-between items-center p-2 gap-y-2 md:gap-x-4 mt-2 md:mt-0">
            <ul className="flex flex-col md:flex-row flex-1 justify-center gap-y-2 md:gap-x-4 text-[20px]">
              <li><a href="#Facebook" className="hover:underline flex items-center"><FaFacebook size={25} /> Facebook</a></li>
              <li><a href="#Whatsapp" className="hover:underline flex items-center"><IoLogoWhatsapp size={25} /> Whatsapp</a></li>
              <li><a href="#Instagram" className="hover:underline flex items-center"><FaInstagram size={25} /> Instagram</a></li>
              

            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white text-black p-4 rounded-tr-lg rounded-br-lg">
          <h2 className="text-xl font-bold mb-2">Envoyer un message</h2>
          <p className="mb-4">
            Nous reviendrons vers vous dans les brefs délais. Promis!
          </p>
          <form className="space-y-2">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full p-2 border border-[#035B87] rounded focus:outline-none focus:ring-2"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full p-2 border border-[#035B87] rounded focus:outline-none focus:ring-2"
            />
            <input
              type="tel"
              placeholder="Votre N° de téléphone"
              className="w-full p-2 border border-[#035B87] rounded focus:outline-none focus:ring-2"
            />
            <input
              type="text"
              placeholder="Objet de votre message"
              className="w-full p-2 border border-[#035B87] rounded focus:outline-none focus:ring-2"
            />
            <textarea
              placeholder="Votre message"
              rows="4"
              className="w-full p-2 border border-[#035B87] rounded focus:outline-none focus:ring-2"
            ></textarea>
            <div className="flex justify-between">
              <button
                type="reset"
                className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Effacer
              </button>
              <button
                type="submit"
                className="px-4 py-1 bg-[#035B87] text-white rounded hover:bg-green-700"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact