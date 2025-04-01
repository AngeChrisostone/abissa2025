import React from "react";
import BaseButton from "./BaseButton";

const ContactForm = () => (
    <form className="space-y-2 w-full max-w-lg mx-auto">
        <label htmlFor="name" className="sr-only">
            Nom
        </label>
        <input
            id="name"
            type="text"
            name="name"
            placeholder="Votre nom"
            className="w-full p-2 border border-customcolor1 rounded focus:outline-none focus:ring-2"
            required
            autoComplete="name"
        />

        <label htmlFor="email" className="sr-only">
            Email
        </label>
        <input
            id="email"
            type="email"
            name="email"
            placeholder="Votre email"
            className="w-full p-2 border border-customcolor1 rounded focus:outline-none focus:ring-2"
            required
            autoComplete="email"
        />

        <label htmlFor="phone" className="sr-only">
            Numéro de téléphone
        </label>
        <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Votre N° de téléphone"
            className="w-full p-2 border border-customcolor1 rounded focus:outline-none focus:ring-2"
            required
            autoComplete="tel"
        />

        <label htmlFor="subject" className="sr-only">
            Objet
        </label>
        <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Objet de votre message"
            className="w-full p-2 border border-customcolor1 rounded focus:outline-none focus:ring-2"
            required
        />

        <label htmlFor="message" className="sr-only">
            Message
        </label>
        <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            rows="4"
            className="w-full p-2 border border-customcolor1 rounded focus:outline-none focus:ring-2"
            required
        ></textarea>

        <div className="flex justify-between">
            <BaseButton
                styling={"delete"}
                type={"reset"}
                aria-label="Effacer le formulaire"
            >
                Effacer
            </BaseButton>
            <BaseButton
                styling={"send"}
                type={"submit"}
                aria-label="Envoyer le formulaire"
            >
                Envoyer
            </BaseButton>
        </div>
    </form>
);

export default ContactForm;
