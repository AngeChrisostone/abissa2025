"use client";
import React from "react";
import Image from "next/image";
import Artiste1 from "@/public/img/activites.webp";
import Artiste2 from "@/public/img/activites2.webp";
import Artiste3 from "@/public/img/activites3.webp";
import BaseButton from "./BaseButton";
import { useRouter } from "next/navigation";

export default function Annexes() {
 const router = useRouter();

 const activities = [
  {
   id: 1,
   image: Artiste1,
   alt: "Concert gratuit en plein air - Artiste 1",
   description: "CONCERT GRATUIT",
  },
  {
   id: 2,
   image: Artiste2,
   alt: "Spectacle culturel sur scène - Artiste 2",
   description: "CONCERT GRATUIT",
  },
  {
   id: 3,
   image: Artiste3,
   alt: "Performance musicale traditionnelle - Artiste 3",
   description: "CONCERT GRATUIT",
  },
 ];

 return (
  <section aria-labelledby="annexes-title" className="pb-[50px]">
   <h2
    id="annexes-title"
    className="text-[25px] text-center text-customcolor1 p-[50px]"
   >
    Activités Annexes
   </h2>

   <div className="flex flex-col sm:flex-row justify-between items-center px-[20px] gap-6">
    {activities.map((activity) => (
     <div
      key={activity.id}
      className="bg-customcolor1 flex flex-col items-center pb-[15px] w-full sm:w-auto rounded-lg shadow-md"
     >
      <Image
       src={activity.image}
       alt={activity.alt}
       width={283}
       height={200}
       style={{ objectFit: "cover" }}
       priority={activity.id === 1}
      />
      <p className="text-center text-white mt-2 mb-2">{activity.description}</p>
      <BaseButton
       styling="second"
       onClick={() => router.push("/concert")}
       aria-label={`Participer à ${activity.description.toLowerCase()}`}
      >
       Participer
      </BaseButton>
     </div>
    ))}
   </div>
  </section>
 );
}
