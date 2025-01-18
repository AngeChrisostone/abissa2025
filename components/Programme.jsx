import React from 'react';
import { BsCalendarDate } from "react-icons/bs";

export default function Programme() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* En-tête */}
            <section className="text-center py-10 bg-[#035B87] text-white">
                <h1 className="text-4xl font-bold">Programme Officiel de l'Abissa 2025</h1>
                <p className="mt-2 text-lg">Du 19 octobre au 2 novembre 2025 - Grand-Bassam, Côte d'Ivoire</p>
            </section>

            {/* Programme détaillé */}
            <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold text-[#035B87] mb-6 text-center">Détail des Journées</h2>

                {/* Jour par jour */}
                {[
                    {
                        date: "Samedi 19 octobre 2025",
                        events: [
                            "10h00 : Cérémonie d'ouverture avec les chefs traditionnels.",
                            "14h00 : Parade d'ouverture avec les sept clans N'zima.",
                            "19h00 : Soirée culturelle avec danses et chants traditionnels."
                        ]
                    },
                    {
                        date: "Dimanche 20 octobre 2025",
                        events: [
                            "09h00 : Messe traditionnelle et bénédiction ancestrale.",
                            "13h00 : Exposition artisanale et marché local.",
                            "18h00 : Spectacle de danses traditionnelles."
                        ]
                    },
                    {
                        date: "Lundi 21 octobre 2025",
                        events: [
                            "10h00 : Conférences sur la culture N'zima.",
                            "15h00 : Ateliers de tissage et de sculpture.",
                            "20h00 : Projection de documentaires sur l'Abissa."
                        ]
                    },
                    {
                        date: "Mardi 22 octobre 2025",
                        events: [
                            "10h00 : Début des critiques sociales (Maamaamulé).",
                            "14h00 : Performances des poètes chansonniers.",
                            "19h00 : Soirée de contes et légendes N'zima."
                        ]
                    },
                    {
                        date: "Mercredi 23 octobre 2025",
                        events: [
                            "10h00 : Continuation des critiques sociales.",
                            "16h00 : Concours de danse traditionnelle.",
                            "20h00 : Concert d'artistes locaux."
                        ]
                    },
                    {
                        date: "Jeudi 24 octobre 2025",
                        events: [
                            "09h00 : Marche pour la paix et la réconciliation.",
                            "14h00 : Démonstration de rituels ancestraux.",
                            "18h00 : Soirée gastronomique."
                        ]
                    },
                    {
                        date: "Vendredi 25 octobre 2025",
                        events: [
                            "10h00 : Jeux traditionnels pour enfants.",
                            "15h00 : Exposition de masques sacrés.",
                            "19h00 : Spectacle de feu et tambours."
                        ]
                    },
                    {
                        date: "Samedi 26 octobre 2025",
                        events: [
                            "11h00 : Parade des masques.",
                            "16h00 : Performances artistiques.",
                            "20h00 : Soirée dansante."
                        ]
                    },
                    {
                        date: "Dimanche 27 octobre 2025",
                        events: [
                            "10h00 : Messe de clôture des rituels.",
                            "14h00 : Spectacle de contes et chants.",
                            "19h00 : Concert de clôture."
                        ]
                    },
                    {
                        date: "Lundi 28 octobre au Samedi 2 novembre 2025",
                        events: [
                            "Activités continues : danses, expositions, marché artisanal, critiques sociales."
                        ]
                    },
                    {
                        date: "Samedi 2 novembre 2025",
                        events: [
                            "10h00 : Cérémonie de clôture et bilan de l'Abissa.",
                            "15h00 : Derniers rituels de réconciliation.",
                            "19h00 : Grande soirée de clôture avec tous les participants."
                        ]
                    }
                ].map((day, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <h3 className="text-xl font-semibold text-[#035B87]"><BsCalendarDate />{day.date}</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            {day.events.map((event, idx) => (
                                <li key={idx}>{event}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
}