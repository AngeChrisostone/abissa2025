"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
 const router = useRouter();

 return (
  <ul className="flex flex-row justify-center items-center space-x-4">
   <li>
    <Link href="/"> Accueil </Link>
   </li>
   <li>
    <Link href="/histoire">Histoire</Link>
   </li>
   <li>
    <Link href="/galerie">Galerie</Link>
   </li>
   <li>
    <Link href="/programme">Programme</Link>
   </li>
   <li>
    <Link href="/contact">Contact</Link>
   </li>
  </ul>
 );
}
