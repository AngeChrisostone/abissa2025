"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "@/components/Metadata";
import Body from "@/components/Body";
import { appWithTranslation } from "next-i18next";
import MyContextProvider from "@/provider/MyContextProvider";

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>
            <body className={inter.className}>
                <MyContextProvider>
                    {" "}
                    <Body>{children}</Body>
                </MyContextProvider>
            </body>
        </html>
    );
}

export default appWithTranslation(RootLayout);
