import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const ContactPage = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#035B87] text-white">
      
      <div className="w-full lg:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">CONTACTEZ NOUS</h2>
        <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-y-4 md:gap-x-8 mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row flex-1 justify-center gap-y-4 md:gap-x-16 text-[25px]">
            <li><a href="#Facebook" className="hover:underline flex items-center"><FaFacebook size={30} /> Facebook</a></li>
            <li><a href="#Whatsapp" className="hover:underline flex items-center"><IoLogoWhatsapp size={30} /> Whatsapp</a></li>
            <li><a href="#Instagram" className="hover:underline flex items-center"><FaInstagram size={30} /> Instagram</a></li>
              </ul>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-white text-black p-8 rounded-tr-lg rounded-br-lg">
        <h2 className="text-2xl font-bold mb-4">Envoyer un message</h2>
        <p className="mb-6">
          Nous reviendrons vers vous dans les brefs délais. Promis!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-3 border border-[#035B87] rounded focus:outline-none focus:ring-2"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-3 border border-[#035B87] rounded focus:outline-none focus:ring-2"
          />
          <input
            type="tel"
            placeholder="Votre N° de téléphone"
            className="w-full p-3 border border-[#035B87] rounded focus:outline-none focus:ring-2"
          />
          <input
            type="text"
            placeholder="Objet de votre message"
            className="w-full p-3 border border-[#035B87] rounded focus:outline-none focus:ring-2"
          />
          <textarea
            placeholder="Votre message"
            rows="5"
            className="w-full p-3 border border-[#035B87] rounded focus:outline-none focus:ring-2"
          ></textarea>
          <div className="flex justify-between">
            <button
              type="reset"
              className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Effacer
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#035B87] text-white rounded hover:bg-green-700"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;



