"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation("header");
    const router = useRouter();

    return (
        <ul className="flex flex-row justify-center items-center space-x-4">
            <li>
                <Link href="/">{t("header.home")}</Link>
            </li>
            <li>
                <Link href="/histoire">{t("header.history")}</Link>
            </li>
            <li>
                <Link href="/galerie">{t("header.gallery")}</Link>
            </li>
            <li>
                <Link href="/programme">{t("header.program")}</Link>
            </li>
            <li>
                <Link href="/contact">{t("header.contact")}</Link>
            </li>
        </ul>
    );
}
