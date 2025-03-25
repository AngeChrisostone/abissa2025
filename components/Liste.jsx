import React from "react";

export default function Liste() {
 return (
  <section aria-labelledby="liste-rituels-title" className="mt-4">
   <h3 id="liste-rituels-title" className="sr-only">
    Éléments clés de la célébration Abissa
   </h3>
   <ul className="list-disc pl-4 sm:pl-6 space-y-2">
    <li>
     <strong>"Temps de l'Examen"</strong> : Une période de réflexion et de
     confession où la communauté évalue ses actions de l'année.
    </li>
    <li>
     <strong>Les Danses Traditionnelles</strong> : Des performances artistiques
     spectaculaires avec des costumes traditionnels et des rythmes envoûtants.
    </li>
    <li>
     <strong>La Parade des Masques</strong> : Une démonstration des masques
     sacrés et des symboles culturels uniques.
    </li>
    <li>
     <strong>La Réconciliation</strong> : Une opportunité pour les membres de la
     communauté de régler leurs différends et de renouer des liens solides.
    </li>
   </ul>
  </section>
 );
}
