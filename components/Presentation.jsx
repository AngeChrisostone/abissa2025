import React from "react";
import Image from "next/image";
import ImageSect1 from "@/public/img/danse2.webp";
import Liste from "./Liste";

export default function Presentation() {
 return (
  <section
   aria-labelledby="presentation-title"
   className="flex flex-col lg:flex-row items-center p-4 lg:p-[15px]"
  >
   <div className="pr-0 lg:pr-[15px]">
    <h2 id="presentation-title" className="sr-only">
     Présentation
    </h2>
    <p className="text-customcolor1 text-justify text-xl sm:text-2xl lg:text-[20px] py-2">
     Bienvenue sur notre site officiel pour l&apos;Abissa 2025, une célébration
     vibrante de la culture et des traditions du peuple N&apos;zima Kotoko !
    </p>
    <p className="text-center text-customcolor1 font-semibold">
     Abissa 2025 : Célébrons notre identité culturelle
    </p>
    <p className="text-justify px-2 sm:px-4">
     L&apos;Abissa est une fête culturelle et spirituelle annuelle célébrée par
     la communauté N&apos;zima Kotoko en Côte d'Ivoire. Plus qu&apos;une simple
     célébration, c&apos;est un moment de communion et de renforcement des liens
     communautaires.
    </p>
    <Liste />
   </div>

   <div className="relative w-full max-w-[600px] aspect-[4/3] border-t-2 lg:border-t-0 lg:border-l-2 border-customcolor1 h-auto mx-0 lg:mx-4 pt-4 lg:pl-[25px]">
    <Image
     src={ImageSect1}
     alt="Fillette dansant pendant la célébration Abissa"
     fill
     className="object-cover rounded-md"
     priority
     sizes="(max-width: 768px) 100vw, 480px"
     style={{ maxWidth: "480px" }}
    />
   </div>
  </section>
 );
}
