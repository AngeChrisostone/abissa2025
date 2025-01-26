"use client";
import { useState } from 'react';
import Image from 'next/image';
import data from '../public/json/data.json';

export default function Histoire() {
    const [showSection, setShowSection] = useState({});

    const toggleSection = (id) => {
        setShowSection(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
            <header className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-customcolor1">Histoire d'ABISSA</h1>
                <Image src={require('../public/img/histoire.webp')} alt="Roi" className="w-full mb-4" />
            </header>
            {data.sections.map((section) => (
                <div key={section.id}>
                    <button onClick={() => toggleSection(section.id)} className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-customcolor1 mb-4">{section.toggleText}</h2>
                    </button>
                    {showSection[section.id] && (
                        <section className="mb-8">
                            {section.images ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {section.images.map((img, idx) => (
                                        <Image key={idx} src={require(`../public/img/${img.src}.webp`)} alt={img.alt} className="w-full" />
                                    ))}
                                </div>
                            ) : (
                                <Image src={require(`../public/img/${section.image}.webp`)} alt={section.altText} className="w-full" />
                            )}
                            <p className="text-base sm:text-lg leading-relaxed">{section.text}</p>
                        </section>
                    )}
                </div>
            ))}
        </div>
    );
}
