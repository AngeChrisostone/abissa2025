"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SocialLinks from "@/components/LienReseauSociaux";
import emailjs from "@emailjs/browser";
<<<<<<< Updated upstream
export default function Contact() {
=======
import { useMyContext } from "@/provider/MyContextProvider";

export default function Contact() {
    const { theme } = useMyContext();
>>>>>>> Stashed changes
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const [successMessage, setSuccessMessage] = useState("");

    const onSubmit = (data) => {
        console.log("Données soumises : ", data);
        const templateParams = {
            nom: data.nom,
            email: data.email,
            message: data.message,
            to_name: "Destinataire",
        };

        emailjs
            .send(
                "service_jwpuliz",
                "template_swzth33",
                templateParams,
                "0nwTH5qD3incjtB0p"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setSuccessMessage("Message envoyé");
                },
                (error) => {
                    console.error("FAILED...", error);
                    setSuccessMessage("Erreur lors de l'envoi");
                }
            );
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-white p-4">
            <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-[#035B87] text-white rounded-lg shadow-lg border-2 border-white">
                <div className="w-full lg:w-1/2 p-4">
                    <h2 className="text-xl font-bold mb-2">CONTACTEZ NOUS</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center p-2 gap-y-2 md:gap-x-4 mt-2 md:mt-0">
                        <SocialLinks />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 bg-white text-black p-4 rounded-tr-lg rounded-br-lg">
                    <h2 className="text-xl font-bold mb-2">
                        Envoyer un message
                    </h2>
                    <p className="mb-4">
                        Nous reviendrons vers vous dans les brefs délais.
                        Promis!
                    </p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex gap-4 flex-col min-w-96"
                    >
                        <label className="flex gap-2 flex-col">
                            Nom:
                            <input
                                {...register("nom", {
                                    required: "Champ obligatoire",
                                })}
                                type="text"
                                className="border-2 rounded-lg p-2"
                            />
                            {errors.nom && (
                                <span className="text-red-500 text-xs">
                                    {errors.nom.message}
                                </span>
                            )}
                        </label>
                        <label className="flex gap-2 flex-col">
                            Email:
                            <input
                                {...register("email", {
                                    required: "Champ obligatoire",
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Adresse email invalide",
                                    },
                                })}
                                type="email"
                                className="border-2 rounded-lg p-2"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-xs">
                                    {errors.email.message}
                                </span>
                            )}
                        </label>
                        <label className="flex gap-2 flex-col">
                            Message:
                            <textarea
                                {...register("message", {
                                    required: "Champ obligatoire",
                                })}
                                className="border-2 rounded-lg p-2"
                                rows={5}
                            />
                            {errors.message && (
                                <span className="text-red-500 text-xs">
                                    {errors.message.message}
                                </span>
                            )}
                        </label>
                        <div className="flex justify-center gap-4 my-8">
                            <input
                                type="submit"
                                value="Envoyer"
                                className="bg-blue-600 text-white rounded-lg p-2 cursor-pointer hover:bg-blue-700"
                            />
                            <input
                                type="button"
                                value="Annuler"
                                className="bg-blue-600 text-white rounded-lg p-2 cursor-pointer hover:bg-blue-700"
                            />
                        </div>
                    </form>
                    {successMessage && (
                        <p className="text-green-500 text-center mt-4">
                            {successMessage}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
