import React from "react";
import Image from "next/image";
import logo from "@/public/img/logo_transparent.webp";
import SocialLinks from "@/components/LienReseauSociaux";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation("footer");

    return (
        <footer className="bg-customcolor1 text-white p-4 text-[15px] w-full">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="mb-4 md:mb-0">
                    <Image
                        src={logo}
                        alt={t("logoAlt")}
                        width={100}
                        height={100}
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="text-center flex-1 mb-4 md:mb-0">
                    {t("footer.email")}{" "}
                    <a
                        href="mailto:Abissa25@gmail.com"
                        className="text-yellow-400 hover:underline"
                    >
                        : Abissa25@gmail.com
                    </a>{" "}
                    | {t("footer.phone")} : 343 576 1024
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-center mb-2">{t("footer.contact")}</div>
                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
}
