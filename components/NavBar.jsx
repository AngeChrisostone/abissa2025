"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation("header");
    const router = useRouter();

    return (
        <ul className="flex flex-row justify-center items-center space-x-4">
            <li>
                <button onClick={() => router.push("/")} aria-label="Home">
                    {t("header.home")}
                </button>
            </li>
            <li>
                <button
                    onClick={() => router.push("/histoire")}
                    aria-label="History"
                >
                    {t("header.history")}
                </button>
            </li>
            <li>
                <button
                    onClick={() => router.push("/galerie")}
                    aria-label="Gallery"
                >
                    {t("header.gallery")}
                </button>
            </li>
            <li>
                <button
                    onClick={() => router.push("/programme")}
                    aria-label="Program"
                >
                    {t("header.program")}
                </button>
            </li>
            <li>
                <button
                    onClick={() => router.push("/contact")}
                    aria-label="Contact"
                >
                    {t("header.contact")}
                </button>
            </li>
        </ul>
    );
}
