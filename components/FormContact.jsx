import React from "react";
import BaseButton from "./BaseButton";

const ContactForm = () => (
  <form className="space-y-2">
    <input
      type="text"
      placeholder="Votre nom"
      className="w-full p-2 border border-customcolor1 rounded focus:outline-none focus:ring-2"
    />
    <input
      type="email"
      placeholder="Votre email"
      className="w-full p-2 border border-customcolor1 rounded focus:outline-none focus:ring-2"
    />
    <input
      type="tel"
      placeholder="Votre N° de téléphone"
      className="w-full p-2 border border-customcolor1 rounded focus:outline-none focus:ring-2"
    />
    <input
      type="text"
      placeholder="Objet de votre message"
      className="w-full p-2 border border-customcolor1 rounded focus:outline-none focus:ring-2"
    />
    <textarea
      placeholder="Votre message"
      rows="4"
      className="w-full p-2 border border-customcolor1 rounded focus:outline-none focus:ring-2"
    ></textarea>
    <div className="flex justify-between">
     <BaseButton styling={"delete"} type={"reset"}>
      Effacer
     </BaseButton>
     <BaseButton styling={"send"} type={"submit"}>
      Envoyer
     </BaseButton>
    </div>
  </form>
);

export default ContactForm;