"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import artistsData from '../public/json/artists.json';

export default function Concert() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Merci ${name}, votre demande de ticket a été enregistrée!`);
    }

    return (
        <div className="mx-auto px-4 py-8 max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-customcolor1 mb-4 text-center">CONCERT GRATUIT - ABISSA 2025</h1>
            <Image src="/img/ambiance.webp" alt="Ambiance du concert" className="w-full mb-8" width={2048} height={1365} />
            <div className="space-y-8">
                {artistsData.artists.map((artist, index) => (
                    <div key={index} className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="md:w-1/2">
                            <h2 className="text-xl sm:text-2xl text-customcolor1 text-center mb-2 font-semibold">{artist.name}</h2>
                            <p className="text-gray-600 text-sm sm:text-base">{artist.bio}</p>
                        </div>
                        <div className="md:w-1/2 flex justify-center items-center">
                            <Image src={artist.imageSrc} alt={`Image de l'artiste ${artist.name}`} width={250} height={400} layout="intrinsic" className="max-w-full h-auto" />
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-customcolor1 my-6 text-center">Obtenir un Ticket</h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-center">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    required
                    className="mt-1 block w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-customcolor1 focus:ring-1 focus:ring-blue-500"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    required
                    className="mt-1 block w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-customcolor1 focus:ring-1 focus:ring-blue-500"
                />
                <button type="submit" className="text-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-customcolor1 hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-1/3 mx-auto">
                    Participer
                </button>
            </form>
        </div>
    );
}