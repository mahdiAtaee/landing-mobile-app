import React from 'react'
import Image from 'next/image'
import { Tomorrow } from 'next/font/google'

const font = Tomorrow({
    subsets: ['latin', 'latin-ext'],
    weight: ['900', '800', '700']
})

const Features = () => {
    return (
        <div className='w-screen pb-24 overflow-hidden relative bg-black'>
            <div className='w-full text-center flex items-center justify-center mt-24 relative'>
                <span className={`uppercase text-4xl md:text-[15rem] text-amber-200 ${font.className}`}>Features</span>
                <Image
                    src="/images/features-head.png"
                    width={1000}
                    height={800}
                    alt='head'
                    className='absolute top-0 md:-top-10 left-1/2 -translate-x-1/2'
                    sizes="(max-width: 486px) 280px, 1000px"
                />
            </div>
            <div className='w-screen flex items-center justify-around text-blue-50 m-0 md:mx-10 px-8 pt-56'>
                <div className='hidden md:flex flex-col text-xs md:text-xl'>
                    <span>Be Stronger.</span>
                    <span>Be PowerFull.</span>
                </div>
                <div className='flex justify-between gap-10 text-xs md:text-xl w-full md:w-fit'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='font-bold'>2K</span>
                        <span className='text-gray-400'>Downloads</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='font-bold'>25K</span>
                        <span className='text-gray-400'>Users</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='font-bold'>4.1</span>
                        <span className='text-gray-400'>rating</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features