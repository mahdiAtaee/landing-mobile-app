import React from 'react'
import { FaApple } from 'react-icons/fa6'
import { Tomorrow } from 'next/font/google'

const font = Tomorrow({
    subsets: ['latin', 'latin-ext'],
    weight: ['900', '800', '700']
})

const GetApp = () => {
    return (
        <div className='w-screen overflow-hidden relative bg-black flex items-center justify-between pt-10 px-6'>
            <div>
                <p className={`uppercase text-3xl leading-16 md:text-[12rem] md:leading-44 text-blue-50 ${font.className}`}>
                    Get <br /> the <br /> app
                </p>
            </div>
            <div className='flex flex-col justify-between absolute right-5 top-5 p-6'>
                <p className='text-blue-50 text-right text-xl md:text-3xl pb-8'>Trial available <br /> for new <br /> member</p>
                <button className='bg-blue-50 rounded-4xl py-2 px-4 text-black cursor-pointer text-xs md:text-lg flex items-center gap-2 font-bold'>
                    <span>Get The App</span>
                    <FaApple />
                </button>
            </div>
        </div>
    )
}

export default GetApp