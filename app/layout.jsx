
"use client";
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { metadata } from '@/components/Metadata';
import Accueil from '@/components/Accueil';
import Histoire from '@/components/Histoire';
import GaleriePhotos from '@/components/GaleriesPhotos';
import Programme from '@/components/Programme';
import Contact from '@/components/Contact';
import Photos from '@/components/Photos';
import Concert from '@/components/Concert';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    const [page, setPage] = useState("accueil");

    return (
        <html lang='en'>
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </head>

            <body className="flex flex-col min-h-screen">
                <Header changePage={setPage} />
                <main className="flex-1">
                    {
                        page === "accueil" ? (<Accueil />) :
                            page === "histoire" ? (<Histoire />) :
                                page === "galerie" ? (<Photos />) :
                                    page === "programme" ? (<Programme />) :
                                        page === "contact" ? (<Contact />) : null
                    }
                </main>
                <Footer />
            </body>
        </html>
    );
}
