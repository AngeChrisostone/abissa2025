"use client";
import React from "react";
import GaleriePhotos from "./GaleriesPhotos";
import GalerieVideos from "./GalerieVideos";

export default function Photos() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Titre de la page */}
            <section className="text-center py-10 bg-customcolor1 text-white">
                <h1 className="text-4xl font-bold">Galerie des Festivités de l'Abissa</h1>
                <p className="mt-2 text-lg">Découvrez les moments forts en images et en vidéos</p>
            </section>
            <GaleriePhotos/>
            <GalerieVideos/>
        </div>
    );
}
