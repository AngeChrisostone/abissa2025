import React from "react";
import Image from "next/image";
import Artiste1 from '@/public/img/activites.webp';
import Artiste2 from '@/public/img/activites2.webp';
import Artiste3 from '@/public/img/activites3.webp';
import BaseButton from "./BaseButton";


export default function Annexes({ changePage }) {
    const activities = [
        { id: 1, image: Artiste1, alt: "Artiste activité 1", description: "CONCERT GRATUIT" },
        { id: 2, image: Artiste2, alt: "Artiste activité 2", description: "CONCERT GRATUIT" },
        { id: 3, image: Artiste3, alt: "Artiste activité 3", description: "CONCERT GRATUIT" }
    ];

    return (
        <div>
            <p className="text-[25px] text-center text-customcolor1 p-[50px]">Activités Annexes</p>

            <div className="flex flex-col sm:flex-row justify-between items-center p-[50px] space-y-4 sm:space-y-0">
                {activities.map((activity) => (
                    <div key={activity.id} className="bg-customcolor1 flex flex-col items-center p-b-[15px] w-full sm:w-auto">
                        <Image
                            src={activity.image}
                            alt={activity.alt}
                            width={283}
                        />
                        <p className="text-center text-white">{activity.description}</p>
                        <BaseButton styling={"second"}  onClick={() => changePage("concert")}>
                        Participer
                        </BaseButton>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
