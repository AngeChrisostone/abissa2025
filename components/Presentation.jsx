import React from 'react';
import Image from 'next/image'
import ImageSect1 from '@/public/img/danse2.webp'

export default function Presentation() {
    return(
                        <div className='flex flex-col lg:flex-row items-center p-4 lg:p-[15px]'>
                            <div className='pr-0 lg:pr-[15px]'>
                                <p className='text-customcolor1 text-justify px-2 sm:px-4'>
                                    Bienvenue sur notre site officiel pour l'Abissa 2025, une célébration vibrante de la culture et des traditions du peuple N'zima Kotoko !
                                </p>
                                <p className='text-center text-customcolor1 text-xl sm:text-2xl lg:text-[25px] py-2'>
                                    Abissa 2025 : Célébrons notre identité culturelle
                                </p>
                                <p className='text-justify px-2 sm:px-4'>
                                    Qu'est-ce que l'Abissa ?<br />
                                    L'Abissa est une fête culturelle et spirituelle annuelle célébrée par la communauté N'zima Kotoko en Côte d'Ivoire. Plus qu'une simple célébration, l'Abissa est un moment de communion, de réflexion et de renforcement des liens communautaires.
                                </p>
                                <ul className='list-disc pl-4 sm:pl-6 mt-4'>
                                    <li>"Temps de l'Examen" : Une période de réflexion et de confession où la communauté évalue ses actions de l'année.</li>
                                    <li>Les Danses Traditionnelles : Des performances artistiques spectaculaires avec des costumes traditionnels et des rythmes envoûtants.</li>
                                    <li>La Parade des Masques : Une démonstration des masques sacrés et des symboles culturels uniques.</li>
                                    <li>La Réconciliation : Une opportunité pour les membres de la communauté de régler leurs différends et de renouer des liens solides.</li>
                                </ul>
                            </div>
                            <div className='border-t-2 lg:border-t-0 lg:border-l-2 border-customcolor1 h-full mx-0 lg:mx-4 pt-4 lg:pl-[25px]'>
                                <Image
                                    src={ImageSect1}
                                    alt='Image fillette dansant'
                                    width={1300}
                                    height={500}
                                    layout='responsive'
                                />
                            </div>
                        </div>
    );
}