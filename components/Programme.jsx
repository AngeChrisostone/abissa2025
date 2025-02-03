import React from "react";
import Image from 'next/image'
import BanniereProgramme from '@/public/img/trone.webp'
import Programmes from "@/public/json/Programmes.json";
import Affichages from "./Affichages.jsx";

export default function Programme() {
    return (
       <div>
            <div>
                  {/* Bannière */}
                <Image
                src={BanniereProgramme}
                alt='Enfants'
                layout='responsive'
                objectFit='cover'
                /> 
            </div>
            <div className="bg-gray-100 min-h-screen">
                {/* En-tête */}
                <section className="text-center py-10 bg-customcolor1 text-white">
                    <h1 className="text-4xl font-bold">Programme Officiel de l&apos;Abissa 2025</h1>
                    <p className="mt-2 text-lg">Du 19 octobre au 2 novembre 2025 - Grand-Bassam, Côte d&apos;Ivoire</p>
                </section>

                {/* Programme détaillé */}
                <section className="max-w-6xl mx-auto px-4 py-10">
                    <h2 className="text-2xl font-semibold text-customcolor1 mb-6 text-center">Détail des Journées</h2>

                    {/* Jour par jour */}
                    {Programmes.days.map((day) => (
                        <Affichages key={day.id} day={day} />
                    ))}
                </section>
            </div>
       </div>
    );
}