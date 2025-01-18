import Image from 'next/image'
import Banniere from '@/public/img/roi2.webp'
import ImageSect1 from '@/public/img/danse2.webp'
import Ambiance from '@/public/img/ambiance2.webp'
import { IoLocationSharp } from "react-icons/io5"
import { BsCalendar2DateFill } from "react-icons/bs"
import { TbClockHour4Filled } from "react-icons/tb"
import Artiste1 from '@/public/img/activites.webp'
import Artiste2 from '@/public/img/activites2.webp'
import Artiste3 from '@/public/img/activites3.webp'

export default function Accueil() {
    return (
        <div>
            {/* Bannière */}
            <Image
                src={Banniere}
                alt='Image du roi'
                layout='responsive'
                objectFit='cover'
            />

            {/* Présentation */}
            <div className='flex flex-col lg:flex-row items-center p-4 lg:p-[15px]'>
                <div className='pr-0 lg:pr-[15px]'>
                    <p className='text-[#035B87] text-justify px-2 sm:px-4'>
                        Bienvenue sur notre site officiel pour l'Abissa 2025, une célébration vibrante de la culture et des traditions du peuple N'zima Kotoko !
                    </p>
                    <p className='text-center text-[#035B87] text-xl sm:text-2xl lg:text-[25px] py-2'>
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
                <div className='border-t-2 lg:border-t-0 lg:border-l-2 border-[#035B87] h-full mx-0 lg:mx-4 pt-4 lg:pl-[25px]'>
                    <Image
                        src={ImageSect1}
                        alt='Image fillette dansant'
                        width={1300}
                        height={500}
                        layout='responsive'
                    />
                </div>
            </div>

            {/* Invitation */}
            <div className='p-4 sm:p-[20px] items-center border-b-2 border-[#035B87]'>
                <p className='m-[10px] sm:m-[20px] text-center text-[#035B87] text-xl sm:text-[35px]'>
                    NOUS VOUS INVITONS À VIVRE UNE EXPÉRIENCE INOUBLIABLE
                </p>
                <Image
                    src={Ambiance}
                    alt='Ambiance activités annexe'
                    layout='responsive'
                    objectFit='cover'
                />
            </div>

            {/* Informations */}
            <div className='flex flex-col items-center border-b-2 border-[#035B87] p-4 lg:p-[50px] space-y-4'>
                <div className='flex items-center text-lg sm:text-[25px] lg:text-[35px] text-[#035B87]'>
                    <IoLocationSharp /> <span className='ml-2'>LIEU : Côte d’Ivoire, GRAND-BASSAM (QUARTIER FRANCE)</span>
                </div>
                <div className='flex items-center text-lg sm:text-[25px] lg:text-[35px] text-[#035B87]'>
                    <BsCalendar2DateFill /> <span className='ml-2'>DATE : 19 octobre au 02 novembre 2025</span>
                </div>
                <div className='flex items-center text-lg sm:text-[25px] lg:text-[35px] text-[#035B87]'>
                    <TbClockHour4Filled /> <span className='ml-2'>HEURE : 14h - 21h</span>
                </div>
                <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'>
                    <button className='bg-[#035B87] px-6 py-2 rounded-lg text-white text-sm sm:text-lg'>Participer</button>
                    <button className='bg-[#035B87] px-6 py-2 rounded-lg text-white text-sm sm:text-lg'>Plus d'infos</button>
                </div>
            </div>
              {/* Annexes */}
            <p className='text-[25px] text-center text-[#035B87] p-[50px]'>Activités Annexes</p>

            <div className='flex flex-col sm:flex-row justify-between items-center p-[50px] space-y-4 sm:space-y-0'>
                {/* Activité 1 */}
                <div className='bg-[#035B87] flex flex-col items-center p-b-[15px] w-full sm:w-auto'>
                    <Image
                        src={Artiste1}
                        alt='Artiste activité 1'
                        width={283}
                    />
                    <p className='text-center text-white'>CONCERT GRATUIT</p>
                    <button className='bg-[#ffffff] p-[10px] rounded-[12px] text-[10px] text-[#035B87] mt-2 mb-4'>Participer</button>
                </div>

                {/* Activité 2 */}
                <div className='bg-[#035B87] flex flex-col items-center p-b-[15px] w-full sm:w-auto'>
                    <Image
                        src={Artiste2}
                        alt='Artiste activité 2'
                        width={283}
                    />
                    <p className='text-center text-white'>CONCERT GRATUIT</p>
                    <button className='bg-[#ffffff] p-[10px] rounded-[12px] text-[10px] text-[#035B87] mt-2 mb-4'>Participer</button>
                </div>

                {/* Activité 3 */}
                <div className='bg-[#035B87] flex flex-col items-center p-b-[15px] w-full sm:w-auto'>
                    <Image
                        src={Artiste3}
                        alt='Artiste activité 3'
                        width={283}
                    />
                    <p className='text-center text-white'>CONCERT GRATUIT</p>
                    <button className='bg-[#ffffff] p-[10px] rounded-[12px] text-[10px] text-[#035B87] mt-2 mb-4'>Participer</button>
                </div>
            </div>

        </div>
    );
}
