"use client";
import { useState } from 'react';
import Image from 'next/image';
import Intropage from '@/public/img/histoire.webp'
import data from '../public/json/data.json';
import ContenuHistoire from './ContenuHistoire';

export default function Histoire() {
    const [showSection, setShowSection] = useState({});

    const toggleSection = (id) => {
        setShowSection(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div>
            <div>
                <Image src={Intropage} alt="Roi" className="w-full mb-4" />
            </div>
            <div className="text-gray-900 min-h-screen px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-customcolor1">Histoire de l&apos;ABISSA</h1>
                </div>
                {data.sections.map((section) => (
                    <ContenuHistoire key={section.id} section={section} showSection={showSection} toggleSection={toggleSection} />
                ))}

            </div>
        </div>
    );
}
