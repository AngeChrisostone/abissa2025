"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    return (
        <ul className="flex flex-row justify-center items-center space-x-4">
            <li>
                <Link href="/">Accueil</Link>
            </li>
            <li>
                <Link href="/histoire">Histoire</Link>
            </li>
            <li>
                <button onClick={() => router.push("/galerie")}>Galerie</button>
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
