import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const SocialLinks = () => (
  <ul className="flex flex-col md:flex-row flex-1 justify-center gap-y-2 md:gap-x-4 text-[15px]">
    <li className="flex flex-col items-center">
      <a href="#Facebook" className="hover:underline flex flex-col items-center">
        <FaFacebook size={25} />
        <span>Facebook</span>
      </a>
    </li>
    <li className="flex flex-col items-center">
      <a href="#Whatsapp" className="hover:underline flex flex-col items-center">
        <IoLogoWhatsapp size={25} />
        <span>Whatsapp</span>
      </a>
    </li>
    <li className="flex flex-col items-center">
      <a href="#Instagram" className="hover:underline flex flex-col items-center">
        <FaInstagram size={25} />
        <span>Instagram</span>
      </a>
    </li>
  </ul>
);

export default SocialLinks;