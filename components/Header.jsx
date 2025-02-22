import React from "react";
import Image from "next/image";
import logo from "@/public/img/logo_transparent.webp";
import Link from "next/link";
import Navbar from "./NavBar";
import MenuButton from "./ClientButton";

export default function Header() {
    return (
        <header className="bg-customcolor1/[.6] text-white p-4 fixed w-full top-0">
            <nav
                className="flex justify-between items-center"
                aria-label="Navigation principale"
            >
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            alt="logo evenement"
                            src={logo}
                            width={90}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>
                <div className="hidden md:flex justify-center flex-1">
                    <Navbar />
                </div>
               <MenuButton />
            </nav>
        </header>
    );
}
