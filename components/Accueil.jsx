import Image from "next/image";
import Banniere from "@/public/img/roi2.webp";
import Presentation from "./Presentation";
import Invitation from "./Invitation";
import Informations from "./Informations";
import Annexes from "./Annexes";
import InstallPrompt from "./InstallPrompt.jsx";
export default function Accueil() {
 return (
  <div>
   <div role="banner">
    <Image
     src={Banniere}
     alt="Portrait du roi symbolisant la fête Abissa"
     className="object-cover"
     sizes="(max-width: 768px) 100vw, 1280px"
    />
   </div>
   <div className="max-w-screen-xl mx-auto px-4">
    <Presentation />
    <Invitation />
    <Informations />
    <Annexes />
    <div>
     {" "}
     Telechargement:
     <InstallPrompt />
    </div>
   </div>
  </div>
 );
}
