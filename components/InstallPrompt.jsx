"use client";

import { useEffect, useState } from "react";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { IoClose } from "react-icons/io5";

// Fonctions utilitaires
const isIos = () => {
 const userAgent = window.navigator.userAgent.toLowerCase();
 return /iphone|ipad|ipod/.test(userAgent);
};

const isInStandaloneMode = () =>
 "standalone" in window.navigator && window.navigator.standalone;

export default function InstallPrompt() {
 const [installPrompt, setInstallPrompt] = useState(null);
 const [isIosPrompt, setIsIosPrompt] = useState(false);

 useEffect(() => {
  if (isIos()) {
   if (!isInStandaloneMode()) {
    setIsIosPrompt(true); // Affiche les instructions iOS
   }
  } else {
   // Gestion Android
   const handlePrompt = (e) => {
    e.preventDefault();
    setInstallPrompt(e);
   };
   window.addEventListener("beforeinstallprompt", handlePrompt);
   return () => window.removeEventListener("beforeinstallprompt", handlePrompt);
  }
 }, []);

 const handleClose = () => {
  setInstallPrompt(null);
  setIsIosPrompt(false);
 };

 const handleInstall = async () => {
  if (installPrompt) {
   installPrompt.prompt();
   const { outcome } = await installPrompt.userChoice;
   if (outcome === "accepted") {
    setInstallPrompt(null);
   }
  }
 };

 // Affichage conditionnel
 if (!installPrompt && !isIosPrompt) return null;

 return (
  <div className="fixed bottom-4 left-4 right-4 md:right-auto md:w-[420px] z-50 p-4 bg-white rounded-2xl shadow-xl border border-gray-200 flex items-start justify-between gap-4 animate-fadeIn">
   <div className="flex items-start gap-3">
    <MdOutlineInstallDesktop className="text-3xl text-blue-600 mt-1" />
    <div>
     {installPrompt ? (
      <>
       <p className="text-sm font-semibold text-gray-800">
        Installer cette application ?
       </p>
       <button
        onClick={handleInstall}
        className="mt-1 text-sm text-blue-600 hover:underline hover:text-blue-800 transition"
       >
        Cliquer ici pour l’installer
       </button>
      </>
     ) : (
      <>
       <p className="text-sm font-semibold text-gray-800">
        Ajouter cette application à l’écran d’accueil
       </p>
       <p className="text-xs text-gray-600 mt-1">
        Appuyez sur le bouton <strong>Partager</strong> dans Safari, puis
        sélectionnez <strong>"Sur l’écran d’accueil"</strong>.
       </p>
      </>
     )}
    </div>
   </div>
   <button
    onClick={handleClose}
    className="text-gray-500 hover:text-red-500 transition text-xl mt-1"
    aria-label="Fermer la notification"
   >
    <IoClose />
   </button>
  </div>
 );
}
