"use client";

import { MdOutlineInstallDesktop } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function InstallPrompt() {
 const [installPrompt, setInstallPrompt] = useState(null);

 useEffect(() => {
  const getInstallPrompt = (event) => {
   event.preventDefault();
   setInstallPrompt(event);
  };

  window.addEventListener("beforeinstallprompt", getInstallPrompt);
  return () => {
   window.removeEventListener("beforeinstallprompt", getInstallPrompt);
  };
 }, []);

 const handleClose = () => setInstallPrompt(null);

 const handleInstall = async () => {
  installPrompt.prompt();
  const { outcome } = await installPrompt.userChoice;
  console.log(outcome);
  if (outcome === "accepted") {
   setInstallPrompt(null);
  }
 };

 return (
  installPrompt && (
   <div className="fixed bottom-4 left-4 right-4 md:right-auto md:w-[400px] z-50 p-4 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-start justify-between gap-4 animate-fadeIn">
    <div className="flex items-center gap-3">
     <MdOutlineInstallDesktop className="text-2xl text-blue-600" />
     <div>
      <p className="text-sm text-gray-700 font-semibold">
       Installer l'application ?
      </p>
      <button
       onClick={handleInstall}
       className="mt-1 text-sm text-blue-600 hover:underline hover:text-blue-800 transition"
      >
       Cliquer ici pour installer
      </button>
     </div>
    </div>
    <button
     onClick={handleClose}
     className="text-gray-500 hover:text-red-500 transition text-xl"
     aria-label="Fermer la notification"
    >
     <IoClose />
    </button>
   </div>
  )
 );
}
