"use client";
import { IoCalendarOutline } from "react-icons/io5";
import React, { useState } from "react";

export default function Affichages({ day }) {
 const [isExpanded, setIsExpanded] = useState(false);

 return (
  <section
   className="bg-white shadow-md rounded-lg p-6 mb-6"
   aria-labelledby={`day-title-${day.id}`}
  >
   {/* Titre de la journée */}
   <button
    className="flex items-center justify-between w-full text-xl font-semibold text-customcolor1"
    onClick={() => setIsExpanded(!isExpanded)}
    aria-expanded={isExpanded}
    aria-controls={`day-content-${day.id}`}
   >
    <div className="flex items-center">
     <IoCalendarOutline className="mr-2" aria-hidden="true" />
     <h3 id={`day-title-${day.id}`} className="text-lg">
      {day.date}
     </h3>
    </div>
    <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
   </button>

   {/* Détails de la journée */}
   {isExpanded && (
    <ul id={`day-content-${day.id}`} className="list-disc pl-6 mt-4 space-y-2">
     {day.events.map((event) => (
      <li key={event.id} className="text-gray-700">
       {event.text}
      </li>
     ))}
    </ul>
   )}
  </section>
 );
}
