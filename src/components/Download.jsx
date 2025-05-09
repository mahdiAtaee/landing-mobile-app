import React from 'react'
import { FaApple } from "react-icons/fa6";
import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image';

const font = Bebas_Neue({
    subsets: ['latin'],
    weight: '400'
})

const Download = () => {
    return (
        <div className='w-screen min-h-dvh overflow-hidden relative bg-black'>
            <div className='relative w-[40%] h-dvh mx-auto flex flex-col items-start justify-center text-blue-50'>
                <p className={`text-2xl md:text-6xl text-left leading:8 md:leading-16 font-bold ${font.className}`}>
                    Exercises wherever <br />
                    you are and stay <br />
                    in great shap
                </p>
                <p className='text-xs md:text-lg text-gray-300 leading-6 md:leading-7 my-6'>
                    This bodybuilding program is designed to build strength, size, and endurance.
                    It combines compound lifts, isolation exercises, and progressive overload techniques.
                </p>
                <button className='bg-blue-50 rounded-4xl py-2 px-4 text-black cursor-pointer text-xs md:text-lg flex items-center gap-2 font-bold'>
                    <span>Get The App</span>
                    <FaApple />
                </button>
                <Image src="/images/features-1.png" width={300} height={300} alt='phone' className='absolute top-5 -left-20' />
                <Image src="/images/features-2.png" width={300} height={300} alt='phone' className='absolute top-1/2 left-full ' />
                <Image src="/images/features-3.png" width={300} height={300} alt='phone' className='absolute top-full -left-15 ' />
                <Image src="/images/features-3.png" width={300} height={300} alt='phone' className='absolute bottom-1/2 -left-64 ' />
            </div>
        </div>
    )
}

export default Download