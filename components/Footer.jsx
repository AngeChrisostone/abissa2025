import React from "react";
import Image from "next/image";
import logo from "@/public/img/logo_transparent.webp";
import SocialLinks from "@/components/LienReseauSociaux";
import { useTranslation } from "react-i18next";
import Link from "next/link";
export default function Footer() {
    const { t } = useTranslation("footer");

    return (
        <footer className="bg-customcolor1 text-white p-4 text-[15px] w-full">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="mb-4 md:mb-0">
                    <Link href= '/' >
                                         <Image
                                             src={logo}
                                             alt="Logo React"
                                             width={90}
                                             height={90}
                                             style={{ objectFit: "cover" }}
                                         />
                                     </Link>
                </div>
                <div className="text-center flex-1 mb-4 md:mb-0">
                    {t("footer.email")}
                    <a
                        href="mailto:Abissa25@gmail.com"
                        className="text-yellow-300 hover:underline"
                    >
                        : Abissa25@gmail.com
                    </a>
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
