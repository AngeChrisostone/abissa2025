import React from "react";

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
      <button
        type="reset"
        className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
      >
        Effacer
      </button>
      <button
        type="submit"
        className="px-4 py-1 bg-customcolor1 text-white rounded hover:bg-green-700"
      >
        Envoyer
      </button>
    </div>
  </form>
);

export default ContactForm;