"use client"; 
import { BsCalendarDate } from "react-icons/bs";
import React, { useState } from "react";

export default function Affichages({ day }){
    const [isExpanded, setIsExpanded] = useState(false); // État pour gérer l'affichage des détails
    return(
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                {/* Titre de la journée */}
                <button
                    className="flex items-center justify-between w-full text-xl font-semibold text-customcolor1"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="flex items-center">
                        <BsCalendarDate className="mr-2" />
                        {day.date}
                    </div>
                    <span>{isExpanded ? "-" : "+"}</span> {/* Indicateur d'état */}
                </button>
        
                {/* Détails de la journée */}
                {isExpanded && 
                    (
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            {day.events.map((event) => (
                            <li key={event.id} className="text-gray-700">
                                {event.text}
                            </li>
                            ))}
                        </ul>
                    )
                }
            </div>
    );
}