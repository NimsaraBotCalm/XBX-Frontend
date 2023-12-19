import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ShapedTpButton = ({ label, to, className, bgColor }) => {
    const navigate = useNavigate();

    return (
        <div className={`relative ${className}`} onClick={()=> navigate(to)}>
            <div className={`overflow-hidden border text-white glass-btn md:w-52 md:h-16 h-10 w-[8.5rem] absolute bottom-1 right-1 font-bold flex items-center justify-center ${bgColor} hover:bg-white hover:text-black cursor-pointer transition-300 transition-all`} style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 38%)' }}>
            <div className='w-12 h-20  absolute md:-top-1/2 -top-[30px] md:-left-[42px] -left-[51px] transform rotate-[42deg]'></div>
            <div className=' absolute inset-0' style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 38%)' }}></div>
                {label} <MdArrowOutward />
            </div>
            <div className='border rounded-md md:w-48 md:h-16 h-10 w-32'>
            </div>
        </div>
    )
}

export default ShapedTpButton