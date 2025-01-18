"use client";
import Image from 'next/image';
import ambiance from '@/public/img/ambiance.webp';
import team2poy from '@/public/img/team2poy.jpg';
import debordoleekunfa from '@/public/img/debordoleekunfa.jpg';
import yodéetsiro from '@/public/img/yodéetsiro.jpg';
import React, { useState } from 'react';

export default function Concert() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const artists = [
        {
            name: "Team 2 Poy",
            image: team2poy,
            bio: "Team 2 Poy, le collectif dynamique de la scène musicale afro, continue de marquer les esprits avec ses rythmes entraînants et ses collaborations percutantes. Composé de talents divers, Team 2 Poy s'est imposé comme un acteur incontournable de la musique contemporaine. Leur parcours est jalonné de succès, avec des titres phares tels que ''Dora Dance (Mon Fils Kalo Maman)'' et ''La Dance du Coeur (Act1)''. Leur capacité à fusionner des styles variés et à collaborer avec des artistes comme Tazeboy et Renard Barakissa leur a permis de se démarquer sur la scène musicale. Leur nouveau son ''Manger la vie'', en collaboration avec Tazeboy et la Team Paiya, a rencontré un grand succès, consolidant leur place dans le paysage musicale. Avec des performances énergiques et des mélodies accrocheuses, Team 2 Poy continue de captiver un large public. Cette année, Team 2 Poy promet de nouvelles surprises et des performances mémorables qui feront vibrer leurs fans comme jamais auparavant."
        },
        {
            name: "Debordo Leekunfa",
            image: debordoleekunfa,
            bio: "Debordo Leekunfa, de son vrai nom Patrick Tanguy Séry Digbeu, est une figure emblématique de la musique ivoirienne. Né le 20 décembre 1984 à Abidjan, il a commencé sa carrière comme DJ dans des lieux célèbres tels que ''La Cour des Grands'' et ''Le Shangaï'' à Yopougon. Avec son style unique mêlant hip-hop, afro-pop, et coupé-décalé, Debordo Leekunfa a su captiver un large public. Il est connu pour ses titres à succès comme ''Apéritif Yamoukidi'', ''Robot Macador'', et ''Maman Georgette Eto'o''. Sa collaboration avec DJ Arafat a également marqué les esprits, notamment avec l'introduction de la musique Kpangor. Son album ''Apéritif Yamoukidi'' a consolidé sa place dans le paysage musical ivoirien, et ses performances énergiques continuent de faire vibrer ses fans. Son nouveau son ''Djeneba Djaba'', a rencontré un grand succès, annonçant son grand retour dans le paysage musicale. Debordo Leekunfa est reconnu pour son charisme et sa capacité à fusionner des genres musicaux variés, ce qui le rend incontournable sur la scène musicale actuelle. Cette année, Debordo Leekunfa promet de nouvelles surprises et des performances mémorables qui feront vibrer ses fans comme jamais auparavant."
        },
        {
            name: "Yodé et Siro",
            image: yodéetsiro,
            bio: "Yodé et Siro, le duo emblématique du zouglou ivoirien, continue de captiver les fans avec leur musique authentique et leurs paroles engagées. Formé en 1996 à Abidjan, le groupe est composé de Gervais Dali Djédjé (Yodé) et Sylvain Decavailles Aba (Siro). Leur carrière a débuté sous le nom de ''Les Poussins Chocs'', un groupe de quatre membres qui s'est fait connaître sur les scènes locales avant de se faire un nom avec le tube ''Asec-Kotoko''. Ce titre, qui raconte avec humour une histoire tragique entre la Côte d'Ivoire et le Ghana, a marqué le début de leur succès. Parmi leurs albums les plus célèbres, on trouve ''Victoire'', ''Antilaléca'', et plus récemment ''Héritage''. Leur musique, qui mélange des rythmes entraînants et des messages sociaux, a su toucher un large public et les a établis comme des figures incontournables du zouglou. Cette année, Yodé et Siro continuent de surprendre leurs fans avec des performances mémorables et des nouvelles créations qui promettent de faire vibrer les foules comme jamais auparavant."
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Merci ${name}, votre demande de ticket a été enregistrée!`);
    }

    return (
        <div className="mx-auto px-4 py-8 max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#035B87] mb-4 text-center">CONCERT GRATUIT - ABISSA 2025</h1>
            <Image src={ambiance} alt="Ambiance du concert" className="w-full mb-8" />
            <div className="space-y-8">
                {artists.map((artist, index) => (
                    <div key={index} className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="md:w-1/2">
                            <h2 className="text-xl sm:text-2xl text-[#035B87] text-center mb-2">{artist.name}</h2>
                            <p className="text-gray-600 text-sm sm:text-base">{artist.bio}</p>
                        </div>
                        <div className="md:w-1/2 flex justify-center items-center">
                            <Image src={artist.image} alt={`Image de l'artiste ${artist.name}`} width={300} height={100} layout="intrinsic" className="max-w-full h-auto" />
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#035B87] my-6 text-center">Obtenir un Ticket</h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-center">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    required
                    className="mt-1 block w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#035B87] focus:ring-1 focus:ring-blue-500"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    required
                    className="mt-1 block w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#035B87] focus:ring-1 focus:ring-blue-500"
                />
                <button type="submit" className="text-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#035B87] hover:bg-[#039ED7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-1/3 mx-auto">
                    Participer
                </button>
            </form>
        </div>
    );
}