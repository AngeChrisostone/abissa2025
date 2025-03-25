"use client";
import React from "react";
import Image from "next/image";
import GaleriePhotos from "./GaleriesPhotos";
import GalerieVideos from "./GalerieVideos";
import BanniereGalerie from "@/public/img/dance2.webp";
import { useMyContext } from "@/provider/MyContextProvider";

export default function Photos() {
 const { theme } = useMyContext();

 return (
  <div
   className={`flex flex-col items-center justify-center ${
    theme === "dark" ? "bg-dark text-white" : "bg-light text-black"
   }`}
  >
   {/* Bannière optimisée */}
   <div role="banner">
    <Image
     src={BanniereGalerie}
     alt="Scène de danse Abissa"
     className="object-cover"
     sizes="(max-width: 768px) 100vw, 1280px"
     priority
    />
   </div>

   {/* Contenu principal avec thème clair (fix CLS) */}
   <div className="w-full bg-gray-100">
    <section
     className="text-center py-10 bg-customcolor1 text-white"
     aria-labelledby="galerie-title"
    >
     <h1 id="galerie-title" className="text-4xl font-bold">
      Galerie des Festivités de l&apos;Abissa
     </h1>
     <p className="mt-2 text-lg">
      Découvrez les moments forts en images et en vidéos
     </p>
    </section>

    <GaleriePhotos />
    <GalerieVideos />
   </div>
  </div>
 );
}
