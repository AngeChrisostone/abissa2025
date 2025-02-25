"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
 const router = useRouter();

 return (
  <ul className="flex flex-row justify-center items-center space-x-4">
   <li>
    <button onClick={() => router.push("/")}>Accueil</button>
   </li>
   <li>
    <button onClick={() => router.push("/histoire")}>Histoire</button>
   </li>
   <li>
    <button onClick={() => router.push("/galerie")}>Galerie</button>
   </li>
   <li>
    <button onClick={() => router.push("/programme")}>Programme</button>
   </li>
   <li>
    <button onClick={() => router.push("/contact")}>Contact</button>
   </li>
  </ul>
 );
}
