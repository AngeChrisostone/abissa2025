import React from "react";
import SocialLinks from "@/components/LienReseauSociaux";
import ContactForm from "@/components/FormContact";

const Contact = () => {
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
          <h2 className="text-xl font-bold mb-2">Envoyer un message</h2>
          <p className="mb-4">
            Nous reviendrons vers vous dans les brefs délais. Promis!
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;