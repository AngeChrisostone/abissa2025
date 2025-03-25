"use client";
import React from "react";
import { IoLocationSharp, IoCalendar, IoTime } from "react-icons/io5";
import BaseButton from "./BaseButton";
import { useRouter } from "next/navigation";

export default function Informations() {
 const router = useRouter();

 return (
  <section
   aria-labelledby="informations-title"
   className="flex flex-col items-center border-b-2 border-customcolor1 p-4 lg:p-[50px] space-y-4"
  >
   <h2 id="informations-title" className="sr-only">
    Informations pratiques
   </h2>

   <div className="flex items-center text-lg sm:text-[25px] text-customcolor1">
    <IoLocationSharp aria-hidden="true" />
    <span className="ml-2">
     <strong>Lieu :</strong> Côte d’Ivoire, Grand-Bassam (Quartier France)
    </span>
   </div>

   <div className="flex items-center text-lg sm:text-[25px] text-customcolor1">
    <IoCalendar aria-hidden="true" />
    <span className="ml-2">
     <strong>Date :</strong> 19 octobre au 02 novembre 2025
    </span>
   </div>

   <div className="flex items-center text-lg sm:text-[25px] text-customcolor1">
    <IoTime aria-hidden="true" />
    <span className="ml-2">
     <strong>Heure :</strong> 14h - 21h
    </span>
   </div>

   <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
    <BaseButton styling="primary" onClick={() => router.push("/concert")}>
     Participer
    </BaseButton>
    <BaseButton styling="primary" onClick={() => router.push("/programme")}>
     Plus d'infos
    </BaseButton>
   </div>
  </section>
 );
}
