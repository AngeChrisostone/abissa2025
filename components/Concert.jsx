"use client";
import emailjs from "@emailjs/browser";
import Image from 'next/image';
import Ambiance from '@/public/img/ambiance.webp'
import React, { useState } from 'react';
import artistsData from '../public/json/artists.json';
import Contenu1Concert from './Contenu1Concert';
import Contenu2Concert from './Contenu2Concert';
export default function Concert() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert(`Merci ${name}, votre demande de ticket a été enregistrée!`);
    

        const templateParams = {
            name: name,
            email: email,
            to_name: "Destinataire", // Vous pouvez le modifier selon vos besoins
        };

        // Envoi de l'email
        emailjs
         .send(
          'service_jf0069w',
          'template_iltf91e',
          templateParams,
          'CJXXlpUYVU8m2v8P_'
         )
         .then(
          (response) => {
           console.log("SUCCESS!", response.status, response.text);
           alert(
            `Merci ${name}, votre demande de ticket a été enregistrée et un email de confirmation a été envoyé!`
           );
          },
          (err) => {
           console.log("FAILED...", err);
           alert("Une erreur s'est produite lors de l'envoi de l'email.");
          }
         );
    }
    return (
        <div>
            <div>
            <Image src={Ambiance} alt="Ambiance du concert" className="w-full mb-8" width={2048} height={1365} />
            </div>
            <div className="mx-auto px-4 py-8 max-w-7xl sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl text-customcolor1 mb-4 text-center">CONCERT GRATUIT - ABISSA 2025</h1>
                <Contenu1Concert artists={artistsData.artists} />
                <h2 className="text-xl sm:text-2xl font-semibold text-customcolor1 my-6 text-center">Obtenir un Ticket</h2>
                <Contenu2Concert handleSubmit={handleSubmit} name={name} setName={setName} email={email} setEmail={setEmail} />
            </div>
        </div>
    );
}