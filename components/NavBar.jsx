"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Navbar({ vertical = false, onLinkClick = () => {} }) {
 const { t } = useTranslation("header");

 return (
  <nav aria-label="Menu principal">
   <ul
    className={`${
     vertical
      ? "flex flex-col items-start space-y-3 w-full"
      : "flex flex-row justify-center items-center space-x-4"
    }`}
   >
    <li>
     <Link
      href="/"
      aria-label="Accueil"
      onClick={onLinkClick}
      className="hover:underline"
     >
      {t("header.home")}
     </Link>
    </li>
    <li>
     <Link
      href="/histoire"
      aria-label="Histoire de l'Abissa"
      onClick={onLinkClick}
      className="hover:underline"
     >
      {t("header.history")}
     </Link>
    </li>
    <li>
     <Link
      href="/galerie"
      aria-label="Galerie photos"
      onClick={onLinkClick}
      className="hover:underline"
     >
      {t("header.gallery")}
     </Link>
    </li>
    <li>
     <Link
      href="/programme"
      aria-label="Programme de l'événement"
      onClick={onLinkClick}
      className="hover:underline"
     >
      {t("header.program")}
     </Link>
    </li>
    <li>
     <Link
      href="/contact"
      aria-label="Page de contact"
      onClick={onLinkClick}
      className="hover:underline"
     >
      {t("header.contact")}
     </Link>
    </li>
   </ul>
  </nav>
 );
}
