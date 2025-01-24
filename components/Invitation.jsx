import Image from "next/image";
import React from "react";
import Ambiance from '@/public/img/ambiance2.webp'

export default function Invitation(){
    return(
        <div className='p-4 sm:p-[20px] items-center border-b-2 border-customcolor1'>
            <p className='m-[10px] sm:m-[20px] text-center text-customcolor1 text-xl sm:text-[35px]'>
                 NOUS VOUS INVITONS À VIVRE UNE EXPÉRIENCE INOUBLIABLE
            </p>
                <Image
                    src={Ambiance}
                    alt='Ambiance activités annexe'
                    layout='responsive'
                    objectFit='cover'
                />
        </div>
    );
}