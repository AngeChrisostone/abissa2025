"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useState } from "react";
export default function Navbar() {

    const { t } = useTranslation("header");
    const routeur = useRouter();
    return (
        <ul className="flex flex-row justify-center items-center space-x-4">
            <li>
                <Link href="/" aria-label="Home">
                    {t("header.home")}
                </Link>
            </li>
            <li>
                <Link href="/histoire" aria-label="History">
                    {t("header.history")}
                </Link>
            </li>
            <li>
                <Link href="/galerie" aria-label="Gallery">
                    {t("header.gallery")}
                </Link>
            </li>
            <li>
                <Link href="/programme" aria-label="Program">
                    {t("header.program")}
                </Link>
            </li>
            <li>
                <Link href="/contact" aria-label="Contact">
                    {t("header.contact")}
                </Link>
            </li>
        </ul>
    );
}
