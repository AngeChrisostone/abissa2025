import Image from "next/image";
import React from "react";
import Ambiance from "@/public/img/ambiance2.webp";

export default function Invitation() {
 return (
  <section
   aria-labelledby="invitation-title"
   className="p-4 sm:p-[20px] border-b-2 border-customcolor1"
  >
   <h2
    id="invitation-title"
    className="text-center text-customcolor1 text-xl sm:text-[20px] mb-[20px]"
   >
    NOUS VOUS INVITONS À VIVRE UNE EXPÉRIENCE INOUBLIABLE
   </h2>
   <div className="relative w-full h-auto aspect-[16/9]">
    <Image
     src={Ambiance}
     alt="Public en fête durant l'Abissa, ambiance des activités annexes"
     fill
     className="object-cover rounded-md"
     priority
     sizes="(max-width: 768px) 100vw, 800px"
    />
   </div>
  </section>
 );
}
