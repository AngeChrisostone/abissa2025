import React from "react";
import { IoLocationSharp } from "react-icons/io5"
import { BsCalendar2DateFill } from "react-icons/bs"
import { TbClockHour4Filled } from "react-icons/tb"

export default function Informations(){
    return(
    <div className='flex flex-col items-center border-b-2 border-customcolor1 p-4 lg:p-[50px] space-y-4'>
        <div className='flex items-center text-lg sm:text-[25px] lg:text-[35px] text-customcolor1'>
            <IoLocationSharp /> <span className='ml-2'>LIEU : Côte d’Ivoire, GRAND-BASSAM (QUARTIER FRANCE)</span>
        </div>
        <div className='flex items-center text-lg sm:text-[25px] lg:text-[35px] text-customcolor1'>
            <BsCalendar2DateFill /> <span className='ml-2'>DATE : 19 octobre au 02 novembre 2025</span>
        </div>
        <div className='flex items-center text-lg sm:text-[25px] lg:text-[35px] text-customcolor1'>
            <TbClockHour4Filled /> <span className='ml-2'>HEURE : 14h - 21h</span>
        </div>
        <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'>
            <button className='bg-customcolor1 px-6 py-2 rounded-lg text-white text-sm sm:text-lg hover:bg-customcolor3'>Participer</button>
            <button className='bg-customcolor1 px-6 py-2 rounded-lg text-white text-sm sm:text-lg hover:bg-customcolor3'>Plus d'infos</button>
        </div>
    </div>
    );
}